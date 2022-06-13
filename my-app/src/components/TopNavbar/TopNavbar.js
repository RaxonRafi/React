import React, { Component,Fragment } from 'react'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import ColorLogo from '../../asset/image/logo.png'
import WhiteLogo from '../../asset/image/logo-white.png'
import { NavLink } from 'react-router-dom'

export default class TopNavbar extends Component {

    constructor(props){
            super();
            this.state={
              navBarTitle:"NavTitle",
              navBarLogo:[WhiteLogo],
              navVariant:"Dark",
              navBarback:"navBackground",
              navItem:"navItem",
              pageTitle:props.title
            }
       }
       onScroll=()=>{
          if(window.scrollY>100){
            this.setState({ navVariant:'light' ,navBarTitle: 'NavTitleScroll', navBarLogo: [ColorLogo], navBarback: 'navBackgroundScroll', navItem: 'navItemscroll'})
          }
          else if(window.scrollY<100){
            this.setState({
              navVariant: 'dark',navBarTitle: 'NavTitle', navBarLogo: [WhiteLogo], navBarback: 'navBackgroundScroll',navItem:'navItem'
})
          }

       }
       componentDidMount(){
         window.addEventListener('scroll',this.onScroll)
       }

  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
            <Navbar fixed="top" className={this.state.navBarback} collapseOnSelect expand="lg"variant={this.state.navVariant}>
                <Container>
            <Navbar.Brand className={this.state.navBarTitle}><NavLink to="/"><img src={this.state.navBarLogo} /></NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                           
                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee' }} className={this.state.navItem} to="/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee' }} className={this.state.navItem} to="/courses">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee' }} className={this.state.navItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee' }} className={this.state.navItem} to="/about">ABOUT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee' }} className={this.state.navItem} to="/contact">CONTACT</NavLink></Nav.Link>
                                  
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </Fragment>
    )
  }
}
