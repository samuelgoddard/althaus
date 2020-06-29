import React from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import Arrow from "../images/arrow.inline.svg";
import { Link } from "gatsby";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealLeft, RevealRight, GradientRevealLeft, GradientRevealRight, ImageReveal } from "../components/revealHelpers"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class CareersPage extends React.Component {
  render () {
    return (
      <>
        <SEO title="Careers" />

        <section>
          <div className="absolute top-0 left-0 right-0 z-30">
            <div>
              <Header color="white" />
            </div>
          </div>
          
          {/* Hero */}
          <div className="overflow-hidden">
            <div className="bg-purple pt-32 pb-0 md:pt-48 md:pb-12 xl:pt-48 relative">
              <div className="container lg:px-32 relative">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-1/2 xl:w-5/12 relative z-20 mb-8 md:mb-0 md:-mt-12 xl:-mt-24">
                    <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-3">Careers</span>
                    <h1 className="text-5xl md:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-white mb-6 md:mb-8 md:whitespace-no-wrap">We hire great<br/>people who<br/>do great work!</h1>

                    <p className="w-11/12 md:w-10/12 text-white text-lg md:text-xl">Work with us at althaus and be part of our team of game-changers. Our job openings can be found right here.</p>
                  </div>

                  <div className="w-full md:w-1/2 xl:w-7/12 relative mb-16 md:mb-20 mt-24 ml-auto">
                      <GradientRevealRight>
                      </GradientRevealRight>
                    <img src="https://placedog.net/1200/720" alt="placeholder" className="relative z-10 mb-0 pb-12 lg:pb-24 -mt-12 xl:pl-12 md:-mt-24" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Listings */}
        <section>
          <div className="bg-purple overflow-hidden relative z-10 pb-16 md:pb-24 xl:pb-32">
            <RevealLeft>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent">Current Vacancies</span>
            </RevealLeft>

            <div className="container lg:px-32 mb-24 md:mb-40 xl:mb-56">
              <div className="flex flex-wrap md:-mx-6">
                {this.props.data.allDatoCmsCareer.edges.map(({ node }, i) => {
                  return (
                    <div className="w-full md:w-1/2 md:px-6" key={i}>
                      <Link to={`/careers/${ node.slug }`} className="block text-white flex flex-wrap items-center border-t-2 border-purple-light py-4 md:py-6 xl:py-8">
                        <div>
                          <span className="text-xl md:text-2xl xl:text-3xl block font-semibold mb-2">{ node.title }</span>
                          <span className="md:text-lg block">{ node.teaserText }</span>
                        </div>
                        <div className="w-12 text-pink ml-auto">
                          <Arrow />
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Marketing */}
        <section className="relative -mt-16 md:-mt-16 xl:-mt-32 relative z-20">
          <div className="overflow-hidden">
            <RevealRight>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">Network</span>
            </RevealRight>
          </div>
          
          <div className="bg-white pb-24 md:pb-32 xl:pb-40">
            <div className="container lg:px-32 -mt-16 md:-mt-16 lg:-mt-24 relative z-20">
              <div className="flex flex-wrap items md:-mx-8">
                <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 mb-8 md:mb-0 relative">
                  <div className="relative -mt-2 md:-mt-16 lg:-mt-20">
                    <div>
                      <GradientRevealLeft>
                      </GradientRevealLeft>
                    </div>
                    <div className="relative overflow-hidden pt-12 md:pt-24 xl:pt-32">
                      <div className="relative overflow-hidden">
                        <ImageReveal>
                        </ImageReveal>
                        <img src="https://placedog.net/1200/700" alt="placeholder" className="relative z-10 mb-0 pb-0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pt-32 xl:pt-40">
                  <h2 className="pb-6 mb-0">Join our team</h2>
                  <span className="w-20 h-2 bg-pink block mb-8"></span>

                  <div className="mb-8">
                    <p>We’re always on the lookout for good people. If you think you’d be a great addition to our team but don’t quite fit into the roles listed, send us your CV and we will be in-touch.</p>
                  </div>

                  <Link to="/contact" className="inline bg-pink uppercase text-white p-3 px-6 font-medium text-lg mb-4">Get In Touch</Link>
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

export default CareersPage

export const query = graphql`
  query {
    allDatoCmsCareer {
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