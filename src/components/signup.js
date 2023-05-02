import React from 'react';
import '../CSS/styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Signup() {
    return (
        <Container>
        <h1 class="page-header">I WANT TO PITCH IN</h1>
        <div className="signup-details">
            <h3>Thank you for your interest!</h3>
            <p>Fill out the form below to get registered. When complete, your info will appear on the ‘Shadow Opportunities’ Tab. When someone is interested, they will contact you and you will sort out the shadow details</p>
        </div>
        <Row className='mt-5'>
            <Col xs={4} className="sign-up-details">Create Account</Col>
            <Col xs={8}>
                <Form>
                    <Form.Group className="mb-3" controlId="name.ControlInput1">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email.ControlTextarea1">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password.ControlTextarea1">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" rows={3} />
                    </Form.Group>
                </Form> 
            </Col>
        </Row>
        <Row className='mt-5'>
            <Col xs={4} className="sign-up-details">New Posting Details</Col>
            <Col xs={8}>
                <Form>
                    <Form.Group className="mb-3" controlId="postingEmail.ControlInput1">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Email to show in listing if different from above" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="company.ControlInput1">
                        <Form.Label>Company:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="hours.ControlInput1">
                        <Form.Label>Hours:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="title.ControlInput1">
                        <Form.Label>Job Title:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="details.ControlInput1">
                        <Form.Label>Work Details:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="website.ControlInput1">
                        <Form.Label>Employer Website:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="type.ControlInput1">
                        <Form.Label>Remote, In-Person, or Either:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Button type="submit" className="main-btn">SUBMIT</Button>
                </Form>
            </Col>
        </Row>
        </Container>
    )
}

export default Signup;
