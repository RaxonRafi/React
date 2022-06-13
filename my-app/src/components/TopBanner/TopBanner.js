import React, { Component } from 'react'
import { Fragment } from 'react'
import axios from 'axios'
import { Container,Row,Col,Button} from 'react-bootstrap'
import AppUrl from '../../RestApi/AppUrl'
import Restclient from '../../RestApi/Restclient'



export default class TopBanner extends Component {


  constructor(props){
    super(props);

    this.state={
        title: "",
        subtitle:""

    }
  }

componentDidMount(){

  Restclient.GetRequest(AppUrl.hometop).then(result=>{

    this.setState({ title: result[0]['home_title'], subtitle:result[0]['home_subtitle']})

  }).catch(error=>{
    this.setState({title:"data not found",subtitle:"data not found"})

  })
}



  render() {
    return (
       <Fragment>
      <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="topContent">
               <Row>
                <Col className="text-center">
                <h1 className="topTitle">{this.state.title}</h1>
                <h4 className="topSubTitle">{this.state.subtitle}</h4>
                <Button variant="primary">More Info</Button>
                </Col>
               </Row>
             </Container>
          </div>
      </Container>
       </Fragment>
    )
  }
}
