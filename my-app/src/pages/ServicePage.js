import React, { Component, Fragment } from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import Services from '../components/Services/Services'
import TopNavbar from '../components/TopNavbar/TopNavbar'

export default class ServicePage extends Component {

  componentDidMount() {
    window.scroll(0, 0)
  }
  render() {
    return (
        <Fragment>
            <TopNavbar title="Service"></TopNavbar>
            <PageTop pagetitle="Get My Service"></PageTop>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </Fragment>
    )
  }
}
