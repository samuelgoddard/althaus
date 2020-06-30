import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Arrow from "../images/arrow.inline.svg";
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import gsap from "gsap";
import Img from "gatsby-image";
import { motion } from "framer-motion"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Moment from "react-moment"
import { RevealLeft, RevealRight, GradientRevealLeft, ImageReveal, BlockRevealRight, GradientRevealRightLarge } from "../components/revealHelpers"

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

class Career extends React.Component {

  render () {

    return (
      <>
        <SEO title={ this.props.data.datoCmsCareer.title } />
        
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
                <div className="bg-white pt-32 md:pt-40 relative">
                  <div className="container lg:px-32 relative">
                    <div className="flex flex-wrap items-center">
                      <div className="w-full md:w-1/2 relative z-20 mb-24 md:mb-0 md:-mt-12 xl:-mt-20">
                        <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-3">Job Title</span>
                        <h1 className="text-5xl md:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-purple mb-6 md:mb-8 pr-12">{ this.props.data.datoCmsCareer.title }</h1>

                        <AnchorLink to={`/careers/${this.props.data.datoCmsCareer.slug}/#application`} title="Apply for job" className="text-md text-purple font-semibold uppercase flex flex-wrap items-center">
                          <span className="block">Apply Now</span>
                          <span className="block ml-4 w-8"><Arrow /></span>
                        </AnchorLink>
                      </div>

                      <div className="w-full md:w-1/2 relative -mb-12 md:mb-20 ml-auto">
                        <GradientRevealRightLarge>
                        </GradientRevealRightLarge>
                        <Img fluid={this.props.data.datoCmsCareer.heroImage.fluid} className="relative z-10 md:mt-12 xl:mt-20 pb-12 -mt-12" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Listings */}
            <section className="mb-12 md:mb-16 lg:mb-24 overflow-hidden">
              <div className="bg-purple overflow-hidden py-8 md:py-10">
                <div className="container lg:px-32 relative text-white">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-1/2 xl:w-1/4 px-4 mb-6 xl:mb-0">
                      <span className="block text-lg mb-2">Closing Application</span>
                      <span className="block text-xl md:text-2xl font-semibold">
                        <Moment format="DD.MM.Y">{ this.props.data.datoCmsCareer.closingDate }</Moment>
                      </span>
                    </div>
                    <div className="w-1/2 xl:w-1/4 px-4 mb-6 xl:mb-0">
                      <span className="block text-lg mb-2">Experience Required</span>
                      <span className="block text-xl md:text-2xl font-semibold">{ this.props.data.datoCmsCareer.experienceRequired }</span>
                    </div>
                    <div className="w-1/2 xl:w-1/4 px-4 mb-6 xl:mb-0">
                      <span className="block text-lg mb-2">Expertise Area</span>
                      <span className="block text-xl md:text-2xl font-semibold">{ this.props.data.datoCmsCareer.expertiseArea }</span>
                    </div>
                    <div className="w-1/2 xl:w-1/4 px-4 mb-6 xl:mb-0">
                      <span className="block text-lg mb-2">Entry Level Salary</span>
                      <span className="block text-xl md:text-2xl font-semibold">{ this.props.data.datoCmsCareer.entryLevelSalary }</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-32 md:mb-40 xl:mb-56">
              <div className="container relative">
                <div className="w-full lg:w-7/12 mx-auto content">
                  <div className="mb-12 md:mb-16 xl:mb-20">
                    <h2 className="pb-6 mb-0">Job Description</h2>
                    <span className="w-20 h-2 bg-pink block mb-8"></span>

                    <div className="content" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsCareer.jobDescription }}></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Listings */}
            <section>
              <div className="bg-purple relative z-10 pb-16 md:pb-24 xl:pb-32 pt-24 md:pt-32 lg:pt-48 xl:pt-64">
                <div className="-mt-24 xl:-mt-40 overflow-hidden absolute top-0 left-0 w-full">
                  <RevealLeft>
                    <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent">Opportunities</span>
                  </RevealLeft>
                </div>

                <div className="container lg:px-32 mb-24 md:mb-40 xl:mb-56">
                  <div className="flex flex-wrap md:-mx-10 content text-white mb-16 md:mb-24">
                    <div className="w-full md:w-1/2 md:px-10 mb-12 md:mb-0">
                      <h2 className="pb-6 mb-0">Requirements</h2>
                      <span className="w-20 h-2 bg-pink block mb-8"></span>

                      <div className="content-lists xl:text-lg" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsCareer.requirements }}></div>
                    </div>
                    <div className="w-full md:w-1/2 md:px-10">
                      <h2 className="pb-6 mb-0">Benefits</h2>
                      <span className="w-20 h-2 bg-pink block mb-8"></span>

                      <div className="content-lists xl:text-lg" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsCareer.benefits }}></div>
                    </div>
                  </div>
                  <div className="mx-auto text-center">
                    <AnchorLink to={`/careers/${this.props.data.datoCmsCareer.slug}/#application`} title="Apply for job" className="inline border-2 border-pink uppercase text-white p-4 px-6 font-medium text-lg">
                      Apply for job
                    </AnchorLink>
                  </div>
                </div>
              </div>
            </section>

            {/* Insight */}
            <section className="bg-purple -mt-16 md:-mt-16 xl:-mt-32 relative z-20">
              <div className="overflow-hidden">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">{ this.props.data.datoCmsCareer.supportingContentBlock.scrollingText }</span>
                </RevealRight>
              </div>
              
              <div className="bg-white pb-12">
                <div className="container lg:px-32 -mt-16 md:-mt-16 lg:-mt-24 relative z-20">
                  <div className="flex flex-wrap items md:-mx-8">
                    <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 mb-8 md:mb-0 relative">
                      <div className="relative -mt-2 md:-mt-16 lg:-mt-20">
                        <div>
                          <GradientRevealLeft>
                          </GradientRevealLeft>
                        </div>
                        <div className="relative overflow-hidden pt-12 md:pt-24 xl:pt-32">
                          <div className="relative overflow-hidden">
                            <ImageReveal>
                            </ImageReveal>
                            <Img fluid={ this.props.data.datoCmsCareer.supportingContentBlock.image.fluid } className="relative z-10 pb-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pt-32 xl:pt-40">
                      <h2 className="pb-6 mb-0">{ this.props.data.datoCmsCareer.supportingContentBlock.heading }</h2>
                      <span className="w-20 h-2 bg-pink block mb-8"></span>

                      <div className="mb-8" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsCareer.supportingContentBlock.content }}>
                      </div>

                      <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center">
                        <span className="block">Find out more</span>
                        <span className="block ml-4 w-8"><Arrow /></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Application Form */}
            <section className="bg-white mt-10 pb-12 md:mt-24 md:pb-8 lg:pb-8 xl:mt-32 xl:pb-24" id="application">
              <div className="overflow-hidden relative z-20">
                <RevealLeft>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent leading-none">Application</span>
                </RevealLeft>
              </div>

              <div className="w-full mb-8 md:mb-0 relative -mt-12 md:-mt-20 xl:-mt-40 overflow-hidden">
                <div className="relative">
                  <div className="pt-8 md:pt-16 xl:pt-24">
                    <BlockRevealRight>
                    </BlockRevealRight>
                  </div>

                  <div className="container lg:px-32 relative z-20">
                    <div className="gradient-ltr p-8 md:p-16 xl:p-24">
                      <div className="mb-8 text-center">
                        <span className="text-white font-semibold block text-2xl md:text-3xl mb-5 leading-extra-tight">Interested in working for althaus?</span>
                        <span className="text-white block text-sm md:text-base lg:text-lg xl:text-xl">Fill in the form below and we will be in touch</span>
                      </div>
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

export default Career

export const query = graphql`
  query CareerQuery($slug: String!) {
    datoCmsCareer(slug: { eq: $slug }) {
      title
      heroImage {
        fluid(
          imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid
        }
      }
      closingDate
      experienceRequired
      expertiseArea
      entryLevelSalary
      jobDescription
      requirements
      benefits
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
      slug
    }
  }
`