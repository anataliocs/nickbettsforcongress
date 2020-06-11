/**
 * Light Layout component
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.scss"


export default class LightLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let className = "site-container"

    return (
      <div className={className} ref={this.siteContainer} id="page-top">

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
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
