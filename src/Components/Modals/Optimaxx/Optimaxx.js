import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import '../Optimaxx/optistyle.css';

function OptiModal() {
	const [OptiIsOpen, setOptiIsOpen] = useState(false);
	return (
		<div className="conoCe">
			<Button className="conoceBtn" onClick={() => setOptiIsOpen(true)}>
				Conoce Más ✚
			</Button>

			<div className="iCashWrapper">
				<Modal className="modalFrame" isOpen={OptiIsOpen} onRequestClose={() => setOptiIsOpen(false)}>
					<div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setOptiIsOpen(false)}>
							X
						</Button>
					</div>
					<div class="openModal">
						<h1 class="modalTitle"> Optimaxx </h1>
						<h2 class="modalSub">
							OPTIMAXX PLUSS y OPTIMAXX PATRIMONIAL Cuentan con el respaldo de Allianz
						</h2>
						<h2 class="modalSub">¿Quien es Allianz?</h2>
						<p class="modalText">
							Allianz es una de las tres empresas más grandes de Alemania y forma parte de las 25 empresas
							<br></br>más importantes a nivel mundial. La solidez financiera de Allianz está respaldada
							por los
							<br></br>“ratings” más altos de Standard & Poor’s, la calificación mxAAA en México y AA en
							la escala
							<br></br>internacional. A nivel global más de la mitad de las 500 empresas más grandes del
							mundo se
							<br></br>aseguran a través de Allianz, o confían al Grupo la administración de sus activos.
						</p>
						<h2 class="modalSub">Optimaxx Plus</h2>
						<div class="VIDEO2">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/Xa_KuoYq2yE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
        </div>
						<p class="modalText">
							OptiMaxx plus es un plan de retiro individual que te permitirá construir, desde hoy, un
							<br></br>patrimonio para tu futuro. OptiMaxx plus te ofrece Alternativas de Inversión con
							distintos
							<br></br>perfiles de riesgos y distintas monedas. Como inversionista podrás optar desde
							alternativas
							<br></br>que te ofrezcan atractivos rendimientos con un incomparable nivel de seguridad
							hasta
							<br></br>opciones que permiten una inversión proactiva con mayor dinamismo, lo cual maximiza
							el
							<br></br>potencial de crecimiento de tu patrimonio en el largo plazo.
							<br></br>
							<br></br>•Domiciliación mensual a tarjetas de débito o crédito. A 25 años con inflación
							incluida en las aportaciones mensuales para que no se pierda el valor adquisitivo a la hora
							del retiro.
							<br></br>•Aportaciones voluntarias.
							<br></br>•Bono desde el 55% al 100% de Allianz según tu aportación mensual.
							<br></br>•A partir del mes 19 se puede retirar cuantas veces quieras (costo operativo 1%) a
							excepción del bono de fidelidad– este solo se puede retirar al finalizar el año 25.
							<br></br>•Periodo de gracia de 12 meses si no puedes pagar.
						</p>
						<h2 class="modalSub">Optimaxx Patrimonial</h2>
						<p class="modalText">
							OptiMaxx patrimonial te da acceso a una gran variedad de alternativas de inversión, tanto
							<br></br>activas como pasivas, gestionadas por Allianz, una de las empresas financieras de
							mayor
							<br></br>prestigio en la administración de activos a nivel mundial. OptiMaxx patrimonial es
							un plan
							<br></br>de inversión administrado bajo un fideicomiso. A través de OptiMaxx patrimonial
							puedes
							<br></br>invertir en los principales mercados nacionales e internacionales, en renta fija y
							renta
							<br></br>variable, en sectores económicos específicos, en “commodities” como oro, plata,
							petróleo
							<br></br> o simplemente en una de las estrategias de inversión definidas por el equipo de
							especialistas
							<br></br>de Allianz
						</p>
						<h2 class="modalSub">Beneficios de del plan de inversión OptiMaxx Patrimonial</h2>
						<p class="modalText">
							<br></br>•Plan de inversión basado en una estrategia de gestión pasiva bajo la figura de un
							fideicomiso que ofrece el más alto nivel de diversificación y seguridad. 
							<br></br>•Posibilidad de invertir en distintos mercados internacionales, regiones
							económicas, sectores específicos y  “commodities”.
							<br></br>•Te da acceso, a través de las estrategias de inversión basadas en ETFs (Exchange
							Traded Fund), a los principales mercados de dinero y capitales, tanto nacionales como
							internacionales.
							<br></br>•Te permite diseñar estrategias de inversión a tu medida con diversos perfiles de
							riesgo / rendimiento.
						</p>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default OptiModal;
