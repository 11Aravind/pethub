import { Link } from "react-router-dom";
import {useState} from 'react'
import "../css/navbar.css"
function Navbar() {
  const[showPhonemenu,handleMenu]=useState(false);
  // console.log(showPhonemenu)
  return (
   <div className={showPhonemenu?"navbar-container-show":"navbar-container"}>
     <ul className="menu-containe">
    <h5 className="logo">Pet <span className="highlight">World</span></h5>
    <li className={showPhonemenu?"show-list":"hide"}><Link to="/">Home</Link></li>
    <li className={showPhonemenu?"show-list":"hide"}><Link to="/pets">Pets</Link> </li>
    <li className={showPhonemenu?"show-list":"hide"}>Contacts</li>
   {/* <li> */}
   <div className="phone-menu" onClick={()=>handleMenu(!showPhonemenu)}>
    <div></div>
    <div></div>
    <div></div>
   </div>
   {/* </li> */}
    <li className={showPhonemenu?"show-list":"hide"}><button className="login-btn"><Link to='/login' style={{color:"white"}}>Sign in</Link></button></li>
</ul>
   </div>
  )
}

export default Navbar