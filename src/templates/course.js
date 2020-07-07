import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import ContactForm from "../components/contactForm"
// import { Link } from "gatsby"
import Arrow from "../images/arrow.inline.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Img from "gatsby-image";
import gsap from "gsap";
import { motion } from "framer-motion"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealLeft, RevealRight, GradientRevealRightLarge } from "../components/revealHelpers"
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

class CourseTemplate extends React.Component {
  render () {
    return (
      <>
        <SEO
          titleOverride={this.props.data.datoCmsCourse.metaTags && this.props.data.datoCmsCourse.metaTags.title ? this.props.data.datoCmsCourse.metaTags.title : this.props.data.datoCmsCourse.title}
          descriptionOverride={this.props.data.datoCmsCourse.metaTags && this.props.data.datoCmsCourse.metaTags.description ? this.props.data.datoCmsCourse.metaTags.description : null}
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsCourse.metaTags && this.props.data.datoCmsCourse.metaTags.image ? this.props.data.datoCmsCourse.metaTags.image.url : null}
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
                <div className="bg-white pt-32 pb-0 md:pt-48 md:pb-32 lg:pb-24 xl:pb-20 xl:pt-48 relative">
                  <div className="container lg:px-32 relative">
                    <div className="flex flex-wrap items-center">
                      <div className="w-full md:w-1/2 relative z-20 mb-24 md:mb-0">
                        <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-3">Level { this.props.data.datoCmsCourse.level } Course</span>
                        <h1 className="text-5xl md:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-purple mb-6 md:mb-8">{ this.props.data.datoCmsCourse.title }</h1>

                        <AnchorLink to={`/courses/${this.props.data.datoCmsCourse.subject.slug}/${this.props.data.datoCmsCourse.slug}-level-${ this.props.data.datoCmsCourse.level }/#application`} title="Apply for course" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center btn-arrow">
                          <span className="block">Apply for course</span>
                          <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                        </AnchorLink>
                      </div>

                      <div className="w-full md:w-1/2 xl:w-1/2 relative ml-auto pb-10 md:pb-0 -mb-12 md:mb-0">
                        <GradientRevealRightLarge>
                        </GradientRevealRightLarge>
                        <Img fluid={ this.props.data.datoCmsCourse.heroImage.fluid } className="block relative z-10 -mt-12 md:mt-12 pt-12 lg:mt-16" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Listings */}
            <section>
              <div className="overflow-hidden relative z-10">
                <div className="bg-purple pb-12 md:pb-24 xl:pb-32">
                  <RevealLeft>
                    <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent">Level { this.props.data.datoCmsCourse.level } Course</span>
                  </RevealLeft>

                  <div className="container md:px-32 xl:px-64 relative text-white mt-8 overflow-hidden">
                    <div className="font-semibold mb-16 md:mb-24 xl:mb-32 text-lg md:text-xl xl:text-2xl" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsCourse.introText }}></div>

                    {
                      this.props.data.datoCmsCourse.courseContentBlocks.map((block, i) => (
                        <div key={block.id} className="mb-12 xl:mb-16 pb-12 xl:pb-16 border-b border-pink">
                          {
                            block.model.apiKey === 'content' &&
                              <>
                              <h2 className="pb-6 mb-0 text-white h3">{ block.heading }</h2>
                              <span className="w-20 h-2 bg-pink block mb-8"></span>

                              <div className="text-white block md:text-lg" dangerouslySetInnerHTML={{ __html: block.content }}></div>
                              </>
                          }
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </section>

            {/* Application Form */}
            <section className="relative pb-12 md:pb-24" id="application">
              <div className="absolute top-0 left-0 right-0 bg-purple h-half"></div>
              <div className="overflow-hidden relative z-20">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">Application</span>
                </RevealRight>
              </div>

              <div className="w-full mb-8 md:mb-0 relative -mt-12 xl:-mt-20">
                <div className="relative">
                  <div className="container lg:px-32 relative z-20">
                    <div className="bg-purple-light p-8 md:p-16 xl:p-24">
                      <div className="mb-8 md:mb-12 text-center">
                        <span className="text-white font-semibold block text-2xl md:text-3xl mb-5 leading-extra-tight">Make an enquiry</span>
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

export default CourseTemplate

export const query = graphql`
  query CourseQuery($slug: String!) {
    datoCmsCourse(slug: { eq: $slug }) {
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
      level
      introText
      slug
      subject {
        slug
      }
      courseContentBlocks {
        ... on DatoCmsContent {
          id
          model { apiKey }
          heading
          content
        }
      }
    }
  }
`