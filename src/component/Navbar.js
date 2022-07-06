import { Link } from "react-router-dom";
import {useState,useEffect} from 'react'
import "../css/navbar.css"
function Navbar() {
 
  const[showPhonemenu,handleMenu]=useState(false);
  // console.log(showPhonemenu)
  useEffect(()=>{
    console.log("mounting...")
  return(()=>{
    console.log('hai')
  })
  },[])
  return (
   <div className={showPhonemenu?"navbar-container-show":"navbar-container"} id="navbar-container">
     <ul className={showPhonemenu?"menu-container show-list":"menu-container"}>
    <h5 className="logo firstText">Pet <span className="secondText">World</span></h5>
    <li className={showPhonemenu?" show-list":"hide"}><Link to="/">Home</Link></li>
    <li className={showPhonemenu?" show-list":"hide"}>     <Link to="/pets">Pets</Link> </li>
    <li className={showPhonemenu?" show-list":"hide"}>Contacts</li>
   {/* <li> */}
   <div className={showPhonemenu?"hide":"phone-menu"} onClick={()=>handleMenu(!showPhonemenu)}>
    <div></div>
    <div></div>
    <div></div>
   </div>
   <div className={showPhonemenu?"phone-menu show":"hide none"}  onClick={()=>handleMenu(!showPhonemenu)}>&#x2715;</div>
   {/* </li> */}
    <li className={showPhonemenu?" show-list":"hide"}><button className="login-btn"><Link to='/login' style={{color:"white"}}>Sign in</Link></button></li>
    <Link to='/cart'><li><i className={showPhonemenu?"fa fa-cart-arrow-down show-list":"hide"} class="fa fa-cart-arrow-down" aria-hidden="true"></i>  </li></Link>
</ul>
   </div>
  )
}

export default Navbar