import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import './order-customer-style.css'
import ModalOrderProduct from './ModalOrderProduct'
const OrderCustomer = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Card className='order-card mt-5'>
                        <div className='m-3'>
                            {/* Detail Customer */}
                            <div className='title mx-4'>รายละเอียดลูกค้า</div>
                            <CardBody className='mx-4 mb-3'>
                                <Row>
                                    <Col className='subtitle' md={1}>
                                        <div>รหัสลูกค้า</div>
                                        <div>ชื่อ-สกุล</div>
                                        <div>เบอร์โทร</div>
                                        <div>ที่อยู่</div>
                                    </Col>
                                    {/* Data */}
                                    <Col className='subtitle'>
                                        <div className='hightlight bg-warning'>cu-9316</div>
                                        <div>มหาชัย ใจดี</div>
                                        <div>089562578</div>
                                        <div>44/10</div>
                                    </Col>
                                </Row>
                            </CardBody>
                            {/* Order Customer */}
                            <div className='mx-4' style={{ fontSize: '24px' }}>คำสั่งซื้อ</div>
                            <CardBody>
                                {/* Header */}
                                <Row className='d-flex justify-content-center text-center'>
                                    <Col md={2}>
                                        <div>ID</div>
                                    </Col>
                                    <Col md={2}>
                                        <div>รายการผัก</div>
                                    </Col>
                                    <Col md={2}>
                                        <div>รอบคำสั่งซื้อ</div>
                                    </Col>
                                    <Col md={2}>
                                        <div>วันที่จัดส่ง</div>
                                    </Col>
                                    <Col md={2}>
                                        <div>สถานะ</div>
                                    </Col>
                                </Row>
                                <hr />
                                {/* Data */}
                                <Row className='d-flex justify-content-center text-center'>
                                    <Col md={2}>
                                        <div>order-0000</div>
                                    </Col>
                                    <Col md={2}>
                                        <div>
                                            <button id='detail-order' className='btn-sm' data-bs-toggle="modal" data-bs-target="#ModalDetailProducts">
                                                ดูรายละเอียด
                                            </button>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div>รอบที่ 1</div>
                                    </Col>
                                    <Col md={2}>
                                        <div>5 เมษายน 2024</div>
                                    </Col>
                                    <Col md={2}>
                                        <div>จัดส่งแล้ว</div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </div>
                    </Card>
                </Col>
            </Row>
            <ModalOrderProduct />
        </Container>
    )
}

export default OrderCustomer