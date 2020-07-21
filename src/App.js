import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/login';
import Menu from './components/Menu/menu'
import Page from './components/Pages/page';


class App extends Component {
  constructor(){
    super();
    this.state={
      route: 'signin',
      leaves:[],
      staff:[],
      myobleaves:[]
    }
  }

  listMyobLeave =() =>{
    fetch('https://rocky-retreat-96881.herokuapp.com/myob',{
          method:'get',
          headers:{'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then(list =>{
          this.setState({myobleaves: list})
      })
  }

  listStaff =() =>{
    fetch('https://rocky-retreat-96881.herokuapp.com/staff',{
        method:'get',
        headers:{'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(list =>{
        this.setState({staff: list})
    })
}

listLeave =() =>{
  fetch('https://rocky-retreat-96881.herokuapp.com/history',{
      method:'get',
      headers:{'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(list =>{
      this.setState({leaves: list})
  })
  .catch(err=>{
    console.log('Cant fetch');
  })
}

  onRouteChange = (route) => {
    this.refresh();
    if(route!== this.state.route){
      this.setState({route: route})
    }
  }

  refresh = () =>{
    this.listMyobLeave();
    this.listStaff();
    this.listLeave();
  }

  render (){
    const {route}=this.state;
    return (
      <div className="App">
        {
        route==='signin'
        ?<Login onRouteChange={this.onRouteChange}/>
        :(
        route==='main'
        ?<Menu onRouteChange={this.onRouteChange}/>
        :<Page route={this.state.route} onRouteChange={this.onRouteChange} myobleaves={this.state.myobleaves} leaves={this.state.leaves} staff={this.state.staff} />
        ) 
        }
      </div>
    );
  }
}

export default App;
