import React from "react"
import {graphql} from "gatsby"

import SEO from "../components/seo"
import Container from "react-bootstrap/Container";
import LightLayout from "../components/lightlayout";

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <LightLayout>
                <SEO title="NICHOLAS BETTS FOR CONGRESS 2020 CAMPAIGN
             6th Congressional District of Virginia, United States House of Representatives"/>

                <section className="page-section bg-secondary" id="donate">
                    <div className="container text-center">

                        <i className="fas fa-3x fa-newspaper text-white-75"></i>
                        <h2 className="text-white mb-4">Media</h2>
                        <hr className="divider my-4"/>

                        <div className="row justify-content-center">

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="text-white-75 mb-0">
                                    <h3>News Coverage for NICHOLAS BETTS for Congress in VA-6</h3>
                                    <br/>
                                </div>

                                <br/>
                                <hr className="divider my-4"/>

                                <p className="font-weight-light mb-5">
                                    <a href="https://www.thenews-gazette.com/content/betts-oppose-cline"
                                       target="_blank" rel="noopener noreferrer">The News Gazette: Betts To Oppose Cline</a>
                                </p>

                                <p className="font-weight-light mb-5">
                                    <a href="https://www.roanoke.com/news/local/no-democrat-to-oppose-rep-morgan-griffith-but-one-emerges-for-rep-ben-cline/article_c9335e6f-5243-58df-8ede-25e91e3d6db0.html"
                                       target="_blank" rel="noopener noreferrer">Roanoke.com: No Democrat to oppose Rep. Morgan Griffith, but one emerges for Rep. Ben Cline</a>
                                </p>

                                <p className="font-weight-light mb-5">
                                    <a href="https://fincastleherald.com/betts-is-democratic-candidate-for-sixth-district-house-of-representatives-race/"
                                       target="_blank" rel="noopener noreferrer">Betts is Democratic candidate for Sixth District House of Representatives race</a>
                                </p>

                                <p className="font-weight-light mb-5">
                                    <a href="https://www.dnronline.com/news/cline-facing-two-challengers/article_30852cd6-647d-58ea-b153-885fae84c2bb.html"
                                       target="_blank" rel="noopener noreferrer">Cline Facing Two Challengers</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </LightLayout>
        )
    }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`