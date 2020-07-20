import React from 'react';
import './staff.css';
import ListStaff from './list';

class Staff extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            store: '',
            type: ''
        }
    }

   

    namechange =(event) =>{
        this.setState({name: event.target.value})
    }
    storechange =(event) =>{
        this.setState({store: event.target.value})
    }
    typechange =(event) =>{
        this.setState({type: event.target.value})
    }

    onAddStaff = () => {
        fetch('https://rocky-retreat-96881.herokuapp.com/register',{
          method: 'POST',
          headers:{'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                name:this.state.name,
                store:this.state.store,
                type:this.state.type
          })
        })
        .then(response=> response.json() )
        .then(valid =>{
          if(valid){
            alert('Staff Member Added');
            this.props.refresh('mgmt');
          }
          else{
            alert('Please fill all required spaces')
          }
        })
      }
    render(){
        return(
        <div>
            <div id="staffadd" className='pa5 m-0 shadow-4 w-40 '>
                <form>
                    <div >    
                        <label htmlFor="name">Staff Name</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"
                        maxLength='100' onChange={this.namechange}
                        />
                    </div>
                    <div >    
                        <label htmlFor="name">Staff Store</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"
                        onChange={this.storechange}
                        />
                    </div>
                    <div>
                        <label className=' db mb0' htmlFor="Annual">FT or PT</label><br/>
                        <label htmlFor='choice'>FT</label>
                        <input type="radio" id="other"
                        className='mh3' name="choice" value="FT"
                        onClick={this.typechange}/>
                        <label>PT</label>
                        <input type="radio" className='mh3' id="other" name='choice' value="PT"
                        onClick={this.typechange} 
                        />
                    </div>
                </form>
                <div className='tc'>
                    <input id='addleave'type='submit' value='Add Staff' className='white ba b--white'
                    onClick={this.onAddStaff}
                    ></input>
                    </div>
            </div>
            <div className='pa5 ma4 shadow-4 w-40' id='liststaff'>
                <ListStaff  list={this.props.list}/>
                </div>    
            </div>
        );
    }
}

export default Staff;