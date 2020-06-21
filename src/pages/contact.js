import React, { useEffect, useRef } from "react";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class ContactPage extends React.Component {

  render () {
    
    const RevealRight = ({ children }) => {
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
          x: '-100vw'
        });
      }, []);
    
      return <div className="reveal-right" ref={revealRef}>{children}</div>;
    };

    const ImageReveal = ({ children }) => {
      const revealRef = useRef(null);

      useEffect(() => {
        gsap.to(revealRef.current, {
          scrollTrigger: revealRef.current,
          y: '-100%',
          ease: Power3.easeInOut,
          duration: 2
        });
      }, []);
    
      return <div className="reveal-image z-20 h-full bg-purple absolute bottom-0 left-0 right-0" ref={revealRef}>{children}</div>;
    };
    
    const GradientRevealLeft = ({ children }) => {
      const revealRef = useRef(null);

      useEffect(() => {
        gsap.to(revealRef.current, {
          scrollTrigger: revealRef.current,
          width: '100%',
          ease: Power3.easeInOut,
          duration: 2
        });
      }, []);
    
      return <div className="w-0 h-full gradient-ltr absolute top-0 left-0 z-0 block bleed-left" ref={revealRef}>{children}</div>;
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
                    <h1 className="text-5xl md:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-white mb-6 md:mb-8 md:whitespace-no-wrap">Get in touch</h1>

                    <p className="w-11/12 md:w-10/12 text-white text-lg md:text-xl mb-8">If you’re interested in our unique digital apprenticeships, or if you’re looking to recruit your next team member, get in touch with althaus today and let’s find your perfect fit.</p>

                    <a href="tel:01332780090" className="transition duration-500 text-pink ease-in-out text-lg md:text-xl xl:text-2xl font-medium block hover:opacity-25 focus:opacity-25">T: 01332 780090</a>
                    
                    <a href="mailto:info@althausdigital.co.uk" className="transition duration-500 text-pink ease-in-out text-lg md:text-xl xl:text-2xl font-medium block break-all hover:opacity-25 focus:opacity-25 mb-8">E: info@althausdigital.co.uk</a>
                  </div>

                  <div className="w-full md:w-1/2 xl:w-1/2 relative ml-auto">
                      <GradientRevealRight>
                      </GradientRevealRight>
                    <img src="https://placedog.net/1200/720" alt="placeholder" className="relative z-10 mb-0 pb-12 lg:pb-24 -mt-12 xl:pl-12 md:-mt-24" />
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
                  <h2 className="pb-6 mb-0">Form Here...</h2>
                  <span className="w-20 h-2 bg-pink block mb-8"></span>

                  <div className="mb-8">
                    <p>Althaus provides the crucial connection between learners and employers, giving individuals the opportunity to build their digital skills before matching them with employers who need them the most.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer contactPage={true} />
      </>
    )
  }
}

export default ContactPage