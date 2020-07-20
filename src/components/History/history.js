import React from 'react';
import List from './list';
import './history.css';

class History extends React.Component  {
    constructor(props){
        super(props);
        this.state={
            finish:'',
            start:'',
            name:'',
            filtered:[]
            
        }
    }
    namechange =(event) =>{
        this.setState({name: event.target.value})
    }
    startchange =(event) =>{
        this.setState({start: event.target.value})
    }
    finishchange =(event) =>{
        this.setState({finish: event.target.value})
    }


    render(){
        
        const {list} = this.props;
        let filtered=[];
        if(this.state.finish!==''){
        filtered = list.filter(leave =>{
            return (leave.name.toLowerCase().includes(this.state.name.toLowerCase()))&&(leave.start>=this.state.start)&&(this.state.finish>=leave.finish); 
          } )
        }
        else{
        filtered = list.filter(leave =>{
                return (leave.name.toLowerCase().includes(this.state.name.toLowerCase()))&&(leave.start>this.state.start); 
        } )
        }
        filtered.reverse()
        return(
            <div id="maindiv" className='pa5 shadow-4 w-90 '>
                <div id='inputs' className='tc'>
                    <table><tbody>
                        <tr>
                            <td>Search by name</td>
                            <td>Search by start date</td>
                            <td>Search by finish date</td>
                        </tr>
                        <tr>
                            <td><input onChange={this.namechange} type='text'/></td>
                            <td><input onChange={this.startchange} type='date'/></td>
                            <td><input onChange={this.finishchange} type='date'/></td> 
                        </tr>
                    </tbody></table>
                </div>
                <div id='listdiv'>
                <List className='histlist' leaves={filtered}/>
                </div>
            </div>
        )
    }
}

export default History;