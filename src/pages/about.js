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

class AboutPage extends React.Component {
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
    
      return <div className="w-0 h-full gradient-ltr absolute top-0 right-0 z-0 block bleed-right -mt-8 md:-mt-24" ref={revealRef}>{children}</div>;
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
    
      return <div className="w-0 h-full gradient-ltr absolute top-0 left-0 mt-8 md:mt-24 z-0 block bleed-left" ref={revealRef}>{children}</div>;
    };

    return (
      <>
        <SEO title="Home" />

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
                  <div className="w-full md:w-1/3 relative z-20 mb-8 md:mb-0">
                    <span className="uppercase font-semibold text-purple text-xl md:text-2xl block mb-3">About</span>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-pink mb-6 md:mb-8 whitespace-no-wrap">Learn Digital.<br/>Lead Digital.</h1>

                    <div className="w-full">
                      <Link to="/" className="text-md text-purple font-semibold uppercase flex flex-wrap items-center">
                        <span className="block">Discover More</span>
                        <span className="block ml-4"><Arrow /></span>
                      </Link>
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 relative mt-16">
                    <GradientRevealRight>
                    </GradientRevealRight>
                    <img src="https://placedog.net/1200/640" alt="placeholder" className="relative z-10 mb-0 pb-0" />
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
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right scroll-text--purple text-right text-transparent leading-none block">Digital Skills</span>
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
                      <div className="relative overflow-hidden">
                        <div className="relative overflow-hidden">
                          <ImageReveal>
                          </ImageReveal>
                          <img src="https://placedog.net/1200/700" alt="placeholder" className="relative z-10 mb-0 pb-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pr-16 text-white md:pt-24 xl:pt-32">
                    <h2 className="pb-6 mb-0">About Us</h2>
                    <span className="w-20 h-2 bg-pink block mb-8"></span>

                    <div className="mb-8">
                      <p>We provide the crucial connection between learner and employer, giving apprentices the opportunity to develop their digital skills whilst being matched to an employer best placed to accelerate their career, all whilst generating measurable value within their role.</p>

                      <p>By pairing our apprentices with the ideal business, mutually-beneficial partnerships are born. This ensures that employer and apprentice alike are set to thrive and grow throughout the digital revolution.</p>
                    </div>

                    <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                      <span className="block">Find Out More</span>
                      <span className="block ml-4"><Arrow /></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="bg-purple pb-12 md:pb-24 lg:pb-32 relative overflow-hidden">
          <RevealLeft>
            <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text scroll-text--pink text-transparent leading-none -mt-4 xl:-mt-8 block">Insight</span>
          </RevealLeft>
          
          <div className="container lg:px-32 -mt-20 md:-mt-20 xl:-mt-56 relative z-20">
            <div className="flex flex-wrap items md:-mx-8">
              <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content mb-8 md:mb-0 order-2 md:order-1 md:pt-24 xl:pt-56 text-white">
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
                  <span className="block ml-4"><Arrow /></span>
                </Link>
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

export default AboutPage