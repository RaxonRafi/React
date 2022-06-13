import React, { Component, Fragment } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import AllCousesPage from '../pages/AllCousesPage'
import ContactPage from '../pages/ContactPage'
import CourseDetailsPage from '../pages/CourseDetailsPage'
import Homepage from '../pages/Homepage'
import ProjectDetailsPage from '../pages/ProjectDetailsPage'
import ProjectPage from '../pages/ProjectPage'
import RefundPolicyPage from '../pages/RefundPolicyPage'
import ServicePage from '../pages/ServicePage'
import TermsPage from '../pages/TermsPage'

export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>
          <Routes>
             <Route path="/" element={<Homepage/>}/>
              <Route path="/service" element={<ServicePage/>}/>
              <Route path="/courses" element={<AllCousesPage/>}/>
              <Route path="/portfolio" element={<ProjectPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/projectdetails" element={<ProjectDetailsPage/>}/>
              <Route path="/refundpolicy" element={<RefundPolicyPage/>}/>
              <Route path="/terms" element={<TermsPage/>}/>
              <Route path="/coursedetails" element={<CourseDetailsPage/>}/>

          </Routes>

        </Fragment>
    )
  }
}
