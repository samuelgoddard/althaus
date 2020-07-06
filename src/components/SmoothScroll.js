import React from "react";
import { TweenLite, Power2 } from "gsap";
import ResizeObserver from "resize-observer-polyfill";
// import { isMobile } from 'react-device-detect';
import isMobile from 'ismobilejs';

const windowGlobal = typeof window !== 'undefined' && window

export default class SmoothScroll extends React.Component {
  
  state = {
    height: windowGlobal.innerHeight
  };

  ro = new ResizeObserver(elements => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      console.log(crx);
      this.setState({
        height: crx.height
      });
    }
  });

  componentDidMount() {
    if (!isMobile) {
      windowGlobal.addEventListener("scroll", this.onScroll);
      this.ro.observe(this.viewport);
    }
  }

  onScroll = () => {
    if (!isMobile) {
      TweenLite.to(this.viewport, 1, {
        y: -windowGlobal.pageYOffset,
        ease: Power2.easeOut
      });
    }
  };

  render() {
    return (
      <>
        <div className={ isMobile ? `` : `viewport`} ref={ref => (this.viewport = ref)}>
          {this.props.children}
        </div>
        { !isMobile && (
          <div
            ref={ref => (this.fake = ref)}
            style={{
              height: this.state.height
            }}
          />
        )}
      </>
    );
  }
}
