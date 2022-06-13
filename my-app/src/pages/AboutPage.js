import React, { Component, Fragment } from 'react'
import AboutDesc from '../components/AboutDesc/AboutDesc'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavbar from '../components/TopNavbar/TopNavbar'

export default class AboutPage extends Component {
  
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
        <Fragment>

        <TopNavbar title="About"></TopNavbar>
            <PageTop pagetitle="About Me"></PageTop>
            <AboutDesc></AboutDesc>
            <Footer></Footer>
        </Fragment>
    )
  }
}
