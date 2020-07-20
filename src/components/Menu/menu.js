import React from 'react';
import './menu.css'

const Menu = ({onRouteChange}) =>{
        return(
            <div className="br3 ba b--black-10 ma4 mw6 shadow-5 center" id="container">
                <h1>Leave Manager</h1>
                <div className="ma4 b ph3 pv2  ">
                    <div><input type="submit" className="ma3 b ph3 pv2 input-reset ba white " value="Add Leave" onClick={()=>onRouteChange("add")}></input></div>
                    <div><input type="submit"className="ma3 b ph3 pv2 input-reset ba white " value="Add to MYOB"onClick={()=>onRouteChange("myob")}></input></div>
                    <div><input type="submit" className="ma3 b ph3 pv2 input-reset ba  white"value="Leave History"onClick={()=>onRouteChange("hist")}></input></div>
                    <div><input type="submit" className="ma3 b ph3 pv2 input-reset ba white" value="Staff MGMT"onClick={()=>onRouteChange("mgmt")}></input></div>
                </div>
            </div>
        )
}

export default Menu;