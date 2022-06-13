import React, { Component, Fragment } from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar'
import TopBanner from '../components/TopBanner/TopBanner'
import Services from '../components/Services/Services'
import Analytics from '../components/Analytics/Analytics'
import Summary from '../components/Summary/Summary'
import RecentProjects from '../components/RecentProjects/RecentProjects'
import Courses from '../components/Courses/Courses'
import Video from '../components/Video/Video'
import ClientReview from '../components/ClientReviews/ClientReview'
import Footer from '../components/Footer/Footer'


export default class Homepage extends Component {

  componentDidMount() {
    window.scroll(0, 0)
  }
  render() {
    return (
        <Fragment>
        <TopNavbar title="Home"></TopNavbar>
            <TopBanner></TopBanner>
            <Services></Services>
            <Analytics></Analytics>
            <Summary></Summary>
            <RecentProjects></RecentProjects>
            <Courses></Courses>
            <Video></Video>
            <ClientReview></ClientReview>
            <Footer></Footer>
        </Fragment>
    )
  }
}
