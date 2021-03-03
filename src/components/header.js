import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Logo from "../images/logo.inline.svg";
import LogoFlat from "../images/logoFlat.inline.svg";
import Close from "../images/close.inline.svg";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import posed, { PoseGroup } from 'react-pose';

const Overlay = posed.div({
  enter: {
    opacity: 1,
    transition: {
      default: { duration: 350 }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      default: { duration: 350 }
    }
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      overlay: false,
      coursesToggle: false,
      navItems: this.props.navItems,
      socialItems: this.props.socialItems
    }

    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.toggleCourses = this.toggleCourses.bind(this);
  }

  targetElement = null;

  componentDidMount() {
    this.targetElement = document.querySelector('#viewport');
  }
  
  toggleCourses= () => {
    this.setState({
      coursesToggle: !this.state.coursesToggle
    });
  }

  toggleOverlay = () => {
    disableBodyScroll(this.targetElement);
    this.setState({
      overlay: !this.state.overlay
    });
  }

  toggleOff = () => {
    enableBodyScroll(this.targetElement);
    this.setState({
      overlay: false
    });
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render () {

    return (
      <StaticQuery
      query={graphql`
        query HeaderQuery {
          datoCmsContact {
            emailAddress
            telephone
            address
          }
        }
      `}
      render={data => (
        <header className="bg-transparent pt-8 md:pt-12">
          <div className="container lg:px-32">
            <div className="flex flex-wrap items-center">
              
              <Link 
                className={this.props.color === 'black' ? `block text-purple transition duration-500 ease-in-out` : `block text-white transition duration-500 ease-in-out`}
                to="/"
                aria-label="Althaus Logo"
              >
                <div className="mt-px md:mt-0">
                  <Logo />
                </div>
              </Link>

              <div className="ml-auto">
                <div className="flex flex-wrap items-center">
                  <a
                    href="https://skillshub.althausdigital.co.uk"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={this.props.color === 'black' ? `hidden md:block border-2 border-purple uppercase text-purple p-3 xl:p-4 font-medium text-lg` : `hidden md:block border-2 border-white uppercase text-white p-3 xl:p-4 font-medium text-lg`}
                  >Skills Hub</a>

                  <button aria-label="Open Main Menu" className={this.props.color === 'black' ? `p-4 ml-3 text-purple` : `p-4 ml-3 text-white`} onClick={this.toggleOverlay}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8" viewBox="0 0 32 20"><g data-name="Group 3" fill="currentColor"><path data-name="Rectangle 3" d="M0 0h32v4H0z"/><path data-name="Rectangle 4" d="M0 16h32v4H0z"/></g></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <PoseGroup>
            {this.state.overlay && (
            <Overlay key="overlay" className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-secondary-dark text-white z-40 pt-8 md:pt-12 bg-pink overflow-scroll">
                <div className="container lg:px-32 relative h-full">
                  <div className="flex flex-wrap items-center mb-16">
                    <Link className="block text-white transition duration-500 ease-in-out" to="/">
                      <LogoFlat />
                    </Link>
                    
                    <div className="ml-auto">
                      <div className="flex flex-wrap items-center">
                      <a
                          href="http://skillshub.althausdigital.co.uk"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="hidden md:block border-2 border-white uppercase text-white p-3 xl:p-4 font-medium text-lg"
                        >Skills Hub</a>

                        <button className="p-4 ml-3 text-white" onClick={this.toggleOff}>
                          <Close />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap pb-12 md:pb-24">
                    <div className="w-full md:w-1/2 lg:w-2/3">
                      <nav aria-labelledby="mobileMenuOverlayLabel">
                        <span id="mobileMenuOverlayLabel" className="sr-only">Mobile Menu</span>
                        <ul>
                          <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/about" activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">About</Link>
                          </li>
                          <li className="lg:block mb-2">
                            <button onClick={this.toggleCourses}activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight border-none outline-none hover:border-none focus:outline-none">Courses</button>

                            {this.state.coursesToggle && (
                              <ul>
                                <li className="lg:block mb-2 mt-2">
                                  <Link onClick={this.toggleOff} to="/courses" partiallyActive={true} activeClassName="text-purple" className="block no-underline hover:opacity-25 focus:opacity-25 text-2xl md:text-3xl xl:text-4xl transition duration-500 text-white ease-in-out leading-extra-tight font-normal">- Apprenticeships</Link>
                                </li>
                                <li className="lg:block mb-4">
                                  <Link onClick={this.toggleOff} to="/digital-skills-boot-camps" partiallyActive={true} activeClassName="text-purple" className="block no-underline hover:opacity-25 focus:opacity-25 text-2xl md:text-3xl xl:text-4xl transition duration-500 text-white ease-in-out leading-extra-tight font-normal">- Digital Bootcamps</Link>
                                </li>
                              </ul>
                            )}
                          </li>
                          <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/learners" activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">Learners</Link>
                          </li>
                          <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/employers" activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">Employers</Link>
                          </li>
                          <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/digital-poverty-pledge-2021" activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">Digital Poverty Pledge</Link>
                          </li>
                          <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/resources" activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">Resources</Link>
                          </li>
                          {/* Resources Hidden for now... <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/resources" partiallyActive={true} activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">Resources</Link>
                          </li> */}
                          <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/policies" activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">Policies</Link>
                          </li>
                          <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/careers" partiallyActive={true} activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">Careers</Link>
                          </li>
                          <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/contact" activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 md:pl-8">
                      <div className="md:border-l md:border-white md:pl-12 h-full py-8">
                        <span className="text-white text-2xl md:text-3xl font-semibold hidden md:block mb-3 md:mb-8">Say hello</span>
                        
                        <a href={`tel:${data.datoCmsContact.telephone}`} className="transition duration-500 text-white ease-in-out text-lg md:text-xl xl:text-2xl font-medium block hover:opacity-25 focus:opacity-25">{ data.datoCmsContact.telephone }</a>
                        
                        <a href={`mailto:${data.datoCmsContact.emailAddress}`} className="transition duration-500 text-white ease-in-out text-lg md:text-xl xl:text-2xl font-medium block break-all hover:opacity-25 focus:opacity-25 mb-8">{ data.datoCmsContact.emailAddress }</a>

                        <div className="text-white leading-relaxed font-medium text-lg hidden md:block mb-8 md:mb-10" dangerouslySetInnerHTML={{ __html: data.datoCmsContact.address }}></div>

                        <div className="mx-auto flex flex-wrap mb-6 md:mb-0">
                          <a href="https://www.linkedin.com/organization-guest/company/althausdigital?challengeId=AQGa3y8VWO5t5QAAAXM1eW7uSK-ZMkr6NbsaFlnte_XnhAzWWCP9q0sOE9cJX4-fIkLPoyLB7L-pp4O8Mnvj5JNliDTCyn-DqQ&submissionId=9553891c-b432-2016-8b95-fb45fd153b4c" rel="noopener noreferrer" target="_blank" className="block text-white ml-0 mx-2 lg:mx-4 lg:ml-0" aria-label="linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 lg:h-5" viewBox="0 0 18.642 18.984">
                              <path id="Path_76" data-name="Path 76" d="M-347.279,214.572h-3.978V202.638h3.978Zm-1.818-14.515a2.236,2.236,0,0,1-2.238-2.236,2.235,2.235,0,0,1,2.238-2.233,2.236,2.236,0,0,1,2.236,2.233A2.237,2.237,0,0,1-349.1,200.057Zm16.4,14.515h-3.978v-6.45c0-1.439.142-3.288-1.834-3.288-2.008,0-2.144,1.566-2.144,3.184v6.554h-3.978V202.638h3.978v1.326H-341c.514,0,1.79-2.262,3.666-2.262,3.9,0,4.64,2.309,4.64,5.649Z" transform="translate(351.335 -195.588)" fill="#fff"/>
                            </svg>
                          </a>
                          <a href="https://www.facebook.com/althausdigital/" rel="noopener noreferrer" target="_blank" className="block text-white mx-2 lg:mx-4" aria-label="Facebook">
                            <svg id="Group_18" data-name="Group 18" className="h-4 lg:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.331 20">
                              <path id="Path_74" data-name="Path 74" d="M-297.661,205.073c-.016.148-.1.153-.212.153-.787,0-1.573,0-2.36,0h-.264v10.021h-4.125v-.293q0-4.732.005-9.461c0-.213-.056-.277-.271-.272-.579.015-1.157.005-1.753.005v-3.447h2.019v-.263c0-.764-.007-1.529.013-2.293a5.015,5.015,0,0,1,.415-1.919,3.36,3.36,0,0,1,2.739-1.975,7.48,7.48,0,0,1,1.107-.077c.913-.009,1.825,0,2.739,0h.249v3.429c-.091,0-.176,0-.263,0-.652.011-1.305,0-1.956.039a.853.853,0,0,0-.879.883c-.033.715-.008,1.433-.008,2.177h3.156C-297.43,202.893-297.549,203.982-297.661,205.073Z" transform="translate(306.641 -195.246)" fill="#fff"/>
                            </svg>
                          </a>
                          <a href="https://twitter.com/AlthausDigital" rel="noopener noreferrer" target="_blank" className="block text-white mx-2 mr-0 lg:mx-4 lg:mr-0" aria-label="Twitter">
                            <svg id="Group_20" data-name="Group 20" className="h-4 lg:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.969 18.667">
                              <path id="Path_75" data-name="Path 75" d="M-249.976,201.324c.009.2.015.405.015.609a13.316,13.316,0,0,1-13.408,13.408,13.336,13.336,0,0,1-7.224-2.117,9.491,9.491,0,0,0,1.124.067,9.458,9.458,0,0,0,5.853-2.017,4.719,4.719,0,0,1-4.4-3.273,4.738,4.738,0,0,0,.887.085,6.08,6.08,0,0,0,1.412-.165,4.572,4.572,0,0,1-3.611-4.621v-.059c0,.352,1.192.564,1.965.589a4.787,4.787,0,0,1-2.181-3.923,4.663,4.663,0,0,1,.595-2.369,13.334,13.334,0,0,0,9.692,4.924,4.759,4.759,0,0,1-.132-1.075,4.708,4.708,0,0,1,4.707-4.712,4.7,4.7,0,0,1,3.437,1.488,9.411,9.411,0,0,0,2.991-1.143,4.729,4.729,0,0,1-2.072,2.607,9.4,9.4,0,0,0,2.705-.741A9.557,9.557,0,0,1-249.976,201.324Z" transform="translate(270.593 -196.675)" fill="#fff"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="self-end mt-auto w-full text-center pb-5 md:hidden">
                      <a
                        href="https://skillshub.althausdigital.co.uk"
                        target="_blank"
                        rel="noreferrer noopener"
                        className={`border-2 border-white uppercase text-white p-3 xl:p-4 font-medium text-lg block`}
                      >Skills Hub</a>
                    </div>
                  </div>
                </div>
              </Overlay>
            )}
          </PoseGroup>
        </header>
      )} />
    )
  }
}

export default Header
