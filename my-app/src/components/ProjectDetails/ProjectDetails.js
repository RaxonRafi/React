import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Details from '../../asset/image/details.png'

export default class ProjectDetails extends Component {
  render() {
    return (
        <Fragment>
            <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <img className="projectDetailsimg" src={Details} alt="No image found" />
                    
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Project name </h1>
                        <p className="serviceDesc">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                        <ul>
                            <li className="serviceDesc">Unlimited Dynamic Product Category</li>
                            <li className="serviceDesc">Unlimited Dynamic Product Category</li>
                            <li className="serviceDesc">Unlimited Dynamic Product Category</li>
                            <li className="serviceDesc">Unlimited Dynamic Product Category</li>
                            <li className="serviceDesc">Unlimited Dynamic Product Category</li>
                            <li className="serviceDesc">Unlimited Dynamic Product Category</li>
                            <li className="serviceDesc">Unlimited Dynamic Product Category</li>
                        </ul>
                        <Button varient="info"> Live preview </Button>
                    
                    </Col>
                </Row>
            </Container>

        
        </Fragment>
    )
  }
}
