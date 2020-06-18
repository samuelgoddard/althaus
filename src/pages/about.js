import React, { useEffect, useRef } from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Arrow from "../images/arrow.inline.svg";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const transition = { duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }

const item = {
	initial: { y: 20, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: { opacity: 0, transition: { transition }}
}

const itemFade = {
	initial: { opacity: 0 },
	enter: { opacity: 1, transition },
	exit: { opacity: 0, transition: { transition }}
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
    
      return <div className="w-0 h-full gradient-ltr absolute top-0 right-0 z-0 hidden md:block" ref={revealRef}>{children}</div>;
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
    
      return <div className="w-0 h-full gradient-ltr absolute top-0 left-0 z-0 hidden md:block" ref={revealRef}>{children}</div>;
    };

    return (
      <>
        <SEO title="Home" />
        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.1 } }
          }}
          className=""
        >
          <motion.div variants={itemFade} className="bg-white pt-32 pb-24 md:pt-48 md:pb-24 relative">

            <div className="container lg:px-32 relative z-10">
              <div className="w-11/12 md:w-9/12 lg:w-8/12">
                <motion.h1 variants={item} className="text-4xl md:text-6xl xl:text-7xl font-medium text-purple mb-6 md:mb-8">Unleashing the digital leaders of tomorrow</motion.h1>

                <motion.div variants={item} className="w-8/12 md:w-10/12">
                  <p className="text-purple text-xl md:text-2xl mb-8 md:mb-12">Welcome to <span className="font-semibold">althaus digital</span> - an alternative training provider who see the bigger picture.</p>

                  <Link to="/" className="text-md text-purple font-semibold uppercase flex flex-wrap items-center">
                    <span className="block">Discover More</span>
                    <span className="block ml-4"><Arrow /></span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>
        
        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={itemFade} className="flex flex-wrap bg-purple">
            <div className="w-full md:w-9/12 lg:w-8/12 ml-auto relative z-10">
              <div className="gradient-ltr">
                <div className="flex flex-wrap xl:w-10/12 p-4">
                  <div className="w-1/2">
                    <Link to="/" className="block py-6 md:px-10 text-center md:text-left">
                      <span className="block text-white text-2xl md:text-3xl font-medium">Learners</span>
                      <div className="hidden md:block">
                        <span className="block text-white text-lg mb-3">Develop from learner into leader</span>
                        <span className="text-md text-white font-semibold uppercase flex flex-wrap items-center">
                          <span className="block">Discover More</span>
                          <span className="block ml-4"><Arrow /></span>
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="w-1/2 md:border-l md:border-white">
                    <Link to="/" className="block py-6 md:px-10 text-center md:text-left">
                      <span className="block text-white text-2xl md:text-3xl font-medium">Employers</span>
                      <div className="hidden md:block">
                        <span className="block text-white text-lg mb-3">Find the talent you need</span>
                        <span className="text-md text-white font-semibold uppercase flex flex-wrap items-center">
                          <span className="block">Discover More</span>
                          <span className="block ml-4"><Arrow /></span>
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
        
        {/* Why Us? */}
        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={itemFade} className="bg-purple pt-10 pb-24 mb-16 md:mb-0 md:pt-12 lg:pt-0 md:pb-32 overflow-hidden relative z-10">
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

                  <Link to="/" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                    <span className="block">Find Out More</span>
                    <span className="block ml-4"><Arrow /></span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Alternative */}
        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
          className="bg-white mt-10 pb-12 md:mt-24 md:pb-8 lg:pb-8 xl:mt-32 xl:pb-24 overflow-hidden relative"
        >
          <RevealLeft>
            <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent leading-none -mt-4 xl:-mt-8 block">Alternative</span>
          </RevealLeft>
          
          <GradientRevealRight>
          </GradientRevealRight>
          
          <div className="container lg:px-32 -mt-16 md:-mt-20 xl:-mt-32 relative z-20">
            <div className="flex flex-wrap items md:-mx-8">
              <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content mb-8 md:mb-0 order-2 md:order-1 md:pt-24 lg:pt-32">
                <h2 className="pb-6 mb-0">Learners</h2>
                <span className="w-20 h-2 bg-pink block mb-8"></span>

                <div className="mb-8">
                  <ul className="list list-disc list-inside">
                    <li className="pb-2 font-medium">Gain industry experience through digital learning</li>
                    <li className="pb-2 font-medium">Earn a wage whilst receiving in-depth training</li>
                    <li className="pb-2 font-medium">Develop from learner into leader</li>
                  </ul>
                </div>

                <Link to="/" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                  <span className="block">Start your journey</span>
                  <span className="block ml-4"><Arrow /></span>
                </Link>
              </div>
              <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 order-1 md:order-2 pb-8 mb-8 md:mb-0 md:pb-0 relative">
                <div className="w-7/12 h-full gradient-ltr absolute top-0 right-0 z-0 block md:hidden -mr-8"></div>
                
                <div className="relative overflow-hidden mt-10 mb-4">
                  <ImageReveal>
                  </ImageReveal>
                  <img src="https://placedog.net/1200/700" alt="placeholder" className="relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Digital */}
        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
          className="bg-white mt-10 pb-24 md:mt-24 md:pb-8 lg:pb-8 xl:mt-32 xl:pb-24 overflow-hidden relative"
        >
          <RevealRight>
            <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">Digital</span>
          </RevealRight>
          
          <GradientRevealLeft>
          </GradientRevealLeft>
          
          <div className="container lg:px-32 -mt-16 md:-mt-20 xl:-mt-32 relative z-20">
            <div className="flex flex-wrap items md:-mx-8">
              <div className="w-full md:w-1/2 lg:w-7/12 md:px-8 pb-8 md:pb-0 relative mb-8 md:mb-0">
                <div className="w-7/12 h-full gradient-ltr absolute top-0 left-0 z-0 block md:hidden -ml-8"></div>
                <div className="relative overflow-hidden mt-10 mb-4">
                  <ImageReveal>
                  </ImageReveal>
                  <img src="https://placedog.net/1200/700" alt="placeholder" className="relative z-10" />
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pt-24 lg:pt-32">
                <h2 className="pb-6 mb-0">Employers</h2>
                <span className="w-20 h-2 bg-pink block mb-8"></span>

                <div className="mb-8">
                  <ul className="list list-disc list-inside">
                    <li className="pb-2 font-medium">Find talent you need</li>
                    <li className="pb-2 font-medium">We work with you to address your needs</li>
                    <li className="pb-2 font-medium">Develop a new generation of digital leaders</li>
                  </ul>
                </div>

                <Link to="/" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                  <span className="block">Find Out more</span>
                  <span className="block ml-4"><Arrow /></span>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>


        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className="bg-white pt-6 md:pt-10 lg:pt-16 xl:pt-20 overflow-hidden">
            <div className="container lg:px-32">
              <div className="flex flex-wrap pb-6 md:pb-10 lg:pb-16 xl:pb-20">
                <div className="w-full md:w-7/12 lg:w-5/12 ml-auto">
                  <span className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-extra-tight block mb-10">Ready to start your journey?</span>
                  <Link to="/" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                    <span className="block">Get in touch</span>
                    <span className="block ml-4"><Arrow /></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-purple-light opacity-75 w-full h-64">
              <RevealLeft>
                <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text scroll-text--white text-transparent leading-none block pt-48 md:pt-48 lg:pt-40 xl:pt-20">Contact</span>
              </RevealLeft>
            </div>
            <div className="bg-purple w-full h-20"></div>
          </div>
        </motion.section>

        <Footer />
      </>
    )
  }
}

export default AboutPage