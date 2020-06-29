import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import Arrow from "../images/arrow.inline.svg";
import Img from "gatsby-image"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealLeft, RevealRight, GradientRevealLeft, GradientRevealRight, ImageReveal, BlockRevealLeft } from "../components/revealHelpers"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class CoursesPage extends React.Component {
  render () {
    return (
      <>
        <SEO title="Courses" />

        <section>
          <div className="absolute top-0 left-0 right-0 z-30">
            <div>
              <Header color="black" />
            </div>
          </div>
          
          {/* Hero */}
          <div className="bg-white pt-48 md:pt-56 xl:pt-64">
            <div className="gradient-ltr">
              <div className="container lg:px-32 pb-12">
                <div className="flex flex-wrap items-center pb-0 md:pb-20 lg:pb-24">
                  <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-8 -mt-10">Courses</span>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-white mb-6 md:mb-8">{ this.props.data.datoCmsCoursesLanding.heroHeading }</h1>

                    <div className="w-full">
                      <Link to="/contact" className="text-md text-white font-semibold uppercase flex flex-wrap items-center">
                        <span className="block">Get in touch</span>
                        <span className="block ml-4 w-8"><Arrow /></span>
                      </Link>
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 mt-16 md:mt-20">
                  </div>
                </div>

                <div className="flex flex-wrap items-center bg-white py-8 md:py-4  px-4">
                  {this.props.data.allDatoCmsSubject.edges.map(({ node }, i) => {
                    return (
                      <div className={ i === 0 ? `w-full md:w-1/2 lg:w-1/4 mb-3 lg:mb-0` : `w-full md:w-1/2 lg:w-1/4 mb-3 lg:mb-0 lg:border-l-2 lg:border-pink`} key={i}>
                        { node.teaserIcon && (
                          <img src={node.teaserIcon.url} alt={node.title} className="w-12 md:w-16 xl:w-20 mx-auto mb-3" />
                        )}
                        <span className="block text-lg text-purple text-center">{ node.title }</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="-mb-16 xl:-mb-32 relative z-20 overflow-hidden">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right scroll-text--white text-right text-transparent leading-none block">{ this.props.data.datoCmsCoursesLanding.scrollingText}</span>
                </RevealRight>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section>
          <div className="bg-purple relative z-10 pb-40 md:pb-56 xl:pb-64 pt-24 md:pt-16 xl:pt-24">
            <div className="container lg:px-32 relative z-20">
              <div className="flex flex-wrap">
                <div className="w-full md:w-10/12 md:mx-auto content text-white md:pt-24 xl:pt-32">
                  <h2 className="mb-6 md:mb-10">{ this.props.data.datoCmsCoursesLanding.introText }</h2>

                  <div className="mb-16 xl:mb-24 css-cols text-lg" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsCoursesLanding.content }}>
                  </div>
                  
                  { this.props.data.datoCmsCoursesLanding.quote && (
                    <div className="w-10/12 md:w-10/12 xl:w-9/12 mx-auto">
                      <span className="text-8xl md:text-9xl xl:text-10xl leading-none font-semibold block text-center text-pink">“</span>
                      <span className="text-3xl md:text-4xl leading-extra-tight font-semibold block text-center -mt-12 md:-mt-16 xl:-mt-24 mb-12">{ this.props.data.datoCmsCoursesLanding.quote}</span>

                      <div className="mx-auto text-center">
                        <Link to="/contact" className="inline border border-pink uppercase text-white p-4 px-6 font-medium text-lg">Get in touch</Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>



        {this.props.data.allDatoCmsSubject.edges.map(({ node }, i) => {
          const length = (this.props.data.allDatoCmsSubject.edges.length - 1);
          return (
            <section key={i} className={ i === length ? `bg-transparent md:pb-8 lg:pb-8 xl:pb-24 -mt-16 md:-mt-16 xl:-mt-32 relative z-20 mb-16 xl:mb-24` : `bg-transparent md:pb-8 lg:pb-8 xl:pb-24 relative -mt-16 md:-mt-16 xl:-mt-32 relative z-20 mb-32 md:mb-40 xl:mb-56`}>
              { i%2 === 0 ? (
                <div className="overflow-hidden">
                  <RevealRight>
                    <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">{ node.teaserScrollingText }</span>
                  </RevealRight>
                </div>
              ) : (
                <div className="overflow-hidden">
                  <RevealLeft>
                    <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text scroll-text--purple text-transparent leading-none -mt-4 xl:-mt-8 block">{ node.teaserScrollingText }</span>
                  </RevealLeft>
                </div>
              )}
              
              <div className="container lg:px-32 -mt-10 md:-mt-16 lg:-mt-24 xl:-mt-56 relative z-20">
                <div className="flex flex-wrap items md:-mx-8">
                  { i%2 === 0 && (
                    <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 mb-8 md:mb-0 relative">
                      <div className="relative">
                        <div>
                          <GradientRevealLeft>
                          </GradientRevealLeft>
                        </div>
                        <div className="relative overflow-hidden pt-12 md:pt-24 xl:pt-32">
                          <div className="relative overflow-hidden">
                            <ImageReveal>
                            </ImageReveal>
                            <Img fluid={node.teaserImage.fluid} alt={node.title} className="relative z-10 mb-0 pb-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 md:pt-32 xl:pt-64 order-2 md:order-1">
                    { node.teaserIcon && (
                      <img src={node.teaserIcon.url} alt={node.title} className="w-12 md:w-16 mb-4" />
                    )}
                    <div className="content">
                      <h2 className="pb-6 mb-0">{ node.title }</h2>
                      <span className="w-20 h-2 bg-pink block mb-8"></span>

                      <div className="mb-8" dangerouslySetInnerHTML={{ __html: node.teaserText }}>
                    </div>
                    </div>

                    <Link to={`/courses/${ node.slug}`} className="text-md text-pink font-semibold uppercase flex flex-wrap items-center">
                      <span className="block">View Courses</span>
                      <span className="block ml-4 w-8"><Arrow /></span>
                    </Link>
                  </div>

                  { i%2 !== 0 && (
                    <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 order-1 md:order-2 mb-8 md:mb-0 relative">
                      <div className="relative">
                          <div>
                            <GradientRevealRight>
                            </GradientRevealRight>
                          </div>
                          <div className="relative overflow-hidden pt-12 md:pt-24 xl:pt-32">
                            <div className="relative overflow-hidden">
                              <ImageReveal>
                              </ImageReveal>
                              <Img fluid={node.teaserImage.fluid} alt={node.title} className="relative z-10 mb-0 pb-0" />
                            </div>
                          </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )
        })}

        {/* Application Form */}
        <section className="bg-white pb-12 md:pb-8 lg:pb-8 xl:pb-24">
          <div className="overflow-hidden relative z-20">
            <RevealRight>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">Application</span>
            </RevealRight>
          </div>

          <div className="w-full mb-8 md:mb-0 relative -mt-12 md:-mt-20 xl:-mt-40">
            <div className="relative">
              <div className="pt-8 md:pt-16 xl:pt-24">
                <BlockRevealLeft>
                </BlockRevealLeft>
              </div>

              <div className="container lg:px-32 relative z-20">
                <div className="gradient-ltr p-8 md:p-16 xl:p-24">
                  <div className="mb-8 text-center">
                    <span className="text-white font-semibold block text-2xl md:text-3xl mb-5 leading-extra-tight">Want to know more information about our courses?</span>
                    <span className="text-white block text-sm md:text-base lg:text-lg xl:text-xl">Fill in the form below and we will be in touch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default CoursesPage

export const query = graphql`
  query {
    datoCmsCoursesLanding {
      title
      heroHeading
      scrollingText
      introText
      content
      quote
    }
    allDatoCmsSubject {
      edges {
        node {
          title
          teaserText
          teaserIcon {
            url
          }
          teaserImage {
            fluid(
              imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
              ...GatsbyDatoCmsFluid
            }
          }
          teaserScrollingText
          slug
        }
      }      
    }
  }
`