import React from "react";
import NavLogo from "../Images/logoPro.jpg"
import './navbarstyle.css';
import Menu from "../Menu/menu";



function NavBar() {
	
   
      return (
          
        <div className="Nav">
        <img alt="somevalue" className="NavImg" src={NavLogo} />
        <Menu />
          
       </div>

       
       
          
      );
  }
  
  export default NavBar;