import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
// import { Link } from "gatsby"
import gsap from "gsap";
import { motion } from "framer-motion"
import Img from "gatsby-image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

class PoliciesPage extends React.Component {

  render () {

    return (
      <>
        <SEO
          titleOverride={this.props.data.datoCmsPoliciesLanding.metaTags && this.props.data.datoCmsPoliciesLanding.metaTags.title ? this.props.data.datoCmsPoliciesLanding.metaTags.title : this.props.data.datoCmsPoliciesLanding.title}
          descriptionOverride={this.props.data.datoCmsPoliciesLanding.metaTags && this.props.data.datoCmsPoliciesLanding.metaTags.description ? this.props.data.datoCmsPoliciesLanding.metaTags.description : null}
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsPoliciesLanding.metaTags && this.props.data.datoCmsPoliciesLanding.metaTags.image ? this.props.data.datoCmsPoliciesLanding.metaTags.image.url : null}
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
              <div className="bg-purple pt-48 md:pt-56 xl:pt-64 mb-20 md:mb-20 xl:mb-24">
                <div className="gradient-ltr">
                  <div className="container lg:px-32">
                    <div className="flex flex-wrap items-start pb-0 md:pb-20 lg:pb-24">
                      <div className="w-full md:w-1/2 mb-8 md:mb-0 relative z-20">
                        <span className="uppercase font-semibold text-white text-xl md:text-2xl block mb-8 -mt-10">Policies</span>
                        <h1 className="text-5xl xl:text-6xl font-medium text-white mb-6 md:mb-8 pr-8">{ this.props.data.datoCmsPoliciesLanding.heroHeading }</h1>
                      </div>

                      <div className="w-full md:w-1/2 -mb-12 md:-mb-0 md:-mt-16 xl:-mt-24 relative z-10">
                        <Img fluid={ this.props.data.datoCmsPoliciesLanding.heroImage.fluid } className="relative z-10 mb-0 pb-0 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="mb-24 xl:mb-32">
              <div className="container relative">
                <div className="w-full lg:w-7/12 mx-auto content">
                  <div className="mb-12 md:mb-16 xl:mb-20">
                    <div className="text-lg md:text-xl font-semibold" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsPoliciesLanding.introText }}></div>


                    {this.props.data.allDatoCmsPolicy.edges.reverse().map(({ node }, i) => {
                      return (
                        <div className="w-full border-b border-pink py-8 md:py-12" key={i}>
                          <h2 className="pb-6 mb-0">{ node.title }</h2>
                          <span className="w-20 h-2 bg-pink block mb-8"></span>

                          <div dangerouslySetInnerHTML={{ __html: node.content }} className="content"></div>

                          { node.policyPdf && (
                            <div className="flex flex-wrap mt-12">
                              {/* <Link to="/contact" className="inline border-2 border-pink uppercase text-purple p-3 px-6 font-medium text-lg mr-5 mb-4">View Policy</Link> */}
                              <a href={ node.policyPdf.url } target="_blank" rel="noopener noreferrer" className="btn btn--border text-purple text-base"><span className="btn__inner">Download PDF</span></a>
                            </div>
                          )}
                        </div>
                      )
                    })}
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

export default PoliciesPage

export const query = graphql`
  query {
    datoCmsPoliciesLanding {
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
      introText
    }
    allDatoCmsPolicy {
      edges {
        node {
          title
          content
          policyPdf {
            url
          }
          slug
        }
      }      
    }
  }
`