import React, { useEffect, useRef } from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Teaser from "../components/teaser"
import { Link } from "gatsby"
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class ResourcesPage extends React.Component {

  render () {
    const RevealLeft = ({ children }) => {
      const revealRef = useRef(null);
      
      useEffect(() => {
        this.tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: revealRef.current,
            scrub: 1,
            start: "top bottom",
            // markers: true
          }
        });
        this.tl.to(revealRef.current, {
          x: '80vw'
        });
      }, []);
    
      return <div className="reveal-left" ref={revealRef}>{children}</div>;
    };

    const GradientRevealRight = ({ children }) => {
      const revealRef = useRef(null);

      useEffect(() => {
        gsap.to(revealRef.current, {
          scrollTrigger: revealRef.current,
          width: '155%',
          ease: Power3.easeInOut,
          duration: 2
        });
      }, []);
    
      return <div className="w-0 h-full gradient-ltr absolute bottom-0 right-0 z-0 block bleed-right bleed-right--large -mt-8 md:-mt-24" ref={revealRef}>{children}</div>;
    };

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
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-1/2 xl:w-5/12 relative z-20 mb-8 md:mb-0 md:-mt-12 xl:-mt-24">
                    <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-3">Resources</span>
                    <h1 className="text-5xl md:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-purple mb-6 md:mb-8 md:whitespace-no-wrap">Everything you<br/>need at the click<br/>of a button</h1>

                    <p className="w-11/12 md:w-10/12">Welcome to our resource centre. We’re continuously developing our collection of useful resources, from our own articles, to the latest studies and publications about all things digital.</p>
                  </div>

                  <div className="w-full md:w-1/2 xl:w-7/12 relative mb-16 md:mb-20 mt-24 ml-auto">
                      <GradientRevealRight>
                      </GradientRevealRight>
                    <img src="https://placedog.net/1200/640" alt="placeholder" className="relative z-10 mb-0 pb-12 lg:pb-24 -mt-12 xl:pl-12 md:-mt-24" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Listings */}
        <section>
          <div className="pt-12 md:pt-24 pb-12 md:pb-24 overflow-hidden relative z-10">
            <div className="bg-purple absolute top-0 left-0 right-0 h-screen w-full"></div>
            <div className="container lg:px-32 relative text-white text-center">
              <span className="h2 block mb-6 md:mb-8 font-semibold">Filter by</span>
              <div className="flex flex-wrap justify-center">
                <Link to="/" className="rounded rounded-full bg-purple-light uppercase font-semibold xl:text-lg px-5 xl:px-8 py-2 xl:py-4 mx-1 mb-3 xl:mb-5 xl:mx-3">General</Link>
                <Link to="/" className="rounded rounded-full border-2 border-purple-light uppercase font-semibold xl:text-lg px-5 xl:px-8 py-2 xl:py-4 mx-1 mb-3 xl:mb-5 xl:mx-3">General</Link>
                <Link to="/" className="rounded rounded-full border-2 border-purple-light uppercase font-semibold xl:text-lg px-5 xl:px-8 py-2 xl:py-4 mx-1 mb-3 xl:mb-5 xl:mx-3">Technology</Link>
                <Link to="/" className="rounded rounded-full border-2 border-purple-light uppercase font-semibold xl:text-lg px-5 xl:px-8 py-2 xl:py-4 mx-1 mb-3 xl:mb-5 xl:mx-3">E-Learning</Link>
                <Link to="/" className="rounded rounded-full border-2 border-purple-light uppercase font-semibold xl:text-lg px-5 xl:px-8 py-2 xl:py-4 mx-1 mb-3 xl:mb-5 xl:mx-3">Industry</Link>
              </div>
            </div>

            <RevealLeft>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent">Useful Resources</span>
            </RevealLeft>

            <div className="container lg:px-32 relative text-white -mt-20 lg:-mt-24 xl:-mt-40">
              <div className="flex flex-wrap md:-mx-6">
                {[...Array(6)].map((e, i) => {
                  return (
                    <Link to="/resource" key={i} className="w-full md:w-1/2 md:px-6 mb-8 md:mb-12">
                      <Teaser heading="Resource Title Here" description="Description to be written here" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default ResourcesPage