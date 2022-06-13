import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import Terms from '../components/Terms&conditions/Terms'
import TopNavbar from '../components/TopNavbar/TopNavbar'

export default class TermsPage  extends Component {

  componentDidMount() {
    window.scroll(0, 0)
  }
  render() {
    return (
        <Fragment>
            <TopNavbar title="Terms"></TopNavbar>
            <PageTop pagetitle="Terms & Conditions"></PageTop>
            <Terms></Terms>
            <Footer></Footer>
        </Fragment>
    )
  }
}
