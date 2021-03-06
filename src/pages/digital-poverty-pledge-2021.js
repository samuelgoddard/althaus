import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import ContactForm from "../components/contactForm"
import Footer from "../components/footer"
import Lightbox from "../components/lightbox"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Arrow from "../images/arrow.inline.svg";
import Img from "gatsby-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealLeft, BlockRevealLeft, RevealRight, GradientRevealLeft, GradientRevealRight, ImageReveal, ImageParallax } from "../components/revealHelpers"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const transition = { duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }

const fade = {
	initial: { opacity: 0 },
	enter: { opacity: 1, transition },
	exit: {
		opacity: 0,
		transition: { duration: 0.5, ...transition }
	}
}

class DigitalPovertyPledge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formToggle: false,
    }

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm = () => {
    this.setState({
      formToggle: !this.state.formToggle
    });
  }
  render () {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
      },
    };
    return (
      <>
        <SEO
          titleOverride={this.props.data.datoCmsDigitalPovertyPledge.metaTags && this.props.data.datoCmsDigitalPovertyPledge.metaTags.title ? this.props.data.datoCmsDigitalPovertyPledge.metaTags.title : this.props.data.datoCmsDigitalPovertyPledge.title}
          descriptionOverride={this.props.data.datoCmsDigitalPovertyPledge.metaTags && this.props.data.datoCmsDigitalPovertyPledge.metaTags.description ? this.props.data.datoCmsDigitalPovertyPledge.metaTags.description : null}
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsDigitalPovertyPledge.metaTags && this.props.data.datoCmsDigitalPovertyPledge.metaTags.image ? this.props.data.datoCmsDigitalPovertyPledge.metaTags.image.url : null}
        />

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade}>
            <section>
              <div className="absolute top-0 left-0 right-0 z-30">
                <div>
                  <Header color="black" />
                </div>
              </div>
              
              {/* Hero */}

              <div className="overflow-hidden">
                <div className="bg-white pt-32 pb-24 md:pb-64 2xl:pb-48 md:pt-48 xl:pt-48 relative">
                  <div className="container lg:px-32 relative">
                    <div className="flex flex-wrap items-center relative">
                      <div className="w-full md:w-8/12 xl:w-7/12 z-20 mb-8 md:mb-0 md:absolute top-0 left-0 bottom-0 flex flex-wrap">
                        <div className="my-auto">
                          <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-pink mb-6 md:mb-8 md:max-w-md xl:max-w-xl">{ this.props.data.datoCmsDigitalPovertyPledge.heroHeading }</h1>

                          { this.props.data.datoCmsDigitalPovertyPledge.heroList && (
                            <div dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsDigitalPovertyPledge.heroList }} className="content-lists pl-2 mb-6 md:mb-8 text-lg"></div>
                          )}

                          <div className="w-full pl-2">
                            <AnchorLink to={`/digital-poverty-pledge-2021/#content`} title="Discover More" className="text-md text-purple font-semibold uppercase flex flex-wrap items-center btn-arrow">
                              <span className="block">Discover More</span>
                              <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                            </AnchorLink>
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:w-7/12 relative ml-auto pt-10 md:pt-12">
                        <GradientRevealRight>
                        </GradientRevealRight>
                        
                        { this.props.data.datoCmsDigitalPovertyPledge.youtubeVideoId ? (
                          <Lightbox title={this.props.data.datoCmsDigitalPovertyPledge.heroHeading} videoId={this.props.data.datoCmsDigitalPovertyPledge.youtubeVideoId} thumbnail={
                            <div className="relative group">
                              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex flex-wrap justify-center items-center z-20">
                                <svg className="block w-24 h-24 transition duration-300 ease-in-out group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><g data-name="Group 2662"><path data-name="Polygon 10" d="M68 47.5L36 66V29z" fill="#ef4362"/><g data-name="Ellipse 5" fill="none" stroke="#ef4362" strokeWidth="4"><circle cx="48" cy="48" r="48" stroke="none"/><circle cx="48" cy="48" r="46"/></g></g></svg>
                              </div>
                              <Img fluid={ this.props.data.datoCmsDigitalPovertyPledge.heroImage.fluid } className="relative z-10 pb-0 -mb-12" />
                            </div>
                          } />
                        ) : (
                          <Img fluid={ this.props.data.datoCmsDigitalPovertyPledge.heroImage.fluid } className="relative z-10 pb-0 -mb-12" />
                        )}

                        {/* <Lightbox title={"test"} videoId={"LEbyVZs54Ho"} /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="overflow-hidden">
                <div className="bg-white pt-32 md:pt-48 relative">
                  <div className="bg-pink pb-16 md:pb-40 lg:pb-32 xl:pb-56 2xl:pb-32 mt-12 md:mt-16 xl:mt-20">
                    <div className="container lg:px-32 relative">
                      <div className="flex flex-wrap items-center relative">
                        <div className="w-full md:w-6/12 relative mr-auto pt-10 md:pt-12 md:pr-12 -mt-16 md:-mt-20 xl:-mt-24">
                          <GradientRevealLeft>
                          </GradientRevealLeft>
                          
                          { this.props.data.datoCmsDigitalPovertyPledge.youtubeVideoId ? (
                            <Lightbox title={this.props.data.datoCmsDigitalPovertyPledge.heroHeading} videoId={this.props.data.datoCmsDigitalPovertyPledge.youtubeVideoId} thumbnail={
                              <div className="relative group ">
                                <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex flex-wrap justify-center items-center z-20">
                                  <svg className="block w-24 h-24 transition duration-300 ease-in-out group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><g data-name="Group 2662"><path data-name="Polygon 10" d="M68 47.5L36 66V29z" fill="#ef4362"/><g data-name="Ellipse 5" fill="none" stroke="#ef4362" strokeWidth="4"><circle cx="48" cy="48" r="48" stroke="none"/><circle cx="48" cy="48" r="46"/></g></g></svg>
                                </div>
                                <Img fluid={ this.props.data.datoCmsDigitalPovertyPledge.heroImage.fluid } className="relative z-10 pb-0 -mb-12" />
                              </div>
                            } />
                          ) : (
                            <Img fluid={ this.props.data.datoCmsDigitalPovertyPledge.heroImage.fluid } className="relative z-10 pb-0 -mb-12" />
                          )}

                        </div>

                        <div className="w-full md:w-6/12 xl:w-6/12 z-20 mb-8 md:mb-0 md:absolute top-0 right-0 bottom-0 flex flex-wrap mt-20 md:mt-0">
                          <div className="my-auto">
                            <h1 className="text-5xl md:text-5xl xl:text-7xl font-medium text-purple md:mt-4 xl:mt-6">{ this.props.data.datoCmsDigitalPovertyPledge.heroHeading }</h1>

                            <div className="w-full">
                              <AnchorLink to={`/digital-poverty-pledge-2021/#content`} title="Discover More" className="text-md text-purple font-semibold uppercase flex flex-wrap items-center btn-arrow">
                                <span className="block">Discover More</span>
                                <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                              </AnchorLink>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap mt-0 md:mt-24">
                          <div className="w-full md:w-1/2 xl:w-1/4">
                            <span className="text-lg">Impactful Digital Skills</span>
                          </div>
                          <div className="w-full md:w-1/2 xl:w-1/4">
                            <span className="text-lg">Impactful Digital Skills</span>
                          </div>
                          <div className="w-full md:w-1/2 xl:w-1/4">
                            <span className="text-lg">Impactful Digital Skills</span>
                          </div>
                          <div className="w-full md:w-1/2 xl:w-1/4">
                            <span className="text-lg">Impactful Digital Skills</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </section>

            <section className="bg-white">
              <div className="overflow-hidden">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right scroll-text--purple text-right text-transparent leading-none block">{this.props.data.datoCmsDigitalPovertyPledge.heroScrollingText}</span>
                </RevealRight>
              </div>
            </section>

            <section className="mb-12 md:mb-8 xl:mb-12 bg-purple text-white py-12 md:py-20 xl:py-32 -mt-6 md:-mt-8 xl:-mt-12" id="content">
              <div className="container relative">
                <div className="w-full lg:w-7/12 mx-auto content">
                  <div>
                    { this.props.data.datoCmsDigitalPovertyPledge.introText && (
                      <div className="w-full">

                        <div dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsDigitalPovertyPledge.introText }} className="content content-lists"></div>
                        
                      </div>
                    )}
                  </div>
                  
                  {/* <div className="mt-16 md:mt-16 xl:mt-20">
                    <h3 className="text-center mb-0 pb-0">In partnership with</h3>
                    <div className="flex flex-wrap justify-center">
                      <span className="block w-48 xl:w-56">
                        <Img fluid={this.props.data.d2n2.childImageSharp.fluid } className="w-full p-0 block" />
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            </section>

            <section className="mb-12 md:mb-8 xl:mb-12 bg-white text-purple py-12 md:py-20 xl:py-32 -mt-6 md:-mt-8 xl:-mt-12" id="content">
              <div className="container relative">
                <div className="w-full lg:w-7/12 mx-auto content">
                  <div>
                    { this.props.data.datoCmsDigitalPovertyPledge.content && (
                      <div className="w-full">
                        { this.props.data.datoCmsDigitalPovertyPledge.introHeading && (
                          <h2 className="pb-6 mb-0">{ this.props.data.datoCmsDigitalPovertyPledge.introHeading }</h2>
                        )}
                        <span className="w-20 h-2 bg-pink block mb-8"></span>

                        <div dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsDigitalPovertyPledge.content }} className="content content-lists mb-8 md:mb-12"></div>
                        
                        { this.props.data.datoCmsDigitalPovertyPledge.pledgeText && (
                          <div dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsDigitalPovertyPledge.pledgeText }} className="content content-lists bg-pink text-white p-8 block">
                        </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* <div className="mt-16 md:mt-16 xl:mt-20">
                    <h3 className="text-center mb-0 pb-0">In partnership with</h3>
                    <div className="flex flex-wrap justify-center">
                      <span className="block w-48 xl:w-56">
                        <Img fluid={this.props.data.d2n2.childImageSharp.fluid } className="w-full p-0 block" />
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            </section>

            
            {/* Tabbed Content */}
            {/* <section>
              <div className="bg-white relative z-10 pb-20 md:pb-24">
                <div className="container lg:px-32 relative z-20">

                    <Tabs selectedTabClassName="md:border-t-2 md:border-l-2 md:border-r-2 border-b-0-forced text-pink">
                      <TabList className="flex flex-wrap md:pt-24 xl:pt-24 mb-8 md:mb-16 xl:mb-24">
                        <Tab className="w-full md:w-1/2 border-b-2 border-pink md:text-center py-4 md:p-6 block text-lg md:text-2xl xl:text-3xl font-semibold bg-white cursor-pointer">Candidates.</Tab>
                        <Tab className="w-full md:w-1/2 border-b-2 border-pink md:text-center py-4 md:p-6 block text-lg md:text-2xl xl:text-3xl font-semibold bg-white cursor-pointer">Businesses.</Tab>
                      </TabList>

                      <TabPanel>
                        <div className="w-full md:w-9/12 xl:w-8/12 mx-auto content">
                          <div className="mb-12 md:mb-16 xl:mb-20">
                            <div className="content content--fancy mb-8 md:mb-16" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsDigitalPovertyPledge.candidatesText}}></div>

                            {this.props.data.datoCmsDigitalPovertyPledge.candidatesWhatsInItForYou && (
                              <div>
                                <h3>What's In It For You?</h3>
                                <div className="content content--fancy content-lists mb-8 md:mb-16" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsDigitalPovertyPledge.candidatesWhatsInItForYou }}></div>
                              </div>
                            )}

                            <div className="mx-auto text-center">
                              <Link to="/contact" className="btn btn--border text-purple">
                                <span className="btn__inner">Get in touch</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="w-full md:w-9/12 xl:w-8/12 mx-auto content">
                          <div className="mb-12 md:mb-16 xl:mb-20">
                            <div className="content content--fancy mb-8 md:mb-16" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsDigitalPovertyPledge.businessesText }}></div>

                            {this.props.data.datoCmsDigitalPovertyPledge.businessesWhatsInItForYou && (
                              <div>
                                <h3>What's In It For You?</h3>
                                <div className="content content--fancy content-lists mb-8 md:mb-16" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsDigitalPovertyPledge.businessesWhatsInItForYou }}></div>
                              </div>
                            )}

                            <div className="mx-auto text-center">
                              <Link to="/contact" className="btn btn--border text-purple">
                                <span className="btn__inner">Get in touch</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </Tabs>
                </div>
              </div>
            </section> */}


            {/* Programme Options */}
            {/* <section>
              <div className="bg-purple relative z-10 py-12 md:py-20 xl:py-32">
                <div className="container lg:px-32 relative z-20">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-11/12 md:mx-auto content text-white overflow-hidden">
                      <h2 className="h1 mb-2 text-center">Programme Options</h2>
                      {this.props.data.datoCmsDigitalPovertyPledge.programmeOptionsSubheading && (
                        <span className="block text-pink text-center text-lg">{ this.props.data.datoCmsDigitalPovertyPledge.programmeOptionsSubheading }</span>
                      )}

                      <div className="flex justify-center mt-12 md:mt-16 xl:mt-20">
                        <div className="flex flex-wrap md:-mx-12 max-w-5xl mx-auto">
                          {this.props.data.datoCmsDigitalPovertyPledge.programmeOptionsDigital && (
                            <div className="w-full md:w-1/2 md:px-12 mb-12 md:mb-0">
                              <h3>Digital</h3>
                              <span className="w-20 h-1 bg-pink block mb-8"></span>
                              <div className="content content-lists" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsDigitalPovertyPledge.programmeOptionsDigital }}></div>
                            </div>
                          )}
                          {this.props.data.datoCmsDigitalPovertyPledge.programmeOptionsItSolutions && (
                            <div className="w-full md:w-1/2 md:px-12">
                              <h3>IT Solutions</h3>
                              <span className="w-20 h-1 bg-pink block mb-8"></span>
                              <div className="content content-lists" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsDigitalPovertyPledge.programmeOptionsItSolutions }}></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            {/* Application Form */}
            <section className="bg-purple pb-12 md:pb-8 lg:pb-8 xl:pb-24">
              <div className="overflow-hidden relative z-20">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none block">Application</span>
                </RevealRight>
              </div>

              <div className="w-full mb-8 md:mb-0 relative -mt-12 md:-mt-20 xl:-mt-40">
                <div className="relative">
                  <div className="pt-8 md:pt-16 xl:pt-24">
                    <BlockRevealLeft>
                    </BlockRevealLeft>
                  </div>

                  <div className="container lg:px-32 relative z-20">
                    <div className={ this.state.formToggle ? `bg-pink p-8 md:p-16 xl:p-24 transition duration-300 ease-in-out` : `bg-purple-light p-8 md:p-16 xl:p-24 duration-300 ease-in-out`}>
                      <div className="mb-8 md:mb-12 text-center">
                        <span className="text-white font-semibold block text-2xl md:text-3xl mb-5 leading-extra-tight">Want to know more information about our courses?</span>
                        <span className="text-white block text-sm md:text-base lg:text-lg xl:text-xl">Fill in the form below and we will be in touch</span>
                      </div>

                      <Tabs selectedTabClassName="border-t-2 border-l-2 border-r-2 border-b-2 text-white border-white font-semibold">
                        <div className="flex flex-wrap items-center text-white justify-center mb-8">
                          <span className="block mr-2">Are you a:</span>
                          <TabList className="flex flex-wrap">
                            <Tab className="border-t-2 border-l-2 border-r-2 border-b-2 border-transparent p-1 px-3 cursor-pointer uppercase" onClick={this.toggleForm}>Learner</Tab>
                            <Tab className="border-t-2 border-l-2 border-r-2 border-b-2 border-transparent p-1 px-3 cursor-pointer uppercase" onClick={this.toggleForm}>Employer</Tab>
                          </TabList>
                        </div>

                        <TabPanel>
                          <ContactForm netlifyName="Contact Form (Learner)" />
                        </TabPanel>
                        <TabPanel>
                          <ContactForm netlifyName="Contact Form (Employer)" />
                        </TabPanel>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </motion.div>
        </motion.div>
      </>
    )
  }
}

export default DigitalPovertyPledge

export const query = graphql`
  query {
    d2n2: file(relativePath: { eq: "d2n2.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dfe: file(relativePath: { eq: "dfe.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    datoCmsDigitalPovertyPledge {
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      content
      heroHeading
      introHeading
      introText
      heroImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      heroList
      heroScrollingText
      pledgeText
    }
  }
`