import React from 'react';

const ListStaff = ({list}) =>{
    return(
        <table>
            <tbody>
                <tr>
                        <th className='ph5'>Name</th>
                        <th className='ph5'>Store</th>
                        <th className='ph5'>Type</th>
                </tr>
                {
                    list.map((staff,i)=>{
                        if(!staff.valid){
                        return(
                            <tr key={i}>
                                <td>{staff.name}</td>
                                <td>{staff.store}</td>
                                <td>{staff.type}</td>
                            </tr>
                        )
                        }
                        return null;
                    })
                }
            </tbody>
        </table>
    )
}

export default ListStaff;