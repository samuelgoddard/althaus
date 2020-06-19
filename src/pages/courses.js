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

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
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
        <SEO title="Courses" />

        <section>
          <div className="absolute top-0 left-0 right-0 z-30">
            <div>
              <Header color="black" />
            </div>
          </div>
          
          {/* Hero */}
          <div className="">
            <div className="mt-48 md:mt-56 xl:mt-64 gradient-ltr">
              <div className="container lg:px-32 pb-12">
                <div className="flex flex-wrap items-center pb-0 md:pb-20 lg:pb-24">
                  <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-8 -mt-10">Courses</span>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-white mb-6 md:mb-8 whitespace-no-wrap">Level 3<br/>apprenticeship<br/>courses</h1>

                    <div className="w-full">
                      <Link to="/" className="text-md text-white font-semibold uppercase flex flex-wrap items-center">
                        <span className="block">Get in touch</span>
                        <span className="block ml-4"><Arrow /></span>
                      </Link>
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 mt-16 md:mt-20">

                  </div>
                </div>

                <div className="flex flex-wrap items-center bg-white p-4">
                  <div className="w-full md:w-1/2 lg:w-1/4">
                    <span className="block text-lg text-purple text-center">Digital Marketing</span>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4">
                    <span className="block text-lg text-purple text-center">Software Development</span>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4">
                    <span className="block text-lg text-purple text-center">Cyber Security</span>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4">
                    <span className="block text-lg text-purple text-center">IT Solutions</span>
                  </div>
                </div>
              </div>
              <div className="-mb-16 xl:-mb-32 relative z-20 overflow-hidden">
                <RevealRight>
                  <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right scroll-text--white text-right text-transparent leading-none block">Technical Knowledge</span>
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
                  <h2 className="mb-6 md:mb-10">Unleashing the digital leaders of tomorrow.</h2>

                  <div className="mb-16 xl:mb-24 css-cols text-lg">
                    <p>As technology advances and artificial intelligence, machine learning and automation come to play larger parts in business operations, the need for skilled people with a combination of technical and ‘soft skills’ has never been more pressing. </p>

                    <p>To bridge the digital skills gap, our level 3 apprenticeship courses ensure a wealth of technical knowledge, combined with skills such as creative problem-solving, effective communication and emotional intelligence, developed through our Leadership Programme.</p>
                  </div>
                  
                  <div className="w-10/12 md:w-10/12 xl:w-9/12 mx-auto">
                    <span className="text-8xl md:text-9xl xl:text-10xl leading-none font-semibold block text-center text-pink">“</span>
                    <span className="text-3xl md:text-4xl leading-extra-tight font-semibold block text-center -mt-12 md:-mt-16 xl:-mt-24 mb-12">Future-proof your skills and choose your ideal apprenticship here</span>

                    <div className="mx-auto text-center">
                      <Link to="/contact" className="inline border border-pink uppercase text-white p-4 px-6 font-medium text-lg">Get in touch</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital */}
        <section className="bg-transparent md:pb-8 lg:pb-8 xl:pb-24 relative -mt-16 md:-mt-16 xl:-mt-32 relative z-20 mb-24 md:mb-0">
          <div className="overflow-hidden">
            <RevealRight>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">Marketing</span>
            </RevealRight>
          </div>
          
          <div className="container lg:px-32 -mt-10 md:-mt-16 lg:-mt-24 xl:-mt-56 relative z-20">
            <div className="flex flex-wrap items md:-mx-8">
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
                      <img src="https://placedog.net/1200/700" alt="placeholder" className="relative z-10 mb-0 pb-0" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pt-32 xl:pt-64">
                <h2 className="pb-6 mb-0">Digital Marketing</h2>
                <span className="w-20 h-2 bg-pink block mb-8"></span>

                <div className="mb-8">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>

                <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                  <span className="block">View Courses</span>
                  <span className="block ml-4"><Arrow /></span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Development */}
        <section className="bg-white mt-10 pb-12 md:mt-24 md:pb-8 lg:pb-8 xl:mt-32 xl:pb-24 relative overflow-hidden">
          <RevealLeft>
            <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text scroll-text--purple text-transparent leading-none -mt-4 xl:-mt-8 block">Development</span>
          </RevealLeft>
          
          <div className="container lg:px-32 -mt-20 md:-mt-20 xl:-mt-56 relative z-20">
            <div className="flex flex-wrap items md:-mx-8">
              <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content mb-8 md:mb-0 order-2 md:order-1 md:pt-32 xl:pt-64">
                <h2 className="pb-6 mb-0">Software Development</h2>
                <span className="w-20 h-2 bg-pink block mb-8"></span>

                <div className="mb-8">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                  <span className="block">View Courses</span>
                  <span className="block ml-4"><Arrow /></span>
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

        <Footer />
      </>
    )
  }
}

export default CoursesPage