import React from 'react';

const List = ({leaves}) =>{
    return(
        <table>
            <tbody>
                <tr>
                        <th className='ph5'>Name</th>
                        <th className='ph5'>Start Date</th>
                        <th className='ph5'>Finish Date</th>
                        <th className='ph5'>Total Hour</th>
                        <th className='ph5'>Leave Type</th>
                        <th className='ph5'>Note</th>
                        <th className='ph5'>Who added to MYOB</th>
                        <th className='ph5'>MYOB Note</th>
                        <th className='ph5'>MYOB Date</th>
                </tr>
                {
                    leaves.map((leave,i)=>{
                        return(
                            <tr key={i}>
                                <td>{leave.name}</td>
                                <td>{leave.starttext}</td>
                                <td>{leave.finishtext}</td>
                                <td>{leave.hour}</td>
                                <td>{leave.type}</td>
                                <td>{leave.note}</td>
                                <td >{leave.myob_add}</td>
                                <td >{leave.myob_note}</td>
                                <td >{leave.myob_date}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default List;