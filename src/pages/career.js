import React, { useEffect, useRef } from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Arrow from "../images/arrow.inline.svg";
import { Link } from "gatsby"
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class Career extends React.Component {

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
          x: '87vw'
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
    
    const BlockRevealRight = ({ children }) => {
      const revealRef = useRef(null);

      useEffect(() => {
        gsap.to(revealRef.current, {
          scrollTrigger: revealRef.current,
          width: '88.8%',
          ease: Power3.easeInOut,
          duration: 2
        });
      }, []);
    
      return <div className="w-0 h-full bg-purple absolute top-0 right-0 z-0 block bleed-right" ref={revealRef}>{children}</div>;
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
        <SEO title="About" />

        <section>
          <div className="absolute top-0 left-0 right-0 z-30">
            <div>
              <Header color="black" />
            </div>
          </div>
          
          {/* Hero */}
          <div className="overflow-hidden">
            <div className="bg-white pt-32 md:pt-48 xl:pt-48 relative">
              <div className="container lg:px-32 relative">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-1/2 xl:w-5/12 relative z-20 mb-8 md:mb-0 md:-mt-12 xl:-mt-24">
                    <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-3">Job Title</span>
                    <h1 className="text-5xl md:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-purple mb-6 md:mb-8 md:whitespace-no-wrap">Senior digital<br/>content creator</h1>

                    <Link to="/" className="text-md text-purple font-semibold uppercase flex flex-wrap items-center">
                      <span className="block">Apply Now</span>
                      <span className="block ml-4 w-8"><Arrow /></span>
                    </Link>
                  </div>

                  <div className="w-full md:w-1/2 xl:w-7/12 relative mb-0 md:mb-20 mt-24 ml-auto">
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
        <section className="mb-12 md:mb-16 lg:mb-24">
          <div className="bg-purple overflow-hidden py-8 md:py-10">
            <div className="container lg:px-32 relative text-white">
              <div className="flex flex-wrap -mx-4">
                <div className="w-1/2 xl:w-1/4 px-4 mb-6 xl:mb-0">
                  <span className="block text-lg mb-2">Closing Application</span>
                  <span className="block text-xl md:text-2xl font-semibold">20.07.2020</span>
                </div>
                <div className="w-1/2 xl:w-1/4 px-4 mb-6 xl:mb-0">
                  <span className="block text-lg mb-2">Experience Required</span>
                  <span className="block text-xl md:text-2xl font-semibold">3-5 Years</span>
                </div>
                <div className="w-1/2 xl:w-1/4 px-4 mb-6 xl:mb-0">
                  <span className="block text-lg mb-2">Expertise Area</span>
                  <span className="block text-xl md:text-2xl font-semibold">Digital Design</span>
                </div>
                <div className="w-1/2 xl:w-1/4 px-4 mb-6 xl:mb-0">
                  <span className="block text-lg mb-2">Entry Level Salary</span>
                  <span className="block text-xl md:text-2xl font-semibold">&pound;32,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32 md:mb-40 xl:mb-56">
          <div className="container relative">
            <div className="w-full lg:w-7/12 mx-auto content">
              <div className="mb-12 md:mb-16 xl:mb-20">
                <h2 className="pb-6 mb-0">Job Description</h2>
                <span className="w-20 h-2 bg-pink block mb-8"></span>

                <p>As well as ensuring our learners are equipped with the very latest technical know-how, they’re taught in creative problem-solving, effective communication and emotional intelligence – a powerful combination which futureproofs their employability.</p>

                <p>It’s our mission to unleash the digital leaders of tomorrow, by ensuring that both learner and employer have the skills and resources needed to thrive. Our learners gain access to high quality training, cutting edge facilities and tailored teaching plans, whilst our partner organisations benefit from skilled, talented individuals who are able to generate real, measurable value.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Listings */}
        <section>
          <div className="bg-purple relative z-10 pb-16 md:pb-24 xl:pb-32 pt-24 md:pt-32 lg:pt-48 xl:pt-64">
            <div className="-mt-24 xl:-mt-40 overflow-hidden absolute top-0 left-0 w-full">
              <RevealLeft>
                <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent">Opportunities</span>
              </RevealLeft>
            </div>

            <div className="container lg:px-32 mb-24 md:mb-40 xl:mb-56">
              <div className="flex flex-wrap md:-mx-10 content text-white mb-16 md:mb-24">
                <div className="w-full md:w-1/2 md:px-10 mb-12 md:mb-0">
                  <h2 className="pb-6 mb-0">Requirements</h2>
                  <span className="w-20 h-2 bg-pink block mb-8"></span>

                  <ul className="list list-disc list-inside">
                    <li className="font-medium mb-2">Lorem ipsum dolor sit amet</li>
                    <li className="font-medium mb-2">Officia deserunt mollit anim id est laborum.</li>
                    <li className="font-medium mb-2">Laboris nisi ut aliquip ex ea commodo consequat</li>
                    <li className="font-medium mb-2">Lorem ipsum dolor sit amet</li>
                    <li className="font-medium mb-2">Excepteur sint occaecat cupidatat non proident</li>
                    <li className="font-medium mb-2">Volutpat consequat mauris nunc congue nisi vitae.</li>
                    <li className="font-medium mb-2">Nunc pulvinar sapien et ligula ullamcorper malesuada</li>
                    <li className="font-medium mb-2">Ac tortor vitae purus faucibus ornare suspendisse</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 md:px-10">
                  <h2 className="pb-6 mb-0">Benefits</h2>
                  <span className="w-20 h-2 bg-pink block mb-8"></span>

                  <ul className="list list-disc list-inside">
                    <li className="font-medium mb-2">Lorem ipsum dolor sit amet</li>
                    <li className="font-medium mb-2">Officia deserunt mollit anim id est laborum.</li>
                    <li className="font-medium mb-2">Laboris nisi ut aliquip ex ea commodo consequat</li>
                    <li className="font-medium mb-2">Lorem ipsum dolor sit amet</li>
                    <li className="font-medium mb-2">Excepteur sint occaecat cupidatat non proident</li>
                    <li className="font-medium mb-2">Volutpat consequat mauris nunc congue nisi vitae.</li>
                    <li className="font-medium mb-2">Nunc pulvinar sapien et ligula ullamcorper malesuada</li>
                    <li className="font-medium mb-2">Ac tortor vitae purus faucibus ornare suspendisse</li>
                  </ul>
                </div>
              </div>
              <div className="mx-auto text-center">
                <Link to="/contact" className="inline border-2 border-pink uppercase text-white p-4 px-6 font-medium text-lg">Get in touch</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Insight */}
        <section className="bg-purple relative -mt-16 md:-mt-16 xl:-mt-32 relative z-20">
          <div className="overflow-hidden">
            <RevealRight>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">Insight</span>
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
                  <h2 className="pb-6 mb-0">About Us</h2>
                  <span className="w-20 h-2 bg-pink block mb-8"></span>

                  <div className="mb-8">
                    <p>Althaus provides the crucial connection between learners and employers, giving individuals the opportunity to build their digital skills before matching them with employers who need them the most.</p>
                  </div>

                  <Link to="/about" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                    <span className="block">Find out more</span>
                    <span className="block ml-4 w-8"><Arrow /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="bg-white mt-10 pb-12 md:mt-24 md:pb-8 lg:pb-8 xl:mt-32 xl:pb-24">
          <div className="overflow-hidden relative z-20">
            <RevealLeft>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent leading-none">Application</span>
            </RevealLeft>
          </div>

          <div className="w-full mb-8 md:mb-0 relative -mt-12 md:-mt-20 xl:-mt-40">
            <div className="relative">
              <div className="pt-8 md:pt-16 xl:pt-24">
                <BlockRevealRight>
                </BlockRevealRight>
              </div>

              <div className="container lg:px-32 relative z-20">
                <div className="gradient-ltr p-8 md:p-16 xl:p-24">
                  <div className="mb-8 text-center">
                    <span className="text-white font-semibold block text-2xl md:text-3xl mb-5 leading-extra-tight">Interested in working for althaus?</span>
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

export default Career