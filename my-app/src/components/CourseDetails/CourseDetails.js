import React, { Fragment, Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BigPlayButton, Player } from 'video-react'

export default class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topPageBanner p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContent">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="topSubTitle">Full Dynamic Website With Admin Panel</h4>
                                    <h2 className="topSubTitle">Total Lecture = 30</h2>
                                    <h2 className="topSubTitle">Total Student = 100</h2>

                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <p className="CourseDetailsDesc text-yellow">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>
                                </Col>
                            </Row>
                        </Container>
                   
                    </div>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h4 className="skillsDesc">Skill You Get</h4>
                            <ul>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                            </ul>
                            <Button>Buy Now</Button>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Player>
                                <source src="https://youtu.be/Dd0xUd9-Imw" />
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
