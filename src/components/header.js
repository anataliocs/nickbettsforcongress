import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={Scroller.handleAnchorScroll}>
              <i className="fas fa-flag-usa"/> NICHOLAS BETTS 2020</a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                           items={["bio", "platform", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#biography" onClick={Scroller.handleAnchorScroll}>Bio</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#platform" onClick={Scroller.handleAnchorScroll}>Platform</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>Contact</Nav.Link>
                  </li>

                  <li className="nav-item">
                    <Nav.Link href="/news/" target="_blank">News</Nav.Link>
                  </li>

                  <a className="btn btn-primary btn-lg js-scroll-trigger" href="#donate" onClick={Scroller.handleAnchorScroll}>
                    <i className="fas fa-donate"/>&nbsp; Donate</a>

                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">

                <br/>
                <h1 className="text-uppercase text-white font-weight-bold">Nicholas Betts For Congress 2020</h1>
                <hr className="divider my-4"/>
              </div>
              <div className="col-lg-8 align-self-baseline">

                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#biography" onClick={Scroller.handleAnchorScroll}>
                  <i className="fas fa-flag-usa"/>&nbsp; For Freedom</a>

              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
