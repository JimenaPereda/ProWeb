import React from "react";
import './nosotrostyle.css';
import Video from "../../Components/Images/VIDEOOFICIAL.mp4";
import { video } from 'react';




function Nosotros() {
	
   
      return (
          
        <div class="container">
        <div class="VIDEO">
        <video class="provideo" autoPlay="true" allow="pause"  controls="true" src={Video} type='video/mp4' />
        </div>
        <div class="TEXTO">
          <p class="mainText">
                Somos un equipo de profesionales con más de 6 años de amplia <br></br>experiencia en el sector
                financiero, tanto como privado.<br></br>Nuestro objetivo es acercar a nuestros clientes a conseguir
                o ampliar<br></br> la libertad financiera acercándolos a los mejores productos financieros del
                sector,<br></br> dando ventajas competitivas en precios, rendimientos, intereses y utilidades.{' '}
                 Con la mejor atención personalizada para resolver <br></br>necesidades de nuestros clientes{' '}
                con soluciones directas y cuantificables.
                <br></br> Procapital se puede proclamar como una empresa transparente, con valores y productos y
                servicios únicos en el mercado.
                <br></br>
                <br></br>
              </p>
        </div>
        <div class="TITULO">
          <h1>"Ayudandote a predecir tu  <br></br>libertad financiera" </h1>
        </div>
      </div>
      );
  }
  
  export default Nosotros;