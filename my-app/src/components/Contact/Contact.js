import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


export default class  extends Component {
  render() {
    return (
        <Fragment>
            <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Form>
                            <h1 className="serviceName">Quick Connect</h1>

                            <Form.Group className="mb-3" >
                                <Form.Label className="serviceDesc">Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label className="serviceDesc">Email address</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label className="serviceDesc">Message</Form.Label>
                                <Form.Control type="text" as="textarea" rows={3}  />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Discuss Now</h1>
                        <p className="serviceDesc">Agrabad C/A, Agrabad, Chattogram, Bangladesh.</p>
                        <p className="serviceDesc"><FontAwesomeIcon icon={faEnvelope} />mr1633470rafi@gmail.com</p>
                        <p className="serviceDesc"><FontAwesomeIcon icon={faPhone} />+8801867118351</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}
