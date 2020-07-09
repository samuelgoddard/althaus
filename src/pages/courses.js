import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import ContactForm from "../components/contactForm"
import { Link } from "gatsby"
import Arrow from "../images/arrow.inline.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { motion } from "framer-motion"
import Img from "gatsby-image"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealLeft, RevealRight, GradientRevealLeft, GradientRevealRight, ImageReveal, BlockRevealLeft, ImageParallax } from "../components/revealHelpers"
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

class CoursesPage extends React.Component {
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
    return (
      <>
        <SEO
          titleOverride={this.props.data.datoCmsCoursesLanding.metaTags && this.props.data.datoCmsCoursesLanding.metaTags.title ? this.props.data.datoCmsCoursesLanding.metaTags.title : this.props.data.datoCmsCoursesLanding.title}
          descriptionOverride={this.props.data.datoCmsCoursesLanding.metaTags && this.props.data.datoCmsCoursesLanding.metaTags.description ? this.props.data.datoCmsCoursesLanding.metaTags.description : null}
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsCoursesLanding.metaTags && this.props.data.datoCmsCoursesLanding.metaTags.image ? this.props.data.datoCmsCoursesLanding.metaTags.image.url : null}
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
              <div className="bg-white pt-48 md:pt-56 xl:pt-64">
                <div className="gradient-ltr">
                  <div className="container lg:px-32 pb-12">
                    <div className="flex flex-wrap pb-0 ">
                      <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0">
                        <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-8 -mt-10">Courses</span>
                        <h1 className="text-5xl xl:text-6xl font-medium text-white mb-6 md:mb-8">{ this.props.data.datoCmsCoursesLanding.heroHeading }</h1>

                        <div className="w-full md:pb-12">
                          <Link to="/contact" className="text-md text-white font-semibold uppercase flex flex-wrap items-center btn-arrow">
                            <span className="block">Get in touch</span>
                            <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                          </Link>
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 lg:w-1/2 md:pl-5 self-end md:-mt-16">
                        <Img fluid={ this.props.data.datoCmsCoursesLanding.heroImage.fluid } className="w-full" />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center bg-white py-8 md:py-4 px-4 -mt-4 relative z-10">
                      {this.props.data.allDatoCmsSubject.edges.map(({ node }, i) => {
                        return (
                          <div className={ i === 0 ? `w-full md:w-1/2 lg:w-1/4 mb-3 lg:mb-0` : `w-full md:w-1/2 lg:w-1/4 mb-3 lg:mb-0 lg:border-l-2 lg:border-pink`} key={i}>
                            <AnchorLink to={`/courses/#${ node.slug }`} title={node.title} className="block my-3 md:my-5">
                              { node.teaserIcon && (
                                
                                <div className="animated-icon-wrapper" dangerouslySetInnerHTML={{ __html: node.iconSvg }}></div>
                              )}
                              <span className="block text-lg text-purple text-center">{ node.title }</span>
                            </AnchorLink>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="-mb-16 xl:-mb-32 relative z-20 overflow-hidden">
                    <RevealRight>
                      <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right scroll-text--white text-right text-transparent leading-none block">{ this.props.data.datoCmsCoursesLanding.scrollingText}</span>
                    </RevealRight>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Our Mission */}
            <section>
              <div className="bg-purple relative z-10 pb-40 md:pb-56 xl:pb-64 pt-24 md:pt-16 xl:pt-24">
                <div className="container lg:px-32 relative z-20">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-11/12 md:mx-auto content text-white md:pt-24 xl:pt-32">
                      <h2 className="mb-6 md:mb-10 text-center">{ this.props.data.datoCmsCoursesLanding.introText }</h2>

                      <div className="mb-16 xl:mb-24 css-cols text-lg" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsCoursesLanding.content }}>
                      </div>
                      
                      { this.props.data.datoCmsCoursesLanding.quote && (
                        <div className="w-10/12 md:w-10/12 xl:w-9/12 mx-auto">
                          <span className="text-8xl md:text-9xl xl:text-10xl leading-none font-semibold block text-center text-pink">“</span>
                          <span className="text-3xl md:text-4xl leading-extra-tight font-semibold block text-center -mt-12 md:-mt-16 xl:-mt-24 mb-12">{ this.props.data.datoCmsCoursesLanding.quote}</span>

                          <div className="mx-auto text-center">
                            <Link to="/contact" className="btn btn--border">
                              <span className="btn__inner">Get in touch</span>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="overflow-x-hidden -mt-16 md:-mt-16 xl:-mt-24">
            {this.props.data.allDatoCmsSubject.edges.map(({ node }, i) => {
              const length = (this.props.data.allDatoCmsSubject.edges.length - 1);
              return (
                <section key={i} className={ i === length ? `bg-transparent md:pb-8 lg:pb-8 xl:pb-12 relative z-20 mb-16 xl:mb-24` : `bg-transparent md:pb-8 lg:pb-8 xl:pb-12 relative z-20 mb-32`} id={ node.slug }>
                  { i%2 === 0 ? (
                    <div className="overflow-hidden">
                      <RevealRight>
                        <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">{ node.teaserScrollingText }</span>
                      </RevealRight>
                    </div>
                  ) : (
                    <div className="overflow-hidden">
                      <RevealLeft>
                        <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text scroll-text--purple text-transparent leading-none -mt-4 xl:-mt-8 block">{ node.teaserScrollingText }</span>
                      </RevealLeft>
                    </div>
                  )}
                  
                  <div className="container lg:px-32 -mt-10 md:-mt-16 lg:-mt-24 xl:-mt-56 relative z-20">
                    <div className="flex flex-wrap items md:-mx-8">
                      { i%2 === 0 && (
                        <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 mb-8 md:mb-0 relative">
                          <div className="relative">
                            <div>
                              <GradientRevealLeft>
                              </GradientRevealLeft>
                            </div>
                            <ImageParallax>
                              <div className="relative overflow-hidden pt-12 md:pt-24 xl:pt-32">
                                <div className="relative overflow-hidden">
                                  <ImageReveal>
                                  </ImageReveal>
                                  <Img fluid={node.teaserImage.fluid} alt={node.title} className="relative z-10 mb-0 pb-0" />
                                </div>
                              </div>
                            </ImageParallax>
                          </div>
                        </div>
                      )}
                      <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 md:pt-32 xl:pt-64 order-2 md:order-1">
                        { node.teaserIcon && (
                          <img src={node.teaserIcon.url} alt={node.title} className="w-12 md:w-16 mb-4" />
                        )}
                        <div className="content">
                          <h2 className="pb-6 mb-0">{ node.title }</h2>
                          <span className="w-20 h-2 bg-pink block mb-8"></span>

                          <div className="mb-8" dangerouslySetInnerHTML={{ __html: node.teaserText }}>
                        </div>
                        </div>

                        <Link to={`/courses/${ node.slug}`} className="text-md text-pink font-semibold uppercase flex flex-wrap items-center btn-arrow">
                          <span className="block">View Courses</span>
                          <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                        </Link>
                      </div>

                      { i%2 !== 0 && (
                        <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 order-1 md:order-2 mb-8 md:mb-0 relative">
                          <div className="relative">
                              <div>
                                <GradientRevealRight>
                                </GradientRevealRight>
                              </div>
                              <ImageParallax>
                                <div className="relative overflow-hidden pt-12 md:pt-24 xl:pt-32">
                                  <div className="relative overflow-hidden">
                                    <ImageReveal>
                                    </ImageReveal>
                                    <Img fluid={node.teaserImage.fluid} alt={node.title} className="relative z-10 mb-0 pb-0" />
                                  </div>
                                </div>
                              </ImageParallax>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              )
            })}
            </section>

            {/* Application Form */}
            <section className="bg-white pb-12 md:pb-8 lg:pb-8 xl:pb-24">
              <div className="overflow-hidden relative z-20">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">Application</span>
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

export default CoursesPage

export const query = graphql`
  query {
    datoCmsCoursesLanding {
      title
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      heroHeading
      heroImage {
        fluid(
          imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      scrollingText
      introText
      content
      quote
    }
    allDatoCmsSubject {
      edges {
        node {
          title
          teaserText
          teaserIcon {
            url
          }
          iconSvg
          teaserImage {
            fluid(
              imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
              ...GatsbyDatoCmsFluid
            }
          }
          teaserScrollingText
          slug
        }
      }      
    }
  }
`