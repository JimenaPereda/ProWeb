import React from "react";
import {Link}  from 'react-router-dom';
import MainLogo from "../../Components/Images/logocuadrado.jpg";
import './introstyle.css';



function IntroPage() {
	
   
      return (

        <div className="introback">
          
        
        <Link to="/Nosotros" className="link"><img alt="somevalue" className="LogoImg" src={MainLogo} /></Link>
        
          
        </div>
          
      );
  }
  
  export default IntroPage;