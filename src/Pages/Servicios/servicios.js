import React  from 'react';
import { useHistory } from 'react-router-dom';
import { Card,} from 'react-bootstrap';
import './serviciostyle.css';
import nominaImg from '../../Components/Images/flujo.png';
import cashImg from '../../Components/Images/loan.png';
import optiImg from '../../Components/Images/investment.png';
import IcashModal from '../../Components/Modals/iCash/iCashModal';
import OptiModal from '../../Components/Modals/Optimaxx/Optimaxx';




function Servicios() {
	
	const history = useHistory();
  console.log(history.location)
	
	return (
		<div class="containerService">
			<div class="CARD1">
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={nominaImg} />
					<Card.Body>
						<Card.Title>
							<h2>Estrategias de administración</h2>
						</Card.Title>
						<Card.Text>
							Contamos con más de 80 especialistas que te ayudarán a exponenciar tus ahorros en flujo,
							utilidades y nómina. te llevaremos de la mano con asesoría legal, fiscal y de inversión
							Concreta una cita para ver cómo podemos ayudarte.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
			<div class="CARD2">
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={cashImg} />
					<Card.Body>
						<Card.Title>
							<h2>
								iCash <br></br> Prestamos a empleados
							</h2>
						</Card.Title>
						<Card.Text>
							¿Cuántos empleados te piden un préstamo al mes? Tenemos la solución con préstamos personales
							con descuentos vía nómina a trabajadores en activo. Contamos con dos productos: Crédito
							tradicional y Anticipo de nómina donde la empresa no corre ningún riesgo por cuentas
							incobrables, el riesgo es de PROCAPITAL.
						</Card.Text>
					 <IcashModal />
						
					</Card.Body>
				</Card>
			</div>
			<div class="CARD3">
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={optiImg} />
					<Card.Body>
						<Card.Title class="CARD3TIT">
							<h2>
								OPTIMAXX by Allianz<br></br>Portafolios de ahorro e inversión{' '}
							</h2>
						</Card.Title>
						<Card.Text>
							OptiMaxx plus es un plan de retiro individual que te permitirá construir, desde hoy, un
							patrimonio para tu futuro. OptiMaxx plus te ofrece Alternativas de Inversión con distintos
							perfiles de riesgos y distintas monedas. Como inversionista podrás optar desde alternativas
							que te ofrezcan atractivos rendimientos con un incomparable nivel de seguridad hasta
							opciones que permiten una inversión proactiva con mayor dinamismo, lo cual maximiza el
							potencial de crecimiento de tu patrimonio en el largo plazo.
						</Card.Text>
						<OptiModal/>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default Servicios;
