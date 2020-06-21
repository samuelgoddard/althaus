import React, { useEffect, useRef } from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class ResourcePage extends React.Component {
  render () {

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
          <div className="overflow-hidden pb-0 md:pb-12">
            <div className="bg-purple pt-32 md:pt-48:pt-48 relative">
              <div className="container lg:px-32 relative">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-1/2 relative z-20 mb-0 md:mb-0">
                    <span className="uppercase font-semibold text-pink text-xl md:text-2xl block mb-3">Technology</span>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-white mb-6 md:mb-8">Title to go right here</h1>
                  </div>

                  <div className="w-full md:w-1/2 relative mt-16 md:mt-48 -mb-12 md:-mb-24 xl:-mb-24">
                    <GradientRevealRight>
                    </GradientRevealRight>
                    <img src="https://placedog.net/1200/640" alt="placeholder" className="relative z-10 mb-0 pb-0" />
                  </div>
                </div>
              </div>
              <div className="w-full h-32 bg-white"></div>
            </div>
          </div>
        </section>

        <section className="mb-24 xl:mb-32">
          <div className="container relative">
            <div className="w-full lg:w-7/12 mx-auto content">
              <div className="mb-12 md:mb-16 xl:mb-20">
                <p className="text-lg md:text-xl font-semibold">As technology advances and artificial intelligence, machine learning and automation come to play larger parts in business operations, the need for skilled people with a combination of technical and ‘soft skills’.</p>

                <h2 className="pb-6 mb-0">Subtitle here</h2>
                <span className="w-20 h-2 bg-pink block mb-8"></span>

                <p>As well as ensuring our learners are equipped with the very latest technical know-how, they’re taught in creative problem-solving, effective communication and emotional intelligence – a powerful combination which futureproofs their employability.</p>

                <p>It’s our mission to unleash the digital leaders of tomorrow, by ensuring that both learner and employer have the skills and resources needed to thrive. Our learners gain access to high quality training, cutting edge facilities and tailored teaching plans, whilst our partner organisations benefit from skilled, talented individuals who are able to generate real, measurable value.</p>

                <h2 className="pb-6 mb-0">Subtitle here</h2>
                <span className="w-20 h-2 bg-pink block mb-8"></span>

                <p>As well as ensuring our learners are equipped with the very latest technical know-how, they’re taught in creative problem-solving, effective communication and emotional intelligence – a powerful combination which futureproofs their employability.</p>

                <p>It’s our mission to unleash the digital leaders of tomorrow, by ensuring that both learner and employer have the skills and resources needed to thrive. Our learners gain access to high quality training, cutting edge facilities and tailored teaching plans, whilst our partner organisations benefit from skilled, talented individuals who are able to generate real, measurable value.</p>

                <img src="https://placedog.net/1200/700" alt="placeholder" className="relative z-10 mb-0 pb-0 w-full" />

                <h2 className="pb-6 mb-0">Subtitle here</h2>
                <span className="w-20 h-2 bg-pink block mb-8"></span>

                <p>As well as ensuring our learners are equipped with the very latest technical know-how, they’re taught in creative problem-solving, effective communication and emotional intelligence – a powerful combination which futureproofs their employability.</p>

                <p>It’s our mission to unleash the digital leaders of tomorrow, by ensuring that both learner and employer have the skills and resources needed to thrive. Our learners gain access to high quality training, cutting edge facilities and tailored teaching plans, whilst our partner organisations benefit from skilled, talented individuals who are able to generate real, measurable value.</p>
              </div>

              <div className="mx-auto text-center">
                <Link to="/contact" className="inline border-2 border-pink uppercase text-purple p-4 px-6 font-medium text-lg">Download PDF</Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default ResourcePage