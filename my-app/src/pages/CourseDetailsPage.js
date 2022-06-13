import React, { Component, Fragment } from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'

export default class CourseDetailsPage extends Component {

  componentDidMount() {
    window.scroll(0, 0)
  }
  render() {
    return (
        <Fragment>
            <TopNavbar title="Course"></TopNavbar>
            <CourseDetails></CourseDetails>
            <Footer></Footer>
        </Fragment>
    )
  }
}
