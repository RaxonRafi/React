import React, { Component } from 'react'
import { Fragment } from 'react'
import {Card, Col, Container, Row } from 'react-bootstrap'
import graphicsLogo from '../../asset/image/graphics.svg'
import webLogo from '../../asset/image/web.svg'
import mobileLogo from '../../asset/image/mobile.svg'
import Restclient from '../../RestApi/Restclient'
import AppUrl from '../../RestApi/AppUrl'


export default class Services extends Component {

  constructor(){
    super();
    this.state = {
      myData:[]
    }
  }
  
componentDidMount(){
    
  Restclient.GetRequest(AppUrl.Services).then(result => {

      this.setState({myData:result});
  })


}

  render() {
  
         
    const myList = this.state.myData;
  
    const myView = myList.map((myList) => {
       return <Col lg={4} md={6} sm={12}>
         <div className="serviceCard text-center">
           <img src={myList.service_logo} />
           <h2 className="serviceName">{myList.service_name}</h2>
           <p className="serviceDesc">{myList.service_desc}</p>
        </div>

       </Col>
  
      
    })
  
    
    return (
      <Fragment>
            <Container className="text-center">
                <h1 className="servicesMainTitle">My Services</h1>
                <Row>
                {myView}
              </Row>
          </Container>
      </Fragment>
    )
  }
}
