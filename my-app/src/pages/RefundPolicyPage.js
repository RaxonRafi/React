import React, { Component, Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop'
import TopNavbar from '../components/TopNavbar/TopNavbar'
import RefundPolicy from '../components/RefundPolicy/RefundPolicy'
import Footer from '../components/Footer/Footer'

export default class RefundPolicyPage extends Component {

  componentDidMount() {
    window.scroll(0, 0)
  }
  render() {
    return (
        <Fragment>
            <TopNavbar title="Refund Policy"></TopNavbar>
            <PageTop pagetitle="Refund Policies"></PageTop>
            <RefundPolicy></RefundPolicy>
            <Footer></Footer>
        </Fragment>
    )
  }
}
