import React from 'react';
import './page.css';
import Add from '../Add/add';
import History from '../History/history'
import Myob from '../MYOBhistory/myob'
import Staff from '../StaffMNGM/staff';

const Page =({route,onRouteChange,myobleaves,leaves,staff})=> {
    let nav='sa';
    if(route==='add'){
        nav='Add Leave'
    }
    else if(route==='myob'){
        nav='View leave not added to MYOB'
    }
    else if(route==='hist'){
        nav='Leave History'
    }
    else{
        nav='Staff Management'
    }
    return(
        <div>
        <div id='cont' className='shadow-5'>
            <input type='button' id='back' className='ma3 b ph3 pv2 input-reset ba white' value='Back'onClick={()=> onRouteChange('main')}></input>
            <div className='tc'>
                <h1 id='leave'>Leave Manager</h1>
                <div id='nav' className="">
                    <h2>{nav}</h2>
                </div>
            </div>  
        </div>
        <div>
            {
            route==='add'
                ?<Add list={staff}></Add>
            
            :(route==='myob')
                ?<Myob list={myobleaves}></Myob>
            
            :route==='hist'
                ?<History list={leaves}></History>
        
                :<Staff refresh={onRouteChange} list={staff}></Staff>
            
        }
        </div>
        </div>
    )
    
}

export default Page;