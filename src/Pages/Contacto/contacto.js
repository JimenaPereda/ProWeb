import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './contactostyle.css';

function Contacto() {
	return (
		<div class="container">
			<div class="CONTACTFORM">
				<Form>
					<Form.Group className="mb-3" controlId="formBasicName">
						<h3>Nombre:</h3>
						<Form.Control type="className" placeholder="Nombre" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formMail">
						<h3>Email:</h3>
						<Form.Control type="email" placeholder="Email" />
					</Form.Group>

					<Form.Group className="mb-4" controlId="Textarea1">
						<h3>Consulta:</h3>
						<Form.Control as="textarea" rows={3} />
					</Form.Group>

					<Button variant="primary" type="submit">
						Enviar
					</Button>
				</Form>
				<h2>“Son tus decisiones, no tus condiciones, las que determinan tu destino.”</h2>
			</div>
			<div class="MAP">
			<iframe title="adress"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.62861815!2d-99.20909838509338!3d19.428445886886674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201f5e6c809bb%3A0x5695b43eaa14f1bf!2sCalle%20Montes%20Urales%20425%2C%20Lomas%20-%20Virreyes%2C%20Lomas%20de%20Chapultepec%2C%20Miguel%20Hidalgo%2C%2011000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1625581058241!5m2!1ses!2smx" width="440" height="300" allowfullscreen="" loading="lazy"></iframe>
			</div>
			<div class="CONTACTEXT">
				<h3>Dirección</h3>
				<p> Calle Montes Urales 425 Lomas de Chapultepec, Miguel Hidalgo, 11000 Ciudad de México, CDMX</p>
				<h3>Contacto</h3>
				<p>
					{' '}
					Mail: contacto@procapital.com.mx
					<br></br>
					Telefono: 55.23.30.36.69
				</p>
			</div>
		</div>
	);
}

export default Contacto;
