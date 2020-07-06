import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Arrow from "../images/arrow.inline.svg";
import Img from "gatsby-image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealLeft, RevealRight, GradientRevealLeft, GradientRevealRight, ImageReveal, ImageParallax } from "../components/revealHelpers"

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

class IndexPage extends React.Component {
  render () {
    return (
      <>
        <SEO
          titleOverride={this.props.data.datoCmsHome.metaTags && this.props.data.datoCmsHome.metaTags.title ? this.props.data.datoCmsHome.metaTags.title : this.props.data.datoCmsHome.title}
          descriptionOverride={this.props.data.datoCmsHome.metaTags && this.props.data.datoCmsHome.metaTags.description ? this.props.data.datoCmsHome.metaTags.description : null}
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsHome.metaTags && this.props.data.datoCmsHome.metaTags.image ? this.props.data.datoCmsHome.metaTags.image.url : null}
        />

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade}>
            <section className="" >
              <div className="absolute top-0 left-0 right-0 z-30">
                <div>
                  <Header color="white" />
                </div>
              </div>
              
              {/* Hero */}
              <div className="bg-purple pt-32 md:pt-48 xl:pt-56 relative">
                <div className="absolute top-0 left-0 w-full z-10 overflow-hidden w-full">
                  <svg className="logo-bg opacity-25 relative block z-10" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.316 31.173l9.259-.004 3.326 5.685h10.283L21.59 0 16.4 8.866l7.972 13.487-9.404.013-6.617 11.235H5.726L15.044 17.7l1.402 2.386h3.827l-5.237-8.892L0 36.858h10.262l6.613-11.24 13.26.013-9.913-16.773 1.368-2.336 15.83 27.025h-2.63L31.445 27.9l-13.295.008-5.199 8.95h16.914l-1.912-3.244h-9.276l1.427-2.436.213-.005z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="42.07" y1="9.562" x2="8.917" y2="40.813" gradientUnits="userSpaceOnUse"><stop stopColor="#D51F3A"/><stop offset="1" stopColor="#2C3583"/></linearGradient></defs></svg>
                </div>
                <div className="container lg:px-32 relative z-10 pb-24">
                  <div className="w-full md:w-10/12 lg:w-9/12 xl:w-9/12">
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-white mb-6 md:mb-8">{ this.props.data.datoCmsHome.heroHeading }</h1>

                    <div className="w-8/12 md:w-8/12">
                      <div className="text-white text-xl md:text-2xl mb-8 md:mb-12" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsHome.heroBlurb }}></div>

                      <Link to="/about" className="text-md text-white font-semibold uppercase flex flex-wrap items-center group btn-arrow">
                        <span className="block">Discover More</span>
                        <span className="block ml-3 w-8 btn-arrow__arrow"><Arrow /></span>
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>
            
            <section className="relative">
              <div className="container relative bg-red-400 w-full mx-auto h-0 hidden lg:block">
                <div className="w-128 md:w-2/3 lg:w-7/12 xl:w-1/2 absolute bottom-0 right-0 z-10 max-w-3xl">
                  <Img fluid={this.props.data.datoCmsHome.heroImage.fluid } className="w-full" />
                </div>
              </div>
              <div className="flex flex-wrap bg-purple relative">
                <div className="w-full md:w-9/12 lg:w-8/12 ml-auto relative z-20">
                  <div className="gradient-ltr">
                    <div className="flex flex-wrap xl:w-10/12 p-4">
                      <div className="w-1/2 pr-2 md:pr-0">
                        <Link to="/learners" className="block py-6 md:px-10 text-center md:text-left btn-arrow">
                          <span className="block text-white text-xl md:text-3xl font-medium bg-purple-light md:bg-transparent p-3 md:p-0">Learners</span>
                          <div className="hidden md:block">
                            <span className="block text-white text-lg mb-3">Develop from learner into leader</span>
                            <span className="text-md text-white font-semibold uppercase flex flex-wrap items-center">
                              <span className="block">Discover More</span>
                              <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                            </span>
                          </div>
                        </Link>
                      </div>

                      <div className="w-1/2 md:border-l md:border-white">
                        <Link to="/employers" className="block py-6 md:px-10 text-center md:text-left btn-arrow">
                          <span className="block text-white text-xl md:text-3xl font-medium bg-pink md:bg-transparent p-3 md:p-0">Employers</span>
                          <div className="hidden md:block">
                            <span className="block text-white text-lg mb-3">Find the talent you need</span>
                            <span className="text-md text-white font-semibold uppercase flex flex-wrap items-center">
                              <span className="block">Discover More</span>
                              <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Why Us? */}
            { this.props.data.datoCmsHome.contentBlock && (
              <section className="">
                <div className="bg-purple pt-10 pb-24 mb-16 md:mb-0 md:pt-12 lg:pt-0 md:pb-32 overflow-hidden relative z-10">
                  <RevealLeft>
                    <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent">{ this.props.data.datoCmsHome.contentBlock.scrollingText }</span>
                  </RevealLeft>
                  
                  <div className="container lg:px-32 -mt-16 lg:-mt-24 xl:-mt-32 relative z-20">
                    <div className="flex flex-wrap md:-mx-8">
                      <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 mb-8 md:mb-0">
                        <ImageParallax>
                          <div className="relative overflow-hidden">
                            <ImageReveal>
                            </ImageReveal>
                            <Img fluid={ this.props.data.datoCmsHome.contentBlock.image.fluid } alt="About Image" />
                          </div>
                        </ImageParallax>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pr-16 text-white">
                        <h2 className="pb-6 mb-0">{ this.props.data.datoCmsHome.contentBlock.heading }</h2>
                        <span className="w-20 h-2 bg-pink block mb-8"></span>

                        <div className="mb-8" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsHome.contentBlock.content }}>
                        </div>

                        <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center btn-arrow">
                          <span className="block">Find Out More</span>
                          <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Alternative */}
            <section className="bg-white pt-10 pb-12 md:pt-24 md:pb-8 lg:pb-8 xl:pt-32 xl:pb-24 relative overflow-hidden z-20">
              <RevealLeft>
                <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text scroll-text--purple text-transparent leading-none -mt-4 xl:-mt-8 block">{ this.props.data.datoCmsHome.learnersBlockScrollingText }</span>
              </RevealLeft>
              
              <div className="container lg:px-32 -mt-20 md:-mt-20 xl:-mt-56 relative z-20">
                <div className="flex flex-wrap items md:-mx-8">
                  <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content mb-8 md:mb-0 order-2 md:order-1 md:pt-32 xl:pt-64">
                    <h2 className="pb-6 mb-0">Learners</h2>
                    <span className="w-20 h-2 bg-pink block mb-8"></span>

                    <div className="mb-8 content content-lists" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsHome.learnersBlockText }}></div>

                    <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center btn-arrow">
                      <span className="block">Start your journey</span>
                      <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 order-1 md:order-2 relative">
                    <div className="relative">
                      <div className="relative">
                        <GradientRevealRight>
                        </GradientRevealRight>
                        <ImageParallax>
                          <div className="relative overflow-hidden pb-5 mt-16 md:mt-12 xl:mt-20">
                            <ImageReveal>
                            </ImageReveal>
                            <Img fluid={ this.props.data.datoCmsHome.learnersBlockImage.fluid } className="relative z-10 mb-0 pb-0" />
                          </div>
                        </ImageParallax>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Digital */}
            <section className="bg-white pt-10 pb-12 md:pt-24 md:pb-8 lg:pb-8 xl:pt-32 xl:pb-24 relative overflow-hidden z-20">
              <RevealRight>
                <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">{ this.props.data.datoCmsHome.employersBlockScrollingText }</span>
              </RevealRight>
              
              <div className="container lg:px-32 -mt-20 md:-mt-20 xl:-mt-56 relative z-20">
                <div className="flex flex-wrap items md:-mx-8">
                  <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 mb-8 md:mb-0 relative">
                  <div className="relative">
                      <div className="relative">
                        <GradientRevealLeft>
                        </GradientRevealLeft>
                        <ImageParallax>
                          <div className="relative overflow-hidden pb-5 mt-16 md:mt-12 xl:mt-20">
                            <ImageReveal>
                            </ImageReveal>
                            <Img fluid={ this.props.data.datoCmsHome.employersBlockImage.fluid } className="relative z-10 mb-0 pb-0" />
                          </div>
                        </ImageParallax>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pt-24 xl:pt-56">
                    <h2 className="pb-6 mb-0">Employers</h2>
                    <span className="w-20 h-2 bg-pink block mb-8"></span>

                    <div className="mb-8 content content-lists" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsHome.employersBlockText }}></div>

                    <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center btn-arrow">
                      <span className="block">Find Out More</span>
                      <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                    </Link>
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

export default IndexPage

export const query = graphql`
  query {
    datoCmsHome {
      title
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      heroImage {
        fluid(
          imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      heroHeading
      heroBlurb
      contentBlock {
        heading
        scrollingText
        content
        image {
          fluid(
            imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
      learnersBlockScrollingText
      learnersBlockText
      learnersBlockImage {
        fluid(
          imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid
        }
      }
      employersBlockScrollingText
      employersBlockText
      employersBlockImage {
        fluid(
          imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`