import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import ContactForm from "../components/contactForm"
import { Link } from "gatsby"
import Arrow from "../images/arrow.inline.svg";
import gsap from "gsap";
import Img from "gatsby-image";
import { motion } from "framer-motion";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealLeft, RevealRight, GradientRevealLeft, ImageReveal, ImageParallax } from "../components/revealHelpers"
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

class LearnersPage extends React.Component {
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
          titleOverride={this.props.data.datoCmsLearner.metaTags && this.props.data.datoCmsLearner.metaTags.title ? this.props.data.datoCmsLearner.metaTags.title : this.props.data.datoCmsLearner.title}
          descriptionOverride={this.props.data.datoCmsLearner.metaTags && this.props.data.datoCmsLearner.metaTags.description ? this.props.data.datoCmsLearner.metaTags.description : null}
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsLearner.metaTags && this.props.data.datoCmsLearner.metaTags.image ? this.props.data.datoCmsLearner.metaTags.image.url : null}
        />

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade}>
            <section className="">
              <div className="absolute top-0 left-0 right-0 z-30">
                <div>
                  <Header color="white" />
                </div>
              </div>
              
              {/* Hero */}
              <div className="bg-purple pt-48 md:pt-56 xl:pt-64">
                <div className="bg-purple-light">
                  <div className="container lg:px-32 pb-12">
                    <div className="flex flex-wrap pb-0">
                      <div className="w-full md:w-1/2 xl:w-1/2 mb-8 md:mb-0">
                        <span className="uppercase font-semibold text-white text-xl md:text-2xl block mb-8 -mt-10">Learners</span>
                        <h1 className="text-5xl xl:text-6xl font-medium text-white mb-6 md:mb-8">{ this.props.data.datoCmsLearner.heroHeading }</h1>

                        <div className="w-full mb-8">
                          <Link to="/courses" className="text-md text-white font-semibold uppercase flex flex-wrap items-center btn-arrow">
                            <span className="block">View Courses</span>
                            <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                          </Link>
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 xl:w-1/2 md:-mt-16 xl:-mt-24 self-end ml-auto">
                        <Img fluid={ this.props.data.datoCmsLearner.heroImage.fluid } className="w-full" />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center bg-white p-4">
                      <div className="w-full md:w-1/2 lg:w-1/4 border-b-2 md:border-0 md:border-b-0 border-pink">
                        <AnchorLink to={`/learners/#why-althaus`} title="Why Althaus?" className="block text-lg text-purple text-center font-semibold px-4 py-6 md:py-8 hover:text-pink focus:text-pink">
                          Why Althaus?
                        </AnchorLink>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/4 border-b-2 md:border-0 lg:border-l-2 border-pink">
                        <AnchorLink to={`/learners/#our-courses`} title="Our Courses" className="block text-lg text-purple text-center font-semibold px-4 py-6 md:py-8 hover:text-pink focus:text-pink">
                          Our Courses
                        </AnchorLink>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/4 border-b-2 md:border-0 lg:border-l-2 border-pink">
                        <AnchorLink to={`/learners/#enquire-online`} title="Find An Apprenticeship" className="block text-lg text-purple text-center font-semibold px-4 py-6 md:py-8 hover:text-pink focus:text-pink">
                          Enquire Online
                        </AnchorLink>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/4 lg:border-l-2 border-pink">
                        <AnchorLink to={`/learners/#contact`} title="Get In Touch" className="block text-lg text-purple text-center font-semibold px-4 py-6 md:py-8 hover:text-pink focus:text-pink">
                          Get In Touch
                        </AnchorLink>
                      </div>
                    </div>
                  </div>
                  <div className="-mb-16 xl:-mb-32 relative z-20 overflow-hidden">
                    <RevealLeft>
                        <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent leading-none -mt-4 xl:-mt-8 block">{ this.props.data.datoCmsLearner.heroScrollingText }</span>
                    </RevealLeft>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Tabbed Content */}
            <section>
              <div className="bg-white relative z-10 pb-40 md:pb-56 xl:pb-64 pt-24 md:pt-16 xl:pt-24">
                <div className="container lg:px-32 relative z-20">

                    <Tabs selectedTabClassName="border-t-2 border-l-2 border-r-2 border-b-0-forced text-pink">
                      <TabList className="flex flex-wrap md:pt-24 xl:pt-32 mb-8 md:mb-16 xl:mb-24">
                        <Tab className="w-full md:w-1/2 border-b-2 border-pink text-center p-6 block text-xl md:text-2xl xl:text-3xl font-semibold bg-white cursor-pointer">Digital Apprenticeship.</Tab>
                        <Tab className="w-full md:w-1/2 border-b-2 border-pink text-center p-6 block text-xl md:text-2xl xl:text-3xl font-semibold bg-white cursor-pointer">Learner to Leader.</Tab>
                      </TabList>

                      <TabPanel>
                        <div className="w-full md:w-9/12 xl:w-8/12 mx-auto content">
                          <div className="mb-12 md:mb-16 xl:mb-20">
                            <div className="content content--fancy" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsLearner.digitalApprenticeshipsText}}></div>

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
                            <div className="content content--fancy" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsLearner.learnersToLeadersText }}></div>

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
            </section>

            {/* Supporting Content Block */}
            <section className="bg-white -mt-16 md:-mt-16 xl:-mt-32 relative z-20" id="why-althaus">
              <div className="overflow-hidden">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">{ this.props.data.datoCmsLearner.supportingContentBlock.scrollingText }</span>
                </RevealRight>
              </div>
              
              <div className="bg-purple pb-24 md:pb-32 xl:pb-40">
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
                              <Img fluid={ this.props.data.datoCmsLearner.supportingContentBlock.image.fluid } className="relative z-10 mb-0 pb-0" />
                            </div>
                          </ImageParallax>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pt-32 xl:pt-40 text-white">
                      <h2 className="pb-6 mb-0">{ this.props.data.datoCmsLearner.supportingContentBlock.heading }</h2>
                      <span className="w-20 h-2 bg-pink block mb-8"></span>

                      <div className="mb-8" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsLearner.supportingContentBlock.content }}></div>

                      <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center btn-arrow">
                        <span className="block">Find out more</span>
                        <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Courses */}
            <section className="bg-purple md:pb-8 relative mb-8 pb-24 md:pb-32 lg:pb-40 xl:pb-64 pt-2" id="our-courses">
              <div className="overflow-hidden mb-8 md:mb-12 xl:mb-16">
                <RevealLeft>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent leading-none block">Our Courses</span>
                </RevealLeft>
              </div>

              <div className="container lg:px-32 mb-12 md:mb-16 xl:mb-24">
                <div className="flex flex-wrap md:-mx-6 pb-8 md:pb-12">
                  {this.props.data.allDatoCmsSubject.edges.map(({ node }, i) => {
                    // const length = (this.props.data.allDatoCmsSubject.edges.length - 1);
                    return (
                      <div className="w-full md:w-1/2 md:px-6" key={i}>
                        <Link to={`/courses/${node.slug}`} className="text-white flex flex-wrap items-center border-t-2 border-purple-light py-4 md:py-6 xl:py-8 hover:text-pink focus:text-pink transition duration-300 ease-in-out">
                          <div className="flex-1 pr-12">
                            <span className="text-xl md:text-2xl xl:text-3xl block font-semibold mb-2">{ node.title }</span>
                            <div className="md:text-lg block" dangerouslySetInnerHTML={{ __html: node.teaserText}}></div>
                          </div>
                          <div className="w-12 text-pink ml-auto">
                            <Arrow />
                          </div>
                        </Link>
                      </div>
                    )
                  })}
                </div>
                
                <div className="w-full mx-auto text-center">
                  <Link to="/courses" className="inline-block border border-pink uppercase text-white p-4 px-6 font-medium text-lg">Find out more</Link>
                </div>
              </div>
            </section>

            {/* Application Form */}
            <section className="pb-12 md:pb-8 lg:pb-8 xl:pb-24 -mt-24 md:-mt-32 lg:-mt-40 xl:-mt-64" id="enquire-online">
              <div className="overflow-hidden relative z-20">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">Enquire Online</span>
                </RevealRight>
              </div>

              <div className="w-full mb-8 md:mb-0 relative -mt-12">
                <div className="relative">
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

export default LearnersPage

export const query = graphql`
  query {
    datoCmsLearner {
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
      heroScrollingText
      digitalApprenticeshipsText
      learnersToLeadersText
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
    allDatoCmsSubject {
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