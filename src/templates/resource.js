import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
// import { Link } from "gatsby";
import Img from "gatsby-image";
import gsap from "gsap";
import { motion } from "framer-motion"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GradientRevealRightLarge, ImageReveal } from "../components/revealHelpers"

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

class ResourcePage extends React.Component {
  render () {
    return (
      <>
        <SEO
          titleOverride={this.props.data.datoCmsResource.metaTags && this.props.data.datoCmsResource.metaTags.title ? this.props.data.datoCmsResource.metaTags.title : this.props.data.datoCmsResource.title}
          descriptionOverride={this.props.data.datoCmsResource.metaTags && this.props.data.datoCmsResource.metaTags.description ? this.props.data.datoCmsResource.metaTags.description : null}
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsResource.metaTags && this.props.data.datoCmsResource.metaTags.image ? this.props.data.datoCmsResource.metaTags.image.url : null}
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
              <div className="overflow-hidden pb-0 md:pb-12">
                <div className="bg-purple pt-32 md:pt-40 relative">
                  <div className="container lg:px-32 relative">
                    <div className="flex flex-wrap items-center">
                      <div className="w-full md:w-1/2 relative z-20 mb-12 md:mb-0">
                        <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-3">{ this.props.data.datoCmsResource.category.title }</span>
                        <h1 className="text-5xl md:text-5xl lg:text-6xl font-medium text-white mb-2 md:mb-8">{ this.props.data.datoCmsResource.title }</h1>
                      </div>

                      <div className="w-full md:w-1/2 relative -mb-16 md:-mb-20">
                        <GradientRevealRightLarge>
                        </GradientRevealRightLarge>
                        <Img fluid={this.props.data.datoCmsResource.heroImage.fluid } className="relative z-10 pb-0 mt-10 md:mt-16" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-32 bg-white"></div>
                </div>
              </div>
            </section>

            <section className="mb-24 xl:mb-32">
              <div className="container relative">
                <div className="w-full lg:w-7/12 mx-auto content">
                  <div className="mb-12 md:mb-16 xl:mb-20">
                    <div className="text-lg md:text-xl font-semibold mb-12 md:mb-24 xl:mb-32" dangerouslySetInnerHTML={{ __html:this.props.data.datoCmsResource.introText }}></div>

                    {
                      this.props.data.datoCmsResource.contentBlocks.map((block, i) => (
                        <div key={block.id} className="mb-8 xl:mb-12">
                          {
                            block.model.apiKey === 'content' &&
                              <>
                                <h2 className="pb-6 mb-0 h3">{ block.heading }</h2>
                                <span className="w-20 h-2 bg-pink block mb-8"></span>

                                <div className="block md:text-lg" dangerouslySetInnerHTML={{ __html: block.content }}></div>
                              </>
                          }
                          {
                            block.model.apiKey === 'image' &&
                            <div className="relative overflow-hidden">
                              <ImageReveal>
                              </ImageReveal>
                              <Img fluid={ block.image.fluid } className="w-full relative mb-0 pb-0" />
                            </div>
                          }
                        </div>
                      ))
                    }
                  </div>
                  
                  {/* @TODO ??? Integrate this */}
                  {/* <div className="mx-auto text-center">
                    <Link to="/contact" className="inline border-2 border-pink uppercase text-purple p-4 px-6 font-medium text-lg">Download PDF</Link>
                  </div> */}
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

export default ResourcePage

export const query = graphql`
  query ResourceQuery($slug: String!) {
    datoCmsResource(slug: { eq: $slug }) {
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
          ...GatsbyDatoCmsFluid
        }
      }
      category {
        title
      }
      introText
      contentBlocks {
        ... on DatoCmsContent {
          id
          model { apiKey }
          heading
          content
        }
        ... on DatoCmsImage {
          id
          model { apiKey }
          image {
            fluid(
              imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
      slug
    }
  }
`