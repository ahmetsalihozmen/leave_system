import React from 'react';
import './add.css';
import Select from 'react-select';

class Add extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            start: '',
            finish: '',
            type: '',
            note: '',
            stafflist: [],
            options: ''
        }
    }
    namechange =(name) =>{
        this.setState({name})
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
        var olddate = new Date(this.state.start);
        var newdate = new Date(this.state.finish);
        var timeDiff = Math.abs(newdate.getTime() - olddate.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        diffDays++;
        diffDays= diffDays*7.5;
        fetch('http://https://rocky-retreat-96881.herokuapp.com/leave',(diffDays)={
          method: 'POST',
          headers:{
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                name:this.state.name.value,
                starttext:this.state.start,
                finishtext:this.state.finish,
                start:this.state.start,
                finish:this.state.finish,
                type:this.state.type,
                note:this.state.note,
                myob: true,
                myob_add:'',
                myob_note:'',
                hour:diffDays

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

    componentDidMount(){
        let option = this.props.list.filter(list => list.valid === true)
         option =option.map((lists) =>{
          if(lists.valid){
              return({
                  value:lists.name,
                  label:lists.name
              })
           }
      })
      this.setState({options:option})
    }

    render(){
        return(
            <div id='add' className=' pa5 ma4 shadow-5 center'>
                <form>
                    <div>    
                        <label  className="f6 b db mb2">Staff Name</label>
                       <Select options={this.state.options} value={this.state.name} onChange={this.namechange}/>
                       <br></br>
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
                    <div className='tc'>    
                        <label htmlFor="name" className="f6 b db mb2">Annual or Sick</label>
                        <label htmlFor="Annual">Annual</label>
                        <input type="radio"
                        className='mh3' name="reason" value="Annual"
                        onClick={this.typechange}/>
                        <label htmlFor="Sick">Sick</label>
                        <input type="radio" className='mh3'  name="reason" value="Sick"
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
                <div className='tc'>
                        <input id='addleave'type='submit' value='Add Leave' className='white ba b--white'
                        onClick={this.onAddLeave} 
                        ></input>
                </div>
            </div>
        )
    }
}

export default Add;

