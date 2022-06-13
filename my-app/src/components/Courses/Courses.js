import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Courses extends Component {
  render() {
    return (
      <Fragment>
       <Container className="text-center">
                <h1 className="servicesMainTitle">Our Courses</h1>
           <Row>
               <Col lg={6} md={12} sm={12}>
                   <Row>
                       <Col lg={6} md={6} sm={12}>
                  <img className="courseImg" src="https://reactjs-arnab-ff0301.netlify.app/static/media/courses.56e8063c.jpg" alt="no Imgae found" />
              
                       </Col>

                       <Col lg={6} md={6} sm={12}>
                          <h5 className="courseTitle">Web Development</h5>
                           <p className="courseDesc">I build native and cross platfrom mobile app for your business with respect.</p>
                          <Link className="courseDetails" to="/coursedetails">Details</Link>
                       </Col>

                   </Row>
               
               </Col>

               <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                         <img className="courseImg" src="https://reactjs-arnab-ff0301.netlify.app/static/media/courses.56e8063c.jpg" alt="no Imgae found" />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                             <h5 className="courseTitle">Web Development </h5>
                             <p className="courseDesc">I build native and cross platfrom mobile app for your business with respect.</p>
                            <Link className="courseDetails" to="/coursedetails">Details</Link>
                        </Col>

                    </Row>
               </Col>


            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <img className="courseImg" src="https://reactjs-arnab-ff0301.netlify.app/static/media/courses.56e8063c.jpg" alt="no Imgae found" />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className="courseTitle">Web Development </h5>
                  <p className="courseDesc">I build native and cross platfrom mobile app for your business with respect.</p>
                  <Link className="courseDetails" to="/coursedetails">Details</Link>
                </Col>

              </Row>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <img className="courseImg" src="https://reactjs-arnab-ff0301.netlify.app/static/media/courses.56e8063c.jpg" alt="no Imgae found" />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className="courseTitle">Web Development </h5>
                  <p className="courseDesc">I build native and cross platfrom mobile app for your business with respect.</p>
                  <Link className="courseDetails" to="/coursedetails">Details</Link>
                </Col>

              </Row>
            </Col>
               
           </Row>
           <Row>

           </Row>
       </Container>


      </Fragment>
    )
  }
}
