import React from 'react';

const ListStaff = ({list}) =>{
    return(
        <datalist id='stafflist'>
           { list.map((staff,i) =>{
                return(
                <option key={i} id={staff.name} value={staff.name}>{`${staff.name},${staff.store},${staff.type}`}</option>
                )
            })}
        </datalist>

    )
}

export default ListStaff;