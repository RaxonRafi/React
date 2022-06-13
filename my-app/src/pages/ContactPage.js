import React, { Component, Fragment } from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavbar from '../components/TopNavbar/TopNavbar'

export default class  extends Component {

  componentDidMount() {
    window.scroll(0, 0)
  }
  render() {
    return (
        <Fragment>
            <TopNavbar title="Contact"></TopNavbar>
          <PageTop pagetitle="Contact Me"></PageTop>
          <Contact></Contact>
          <Footer></Footer>
        </Fragment>
    )
  }
}
