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
                    <div className="flex flex-wrap pb-0 md:pb-20 lg:pb-24">
                      <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0">
                        <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-8 -mt-10">Courses</span>
                        <h1 className="text-5xl xl:text-6xl font-medium text-white mb-6 md:mb-8">{ this.props.data.datoCmsCoursesLanding.heroHeading }</h1>

                        <div className="w-full">
                          <Link to="/contact" className="text-md text-white font-semibold uppercase flex flex-wrap items-center btn-arrow">
                            <span className="block">Get in touch</span>
                            <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                          </Link>
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 lg:w-1/2 md:-mt-12 md:pl-12">
                        <Img fluid={ this.props.data.datoCmsCoursesLanding.heroImage.fluid } className="w-full" />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center bg-white py-8 md:py-4  px-4">
                      {this.props.data.allDatoCmsSubject.edges.map(({ node }, i) => {
                        return (
                          <div className={ i === 0 ? `w-full md:w-1/2 lg:w-1/4 mb-3 lg:mb-0` : `w-full md:w-1/2 lg:w-1/4 mb-3 lg:mb-0 lg:border-l-2 lg:border-pink`} key={i}>
                            <AnchorLink to={`/courses/#${ node.slug }`} title={node.title} className="block">
                              { node.teaserIcon && (
                                <svg data-name="Group 2708" xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-16 xl:w-20 mx-auto mt-2 mb-5 animated-icon" viewBox="0 0 84.053 58.444"><defs><linearGradient id="a" x1="1.915" y1="-.517" x2="-.809" y2="1.44" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#c50021"/><stop offset="1" stopColor="#122267"/></linearGradient><linearGradient id="b" x1=".986" y1="-.002" x2=".071" y2=".944" href="#a"/><linearGradient id="c" x1="8.146" y1="-12.617" x2="-3.401" y2="7.192" href="#a"/><linearGradient id="d" x1="6.471" y1="-3.792" x2="-5.027" y2="4.473" href="#a"/></defs><path data-name="Path 5575" className="rotate" d="M490.267 389.4a11.113 11.113 0 00-.028-.319 1.035 1.035 0 00-.032-.155.661.661 0 00-.048-.11.054.054 0 00-.011-.032 1.265 1.265 0 00-.73-.648l-1.7-.488a1.615 1.615 0 01-.941-.914 10.591 10.591 0 00-.5-1.191 1.615 1.615 0 010-1.31l.836-1.564a1.213 1.213 0 00-.112-1.242 12.962 12.962 0 00-.865-.946 13.539 13.539 0 00-1.031-.908 1.222 1.222 0 00-1.243-.084l-1.516.839a1.584 1.584 0 01-1.313.014 10.58 10.58 0 00-1.221-.494 1.586 1.586 0 01-.926-.927l-.508-1.654a1.235 1.235 0 00-.952-.807 13.075 13.075 0 00-1.37-.063c-.433 0-.859.03-1.281.075a1.227 1.227 0 00-.945.817l-.484 1.678a1.586 1.586 0 01-.911.939 11.6 11.6 0 00-1.214.518 1.6 1.6 0 01-1.314 0l-1.554-.827a1.209 1.209 0 00-1.239.106c-.325.274-.642.562-.944.867a14.27 14.27 0 00-.909 1.029 1.22 1.22 0 00-.085 1.244l.86 1.563a1.387 1.387 0 01.25.849c-.04.066-.077.137-.109.2a10.938 10.938 0 00-.587 1.422 1.574 1.574 0 01-.924.929l-1.718.523a1.222 1.222 0 00-.8.951 12.551 12.551 0 00-.064 1.37c0 .433.028.861.07 1.28a.882.882 0 00.033.148.848.848 0 00.036.1c.005.014.009.027.016.041.022.043.045.086.072.128a1.222 1.222 0 00.66.522l1.764.51a1.614 1.614 0 01.944.912 11.281 11.281 0 00.476 1.108 1.588 1.588 0 010 1.311l-.861 1.618a1.226 1.226 0 00.1 1.246 13.143 13.143 0 00.921 1.014 12.769 12.769 0 00.958.852 1.216 1.216 0 001.246.091l1.63-.9a1.614 1.614 0 011.314-.027 10.165 10.165 0 001.092.445 1.609 1.609 0 01.928.929l.544 1.792a1.224 1.224 0 00.955.8c.422.036.848.057 1.28.053a12.17 12.17 0 001.372-.082 1.234 1.234 0 00.94-.821l.512-1.78a1.615 1.615 0 01.914-.945 11.175 11.175 0 001.089-.454 1.623 1.623 0 011.313 0l1.621.864a1.214 1.214 0 001.243-.1 12.662 12.662 0 001.015-.923c.3-.308.587-.628.853-.957a1.211 1.211 0 00.09-1.243l-.884-1.6a1.307 1.307 0 01-.224-.889c.039-.075.082-.152.122-.233a11.031 11.031 0 00.553-1.328 1.6 1.6 0 01.929-.926l1.738-.529a1.222 1.222 0 00.8-.954q.059-.635.057-1.283c.005-.34-.015-.69-.048-1.04zm-11.181 9.4a8.773 8.773 0 115.438-11.151 8.772 8.772 0 01-5.438 11.151z" transform="translate(-429.492 -356.607)" fill="url(#a)"/><path data-name="Path 5576" d="M496.3 359.562h-2.71v-2.71a6.677 6.677 0 00-6.669-6.669h-61.34a6.677 6.677 0 00-6.669 6.669v35.728a6.676 6.676 0 006.669 6.669h2.71v2.71a6.676 6.676 0 006.669 6.668h21.17v-2.79h-21.17a3.883 3.883 0 01-3.878-3.878V371.73h18.045v-2.79h-18.046v-2.71a3.883 3.883 0 013.878-3.878H496.3a3.883 3.883 0 013.878 3.878v2.71h-18.05v2.79h18.046v30.229a3.883 3.883 0 01-3.878 3.878h-21.17v2.79H496.3a6.676 6.676 0 006.669-6.668V366.23a6.676 6.676 0 00-6.669-6.668zm-68.01 6.668v30.228h-2.71a3.883 3.883 0 01-3.878-3.878v-35.728a3.884 3.884 0 013.878-3.879h61.337a3.884 3.884 0 013.878 3.879v2.71h-55.836a6.676 6.676 0 00-6.669 6.668z" transform="translate(-418.912 -350.183)" fill="url(#b)"/><path data-name="Rectangle 286" transform="translate(43.386 55.653)" fill="url(#c)" d="M0 0h6.658v2.79H0z"/><path data-name="Path 5577" d="M478.645 390.842a3.343 3.343 0 104.249 2.072 3.342 3.342 0 00-4.249-2.072z" transform="translate(-432.996 -360.101)" fill="url(#d)"/></svg>
                                // <img src={node.teaserIcon.url} alt={node.title} className="w-12 md:w-16 xl:w-20 mx-auto mb-3 animated-icon" />
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
                    <div className="w-full md:w-10/12 md:mx-auto content text-white md:pt-24 xl:pt-32">
                      <h2 className="mb-6 md:mb-10">{ this.props.data.datoCmsCoursesLanding.introText }</h2>

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
                    <div className="gradient-ltr p-8 md:p-16 xl:p-24">
                      <div className="mb-8 md:mb-12 text-center">
                        <span className="text-white font-semibold block text-2xl md:text-3xl mb-5 leading-extra-tight">Want to know more information about our courses?</span>
                        <span className="text-white block text-sm md:text-base lg:text-lg xl:text-xl">Fill in the form below and we will be in touch</span>
                      </div>

                      <Tabs selectedTabClassName="border-t-2 border-l-2 border-r-2 border-b-2 text-white border-white font-semibold">
                        <div className="flex flex-wrap items-center text-white justify-center mb-8">
                          <span className="block mr-2">Are you a:</span>
                          <TabList className="flex flex-wrap">
                            <Tab className="border-t-2 border-l-2 border-r-2 border-b-2 border-transparent p-1 px-3 cursor-pointer uppercase">Learner</Tab>
                            <Tab className="border-t-2 border-l-2 border-r-2 border-b-2 border-transparent p-1 px-3 cursor-pointer uppercase">Employer</Tab>
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
          ...GatsbyDatoCmsFluid
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