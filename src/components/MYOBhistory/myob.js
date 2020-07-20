import React from 'react';
import './myob.css';
import MYOBList from './myoblist'

const Myob =({list})=>  {
        return(
            <div id="myoblist" className='pa5 shadow-4 w-90 '>
                <div id='myoblistdiv'>
                <MYOBList leaves={list} />
                </div>
            </div>
        );
    
}

export default Myob;