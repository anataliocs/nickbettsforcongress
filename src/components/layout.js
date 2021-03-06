/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.scss"
import {Link} from "@reach/router";
import {Nav} from "react-bootstrap";

const getScrollNode = (element) => {
  return element.ownerDocument.scrollingElement || element.ownerDocument.documentElement
}

const isScrolled = (element) => {
  const scrollNode = getScrollNode(element)
  return scrollNode.scrollTop > 0
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.siteContainer = React.createRef()
    this.state = {
      scrolled: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  render() {
    let className = "site-container"
    if (this.props.className) className += ` ${this.props.className}`
    if (this.state.scrolled) className += " navbar-scrolled"

    return (
      <div
        className={className}
        ref={this.siteContainer}
        id="page-top">
        <Header/>
        <main>{this.props.children}</main>
        <footer className="bg-light py-5">
          <div className="container">
            <div className="small text-center text-muted">Copyright &copy;
              2020 - NICHOLAS BETTS FOR CONGRESS 2020 CAMPAIGN<br/><br/>
              6th Congressional District of Virginia, United States House of Representatives
            </div>

            <br/>
            <div className="text-center text-muted">
              <h2>
                <a href="https://twitter.com/VoteForBetts" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter-square"></i></a>&nbsp;
                <a href="https://www.facebook.com/NicholasBettsCongress/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-square"></i></a>
              </h2>
            </div>

            <div className="text-center well">
                <strong>Paid for by NICHOLAS BETTS FOR CONGRESS</strong>
            </div><br/>

            <div className="text-center well">
              <a href="/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <Nav.Link href="/news/" target="_blank">News</Nav.Link>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}