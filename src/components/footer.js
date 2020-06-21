import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import Arrow from "../images/arrow.inline.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class Footer extends React.Component {
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

    return (
      <footer className="">
        { !this.props.contactPage && (
          <div>
            <div className="bg-white pt-6 md:pt-10 lg:pt-16 xl:pt-20 overflow-hidden">
              <div className="container lg:px-32">
                <div className="flex flex-wrap pb-6 md:pb-10 lg:pb-16 xl:pb-20">
                  <div className="w-full md:w-7/12 lg:w-5/12 ml-auto">
                    <span className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-extra-tight block mb-10">Ready to start your journey?</span>
                    <Link to="/" className="text-md text-pink font-semibold uppercase flex flex-wrap items-center block">
                      <span className="block">Get in touch</span>
                      <span className="block ml-4 w-8"><Arrow /></span>
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
          </div>
        )}

        <div className="pt-12 pb-6 md:pt-20 xl:pt-24 md:pb-5 bg-purple">
          <div className="container lg:px-32">
            <div className="flex flex-wrap items-center border-t border-b border-pink py-6">
              <Link className="block mb-4 md:mb-0" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-32 md:w-48" viewBox="0 0 278.064 81.367"><defs><linearGradient id="a" x1=".28" y1=".82" x2=".759" y2=".5" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#2b3584"/><stop offset="1" stopColor="#b32750"/></linearGradient></defs><g data-name="Group 2770"><path data-name="Path 5538" d="M87.076 40.017c-2.542 3.451-6.6 5.145-11.683 5.145-6.6 0-10.835-4.237-10.835-9.745 0-5.568 4.418-9.081 11.925-9.14h10.472V24.4c0-4.662-2.905-7.446-8.536-7.446-3.511 0-6.78 1.331-10.109 3.633l-2-3.451c4.116-2.724 7.567-4.3 13.015-4.3 7.87 0 12.227 4.177 12.288 11.017l.06 21.065h-4.6zm-.06-6.113v-3.813h-9.927c-5.328 0-8.112 1.634-8.112 5.144s2.846 5.812 7.325 5.812c5.388 0 9.5-2.724 10.714-7.143" fill="#fff"/><path data-name="Path 5539" d="M135.505 42.744a13.343 13.343 0 01-7.205 2.422c-4.661 0-8.113-2.784-8.113-9.08V17.862h-4.6v-3.814h4.6V5.632h4.662v8.416l10.111-.06v3.874h-10.111v17.376c0 3.876 1.513 5.329 4.238 5.329a9.667 9.667 0 005.086-1.635z" fill="#fff"/><path data-name="Path 5540" d="M170.737 26.457v18.466h-1.211V26.457c0-7.75-4.177-11.866-11.26-11.866-8.234 0-13.2 5.389-13.2 13.319v17.013h-1.212V0h1.212v21.977c1.877-5.207 6.478-8.536 13.138-8.536 7.688 0 12.533 4.539 12.533 13.016" fill="#fff"/><path data-name="Path 5541" d="M205.484 24.399v20.524h-1.212v-6.661c-2 4.178-6.054 6.841-11.927 6.841-7.023 0-11.079-3.511-11.079-8.777 0-4.481 2.785-8.416 11.14-8.416h11.866v-3.451c0-6.539-3.452-9.869-9.929-9.869a16.4 16.4 0 00-11.382 4.358l-.847-.847a17.828 17.828 0 0112.169-4.662c7.267 0 11.2 3.814 11.2 10.958m-1.211 11.563v-6.9h-11.926c-7.083 0-9.869 3.028-9.869 7.205 0 4.722 3.633 7.688 9.869 7.688 6.055 0 9.869-2.906 11.927-7.991" fill="#fff"/><path data-name="Path 5542" d="M245.316 13.622v31.3h-1.211v-8.294c-1.817 5.206-6.236 8.475-12.593 8.475-7.931 0-12.836-4.539-12.836-13.016V13.622h1.211v18.466c0 7.749 4.237 11.866 11.563 11.866 7.87 0 12.654-5.389 12.654-13.319V13.622z" fill="#fff"/><path data-name="Path 5543" d="M254.209 40.807l.726-.969c2.24 2.18 6.479 4.117 11.5 4.117 7.447 0 10.414-2.844 10.414-6.962 0-10.474-21.432-3.33-21.432-15.5 0-4.177 3.33-8.052 11.079-8.052 3.875 0 7.991 1.27 10.353 3.208l-.727.969a15.717 15.717 0 00-9.626-3.028c-6.9 0-9.809 3.028-9.809 6.9 0 10.775 21.372 3.692 21.372 15.5 0 4.722-3.814 8.111-11.624 8.111-5.086 0-9.868-1.817-12.23-4.3" fill="#fff"/><path data-name="Rectangle 242" fill="#fff" d="M102.511 0h4.723v44.923h-4.723z"/><path data-name="Path 5566" d="M376.713 1057.54l11.086 19.026-13.078.018-9.2 15.856h-3.649l12.959-22.44 1.945 3.364h5.324l-7.283-12.542-20.9 36.206h14.268l9.2-15.857 18.439.016-13.785-23.659 1.9-3.3 22.013 38.126h-3.662l-4.654-7.968-18.485.011-7.229 12.626h23.518l-2.658-4.577h-12.9l1.984-3.439h13.169l4.624 8.02h14.3l-30.021-52z" transform="translate(-353.914 -1045.032)" fill="url(#a)"/><path data-name="Path 5593" d="M214.097 57.746v8.569a5.88 5.88 0 00-5.352-3.141 6.344 6.344 0 00-6.484 6.659 6.358 6.358 0 006.483 6.663 5.819 5.819 0 005.378-3.2v3.1h1.231v-18.65zm-5.277 17.615a5.2 5.2 0 01-5.277-5.528 5.2 5.2 0 015.277-5.528 5.2 5.2 0 015.277 5.528 5.2 5.2 0 01-5.277 5.528zm12.589-15.278a1.019 1.019 0 001.03-1.03 1.014 1.014 0 00-1.03-1.005 1.035 1.035 0 00-1.03 1.03 1.014 1.014 0 001.03 1.005zm-.628 16.313h1.255V63.274h-1.255zm17.288-13.122v2.965a6.016 6.016 0 00-5.5-3.066 6.239 6.239 0 00-6.533 6.358 6.259 6.259 0 006.53 6.383 6.054 6.054 0 005.453-2.99v2.211c0 3.493-1.633 5.1-5.126 5.1a7.772 7.772 0 01-5.3-1.91l-.678.955a8.665 8.665 0 006.006 2.086c4.222 0 6.358-1.985 6.358-6.383v-11.71zm-5.4 11.509a5.108 5.108 0 01-5.352-5.252 5.088 5.088 0 015.352-5.227 5.094 5.094 0 015.378 5.227 5.114 5.114 0 01-5.38 5.252zm12.69-14.7a1.019 1.019 0 001.03-1.03 1.014 1.014 0 00-1.03-1.005 1.035 1.035 0 00-1.03 1.03 1.014 1.014 0 001.028 1.005zm-.631 16.313h1.256V63.274h-1.256zm12.665-1.713a3.015 3.015 0 01-2.035.729c-1.608 0-2.437-.93-2.437-2.613v-8.443h4.171v-1.081h-4.172V60.41h-1.256v2.865h-2.412v1.081h2.412v8.569a3.253 3.253 0 003.572 3.571 3.98 3.98 0 002.689-.93zm8.569-11.509a8 8 0 00-5.252 1.86l.628.9a6.808 6.808 0 014.523-1.658c2.563 0 3.895 1.307 3.895 3.744v1.055h-4.5c-3.644 0-4.9 1.684-4.9 3.669.003 2.24 1.787 3.752 4.727 3.752a5.038 5.038 0 004.724-2.437v2.337h1.206v-8.322c0-3.242-1.809-4.9-5.051-4.9zm-.7 12.288c-2.312 0-3.644-1.055-3.644-2.764 0-1.508.955-2.639 3.669-2.639h4.473v2.463a4.5 4.5 0 01-4.501 2.94zm11.053.934h1.256v-18.65h-1.256z" fill="#fff"/></g></svg>
              </Link>

              <div className="w-full md:w-auto md:ml-auto md:text-right">
                <span className="text-white font-semibold block">T: +44 (0) 20 3637 1455</span>
                <span className="text-white font-semibold block">E: info@althausdigital.co.uk</span>
              </div>
            </div>

            <div className="w-full flex flex-wrap items-center border-b border-pink py-8 md:py-12">
              <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div className="w-full flex flex-wrap">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                      <span className="text-white uppercase block text-lg mb-3">Location</span>

                      <span className="text-white block">Address Line 1<br/>Address Line 2<br/>Post Code</span>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-4">
                      <span className="text-white uppercase block text-lg mb-3">Sitemap</span>

                      <div className="flex flex-wrap -mx-2">
                        <div className="w-1/2 px-2">
                          <Link to="/" className="text-white block">About</Link>
                          <Link to="/" className="text-white block">Courses</Link>
                          <Link to="/" className="text-white block">Learners</Link>
                          <Link to="/" className="text-white block">Employers</Link>
                        </div>
                        <div className="w-1/2 px-2">
                          <Link to="/" className="text-white block">Resources</Link>
                          <Link to="/" className="text-white block">Policies</Link>
                          <Link to="/" className="text-white block">Careers</Link>
                          <Link to="/" className="text-white block">Contact</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <span className="text-white uppercase block text-lg mb-3">Customers</span>
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-1/2 px-2">
                      <Link to="/" className="xl:text-lg text-white bg-purple-light p-3 text-center block w-full uppercase font-semibold">Learners</Link>
                    </div>
                    <div className="w-1/2 px-2">
                      <Link to="/" className="xl:text-lg text-white bg-pink p-3 text-center block w-full uppercase font-semibold">Employers</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-wrap items-end py-6">
              <span className="text-white">Paperless Logos...</span>
              <small className="text-white ml-auto text-sm">&copy; Althaus. All rights reserved {(new Date().getFullYear())}</small>
            </div>

          </div>
        </div>
        <div className="gradient-ltr w-full h-6"></div>
      </footer>
    )
  }
}

export default Footer
