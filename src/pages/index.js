import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import {Nav} from "react-bootstrap";

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
        this.state = {
            modalShow: false,
            modalCurrent: 0
        }
        this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
        this.setModal = this.setModal.bind(this);
    }

    handlePortfolioClick(index, e) {
        e.preventDefault();
        this.setModal(true, index);
    }

    setModal(isShown, current) {
        this.setState({
            modalShow: isShown,
            modalCurrent: current
        });
    }

    render() {
        return (
            <Layout>
                <SEO title="NICHOLAS BETTS FOR CONGRESS 2020 CAMPAIGN
             6th Congressional District of Virginia, United States House of Representatives"/>

                <section className="page-section bg-secondary" id="donate">
                    <div className="container text-center">

                        <i className="fas fa-3x fa-donate text-white-75"></i>
                        <h2 className="text-white mb-4">Donate to our Campaign!</h2>
                        <hr className="divider my-4"/>

                        <div className="row justify-content-center">

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="text-white-75 mb-0">
                                    <h3>Support NICHOLAS BETTS for Congress in VA-6:</h3>
                                    <br/>
                                </div>

                                <div className="text-muted">
                                    <i>
                                        Click an option below to get started with your online donation through ActBlue.
                                        Your donation will help support our campaign.
                                    </i>
                                </div>
                                <br/>

                                <div className="btn-group-lg">

                                    <a className="btn btn-primary btn-xl"
                                       href="https://secure.actblue.com/donate/nicholas-betts-for-congress-1?amount=25&refcode=website_donate_25&express_lane=true"
                                       target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-donate"/>&nbsp; $25</a>

                                    <a className="btn btn-primary btn-xl"
                                       href="https://secure.actblue.com/donate/nicholas-betts-for-congress-1?amount=100&refcode=website_donate_100&express_lane=true"
                                       target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-donate"/>&nbsp; $100</a>

                                    <a className="btn btn-primary btn-xl"
                                       href="https://secure.actblue.com/donate/nicholas-betts-for-congress-1?amount=250&refcode=website_donate_250&express_lane=true"
                                       target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-donate"/>&nbsp; $250</a>

                                    <a className="btn btn-light btn-xl"
                                       href="https://secure.actblue.com/donate/nicholas-betts-for-congress-1"
                                       target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-donate"/>&nbsp; Donate</a>
                                </div>
                                <br/>
                                <hr className="divider my-4"/>

                                <div className="text-white-75">
                                    <br/>
                                    If you would like to donate via U.S. Mail, please make any checks payable to:
                                    <br/>
                                    <h6>
                                        <strong>NICHOLAS BETTS FOR CONGRESS</strong>
                                    </h6>
                                </div>

                                <br/><br/>
                                <div className="text-white-75">
                                    Please make sure to include your Name, Address, Employer, and Occupation with any
                                    donations for Federal Election Commission and Campaign Finance reporting purposes.

                                    Before donating make sure that you comply with all Federal, State, and Local Laws
                                    and Regulations.
                                </div>
                                <br/>

                                <hr className="divider my-4"/>


                                <div className="text-white-75">
                                    Please send donations to <strong>NICHOLAS BETTS FOR CONGRESS</strong>:
                                    <br/>
                                </div>

                                <br/>
                                <div className="text-white">
                                    <i className="far fa-2x fa-envelope"></i><br/>
                                    P.O. Box 614
                                    Lexington, Virginia 24450
                                </div>

                                <br/>

                                <hr className="divider my-4"/>

                                <i className="fas fa-2x fa-hands-helping text-primary"></i>

                                <div className="text-white">
                                    <a href="https://forms.gle/nvJy2TmeHPYp88Zm8" target="_blank"
                                       rel="noopener noreferrer">
                                        Volunteer for our Campaign!</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                        </div>
                        <hr className="divider my-4"/>

                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <p className="text-primary">
                                    <strong>The United States of America was founded on the principles of
                                        Freedom, including rights to life, liberty, and the pursuit of
                                        happiness.</strong>
                                </p>

                                <p className="font-weight-light mb-5">

                                    In the 21st Century, we must make sure that we continue to live up to these
                                    principles.
                                    I will reach across party lines to search for bipartisan solutions that benefit all
                                    Americans.
                                </p>

                                <p className="font-weight-light text-secondary mb-5">
                                    6th Congressional District of Virginia, United States House of Representatives
                                </p>

                                <i className="fas fa-2x text-secondary fa-flag-usa"/>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="page-section bg-secondary" id="biography">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-0">Biography</h2>
                                <hr className="divider my-4"/>
                                <p className="text-white-50 mb-4">

                                    <div className="row justify-content-center">
                                        <div className="col-lg-10">

                                            <h5>Education</h5>
                                            <br/><br/>


                                            <p>B.A., in History with a minor in Political Science, Virginia Commonwealth
                                                University (2011)</p>
                                            <p>M.A., in History, Virginia Commonwealth University (2013)</p>
                                            <p>J.D., Washington and Lee University School of Law (2019)</p>


                                        </div>
                                    </div>
                                    <br/>


                                    <br/>
                                    <p>
                                        Nicholas Betts has lived in Virginia virtually his entire adult life. He moved
                                        to Virginia when he was 18
                                        years old to attend Virginia Commonwealth University, where he met his wife,
                                        Lindsey Betts, during
                                        their Freshman year of college in 2008. Their relationship continued after
                                        college, they were married in
                                        2015, and they currently live in Lexington, Virginia.
                                    </p>

                                    <br/>
                                    <p>
                                        Nicholas has worked in construction and landscaping,
                                        as a graduate teaching assistant, a substitute teacher, a contract manager for a
                                        small family business,
                                        and now as a law clerk in Roanoke, Virginia. He knows what it is like to work
                                        hard and to achieve goals in
                                        the face of adversity.
                                        <br/>
                                        <hr className="divider my-4"/>
                                        <i className="far fa-2x fa-handshake"></i>
                                        <br/>
                                        <p>
                                            <h5>
                                                If elected to Congress to represent the 6th District of Virginia,
                                                Nicholas
                                                Betts will
                                                fight hard for Freedom, and he will go to Washington to work, not to
                                                play
                                                politics.
                                            </h5>
                                        </p>
                                    </p>
                                </p>

                                <p className="text-white-50 mb-4">
                                    <hr className="divider my-4"/>
                                    <i className="fas fa-2x fa-pen-nib"></i><br/>
                                    <h5>Endorsements</h5>

                                    <i className="fas fa-check-square"></i> &nbsp;
                                    <a href="https://www.senatordeeds.com/" target="_blank" rel="noopener noreferrer">
                                        Senator Creigh Deeds(VA-25) </a>

                                    <br/>
                                    <i className="fas fa-check-square"></i> &nbsp;
                                    <a href="https://www.vayd.org/" target="_blank" rel="noopener noreferrer">
                                        Virginia Young Democrats </a>

                                </p>

                                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#platform"
                                   onClick={Scroller.handleAnchorScroll}>
                                    <i className="fas fa-list"></i>&nbsp; My Platform
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section" id="platform">
                    <div className="container">
                        <h2 className="text-center mt-0 text-secondary">Platform</h2>
                        <hr className="divider my-4"/>
                        <div className="row justify-content-center">

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="mt-5">
                                    <i className="fas fa-4x fa-notes-medical text-secondary mb-4"></i>
                                    <h3 className="h4 mb-2 text-primary">Healthcare Reform</h3>
                                    <p className="text-muted mb-0">
                                        We must make sure that all Americans have access to a public healthcare option,
                                        but Americans who want to keep their private health insurance should be able to
                                        do so.
                                        Establishing a low-cost public healthcare option that is accessible to all
                                        Americans will cause
                                        private health insurance providers to lower their prices to compete.
                                        Such a reduction in overall prices of healthcare ensures access to essential
                                        care for all Americans,
                                        regardless of their socioeconomic status.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="mt-5">
                                    <i className="fas fa-4x fa-graduation-cap text-secondary"></i>
                                    <h3 className="h4 mb-2 text-primary">Education Reform </h3>
                                    <p className="text-muted mb-0">
                                        We need to increase the Federal Government’s Investment in education.
                                        Funding education is crucial to America maintaining its position as the world
                                        leader in the 21st Century and beyond. Education affects everything from
                                        Economic
                                        Growth to National Defense. We need to invest in an expansion of public early
                                        childhood education programs and we should increase investments in public K-12
                                        education to increase teachers‘ salaries, as well as to hire more teachers to
                                        decrease classroom sizes. We should increase Federal program funding in order
                                        to increase program accessibility for Americans who want to pursue career and
                                        technical education. Additionally, higher education should be made affordable
                                        and accessible for everyone who chooses to pursue it.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="mt-5">
                                    <i className="fas fa-4x fa-graduation-cap text-secondary mb-4"></i>
                                    <h3 className="h4 mb-2 text-primary">Reducing Student Loan Debt </h3>
                                    <p className="text-muted mb-0">
                                        Americans have approximately $1.6 Trillion in student loan debt, which inhibits
                                        economic growth.
                                        Federal student loans should be offered at 0% interest rates because the Federal
                                        Government should not profit
                                        from student loans. I want to fix the Public Service Loan Forgiveness Program,
                                        so applicants who have made a
                                        good faith effort to meet the program requirements have their student loan debt
                                        forgiven as promised.
                                        I support changing bankruptcy laws, so that student loan debt is treated like
                                        any other type of debt.
                                        Finally, I support changing the tax code, so after paying for the required
                                        amount of time, students have their
                                        student debt forgiven tax free.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="mt-5">
                                    <i className="fas fa-4x fa-tree text-secondary mb-4"></i>
                                    <h3 className="h4 mb-2 text-primary">Tax Credits for Clean Energy </h3>
                                    <p className="text-muted mb-0">
                                        Climate Change is a real concern in America and across the World.
                                        The United States should be the world leader in clean energy technology
                                        development in the
                                        21st Century. This can be accomplished by giving tax credits for developing
                                        solar and wind
                                        energy sources. This will help create jobs in clean energy, create economic
                                        growth, and
                                        help protect the environment. We cannot afford to fall behind other countries in
                                        clean
                                        energy development if we want to remain the world’s leading economy in the 21st
                                        Century and
                                        beyond.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="mt-5">
                                    <i className="fas fa-4x fa-wifi text-secondary mb-4"></i>
                                    <h3 className="h4 mb-2 text-primary">Internet Access </h3>
                                    <p className="text-muted mb-0">
                                        All Americans should be able to access the internet from their home.
                                        Internet access is crucial to education, work, healthcare, civic engagement, and
                                        nearly
                                        every area of life today. The Federal Government should partner with States and
                                        Localities
                                        to expand internet access.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="mt-5">
                                    <i className="fas fa-4x fa-info text-secondary mb-4"></i>
                                    <h3 className="h4 mb-2 text-primary">Second Amendment Rights and Safety
                                        Solutions </h3>
                                    <p className="text-muted mb-0">
                                        I support the rights of all law-abiding citizens to own firearms, including
                                        semi-automatic
                                        firearms. I also support passing legislation for universal background checks at
                                        the
                                        Federal level. Additionally, I support a 1% Federal Sales Tax on Ammunition, so
                                        that the
                                        revenue raised can fund violence prevention programs.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="mt-5">
                                    <i className="fas fa-4x fa-rainbow text-secondary"></i>
                                    <h3 className="h4 mb-2 text-primary">Federal Laws to Protect the LGBTQ+
                                        Community </h3>
                                    <p className="text-muted mb-0">
                                        All Americans should be free to live their lives without being discriminated
                                        against,
                                        regardless of who they love or how they identify. We must pass laws which
                                        explicitly prohibit
                                        discrimination based on sexual orientation or gender identity.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="mt-5">
                                    <i className="fas fa-4x fa-first-aid text-secondary mb-4"></i>
                                    <h3 className="h4 mb-2 text-primary">Federal Decriminalization on Marijuana </h3>
                                    <p className="text-muted mb-0">
                                        The Federal Government should decriminalize marijuana and allow States to
                                        legalize it.
                                        The Federal Government is missing out on a huge source of tax revenue and
                                        wasting resources
                                        enforcing the prohibition on marijuana.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="mt-5">
                                    <i className="fas fa-4x fa-flag-usa text-secondary mb-4"></i>
                                    <h3 className="h4 mb-2 text-primary">Supporting Veterans </h3>
                                    <p className="text-muted mb-0">
                                        We should increase Federal grants to help veterans start businesses.
                                        I want to ensure that all veterans in the private sector are aware of this
                                        potential source
                                        of business funding and that these grants are easily accessible to the men and
                                        women who
                                        served our Country. Additionally, we must make sure that veterans have access to
                                        the
                                        healthcare resources they need to thrive.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="mt-5">
                                    <i className="fas fa-4x fa-school text-secondary mb-4"></i>
                                    <h3 className="h4 mb-2 text-primary">Police Reform </h3>
                                    <p className="text-muted mb-0">
                                        I believe that properly training police officers can save lives. Police departments
                                        should review their training programs and make sure that police officers have extensive
                                        training on not using unnecessary force and how to prevent or stop other police officers
                                        from using it. Better training will not address all situations, but this is an area where
                                        positive changes can be a step toward helping to build stronger and safer communities.
                                        The Federal government should develop a training program that can be utilized by local
                                        police departments. There should be increased transparency through federally mandated body
                                        camera usage and reporting of statistics regarding police department use of force.
                                        I support a national database of police misconduct.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="mt-5">
                                    <i className="fas fa-4x fa-clinic-medical text-secondary mb-4"></i>
                                    <h3 className="h4 mb-2 text-primary">Pro Choice </h3>
                                    <p className="text-muted mb-0">
                                        The government has no business regulating women’s bodies, women should have
                                        the right to choose. I believe in our Constitution and I do not believe elected
                                        officials should impose their religious beliefs on others. I am Catholic and
                                        have my own personal beliefs, but I respect the 1st Amendment, I support
                                        Roe v. Wade, and I believe women have the right to make their own decisions.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6 text-center">

                                <div className="mt-5">
                                    <i className="fas fa-4x fa-equals text-secondary mb-4"></i>
                                    <h3 className="h4 mb-2 text-primary">ERA </h3>
                                    <p className="text-muted mb-0">
                                        I support the Equal Rights Amendment. Everyone deserves the same respect,
                                        the same rights, and the same pay for the same work.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="mt-0 text-secondary">Have Questions, Comments or Concerns?</h2>
                                <hr className="divider my-4"/>
                                <p className="text-muted mb-5">Please reach out!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                                <i className="fas fa-phone fa-3x mb-3 text-secondary"></i>
                                <div>+1 (804) 709-8331</div>
                            </div>
                            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                                <i className="fas fa-envelope fa-3x mb-3 text-secondary"></i>
                                <a className="d-block"
                                   href="mailto:nicholas.betts@bettsforcongress.com">nicholas.betts@bettsforcongress.com</a>
                            </div>
                            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                                <i className="fas fa-hands-helping fa-3x mb-3 text-secondary"></i>
                                <a className="d-block"
                                   href="https://forms.gle/7meLEw5DPm8trdAp7" target="_blank" rel="noopener noreferrer">
                                    Volunteer!</a>
                            </div>
                        </div><br/>

                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <br/>
                                <hr className="divider my-4"/>
                                <p className="text-muted mb-5">Read up on recent News about the Campaign</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 ml-auto text-center mb-5 mb-lg-0">
                                <i className="fas fa-newspaper fa-3x mb-3 text-secondary"></i>
                                <Nav.Link href="/news/" target="_blank">Media Coverage</Nav.Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
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
