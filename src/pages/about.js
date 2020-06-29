import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import Arrow from "../images/arrow.inline.svg";
import Img from "gatsby-image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealLeft, RevealRight, GradientRevealLeft, GradientRevealRight, ImageReveal } from "../components/revealHelpers"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class AboutPage extends React.Component {
  
  render () {

    return (
      <>
        <SEO title="About" />

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
                        <Link to="/" className="text-md text-purple font-semibold uppercase flex flex-wrap items-center">
                          <span className="block">Discover More</span>
                          <span className="block ml-4 w-8"><Arrow /></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 relative ml-auto">
                    <GradientRevealRight>
                    </GradientRevealRight>
                    <img src="https://placedog.net/1200/640" alt="placeholder" className="relative z-10 mb-0 pb-0 pt-12 md:pt-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        {/* Our Mission */}
        <section>
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
                      <div className="relative overflow-hidden -mt-12">
                        <div className="relative overflow-hidden">
                          <ImageReveal>
                          </ImageReveal>
                          <Img fluid={ this.props.data.datoCmsAbout.missionImage.fluid } alt={ this.props.data.datoCmsAbout.missionHeading } className="relative z-10  mb-12 md:mb-20 xl:mb-32" />
                        </div>
                      </div>
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
                  <Link to="/learners" className="xl:text-lg text-white bg-purple-light px-5 py-4 uppercase font-semibold">Learners</Link>
                  <Link to="/employers" className="xl:text-lg text-white bg-pink px-5 py-4 uppercase font-semibold ml-3">Employers</Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 order-1 md:order-2 mb-8 md:mb-0 relative mt-12 md:mt-24">
                <div className="relative">
                  <div>
                    <GradientRevealRight>
                    </GradientRevealRight>
                  </div>
                  <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden">
                      <ImageReveal>
                      </ImageReveal>
                      <Img fluid={ this.props.data.datoCmsAbout.contentBlockImage.fluid } alt={ this.props.data.datoCmsAbout.contentBlockHeading } className="relative z-10 mb-0 mt-12 md:mt-20" />
                    </div>
                  </div>
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
                    <div className="bg-pink w-full text-white h-full relative">
                      <Img fluid={node.image.fluid} alt={node.title} className="object-cover object-center bg-multiply" />
                      <div className="p-5 md:p-8 absolute bottom-0 left-0 right-0 z-10">
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
      </>
    )
  }
}

export default AboutPage

export const query = graphql`
  query {
    datoCmsAbout {
      heroHeading
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
    allDatoCmsTeam {
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