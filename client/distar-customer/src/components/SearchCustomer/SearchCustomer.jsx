import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import './search-customer-style.css'; // style
import logo from './logo.png'; // png


const SearchCustomer = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
            <Row>
                <Col className='d-flex justify-content-center'>
                    {/* Search Card */}
                    <Card variant="center" className='search-card'>
                        <Card.Body className='d-flex justify-content-center align-items-center'>
                            <div>
                                <Row className='my-5'>
                                    <Col className='mb-3 text-center'>
                                        <div>
                                            {/* Logo */}
                                            <img className='img-logo' src={logo} alt="logo" />
                                        </div>
                                    </Col>
                                    {/* Title */}
                                    <Col md={12} className='mb-3 text-center'>
                                        <div style={{ fontSize: '18px', color: '#464646' }}>ค้นหาคำสั่งซื้อ</div>
                                    </Col>
                                    <Col md={12} className='d-flex justify-content-center align-items-center'>
                                        <div style={{ width: '60%', fontWeight: 'normal' }}>
                                            {/* Form */}
                                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3" controlId="username">
                                                    <Form.Control
                                                        type="username"
                                                        placeholder="กรุณากรอกชื่อ-สกุล/รหัสลูกค้าของท่าน"
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">โปรดระบุชื่อ-สกุล/รหัสลูกค้าของท่าน.</Form.Control.Feedback>
                                                </Form.Group>
                                                {/* Button */}
                                                <Button variant="primary" className='w-100' type="submit">
                                                    ค้นหา
                                                </Button>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchCustomer
