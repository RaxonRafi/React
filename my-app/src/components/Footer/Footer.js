import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
          <Container fluid={true} className="footerSection">
              <Row>
                  <Col className="p-5 text-justify" lg={3} md={6} sm={12}>
                        <h1 className="serviceName">Follow Me</h1>
                        <a className="socialLinks" href="#"><FontAwesomeIcon icon={faFacebook} />Facebook</a><br/>
                        <a className="socialLinks" href="#"><FontAwesomeIcon icon={faYoutube} />YouTube</a>
                  </Col>
                    <Col className="p-5  text-justify"  lg={3} md={6} sm={12}>
                        <h1 className="serviceName">Address</h1>
                        <p className="serviceDesc">Agrabad C/A, Agrabad, Chattogram, Bangladesh.</p>
                        <p className="serviceDesc"><FontAwesomeIcon icon={faEnvelope} />mr1633470rafi@gmail.com</p>
                        <p className="serviceDesc"><FontAwesomeIcon icon={faPhone} />+8801867118351</p>
                  </Col>
                    <Col className="p-5"  lg={3} md={6} sm={12}>
                        <h1 className="serviceName">Information</h1>
                        <a className="footerLinks" href="#">About Me</a><br />
                        <a className="footerLinks"  href="#">Contact Me</a>
                  </Col>
                    <Col className="p-5"  lg={3} md={6} sm={12}>
                        <h1 className="serviceName">Legal</h1>
                         <Link className="footerLinks" to="/refundpolicy" > Refund Policy</Link><br/>
                         <Link className="footerLinks" to="/terms"> Terms & Condition</Link><br />
                        <a className="footerLinks" href="#">Privacy Policy</a>
                  </Col>
              </Row>
          </Container>

          <Container fluid={true} className=" copyrightBg text-center">
             <a className="copyright" href="#">MuhammadRaFi &copy; 2021-2022</a>
          </Container>
      </Fragment>
    )
  }
}
