import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import Arrow from "../images/arrow.inline.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealLeft, RevealRight, GradientRevealLeft, ImageReveal } from "../components/revealHelpers"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class EmployersPage extends React.Component {
  render () {
    return (
      <>
        <SEO title="Courses" />

        <section className="">
          <div className="absolute top-0 left-0 right-0 z-30">
            <div>
              <Header color="white" />
            </div>
          </div>
          
          {/* Hero */}
          <div className="bg-purple pt-48 md:pt-56 xl:pt-64">
            <div className="bg-pink">
              <div className="container lg:px-32 pb-12">
                <div className="flex flex-wrap items-center pb-0 md:pb-20 lg:pb-24">
                  <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <span className="uppercase font-semibold text-white text-xl md:text-2xl block mb-8 -mt-10">Employers</span>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-white mb-6 md:mb-8 md:whitespace-no-wrap">Hiring digital talent<br/>has never been<br/>so simple!</h1>

                    <div className="w-full">
                      <Link to="/" className="text-md text-white font-semibold uppercase flex flex-wrap items-center">
                        <span className="block">View Courses</span>
                        <span className="block ml-4 w-8"><Arrow /></span>
                      </Link>
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 mt-16 md:mt-20">

                  </div>
                </div>

                <div className="flex flex-wrap items-center bg-white p-4">
                  <div className="w-full md:w-1/2 lg:w-1/4">
                    <span className="block text-lg text-purple text-center">Why Althaus</span>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4">
                    <span className="block text-lg text-purple text-center">Our Courses</span>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4">
                    <span className="block text-lg text-purple text-center">Find An Apprenticeship</span>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4">
                    <span className="block text-lg text-purple text-center">Get In Touch</span>
                  </div>
                </div>
              </div>
              <div className="-mb-16 xl:-mb-32 relative z-20 overflow-hidden">
                <RevealLeft>
                    <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text scroll-text--purple text-transparent leading-none -mt-4 xl:-mt-8 block">Employers</span>
                </RevealLeft>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section>
          <div className="bg-white relative z-10 pb-40 md:pb-56 xl:pb-64 pt-24 md:pt-16 xl:pt-24">
            <div className="container lg:px-32 relative z-20 md:pt-24 xl:pt-32 mb-8 md:mb-16 xl:mb-24">
              <div className="w-full md:w-9/12 xl:w-8/12 mx-auto content">
                <div className="mb-12 md:mb-16 xl:mb-20">
                  <h2 className="text-center">Hiring An Apprentice</h2>

                  <p className="text-lg md:text-xl">At althaus digital we ensure employers have access to the best future talent and can choose from apprentices whose skills and aspirations are aligned with their business’ goals. </p>

                  <p>We understand the importance of making the right hire, which is why we tailor our digital apprenticeships to ensure they meet the needs of employers, as well as apprentices. Althaus works closely with you to establish the areas of your business which you want to develop, modernise or enhance with the help of a dedicated, specially-trained apprentice. We tailor the first part of the apprenticeship to your organisation’s digital needs, so learners immediately progress in the areas your business wants to strengthen, adding measurable value from the outset.</p>

                  <p>We have developed a blend of industry-leading learning environments and resources, combining virtual and face-to-face, collaborative and self-directed learning, alongside supportive mentoring and tailored teaching plans to help our apprentices grow and realise their unique potential. Our learners will develop cutting-edge technical proficiency and leadership skills simultaneously, including creative problem-solving, effective communication and emotional intelligence – ultimately creating a well-rounded and highly skilled individual who will help lead your business into the future.</p>

                  <p>Utilising althaus digital’s apprenticeship services will help your business adapt to technology’s ever-increasing influence on industries across the world. Hiring the right digital talent has never been this simple. Speak to althaus today.</p>
                </div>

                <div className="mx-auto text-center">
                  <Link to="/contact" className="inline border-2 border-pink uppercase text-purple p-4 px-6 font-medium text-lg">Get in touch</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing */}
        <section className="bg-white relative -mt-16 md:-mt-16 xl:-mt-32 relative z-20">
          <div className="overflow-hidden">
            <RevealRight>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">Why Us?</span>
            </RevealRight>
          </div>
          
          <div className="bg-purple pb-24 md:pb-32 xl:pb-40">
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
                <div className="w-full md:w-1/2 lg:w-5/12 md:px-8 content md:pt-32 xl:pt-40 text-white">
                  <h2 className="pb-6 mb-0">Why Althaus?</h2>
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
        
        {/* Courses */}
        <section className="bg-purple md:pb-8 relative mb-8 pb-24 md:pb-32 lg:pb-40 xl:pb-64">
          <div className="overflow-hidden mb-8 md:mb-12 xl:mb-16">
            <RevealLeft>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text text-transparent leading-none block">Our Courses</span>
            </RevealLeft>
          </div>

          <div className="container lg:px-32 mb-12 md:mb-16 xl:mb-24">
            <div className="flex flex-wrap md:-mx-6 pb-8 md:pb-12">
              <div className="w-full md:w-1/2 md:px-6">
                <Link to="/" className="block text-white flex flex-wrap items-center border-t-2 border-purple-light py-4 md:py-6 xl:py-8">
                  <div>
                    <span className="text-xl md:text-2xl xl:text-3xl block font-semibold mb-2">Digital Marketing</span>
                    <span className="md:text-lg block">Brief description to be written</span>
                  </div>
                  <div className="w-12 text-pink ml-auto">
                    <Arrow />
                  </div>
                </Link>
              </div>
              
              <div className="w-full md:w-1/2 md:px-6">
                <Link to="/" className="block text-white flex flex-wrap items-center border-t-2 border-purple-light py-4 md:py-6 xl:py-8">
                  <div>
                    <span className="text-xl md:text-2xl xl:text-3xl block font-semibold mb-2">Software Development</span>
                    <span className="md:text-lg block">Brief description to be written</span>
                  </div>
                  <div className="w-12 text-pink ml-auto">
                    <Arrow />
                  </div>
                </Link>
              </div>

              <div className="w-full md:w-1/2 md:px-6">
                <Link to="/" className="block text-white flex flex-wrap items-center border-t-2 md:border-b-2 border-purple-light py-4 md:py-6 xl:py-8">
                  <div>
                    <span className="text-xl md:text-2xl xl:text-3xl block font-semibold mb-2">Cyber Security</span>
                    <span className="md:text-lg block">Brief description to be written</span>
                  </div>
                  <div className="w-12 text-pink ml-auto">
                    <Arrow />
                  </div>
                </Link>
              </div>

              <div className="w-full md:w-1/2 md:px-6">
                <Link to="/" className="block text-white flex flex-wrap items-center border-t-2 border-b-2 border-purple-light py-4 md:py-6 xl:py-8">
                  <div>
                    <span className="text-xl md:text-2xl xl:text-3xl block font-semibold mb-2">IT Solutions</span>
                    <span className="md:text-lg block">Brief description to be written</span>
                  </div>
                  <div className="w-12 text-pink ml-auto">
                    <Arrow />
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="w-full mx-auto text-center">
              <Link to="/contact" className="inline-block border border-pink uppercase text-white p-4 px-6 font-medium text-lg">Find out more</Link>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="pb-12 md:pb-8 lg:pb-8 xl:pb-24 -mt-24 md:-mt-32 lg:-mt-40 xl:-mt-64">
          <div className="overflow-hidden relative z-20">
            <RevealRight>
              <span className="text-8xl lg:text-9xl xl:text-10xl uppercase font-extrabold scroll-text-right text-right text-transparent leading-none -mt-4 xl:-mt-8 block">Find Talent</span>
            </RevealRight>
          </div>

          <div className="w-full mb-8 md:mb-0 relative -mt-12">
            <div className="relative">
              <div className="container lg:px-32 relative z-20">
                <div className="gradient-ltr p-8 md:p-16 xl:p-24">
                  <div className="mb-8 text-center">
                    <span className="text-white font-semibold block text-2xl md:text-3xl mb-5 leading-extra-tight">Search our apprentice talent pool</span>
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

export default EmployersPage