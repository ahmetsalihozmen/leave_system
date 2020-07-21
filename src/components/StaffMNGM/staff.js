import React from 'react';
import './staff.css';
import ListStaff from './list';
import Select from 'react-select'

const options = [
    { value: 'APW Sydney', label: 'APW Sydney' },
    { value: 'APW Perth', label: 'APW Perth' },
    { value: 'APW West Melbourne', label: 'APW West Melbourne' },
    { value: 'APW Blackburn', label: 'APW Blackburn' },
    { value: 'Kosmic Sound', label: 'Kosmic Sound' },
    { value: 'Billy Hyde Music', label: 'Billy Hyde Music' },
    { value: 'Winston Music', label: 'Winston Music' },
    { value: 'Dale Cleves Music – Warrnamboo', label: 'Dale Cleves Music – Warrnamboo' },
    { value: 'Dale Cleves Music – Mount Gambier', label: 'Dale Cleves Music – Mount Gambier' },
    { value: 'Head Office', label: 'Head Office' }
  ]

                        
class Staff extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            store: '',
            type: '',
            leaveid:'',
            options2:''
        }
    }

   

    namechange =(event) =>{
        this.setState({name: event.target.value})
    }
    storechange =(store) =>{
        this.setState({store})
    }
    typechange =(event) =>{
        this.setState({type: event.target.value})
    }

    removechange =(leaveid) =>{
        this.setState({leaveid})
    }
    onAddStaff = () => {
        fetch('http://https://rocky-retreat-96881.herokuapp.com/register',{
          method: 'POST',
          headers:{'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                name:this.state.name,
                store:this.state.store.value,
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

      componentDidMount(){
          let option = this.props.list.filter(list => list.valid === true)
           option =option.map((lists) =>{
            if(lists.valid){
                return({
                    value:lists.id,
                    label:`${lists.name},${lists.store}`
                })
             }
             else{
                return console.log('sa');
            }
        })
        this.setState({options2:option})
      }
    onRemove = () =>{
        fetch('http://https://rocky-retreat-96881.herokuapp.com/remove',{
          method: 'POST',
          headers:{'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                id:this.state.leaveid.value
          })
        })
        .then(response=> response.json() )
        .then(valid =>{
          if(valid){
            alert('Staff Member Removed');
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
                        <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"
                        maxLength='100' onChange={this.namechange}
                        />
                    </div>
                    <div >    
                        <label htmlFor="storelist">Staff Store</label><br></br>
                        <Select id="storeselect" value={this.state.store} onChange={this.storechange} options={options} />
                    </div><br></br>
                    <div>
                        <label className=' db mb0' htmlFor="Annual">FT or PT</label><br/>
                        <label htmlFor='choice'>FT</label>
                        <input type="radio" 
                        className='mh3' name="choice" value="FT"
                        onClick={this.typechange}/>
                        <label>PT</label>
                        <input type="radio" className='mh3'  name='choice' value="PT"
                        onClick={this.typechange} 
                        />
                    </div>
                </form>
                <div className='tc'>
                    <input id='addleave'type='submit' value='Add Staff' className='white ba b--white'
                    onClick={this.onAddStaff}
                    ></input>
                    </div>
                <div >    
                        <label htmlFor="storelist">Staff Name</label><br></br>
                        <Select options={this.state.options2} value={this.state.leaveid} onChange={this.removechange}/>
                    </div>
                <div className='tc'>
                    <input id='addleave'type='submit' value='Remove Staff' className='white ba b--white'
                    onClick={this.onRemove}
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