import React, { Component, Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import clientImg from '../../asset/image/2.jpg';
import clientImg3 from '../../asset/image/3.jpg';

export default class ClientReview extends Component {
  render() {

      var settings = {
          autoplay:true,
          autoplaySpeed:3000,
          dots: true,
          infinite: true,
          vertical: true,
          verticalSwiping: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                  }
              },
              {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
          ]
      };
    return (
      <Fragment>
          <Container className="text-center">
                <h1 className="servicesMainTitle">Clients Says</h1>

              <Slider {...settings}>
                  <div>
                      <Row className="text-center justify-content-center">
                          <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src={clientImg} alt="No Image Found "/>
                                <h1 className="serviceName">Web Development</h1>
                                <p className="videoDesc">First anlysis the requirement of project. According to the requirement I make a proper technical analysis, then I build a software architecture. According to the planning I start coding. Testing is also going on with coding</p>
                          
                          </Col>
                      </Row>
                  </div>
                  <div>
                      <Row className="text-center justify-content-center">
                          <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src={clientImg} alt="No Image Found "/>
                                <h1 className="serviceName">Web Development</h1>
                                <p className="videoDesc">First anlysis the requirement of project. According to the requirement I make a proper technical analysis, then I build a software architecture. According to the planning I start coding. Testing is also going on with coding</p>
                          
                          </Col>
                      </Row>
                  </div>
                  <div>
                      <Row className="text-center justify-content-center">
                          <Col lg={6} md={6} sm={12}>
                                <img className="circleImg" src={clientImg3} alt="No Image Found "/>
                                <h1 className="serviceName">Web Development</h1>
                                <p className="videoDesc">First anlysis the requirement of project. According to the requirement I make a proper technical analysis, then I build a software architecture. According to the planning I start coding. Testing is also going on with coding</p>
                          
                          </Col>
                      </Row>
                  </div>
              </Slider>
          </Container>
      </Fragment>
    )
  }
}
