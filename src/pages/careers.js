import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Arrow from "../images/arrow.inline.svg";
import { Link } from "gatsby";
import { motion } from "framer-motion"
import Img from "gatsby-image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealLeft, RevealRight, GradientRevealLeft, ImageReveal, GradientRevealRightLarge, ImageParallax } from "../components/revealHelpers"

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

class CareersPage extends React.Component {
  render () {
    return (
      <>
        <SEO
          titleOverride={this.props.data.datoCmsCareersLanding.metaTags && this.props.data.datoCmsCareersLanding.metaTags.title ? this.props.data.datoCmsCareersLanding.metaTags.title : this.props.data.datoCmsCareersLanding.title}
          descriptionOverride={this.props.data.datoCmsCareersLanding.metaTags && this.props.data.datoCmsCareersLanding.metaTags.description ? this.props.data.datoCmsCareersLanding.metaTags.description : null}
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsCareersLanding.metaTags && this.props.data.datoCmsCareersLanding.metaTags.image ? this.props.data.datoCmsCareersLanding.metaTags.image.url : null}
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
                  <Header color="white" />
                </div>
              </div>
              
              {/* Hero */}
              <div className="overflow-hidden">
                <div className="bg-purple pt-32 pb-0 md:pt-48 md:pb-32 lg:pb-24 xl:pb-20 xl:pt-48 relative">
                  <div className="container lg:px-32 relative">
                    <div className="flex flex-wrap items-center">
                      <div className="w-full md:w-1/2 relative z-20 mb-12 md:mb-0 mt-8 md:mt-12">
                        <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-3">Careers</span>
                        <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium text-white mb-6 md:mb-8 pr-8">{ this.props.data.datoCmsCareersLanding.heroHeading }</h1>

                        <div className="w-11/12 md:w-10/12 text-white text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsCareersLanding.heroText }}></div>
                      </div>

                      <div className="w-full md:w-1/2 xl:w-1/2 relative mb-16 md:mb-0 ml-auto">
                        <GradientRevealRightLarge>
                        </GradientRevealRightLarge>
                        <Img fluid={ this.props.data.datoCmsCareersLanding.heroImage.fluid } className="block relative z-10 mt-12 lg:mt-16" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Listings */}
            <section>
              <div className="bg-purple overflow-hidden relative z-10 pb-16 md:pb-24 xl:pb-32 -mt-2">
                <RevealLeft>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent">Current Vacancies</span>
                </RevealLeft>

                <div className="container lg:px-32 mb-24 md:mb-40 xl:mb-56">
                  <div className="flex flex-wrap md:-mx-6">
                    {this.props.data.allDatoCmsCareer.edges.map(({ node }, i) => {
                      return (
                        <div className="w-full md:w-1/2 md:px-6" key={i}>
                          <Link to={`/careers/${ node.slug }`} className="block text-white flex flex-wrap items-center border-t-2 border-purple-light py-4 md:py-6 xl:py-8 hover:text-pink focus:text-pink transition duration-300 ease-in-out">
                            <div className="flex-1 pr-8">
                              <span className="text-xl md:text-2xl xl:text-3xl block font-semibold mb-2">{ node.title }</span>
                              <span className="md:text-lg block">{ node.teaserText }</span>
                            </div>
                            <div className="w-12 text-pink ml-auto">
                              <Arrow />
                            </div>
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* Marketing */}
            <section className="relative -mt-16 md:-mt-16 xl:-mt-32 relative z-20">
              <div className="overflow-hidden">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">{ this.props.data.datoCmsCareersLanding.supportingContentBlock.scrollingText }</span>
                </RevealRight>
              </div>
              
              <div className="bg-white pb-16 md:pb-20 xl:pb-24">
                <div className="container lg:px-32 -mt-16 md:-mt-16 lg:-mt-24 relative z-20">
                  <div className="flex flex-wrap items md:-mx-8">
                    <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 mb-8 md:mb-0 relative">
                      <div className="relative -mt-2 md:-mt-16 lg:-mt-20">
                        <div>
                          <GradientRevealLeft>
                          </GradientRevealLeft>
                        </div>
                        <div className="relative overflow-hidden pt-12 md:pt-24 xl:pt-32">
                          <ImageParallax>
                            <div className="relative overflow-hidden">
                              <ImageReveal>
                              </ImageReveal>
                              <Img fluid={ this.props.data.datoCmsCareersLanding.supportingContentBlock.image.fluid } className="relative z-10 mb-0 pb-0" />
                            </div>
                          </ImageParallax>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pt-32 xl:pt-40">
                      <h2 className="pb-6 mb-0">{ this.props.data.datoCmsCareersLanding.supportingContentBlock.heading }</h2>
                      <span className="w-20 h-2 bg-pink block mb-8"></span>

                      <div className="mb-8" dangerouslySetInnerHTML={{ __html:  this.props.data.datoCmsCareersLanding.supportingContentBlock.content }}></div>

                      <Link to="/contact" className="mb-4 btn btn--pink"><span className="btn__inner">Get In Touch</span></Link>
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

export default CareersPage

export const query = graphql`
  query {
    datoCmsCareersLanding {
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      title
      heroHeading
      heroText
      heroImage {
        fluid(
          imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid
        }
      }
      supportingContentBlock {
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
    }
    allDatoCmsCareer {
      edges {
        node {
          title
          teaserText
          slug
        }
      }      
    }
  }
`