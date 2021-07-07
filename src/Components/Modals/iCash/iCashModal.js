import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import '../iCash/icashStyle.css';

function IcashModal() {
	const [IcashIsOpen, setIcashIsOpen] = useState(false);
	return (
		<div className="conoCe">
			<Button className="conoceBtn" onClick={() => setIcashIsOpen(true)}>
				Conoce Más ✚
			</Button>

			<div className="iCashWrapper">
				<Modal className="modalFrame" isOpen={IcashIsOpen} onRequestClose={() => setIcashIsOpen(false)}>
					<div className="Clooosebtn">
						<Button className="closeBtn" onClick={() => setIcashIsOpen(false)}>
							X
						</Button>
					</div>
					<div class="openModal">
                        <h1 class="modalTitle"> iCash </h1>
						<h2 class="modalSub">¿Que es iCash de Procapital?</h2>
						<p class="modalText">
							•Somos un equipo de profesionales con amplía experiencia en el sector financiero, tanto como
							privado.
							<br></br>•Tenemos la capacidad económica para satisfacer las necesidades de crédito de
							nuestros clientes.
							<br></br>•Contamos con la autorización de la CONDUSEF y CNBV para operar como SOFOM.
						</p>
						<h2 class="modalSub">Nuestros productos</h2>
						<p class="modalText">
							Préstamos personales con descuentos vía nómina a trabajadores en activo.
							<br></br>Contamos con dos productos:
							<br></br>•Crédito tradicional
							<br></br>•Anticipo de nómina
						</p>
						<h2 class="modalSub">Crédito tradicional</h2>
						<p class="modalText">
							A través de un convenio de colaboración administrativa entre la empresa de PROCAPITAL,
							<br></br> realizamos préstamos a sus empleados, con las siguientes características:
							Autorización en máximo de 24 hrs.
							<br></br>•Plazo desde 03 meses a 12 meses.
							<br></br>•Antigüedad mínima en el empleo de 12 meses.
							<br></br>•Sin aval, ni garantías.
							<br></br>•Tasas competitivas en el mercado.
							<br></br>•El estatus de Buró de Crédito no se considera para el otorgamiento del crédito.
						</p>
						<h2 class="modalSub">Anticipo de nómina</h2>
						<p class="modalText">
							El Anticipo de Nómina le permite al empleado disponer de hasta un 90% de su salario<br></br>
							Las características son las siguientes:
							<br></br>•Autorización máximo 24 horas.
							<br></br>•Descuentos vía nómina.
							<br></br>•Sin tasa de interés.
							<br></br>•Comisiones del 8% por disposición.
							<br></br>•Pago de Anticipo, hasta dos periodos.
							<br></br>•Hasta 22 disposiciones durante la vigencia del contrato.
							<br></br>•Monto de Disposición variable de acuerdo al requerimiento del cliente.
							<br></br>•Historial crediticio no es un determinante para su autorización (BC y CC).
						</p>
						<h2 class="modalSub">Beneficios para la empresa</h2>
						<p class="modalText">
							<br></br>• Ofrecer una prestación a los empleados, sin costo para la Empresa.
							<br></br>•La Empresa no corre ningún riesgo por cuentas incobrables, el riesgo es de
							PROCAPITAL.
							<br></br>•Nuestras políticas no permiten el sobre endeudamiento de los empleados, por lo que
							en ningún caso se descontará más del 30% de sueldo.
							<br></br>•Apoyo a sus empleados en sus necesidades de préstamos, sin tener que comprometer
							recursos económicos o riesgos legales
						</p>
						<h2 class="modalSub">Beneficios para los empleados</h2>
						<p class="modalText">
							<br></br>•Préstamo de forma sencilla y rápida: Autorización y depósito en MENOS<br></br>
							DE 24 HORAS a partir de que PROCAPITAL tenga toda la documentación.
							<br></br>•Préstamo de acuerdo a la liquidez del empleado.
							<br></br>•Facilidad para realizar trámite sin tener que salir de su centro de trabajo.
							<br></br>•Sin aval ni garantías
						</p>
                        <h2 class="modalSub">Nuestros Clientes & Cobertura </h2>
						<p class="modalText">
                        <h3>Sector privado<br></br></h3>
                        <br></br>•Servicios Técnicos en Cobranza (SIRTEC)
                        <br></br>•Aliato
                        <br></br>•Opciones en Recursos Humanos
                        <br></br> Contamos con cobertura en toda la republica mexicana.

                        <h2 class="modalSub">Confíanos tu nomina y la felicidad de tu empresa </h2>
                        </p>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default IcashModal;
