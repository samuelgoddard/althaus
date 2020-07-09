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
      navItems: this.props.navItems,
      socialItems: this.props.socialItems
    }

    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  targetElement = null;

  componentDidMount() {
    this.targetElement = document.querySelector('#viewport');
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
                    href="http://skillshub.althausdigital.co.uk"
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
                <div className="container lg:px-32">
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
                    <div className="w-full md:w-2/3">
                      <nav aria-labelledby="mobileMenuOverlayLabel">
                        <span id="mobileMenuOverlayLabel" className="sr-only">Mobile Menu</span>
                        <ul>
                          <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/about" activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">About</Link>
                          </li>
                          <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/courses" partiallyActive={true} activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">Courses</Link>
                          </li>
                          <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/learners" activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">Learners</Link>
                          </li>
                          <li className="lg:block mb-2">
                            <Link onClick={this.toggleOff} to="/employers" activeClassName="text-purple" className="block font-semibold no-underline hover:opacity-25 focus:opacity-25 text-3xl md:text-4xl xl:text-5xl transition duration-500 text-white ease-in-out leading-extra-tight">Employers</Link>
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
                    <div className="w-full md:w-1/3 md:pl-8">
                      <div className="md:border-l md:border-white md:pl-12 h-full py-8">
                        <span className="text-white text-2xl md:text-3xl font-semibold hidden md:block mb-3 md:mb-8">Say hello</span>
                        
                        <a href={`tel:${data.datoCmsContact.telephone}`} className="transition duration-500 text-white ease-in-out text-lg md:text-xl xl:text-2xl font-medium block hover:opacity-25 focus:opacity-25">{ data.datoCmsContact.telephone }</a>
                        
                        <a href={`mailto:${data.datoCmsContact.emailAddress}`} className="transition duration-500 text-white ease-in-out text-lg md:text-xl xl:text-2xl font-medium block break-all hover:opacity-25 focus:opacity-25 mb-8">{ data.datoCmsContact.emailAddress }</a>

                        <div className="text-white leading-relaxed font-medium text-lg hidden md:block" dangerouslySetInnerHTML={{ __html: data.datoCmsContact.address }}></div>
                      </div>
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
