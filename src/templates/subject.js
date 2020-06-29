import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import Arrow from "../images/arrow.inline.svg";
// import Img from "gatsby-image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealLeft, RevealRight } from "../components/revealHelpers"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class SubjectTemplate extends React.Component {
  
  render () {

    return (
      <>
        <SEO title={ this.props.data.datoCmsSubject.title } />

        <section>
          <div className="absolute top-0 left-0 right-0 z-30">
            <div>
              <Header color="black" />
            </div>
          </div>
          
          {/* Hero */}
          <div className="bg-white pt-48 md:pt-56 xl:pt-64">
            <div className="bg-purple mb-6 md:mb-10">
              <div className="container lg:px-32 pb-12">
                <div className="flex flex-wrap items-center pb-0 md:pb-20 lg:pb-24">
                  <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <span className="uppercase font-semibold text-purple text-xl md:text-2xl block mb-8 -mt-10">Subject</span>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-white mb-6 md:mb-8">{ this.props.data.datoCmsSubject.title }</h1>

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
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24 xl:mb-32">
          <div className="relative z-20 overflow-hidden mb-12 md:mb-20">
            <RevealRight>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right scroll-text--pink text-right text-transparent leading-none block">{ this.props.data.datoCmsSubject.title }</span>
            </RevealRight>
          </div>
          <div className="container relative">
            <div className="w-full lg:w-7/12 mx-auto content">
              <div className="mb-16 md:mb-12">
                <h2 className="mb-6 md:mb-10 text-center">{ this.props.data.datoCmsSubject.introText }</h2>

                <div className="css-cols text-lg" dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsSubject.content }}></div>
              </div>

              <div className="mx-auto text-center">
                <Link to="/contact" className="inline border-2 border-pink uppercase text-purple p-4 px-6 font-medium text-lg">Get In Touch</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24 xl:mb-32 overflow-hidden">
          <RevealLeft>
            <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text scroll-text--purple text-transparent leading-none block">Industry Knowledge</span>
          </RevealLeft>
          <div className="gradient-ltr py-12 md:py-16 text-white relative z-10 -mt-6 xl:-mt-12">
            <div className="container lg:px-32">
              <span className="text-2xl md:text-3xl xl:text-4xl block text-center mb-8 md:mb-12 font-semibold">Available Courses</span>

              {this.props.data.allDatoCmsCourse.edges.length > 0 ? (
                <div className="flex flex-wrap md:-mx-6 pb-8 md:pb-12">
                  {this.props.data.allDatoCmsCourse.edges.map(({ node }, i) => {
                    return (
                      <div className="w-full md:w-1/2 md:px-6" key={i}>
                        <Link to={`courses/${node.slug}-level-${node.level}`} className="text-white flex flex-wrap items-center border-t-2 border-white py-4 md:py-6 xl:py-8">
                          <div className="flex-1 pr-8">
                            <span className="text-xl md:text-2xl xl:text-3xl block font-semibold mb-2">{ node.title }</span>
                            <span className="md:text-lg block">Level { node.level }</span>
                          </div>
                          <div className="w-12 text-white ml-auto">
                            <Arrow />
                          </div>
                        </Link>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <span className="block text-lg text-center">Course coming soon &hellip;</span>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default SubjectTemplate

export const query = graphql`
  query SubjectQuery($slug: String!) {
    datoCmsSubject(slug: { eq: $slug }) {
      title
      introText
      content
      slug
    }
    allDatoCmsCourse(filter: {subject: {slug: {eq: $slug}}}) {
      edges {
        node {
          level
          title
          slug
        }
      }
    }
  }
`