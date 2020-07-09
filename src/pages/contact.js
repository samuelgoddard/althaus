import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactFormBasic from "../components/contactFormBasic";
import { motion } from "framer-motion"
import gsap from "gsap";
import Img from "gatsby-image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { RevealRight, GradientRevealLeft, GradientRevealRight, ImageReveal, ImageParallax } from "../components/revealHelpers"

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

class ContactPage extends React.Component {
  render () {    
    return (
      <>
        <SEO
          titleOverride={this.props.data.datoCmsContact.metaTags && this.props.data.datoCmsContact.metaTags.title ? this.props.data.datoCmsContact.metaTags.title : this.props.data.datoCmsContact.title}
          descriptionOverride={this.props.data.datoCmsContact.metaTags && this.props.data.datoCmsContact.metaTags.description ? this.props.data.datoCmsContact.metaTags.description : null}
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsContact.metaTags && this.props.data.datoCmsContact.metaTags.image ? this.props.data.datoCmsContact.metaTags.image.url : null}
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
                <div className="bg-purple pt-32 pb-40 md:pt-48 md:pb-56 lg:pb-64 xl:pt-48 relative">
                  <div className="container lg:px-32 relative xl:pb-">
                    <div className="flex flex-wrap items-start mt-16 md:mt-20">
                      <div className="w-full md:w-1/2 xl:w-5/12 relative z-20 mb-20 md:mb-0 md:-mt-12 xl:-mt-6">
                        <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-3">Contact</span>
                        <h1 className="text-5xl md:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-white mb-6 md:mb-8 md:whitespace-no-wrap">{ this.props.data.datoCmsContact.heroHeading }</h1>

                        <div className="w-11/12 md:w-full text-white text-lg md:text-xl mb-8" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsContact.heroText }}></div>

                        <a href={`tel:${ this.props.data.datoCmsContact.telephone }`} className="transition duration-500 text-pink ease-in-out text-lg md:text-xl xl:text-2xl font-medium block hover:opacity-25 focus:opacity-25">T: { this.props.data.datoCmsContact.telephone }</a>
                        
                        <a href={`mailto:${this.props.data.datoCmsContact.emailAddress }`} className="transition duration-500 text-pink ease-in-out text-lg md:text-xl xl:text-2xl font-medium block break-all hover:opacity-25 focus:opacity-25 mb-3">E: { this.props.data.datoCmsContact.emailAddress }</a>

                        <div className="mx-auto flex flex-wrap mb-6 md:mb-0">
                          <a href="https://www.linkedin.com/organization-guest/company/althausdigital?challengeId=AQGa3y8VWO5t5QAAAXM1eW7uSK-ZMkr6NbsaFlnte_XnhAzWWCP9q0sOE9cJX4-fIkLPoyLB7L-pp4O8Mnvj5JNliDTCyn-DqQ&submissionId=9553891c-b432-2016-8b95-fb45fd153b4c" rel="noopener noreferrer" target="_blank" className="block text-pink pl-0 p-3 lg:p-4 lg:pl-0" aria-label="linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 lg:h-5" viewBox="0 0 18.642 18.984">
                              <path id="Path_76" data-name="Path 76" d="M-347.279,214.572h-3.978V202.638h3.978Zm-1.818-14.515a2.236,2.236,0,0,1-2.238-2.236,2.235,2.235,0,0,1,2.238-2.233,2.236,2.236,0,0,1,2.236,2.233A2.237,2.237,0,0,1-349.1,200.057Zm16.4,14.515h-3.978v-6.45c0-1.439.142-3.288-1.834-3.288-2.008,0-2.144,1.566-2.144,3.184v6.554h-3.978V202.638h3.978v1.326H-341c.514,0,1.79-2.262,3.666-2.262,3.9,0,4.64,2.309,4.64,5.649Z" transform="translate(351.335 -195.588)" fill="currentColor"/>
                            </svg>
                          </a>
                          <a href="https://www.facebook.com/althausdigital/" rel="noopener noreferrer" target="_blank" className="block text-pink p-3 lg:p-4" aria-label="Facebook">
                            <svg id="Group_18" data-name="Group 18" className="h-4 lg:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.331 20">
                              <path id="Path_74" data-name="Path 74" d="M-297.661,205.073c-.016.148-.1.153-.212.153-.787,0-1.573,0-2.36,0h-.264v10.021h-4.125v-.293q0-4.732.005-9.461c0-.213-.056-.277-.271-.272-.579.015-1.157.005-1.753.005v-3.447h2.019v-.263c0-.764-.007-1.529.013-2.293a5.015,5.015,0,0,1,.415-1.919,3.36,3.36,0,0,1,2.739-1.975,7.48,7.48,0,0,1,1.107-.077c.913-.009,1.825,0,2.739,0h.249v3.429c-.091,0-.176,0-.263,0-.652.011-1.305,0-1.956.039a.853.853,0,0,0-.879.883c-.033.715-.008,1.433-.008,2.177h3.156C-297.43,202.893-297.549,203.982-297.661,205.073Z" transform="translate(306.641 -195.246)" fill="currentColor"/>
                            </svg>
                          </a>
                          <a href="https://twitter.com/AlthausDigital" rel="noopener noreferrer" target="_blank" className="block text-pink p-3 pr-0 lg:p-4 lg:pr-0" aria-label="Twitter">
                            <svg id="Group_20" data-name="Group 20" className="h-4 lg:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.969 18.667">
                              <path id="Path_75" data-name="Path 75" d="M-249.976,201.324c.009.2.015.405.015.609a13.316,13.316,0,0,1-13.408,13.408,13.336,13.336,0,0,1-7.224-2.117,9.491,9.491,0,0,0,1.124.067,9.458,9.458,0,0,0,5.853-2.017,4.719,4.719,0,0,1-4.4-3.273,4.738,4.738,0,0,0,.887.085,6.08,6.08,0,0,0,1.412-.165,4.572,4.572,0,0,1-3.611-4.621v-.059c0,.352,1.192.564,1.965.589a4.787,4.787,0,0,1-2.181-3.923,4.663,4.663,0,0,1,.595-2.369,13.334,13.334,0,0,0,9.692,4.924,4.759,4.759,0,0,1-.132-1.075,4.708,4.708,0,0,1,4.707-4.712,4.7,4.7,0,0,1,3.437,1.488,9.411,9.411,0,0,0,2.991-1.143,4.729,4.729,0,0,1-2.072,2.607,9.4,9.4,0,0,0,2.705-.741A9.557,9.557,0,0,1-249.976,201.324Z" transform="translate(270.593 -196.675)" fill="currentColor"/>
                            </svg>
                          </a>
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 xl:w-1/2 relative ml-auto pb-12 lg:pb-24">
                        <GradientRevealRight>
                        </GradientRevealRight>
                        <Img fluid={this.props.data.datoCmsContact.heroImage.fluid} className="relative z-10 mb-0 -mt-12 xl:pl-12 md:-mt-24" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Insight */}
            <section className="bg-purple relative -mt-16 md:-mt-16 xl:-mt-32 relative z-20 mb-12 md:mb-24">
              <div className="overflow-hidden">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">Hello</span>
                </RevealRight>
              </div>
              
              <div className="bg-white pb-12">
                <div className="container lg:px-32 -mt-16 md:-mt-16 lg:-mt-24 relative z-20">
                  <div className="flex flex-wrap items md:-mx-8">
                    <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 mb-12 md:mb-0 relative">
                      <div className="relative -mt-2 md:-mt-16 lg:-mt-20">
                        <div>
                          <GradientRevealLeft>
                          </GradientRevealLeft>
                        </div>
                        <div className="relative overflow-hidden">
                          <ImageParallax>
                            <div className="relative overflow-hidden mt-12 md:mt-24 xl:mt-32">
                              <ImageReveal>
                              </ImageReveal>
                              <Img fluid={ this.props.data.datoCmsContact.supportingImage.fluid} className="relative z-10 mb-0 pb-0" />
                            </div>
                          </ImageParallax>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pt-32 xl:pt-40">
                      <Tabs selectedTabClassName="border-t-2 border-l-2 border-r-2 border-b-2 text-purple border-purple">
                        <div className="flex flex-wrap items-center mb-4">
                          <span className="block mr-2">Are you a:</span>
                          <TabList className="flex flex-wrap">
                            <Tab className="border-t-2 border-l-2 border-r-2 border-b-2 border-transparent p-1 px-3 cursor-pointer uppercase">Learner</Tab>
                            <Tab className="border-t-2 border-l-2 border-r-2 border-b-2 border-transparent p-1 px-3 cursor-pointer uppercase">Employer</Tab>
                          </TabList>
                        </div>

                        <TabPanel>
                          <ContactFormBasic netlifyName="Contact Form (Learner)" color={"pink"} />
                        </TabPanel>
                        <TabPanel>
                          <ContactFormBasic netlifyName="Contact Form (Employer)" color={"purple-light"} />
                        </TabPanel>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Footer contactPage={true} />
          </motion.div>
        </motion.div>
      </>
    )
  }
}

export default ContactPage

export const query = graphql`
  query {
    datoCmsContact {
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      title
      emailAddress
      telephone
      address
      heroHeading
      heroText
      heroImage {
        fluid(
          imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid
        }
      }
      supportingImage {
        fluid(
          imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`