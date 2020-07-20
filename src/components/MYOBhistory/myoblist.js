import React from 'react';

class MYOBList extends React.Component {
    addMyob =(id)=>{
        fetch('https://rocky-retreat-96881.herokuapp.com/addmyob',{
            method:'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                name: document.getElementById(`name${id}`).value,
                note: document.getElementById(`note${id}`).value
            })
        })
        .then(response => response.json())
        .then(valid =>{
            if(valid){
                alert('Leave added to myob');
            }
            else{
                alert('Please fill the name area')
            }
        })
    }
    render(){
        return(
            <table>
                <tbody>
                    <tr>
                            <th className='ph5'>Add to MYOB</th>
                            <th className='ph5'>Who added to MYOB</th>
                            <th className='ph5'>Myob Note</th>
                            <th className='ph5'>Name</th>
                            <th className='ph5'>Start Date</th>
                            <th className='ph5'>Finish Date</th>
                            <th className='ph5'>Leave Type</th>
                            <th className='ph5'>Note</th>
                    </tr>
                    {   
                        this.props.leaves.map((leave,i)=>{
                            return(
                                <tr key={i}>
                                    <td className='tc' ><input  className='white' type='button'id={`check${leave.id}`} value='Add'onClick={()=>this.addMyob(leave.id)}></input></td>
                                    <td className='tc' ><input type='text' id={`name${leave.id}`}></input></td>
                                    <td className='tc' ><input type='text' id={`note${leave.id}`}></input></td>
                                    <td>{leave.name} </td>
                                    <td>{leave.starttext}</td>
                                    <td>{leave.finishtext}</td>
                                    <td>{leave.type}</td>
                                    <td>{leave.note}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default MYOBList;