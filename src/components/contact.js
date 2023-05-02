import React from 'react';
import '../CSS/styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
      return (
        <Container>
            <h1 class="page-header">STILL HAVE QUESTIONS?</h1>
            <Row>
                <p id="contact-drop-line" className='mt-3'>DROP US A LINE</p>
            </Row>
            <Form id="contact-form" className='mt-5'>
                <Form.Group className="mb-3" controlId="name.ControlInput1">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="" className="contact-input" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email.ControlTextarea1">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" className="contact-input" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message.ControlTextarea1">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={5} className="contact-message" />
                </Form.Group>
                <Button type="submit" className="main-btn">SUBMIT</Button>
            </Form>
        </Container>
    )
}

export default Contact;
