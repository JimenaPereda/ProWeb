import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./Components/Navbar/navbar";
import introPage from "./Pages/Intro/intro";
import Nosotros from "./Pages/Nosotros/nosotros";
import Servicios from "./Pages/Servicios/servicios";
import Contacto from "./Pages/Contacto/contacto";
import './App.css';

function App() {
  return (
    <Router>
				<div>
				<div className="HeaderBackgrouund">
						
						<Route exact path={[ '/Nosotros', '/Servicios', '/Contacto']} component={NavBar} />
					</div>
					  <Switch>
					   <Route exact path="/" component={introPage} />
					   <Route exact path="/Nosotros" component={Nosotros} />
					   <Route exact path="/Servicios" component={Servicios} />
					   <Route exact path="/Contacto" component={Contacto} />
					  </Switch>
					  
				</div>
			</Router>
		
  );
}

export default App;
