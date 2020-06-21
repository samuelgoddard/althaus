import React, { useEffect, useRef } from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import Arrow from "../images/arrow.inline.svg";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class IndexPage extends React.Component {
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
          x: '100vw'
        });
      }, []);
    
      return <div className="reveal-left" ref={revealRef}>{children}</div>;
    };
    
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

    const GradientRevealRight = ({ children }) => {
      const revealRef = useRef(null);

      useEffect(() => {
        gsap.to(revealRef.current, {
          scrollTrigger: revealRef.current,
          width: '100%',
          ease: Power3.easeInOut,
          duration: 2
        });
      }, []);
    
      return <div className="w-0 h-full gradient-ltr absolute top-0 right-0 z-0 block bleed-right" ref={revealRef}>{children}</div>;
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

    return (
      <>
        <SEO title="Home" />

        <section className="">
          <div className="absolute top-0 left-0 right-0 z-30">
            <div>
              <Header color="white" />
            </div>
          </div>
          
          {/* Hero */}
          <div className="bg-purple pt-32 pb-24 md:pt-48 md:pb-24 xl:pt-56 relative">
            <div className="absolute top-0 left-0 w-full z-10 overflow-hidden w-full">
              <svg className="logo-bg opacity-25 relative block z-10" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.316 31.173l9.259-.004 3.326 5.685h10.283L21.59 0 16.4 8.866l7.972 13.487-9.404.013-6.617 11.235H5.726L15.044 17.7l1.402 2.386h3.827l-5.237-8.892L0 36.858h10.262l6.613-11.24 13.26.013-9.913-16.773 1.368-2.336 15.83 27.025h-2.63L31.445 27.9l-13.295.008-5.199 8.95h16.914l-1.912-3.244h-9.276l1.427-2.436.213-.005z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="42.07" y1="9.562" x2="8.917" y2="40.813" gradientUnits="userSpaceOnUse"><stop stopColor="#D51F3A"/><stop offset="1" stopColor="#2C3583"/></linearGradient></defs></svg>
            </div>
            <div className="container lg:px-32 relative z-10">
              <div className="w-11/12 md:w-9/12 lg:w-8/12">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-white mb-6 md:mb-8">Unleashing the digital leaders of tomorrow</h1>

                <div className="w-8/12 md:w-10/12">
                  <p className="text-white text-xl md:text-2xl mb-8 md:mb-12">Welcome to <span className="font-semibold">althaus digital</span> - an alternative training provider who see the bigger picture.</p>

                  <Link to="/about" className="text-md text-white font-semibold uppercase flex flex-wrap items-center">
                    <span className="block">Discover More</span>
                    <span className="block ml-4 w-8"><Arrow /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex flex-wrap bg-purple">
            <div className="w-full md:w-9/12 lg:w-8/12 ml-auto relative z-20">
              <div className="gradient-ltr">
                <div className="flex flex-wrap xl:w-10/12 p-4">
                  <div className="w-1/2">
                    <Link to="/about" className="block py-6 md:px-10 text-center md:text-left">
                      <span className="block text-white text-2xl md:text-3xl font-medium">Learners</span>
                      <div className="hidden md:block">
                        <span className="block text-white text-lg mb-3">Develop from learner into leader</span>
                        <span className="text-md text-white font-semibold uppercase flex flex-wrap items-center">
                          <span className="block">Discover More</span>
                          <span className="block ml-4 w-8"><Arrow /></span>
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="w-1/2 md:border-l md:border-white">
                    <Link to="/about" className="block py-6 md:px-10 text-center md:text-left">
                      <span className="block text-white text-2xl md:text-3xl font-medium">Employers</span>
                      <div className="hidden md:block">
                        <span className="block text-white text-lg mb-3">Find the talent you need</span>
                        <span className="text-md text-white font-semibold uppercase flex flex-wrap items-center">
                          <span className="block">Discover More</span>
                          <span className="block ml-4 w-8"><Arrow /></span>
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Us? */}
        <section>
          <div className="bg-purple pt-10 pb-24 mb-16 md:mb-0 md:pt-12 lg:pt-0 md:pb-32 overflow-hidden relative z-10">
            <RevealLeft>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent">Why Us?</span>
            </RevealLeft>
            
            <div className="container lg:px-32 -mt-16 lg:-mt-24 xl:-mt-32 relative z-20">
              <div className="flex flex-wrap md:-mx-8">
                <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 mb-8 md:mb-0">
                  <div className="relative overflow-hidden">
                    <ImageReveal>
                    </ImageReveal>
                    <img src="https://placedog.net/1200/700" alt="placeholder" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pr-16 text-white">
                  <h2 className="pb-6 mb-0">About Us</h2>
                  <span className="w-20 h-2 bg-pink block mb-8"></span>

                  <div className="mb-8">
                    <p>We provide the crucial connection between learner and employer, giving apprentices the opportunity to develop their digital skills whilst being matched to an employer best placed to accelerate their career, all whilst generating measurable value within their role.</p>

                    <p>By pairing our apprentices with the ideal business, mutually-beneficial partnerships are born. This ensures that employer and apprentice alike are set to thrive and grow throughout the digital revolution.</p>
                  </div>

                  <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                    <span className="block">Find Out More</span>
                    <span className="block ml-4 w-8"><Arrow /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative */}
        <section className="bg-white mt-10 pb-12 md:mt-24 md:pb-8 lg:pb-8 xl:mt-32 xl:pb-24 relative overflow-hidden">
          <RevealLeft>
            <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text scroll-text--purple text-transparent leading-none -mt-4 xl:-mt-8 block">Alternative</span>
          </RevealLeft>
          
          <div className="container lg:px-32 -mt-20 md:-mt-20 xl:-mt-56 relative z-20">
            <div className="flex flex-wrap items md:-mx-8">
              <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content mb-8 md:mb-0 order-2 md:order-1 md:pt-24 xl:pt-56">
                <h2 className="pb-6 mb-0">Learners</h2>
                <span className="w-20 h-2 bg-pink block mb-8"></span>

                <div className="mb-8">
                  <ul className="list list-disc list-inside">
                    <li className="pb-2 font-medium">Gain industry experience through digital learning</li>
                    <li className="pb-2 font-medium">Earn a wage whilst receiving in-depth training</li>
                    <li className="pb-2 font-medium">Develop from learner into leader</li>
                  </ul>
                </div>

                <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                  <span className="block">Start your journey</span>
                  <span className="block ml-4 w-8"><Arrow /></span>
                </Link>
              </div>
              <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 order-1 md:order-2 mb-8 md:mb-0 relative">
                <div className="relative">
                  <div>
                    <GradientRevealRight>
                    </GradientRevealRight>
                  </div>
                  <div className="relative overflow-hidden py-12 xl:py-24">
                    <div className="relative overflow-hidden">
                      <ImageReveal>
                      </ImageReveal>
                      <img src="https://placedog.net/1200/700" alt="placeholder" className="relative z-10 mb-0 pb-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital */}
        <section className="bg-white mt-10 pb-12 md:mt-24 md:pb-8 lg:pb-8 xl:mt-32 xl:pb-24 relative overflow-hidden">
          <RevealRight>
            <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">Digital</span>
          </RevealRight>
          
          <div className="container lg:px-32 -mt-20 md:-mt-20 xl:-mt-56 relative z-20">
            <div className="flex flex-wrap items md:-mx-8">
              <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 mb-8 md:mb-0 relative">
                <div className="relative">
                  <div>
                    <GradientRevealLeft>
                    </GradientRevealLeft>
                  </div>
                  <div className="relative overflow-hidden py-12 xl:py-24">
                    <div className="relative overflow-hidden">
                      <ImageReveal>
                      </ImageReveal>
                      <img src="https://placedog.net/1200/700" alt="placeholder" className="relative z-10 mb-0 pb-0" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pt-24 xl:pt-56">
                <h2 className="pb-6 mb-0">Employers</h2>
                <span className="w-20 h-2 bg-pink block mb-8"></span>

                <div className="mb-8">
                  <ul className="list list-disc list-inside">
                    <li className="pb-2 font-medium">Find talent you need</li>
                    <li className="pb-2 font-medium">We work with you to address your needs</li>
                    <li className="pb-2 font-medium">Develop a new generation of digital leaders</li>
                  </ul>
                </div>

                <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                  <span className="block">Find Out More</span>
                  <span className="block ml-4 w-8"><Arrow /></span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default IndexPage