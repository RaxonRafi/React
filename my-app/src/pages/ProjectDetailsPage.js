import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import TopNavbar from '../components/TopNavbar/TopNavbar'

export default class ProjectDetailsPage extends Component {

  componentDidMount() {
    window.scroll(0, 0)
  }
  render() {
    return (
        <Fragment>
            <TopNavbar title="Project"></TopNavbar>
            <PageTop pagetitle="Project"></PageTop>
            <ProjectDetails></ProjectDetails>
            <Footer></Footer>
        </Fragment>
    )
  }
}
