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
          width: '33.33%',
          ease: Power3.easeInOut,
          duration: 2
        });
      }, []);
    
      return <div className="w-0 h-half gradient-ltr absolute top-0 right-0 z-0 hidden md:block" ref={revealRef}>{children}</div>;
    };
    
    const GradientRevealLeft = ({ children }) => {
      const revealRef = useRef(null);

      useEffect(() => {
        gsap.to(revealRef.current, {
          scrollTrigger: revealRef.current,
          width: '33.33%',
          ease: Power3.easeInOut,
          duration: 2
        });
      }, []);
    
      return <div className="w-0 h-half gradient-ltr absolute top-0 left-0 z-0 hidden md:block" ref={revealRef}>{children}</div>;
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
          <div className="bg-white pt-32 pb-24 md:pt-48 md:pb-24 xl:pt-48 relative">
            <div className="container lg:px-32 relative z-10">
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/3 relative z-10 mb-8 md:mb-0">
                  <span className="uppercase font-semibold text-purple text-xl md:text-2xl block mb-3">About</span>
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-pink mb-6 md:mb-8 whitespace-no-wrap">Learn Digital.<br/>Lead Digital.</h1>

                  <div className="w-full">
                    <Link to="/" className="text-md text-purple font-semibold uppercase flex flex-wrap items-center">
                      <span className="block">Discover More</span>
                      <span className="block ml-4"><Arrow /></span>
                    </Link>
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <img src="https://placedog.net/1200/700" alt="placeholder" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        {/* Our Mission */}
        <section>
          <div className="overflow-hidden">
            <RevealLeft>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text scroll-text--purple text-transparent">Digital Skills</span>
            </RevealLeft>
          </div>
          
          <div className="bg-purple pb-8 md:mb-0 relative z-10 md:pb-12 lg:pb-20 xl:pb-32">
            <GradientRevealLeft>
            </GradientRevealLeft>
            <div className="container lg:px-32 relative z-20">
              <div className="flex flex-wrap md:-mx-8">
                <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 mb-8 md:mb-0 -mt-16 md:-mt-24 xl:-mt-40">
                  <div className="relative overflow-hidden">
                    <ImageReveal>
                    </ImageReveal>
                    <img src="https://placedog.net/1200/700" alt="placeholder" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pr-16 text-white pt-4 md:pt-24 xl:pt-32">
                  <h2 className="pb-6 mb-0">Our Mission</h2>
                  <span className="w-20 h-2 bg-pink block mb-8"></span>

                  <div className="mb-8">
                    <p>At althaus, we know that digital skills are becoming more and more important - but that’s not the full picture. As well as ensuring our learners are equipped with the very latest technical know-how, they’re taught in creative problem-solving, effective communication and emotional intelligence – a powerful combination which futureproofs their employability.</p>

                    <p>It’s our mission to unleash the digital leaders of tomorrow, by ensuring that both learner and employer have the skills and resources needed to thrive. Our learners gain access to high quality training, cutting edge facilities and tailored teaching plans, whilst our partner organisations benefit from skilled, talented individuals who are able to generate real, measurable value.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us? */}
        <section>
          <div className="bg-purple pb-24 mb-16 md:mb-0 md:pb-32 overflow-hidden relative z-10">
            <RevealLeft>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent leading-none">Why Us?</span>
            </RevealLeft>

            <GradientRevealRight>
            </GradientRevealRight>
            
            <div className="container lg:px-32 -mt-16 lg:-mt-24 xl:-mt-32 relative z-20">
              <div className="flex flex-wrap md:-mx-8">
                <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content mb-8 md:mb-0 md:pr-16 text-white order-2 md:order-1 pt-12 md:pt-20 xl:pt-32">
                  <h2 className="pb-6 mb-0">Why We're Different</h2>
                  <span className="w-20 h-2 bg-pink block mb-8"></span>

                  <div className="mb-8">
                    <p>We provide the crucial connection between learner and employer, giving apprentices the opportunity to develop their digital skills whilst being matched to an employer best placed to accelerate their career, all whilst generating measurable value within their role.</p>
                  </div>

                  <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                    <span className="block">Find Out More</span>
                    <span className="block ml-4"><Arrow /></span>
                  </Link>
                </div>

                <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 order-1 md:order-2">
                  <div className="relative overflow-hidden">
                    <ImageReveal>
                    </ImageReveal>
                    <img src="https://placedog.net/1200/700" alt="placeholder" />
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