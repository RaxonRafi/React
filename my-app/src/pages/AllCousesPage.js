import React, { Component, Fragment } from 'react'
import AllCourses from '../components/AllCourses/AllCourses'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavbar from '../components/TopNavbar/TopNavbar'

export default class AllCousesPage extends Component {

  componentDidMount() {
    window.scroll(0, 0)
  }
  render() {
    return (
        <Fragment>
         <TopNavbar title="Courses"></TopNavbar>
            <PageTop pagetitle="All Courses"></PageTop>
            <AllCourses></AllCourses>
            <Footer></Footer>


        </Fragment>
    )
  }
}
