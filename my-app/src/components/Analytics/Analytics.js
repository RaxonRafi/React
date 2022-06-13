import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

export default class Analytics extends Component {

constructor(){
    super();
    this.state={

       data:[
           {Technology:'Java',Project:100},
           {Technology:'C',Project:20},
           {Technology:'PHP',Project:100},
           {Technology:'React',Project:60},
           {Technology:'Python',Project:20},
           {Technology:'Mysql',Project:90},
           {Technology:'Jquery',Project:80},
           {Technology:'Laravel',Project:90}
       ]


    }
}


  render() {
      var blue = "rgba(0,115,230,0.8)"
    return (
        <Fragment>
            <Container>
                <h1 className="text-center servicesMainTitle">Technologies Used</h1>
                <Row>
                    <Col style={{width:'50%', height:'300px'}} lg={6} md={12} sm={12}>
                        <ResponsiveContainer>
                            <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis dataKey="Technology"/>
                                <Tooltip/>
                                <Bar dataKey="Project" fill={blue}>

                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                               
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <p className="desc">
                            To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB.<br></br> 
                            Firebase database system is used where it is necessary to provide realtime data flow facilities. I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application.
                            <br></br> 
                            According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}
