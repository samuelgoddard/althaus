import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
// import { Link } from "gatsby";
import Img from "gatsby-image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GradientRevealRight } from "../components/revealHelpers"


if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class ResourcePage extends React.Component {
  render () {
    return (
      <>
        <SEO title={ this.props.data.datoCmsResource.title } />

        <section>
          <div className="absolute top-0 left-0 right-0 z-30">
            <div>
              <Header color="white" />
            </div>
          </div>
          
          {/* Hero */}
          <div className="overflow-hidden pb-0 md:pb-12">
            <div className="bg-purple pt-32 md:pt-48:pt-48 relative">
              <div className="container lg:px-32 relative">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-1/2 relative z-20 mb-0 md:mb-0">
                    <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-3">{ this.props.data.datoCmsResource.category.title }</span>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-white mb-2 md:mb-8">{ this.props.data.datoCmsResource.title }</h1>
                  </div>

                  <div className="w-full md:w-1/2 relative mt-16 md:mt-48 -mb-12 md:-mb-24 xl:-mb-24">
                    <GradientRevealRight>
                    </GradientRevealRight>
                    <Img fluid={this.props.data.datoCmsResource.heroImage.fluid } className="relative z-10 mb-0 pb-0" />
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
                          <Img fluid={ block.image.fluid } className="w-full relative mb-0 pb-0" />
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
      </>
    )
  }
}

export default ResourcePage

export const query = graphql`
  query ResourceQuery($slug: String!) {
    datoCmsResource(slug: { eq: $slug }) {
      title
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