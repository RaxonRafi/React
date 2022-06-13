import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class AboutDesc extends Component {
  render() {
    return (
        <Fragment>

            <Container className="mt-5">
                <Row>
                    <Col lg={12} sm={12} md={12}>
                        <h1 className="serviceName">WHO I AM</h1>
                        <hr/>
                        <p className="serviceDesc">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>
                        <h1 className="serviceName">My Mission</h1>
                        <hr/>
                        <p className="serviceDesc">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>
                        <h1 className="serviceName">My Vision</h1>
                        <hr/>
                        <p className="serviceDesc">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>
                    
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}
