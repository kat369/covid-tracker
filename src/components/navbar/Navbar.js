import { useContext } from "react";
import UserContext from "../../Usercontext";

import './Navbar.css'

function Navbar() {
  
  const userContext = useContext(UserContext)

     return (
        <>
        <div className="navcontainer">
           <div className='nav-content-left'>
            <div className='logo'><i className="fa-solid fa-virus"></i></div>
            <div className='logo_title'>Covid Tracker</div>
           </div>
           <div className='nav-content-right'>
            
           
           </div>
          </div>

          
        </>
      )
}

export default Navbar
