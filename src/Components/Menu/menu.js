import React from "react";
import { Container, Navbar, Nav, } from 'react-bootstrap';
import {useHistory}  from 'react-router-dom';
import './menustyle.css';



function Menu() {
	
    const history = useHistory();
    console.log(history)
   
     return(
  
        <div>
          {history.location.pathname!== "/" ?(
        <Container className="Nav">
         
          <Navbar className="menubar">
         
          <Nav className="mr-auto">
           <Nav.Link className="round-button" href="/Nosotros">Nosotros </Nav.Link>
         
           <Nav.Link className="round-button" href="/Servicios">Servicios </Nav.Link>
         
           <Nav.Link className="round-button" href="/Contacto">Contacto</Nav.Link>
         
         
         </Nav>
          </Navbar>
       </Container>
       ):<></>}
         </div>
      
  
     )
   
}

export default Menu;
