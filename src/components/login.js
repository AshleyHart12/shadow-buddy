import React from 'react';
import '../CSS/styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card3 from '../assets/Image98.png'

function Login() {
  
    return (
        <Container>
            <h1 class="page-header">LOGIN</h1>
            <Form id="contact-form" className='mt-5'>
                <Form.Group className="mb-3" controlId="email.ControlTextarea1">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" className="contact-input" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password.ControlTextarea1">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" className="contact-input" />
                </Form.Group>
                <Button type="submit" className="main-btn">LOGIN</Button>
            </Form>
            <img src={Card3} alt="artowrk of man sitting under giant phone on his phone" id="login-img" />
        </Container>
    )
}

export default Login;
