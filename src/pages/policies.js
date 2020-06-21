import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class PoliciesPage extends React.Component {

  render () {

    return (
      <>
        <SEO title="Courses" />

        <section>
          <div className="absolute top-0 left-0 right-0 z-30">
            <div>
              <Header color="white" />
            </div>
          </div>
          
          {/* Hero */}
          <div className="bg-purple pt-48 md:pt-56 xl:pt-64 mb-20 md:mb-20 xl:mb-24">
            <div className="gradient-ltr">
              <div className="container lg:px-32">
                <div className="flex flex-wrap items-start pb-0 md:pb-20 lg:pb-24">
                  <div className="w-full md:w-1/2 mb-8 md:mb-0 relative z-20">
                    <span className="uppercase font-semibold text-white text-xl md:text-2xl block mb-8 -mt-10">Policies</span>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-white mb-6 md:mb-8 md:whitespace-no-wrap">We protect your<br/>personal data</h1>
                  </div>

                  <div className="w-full md:w-1/2 -mb-12 md:-mb-0 md:-mt-16 xl:-mt-24 relative z-10">
                    <img src="https://placedog.net/1200/700" alt="placeholder" className="relative z-10 mb-0 pb-0 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-24 xl:mb-32">
          <div className="container relative">
            <div className="w-full lg:w-7/12 mx-auto content">
              <div className="mb-12 md:mb-16 xl:mb-20">
                <p className="text-lg md:text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                <div className="w-full border-b border-pink py-8 md:py-12">
                  <h2 className="pb-6 mb-0">Customer Privacy Policy</h2>
                  <span className="w-20 h-2 bg-pink block mb-8"></span>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <div className="flex flex-wrap mt-12">
                    <Link to="/contact" className="inline border-2 border-pink uppercase text-purple p-3 px-6 font-medium text-lg mr-5 mb-4">View Policy</Link>
                    <Link to="/contact" className="inline bg-pink uppercase text-white p-3 px-6 font-medium text-lg mb-4">Download PDF</Link>
                  </div>
                </div>

                <div className="w-full border-b border-pink py-8 md:py-12">
                  <h2 className="pb-6 mb-0">GDPR</h2>
                  <span className="w-20 h-2 bg-pink block mb-8"></span>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <div className="flex flex-wrap mt-12">
                    <Link to="/contact" className="inline border-2 border-pink uppercase text-purple p-3 px-6 font-medium text-lg mr-5 mb-4">View Policy</Link>
                    <Link to="/contact" className="inline bg-pink uppercase text-white p-3 px-6 font-medium text-lg mb-4">Download PDF</Link>
                  </div>
                </div>

                <div className="w-full border-b border-pink py-8 md:py-12">
                  <h2 className="pb-6 mb-0">Prevent</h2>
                  <span className="w-20 h-2 bg-pink block mb-8"></span>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <div className="flex flex-wrap mt-12">
                    <Link to="/contact" className="inline border-2 border-pink uppercase text-purple p-3 px-6 font-medium text-lg mr-5 mb-4">View Policy</Link>
                    <Link to="/contact" className="inline bg-pink uppercase text-white p-3 px-6 font-medium text-lg mb-4">Download PDF</Link>
                  </div>
                </div>

                <div className="w-full border-b border-pink py-8 md:py-12">
                  <h2 className="pb-6 mb-0">British Values</h2>
                  <span className="w-20 h-2 bg-pink block mb-8"></span>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <div className="flex flex-wrap mt-12">
                    <Link to="/contact" className="inline border-2 border-pink uppercase text-purple p-3 px-6 font-medium text-lg mr-5 mb-4">View Policy</Link>
                    <Link to="/contact" className="inline bg-pink uppercase text-white p-3 px-6 font-medium text-lg mb-4">Download PDF</Link>
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

export default PoliciesPage