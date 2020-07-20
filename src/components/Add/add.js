import React from 'react';
import './add.css';
import ListStaff from './stafflist';

class Add extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            start: '',
            finish: '',
            type: '',
            note: '',
            stafflist: []
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

    typechange =(event) =>{
        this.setState({type: event.target.value})
    }

    notechange =(event) =>{
        this.setState({note: event.target.value})
    }

    onAddLeave = () => {
        fetch('https://rocky-retreat-96881.herokuapp.com/leave',{
          method: 'POST',
          headers:{
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                name:this.state.name,
                starttext:this.state.start,
                finishtext:this.state.finish,
                start:this.state.start,
                finish:this.state.finish,
                type:this.state.type,
                note:this.state.note,
                myob: true,
                myob_add:'',
                myob_note:''
          })
        })
        .then(response=> response.json() )
        .then(valid =>{
          if(valid){
            alert('Leave Added');
          }
          else{
            alert('Please fill all required spaces')
          }
        })
      }


    render(){
        return(
            <div id='add' className='tc pa5 ma4 shadow-5 center'>
                <form>
                    <div>    
                        <label htmlFor="name" className="f6 b db mb2">Staff Name</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"
                        onChange={this.namechange} list='stafflist'
                        />
                        <ListStaff list={this.props.list}/>
                    </div>
                    <div>    
                        <label htmlFor="date" className="f6 b db mb2">Start Date</label>
                        <input id="startdate" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="date" aria-describedby="name-desc"
                        onChange={this.startchange}
                        />
                    </div>
                    <div>    
                        <label htmlFor="date" className="f6 b db mb2">Finish Date</label>
                        <input id="finishdate" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="date" aria-describedby="name-desc"
                        onChange={this.finishchange}
                        />
                    </div>
                    <div>    
                        <label htmlFor="name" className="f6 b db mb2">Annual or Sick</label>
                        <label htmlFor="Annual">Annual</label>
                        <input type="radio" id="other"
                        className='mh3' name="reason" value="Annual"
                        onClick={this.typechange}/>
                        <label htmlFor="Sick">Sick</label>
                        <input type="radio" className='mh3' id="other" name="reason" value="Sick"
                        onClick={this.typechange}
                        />
                    </div>
                    <div>    
                        <label htmlFor="name" className="f6 b db mb2">Note<span className='normal  black-60'>(optional)</span></label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"
                        onChange={this.notechange}
                        />
                    </div>
                    
                </form>
                <div>
                        <input id='addleave'type='submit' value='Add Leave' className='white ba b--white'
                        onClick={this.onAddLeave} 
                        ></input>
                </div>
            </div>
        )
    }
}

export default Add;

