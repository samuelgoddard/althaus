import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Teaser from "../components/teaser"
import { Link } from "gatsby"
import gsap from "gsap";
import Img from "gatsby-image";
import { motion } from "framer-motion"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealLeft, GradientRevealRightLarge } from "../components/revealHelpers"

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

class ResourcesPage extends React.Component {
  render () {
    return (
      <>
        <SEO
          titleOverride={this.props.data.datoCmsResourcesLanding.metaTags && this.props.data.datoCmsResourcesLanding.metaTags.title ? this.props.data.datoCmsResourcesLanding.metaTags.title : this.props.data.datoCmsResourcesLanding.title}
          descriptionOverride={this.props.data.datoCmsResourcesLanding.metaTags && this.props.data.datoCmsResourcesLanding.metaTags.description ? this.props.data.datoCmsResourcesLanding.metaTags.description : null}
          pathnameOverride={this.props.location.pathname}
          imageOverride={this.props.data.datoCmsResourcesLanding.metaTags && this.props.data.datoCmsResourcesLanding.metaTags.image ? this.props.data.datoCmsResourcesLanding.metaTags.image.url : null}
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
                <div className="bg-white pt-32 md:pt-48 md:pb-24 xl:pt-48 relative">
                  <div className="container lg:px-32 relative">
                    <div className="flex flex-wrap items-center">
                      <div className="w-full md:w-1/2 relative z-20 mb-8 md:mb-0 md:-mt-8">
                        <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-3">Resources</span>
                        <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium text-purple mb-6 md:mb-8">{ this.props.data.datoCmsResourcesLanding.heroHeading }</h1>

                        <div className="w-11/12 md:w-10/12" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsResourcesLanding.heroText }}></div>
                      </div>

                      <div className="w-full md:w-1/2 relative pb-12 md:pb-20 mt-24 ml-auto -mb-12 md:mb-0">
                          <GradientRevealRightLarge>
                          </GradientRevealRightLarge>
                          <Img fluid={ this.props.data.datoCmsResourcesLanding.heroImage.fluid } className="relative z-10 mb-0 pb-12 lg:pb-24 -mt-12 xl:pl-12 md:-mt-24" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Listings */}
            <section id="resources">
              <div className="pt-12 md:pt-24 pb-12 md:pb-24 overflow-hidden relative z-10">
                <div className="bg-purple absolute top-0 left-0 right-0 h-screen w-full"></div>
                <div className="container lg:px-32 relative text-white text-center">
                  <span className="h2 block mb-6 md:mb-8 font-semibold">Filter by</span>
                  <div className="flex flex-wrap justify-center">
                    <Link to="/resources/#resources" className="rounded rounded-full bg-purple-light uppercase font-semibold xl:text-lg px-5 xl:px-8 py-2 xl:py-4 mx-1 mb-3 xl:mb-5 xl:mx-3">All</Link>
                    {this.props.data.allDatoCmsResourceCategory.edges.map(({ node }, i) => {
                      return (
                        <Link key={i} to={`/resources/${node.slug}/#resources`} className="rounded rounded-full border-2 border-purple-light uppercase font-semibold xl:text-lg px-5 xl:px-8 py-2 xl:py-4 mx-1 mb-3 xl:mb-5 xl:mx-3">{ node.title }</Link>
                      )
                    })}
                  </div>
                </div>

                <RevealLeft>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent">Useful Resources</span>
                </RevealLeft>

                <div className="container lg:px-32 relative text-white -mt-20 lg:-mt-24 xl:-mt-40">
                  <div className="flex flex-wrap md:-mx-6">
                    {this.props.data.allDatoCmsResource.edges.map(({ node }, i) => {
                      return (
                        <div key={i} className="w-full md:w-1/2 md:px-6 mb-8 md:mb-12">
                        { node.externalResourceUrl ? (
                          <a href={node.externalResourceUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Teaser heading={node.title} description={ node.teaserDescription } image={node.heroImage } />
                          </a>
                          ) : (
                          <Link to={`/resources/${ node.slug }`} className="w-full">
                            <Teaser heading={node.title} description={ node.teaserDescription } image={node.heroImage } />
                          </Link>
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

export default ResourcesPage

export const query = graphql`
  query {
    datoCmsResourcesLanding {
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
      heroText
      heroImage {
        fluid(
          imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid
        }
      }
      slug
    }
    allDatoCmsResourceCategory {
      edges {
        node {
          title
          slug
        }
      }
    }
    allDatoCmsResource {
      edges {
        node {
          title
          heroImage {
            fluid(
              imgixParams: {w: "720", h: "420", fit: "crop", crop: "faces, edges"}) {
              ...GatsbyDatoCmsFluid
            }
          }
          externalResourceUrl
          teaserDescription
          slug
        }
      }      
    }
  }
`