import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import Portfolio from '../components/Portfolio/Portfolio'
import TopNavbar from '../components/TopNavbar/TopNavbar'

export default class ProjectPage extends Component {

  componentDidMount() {
    window.scroll(0, 0)
  }
  render() {
    return (
        <Fragment>
        <TopNavbar title="Protfolio"></TopNavbar>
            <PageTop pagetitle="All Projects"></PageTop>
            <Portfolio></Portfolio>
            <Footer></Footer>
        </Fragment>
    )
  }
}
