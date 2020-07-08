import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Lightbox from "../components/lightbox"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Arrow from "../images/arrow.inline.svg";
import Img from "gatsby-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
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

class AboutPage extends React.Component {
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
          titleOverride={this.props.data.datoCmsAbout.metaTags && this.props.data.datoCmsAbout.metaTags.title ? this.props.data.datoCmsAbout.metaTags.title : this.props.data.datoCmsAbout.title}
          descriptionOverride={this.props.data.datoCmsAbout.metaTags && this.props.data.datoCmsAbout.metaTags.description ? this.props.data.datoCmsAbout.metaTags.description : null}
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsAbout.metaTags && this.props.data.datoCmsAbout.metaTags.image ? this.props.data.datoCmsAbout.metaTags.image.url : null}
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
                <div className="bg-white pt-32 pb-24 md:pt-48 md:pb-24 xl:pt-48 relative">
                  <div className="container lg:px-32 relative">
                    <div className="flex flex-wrap items-center relative">
                      <div className="w-full md:w-8/12 xl:w-7/12 z-20 mb-8 md:mb-0 md:absolute top-0 left-0 bottom-0 flex flex-wrap">
                        <div className="my-auto">
                          <span className="uppercase font-semibold text-purple text-xl md:text-2xl block mb-3">About</span>
                          <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-pink mb-6 md:mb-8">{ this.props.data.datoCmsAbout.heroHeading }</h1>

                          <div className="w-full">
                            <AnchorLink to={`/about/#our-mission`} title="Discover More" className="text-md text-purple font-semibold uppercase flex flex-wrap items-center btn-arrow">
                              <span className="block">Discover More</span>
                              <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                            </AnchorLink>
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:w-7/12 relative ml-auto pt-10 md:pt-12">
                        <GradientRevealRight>
                        </GradientRevealRight>
                        
                        { this.props.data.datoCmsAbout.youtubeVideoId ? (
                          <Lightbox title={this.props.data.datoCmsAbout.heroHeading} videoId={this.props.data.datoCmsAbout.youtubeVideoId} thumbnail={
                            <div className="relative group">
                              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex flex-wrap justify-center items-center z-20">
                                <svg className="block w-24 h-24 transition duration-300 ease-in-out group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><g data-name="Group 2662"><path data-name="Polygon 10" d="M68 47.5L36 66V29z" fill="#ef4362"/><g data-name="Ellipse 5" fill="none" stroke="#ef4362" strokeWidth="4"><circle cx="48" cy="48" r="48" stroke="none"/><circle cx="48" cy="48" r="46"/></g></g></svg>
                              </div>
                              <Img fluid={ this.props.data.datoCmsAbout.heroImage.fluid } className="relative z-10 pb-0 -mb-12" />
                            </div>
                          } />
                        ) : (
                          <Img fluid={ this.props.data.datoCmsAbout.heroImage.fluid } className="relative z-10 pb-0 -mb-12" />
                        )}

                        {/* <Lightbox title={"test"} videoId={"LEbyVZs54Ho"} /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            
            {/* Our Mission */}
            <section id="our-mission" className="mt-8 md:mt-12">
              <div className="overflow-hidden">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right scroll-text--purple text-right text-transparent leading-none block">{this.props.data.datoCmsAbout.heroScrollingText}</span>
                </RevealRight>
              </div>

              <div className="pt-10 md:pt-12">    
                <div className="bg-purple relative z-10 pb-24 md:pb-32 xl:pb-48">
                  <div className="container lg:px-32 relative z-20">
                    <div className="flex flex-wrap md:-mx-8">
                      <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 mb-20 md:mb-0 -mt-20 md:-mt-24 xl:-mt-32">
                        <div className="relative">
                          <GradientRevealLeft>
                          </GradientRevealLeft>
                          <ImageParallax>
                            <div className="relative overflow-hidden">
                              <div className="relative overflow-hidden">
                                <ImageReveal>
                                </ImageReveal>
                                <Img fluid={ this.props.data.datoCmsAbout.missionImage.fluid } alt={ this.props.data.datoCmsAbout.missionHeading } className="relative z-10  mb-12 md:mb-20 xl:mb-32" />
                              </div>
                            </div>
                          </ImageParallax>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pr-16 text-white md:pt-24 xl:pt-32">
                        <h2 className="pb-6 mb-0">Our Mission</h2>
                        <span className="w-20 h-2 bg-pink block mb-8"></span>

                        <div className="mb-8" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsAbout.missionText }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Insights */}
            <section className="bg-purple pb-12 md:pb-24 lg:pb-32 relative overflow-hidden -mt-12 pt-12">
              <RevealLeft>
                <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text scroll-text--pink text-transparent leading-none -mt-4 xl:-mt-8 block">{ this.props.data.datoCmsAbout.heroScrollingText }</span>
              </RevealLeft>
              
              <div className="container lg:px-32 -mt-20 md:-mt-20 xl:-mt-56 relative z-20">
                <div className="flex flex-wrap items md:-mx-8">
                  <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content mb-8 md:mb-0 order-2 md:order-1 md:pt-24 xl:pt-56 text-white">
                    <h2 className="pb-6 mb-0">{ this.props.data.datoCmsAbout.contentBlockHeading }</h2>
                    <span className="w-20 h-2 bg-pink block mb-8"></span>

                    <div className="mb-12" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsAbout.contentBlockText }}></div>

                    <div className="flex flex-wrap">
                      <Link to="/learners" className="btn">
                        <span className="btn__inner">Learners</span>
                      </Link>
                      <Link to="/employers" className="btn btn--pink ml-3">
                        <span className="btn__inner">Employers</span>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 order-1 md:order-2 mb-8 md:mb-0 relative mt-12 md:mt-24">
                    <div className="relative">
                      <div>
                        <GradientRevealRight>
                        </GradientRevealRight>
                      </div>
                      <ImageParallax>
                        <div className="relative overflow-hidden">
                          <div className="relative overflow-hidden mt-12 md:mt-20">
                            <ImageReveal>
                            </ImageReveal>
                            <Img fluid={ this.props.data.datoCmsAbout.contentBlockImage.fluid } alt={ this.props.data.datoCmsAbout.contentBlockHeading } className="relative z-10 mb-0" />
                          </div>
                        </div>
                      </ImageParallax>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Team */}
            <section className="bg-purple pb-12 md:pb-24 -mb-20 md:-mb-40 xl:-mb-48 relative z-10">
              <div className="overflow-hidden">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right scroll-text--white text-right text-transparent leading-none block">Our Team</span>
                </RevealRight>
              </div>
            </section>
            
            <section className="bg-transparent pb-12 md:pb-24">
              <div className="container lg:px-32 relative z-20">
                <div className="flex flex-wrap sm:-mx-4">
                  {this.props.data.allDatoCmsTeam.edges.map(({ node }, i) => {
                    return (
                      <div className="w-full sm:w-1/2 md:w-1/3 mb-8 sm:px-4" key={i}>
                        <div className="bg-pink w-full text-white h-full relative flex flex-wrap">
                          <Img fluid={node.image.fluid} alt={node.title} className="object-cover object-center bg-multiply mt-auto self-end w-full" />
                          <div className="p-5 md:p-8 z-10 w-full absolute bottom-0 left-0">
                            <span className="block font-semibold text-2xl lg:text-3xl leading-extra-tight mb-2">{ node.name }</span>
                            <span className="block lg:text-lg leading-extra-tight">{ node.jobTitle }</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
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

export default AboutPage

export const query = graphql`
  query {
    datoCmsAbout {
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      heroHeading
      youtubeVideoId
      heroImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      heroScrollingText
      missionText
      missionImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      contentBlockHeading
      contentBlockText
      contentBlockImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    allDatoCmsTeam(sort: { fields: position, order: ASC }) {
      edges {
        node {
          name
          jobTitle
          image {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`