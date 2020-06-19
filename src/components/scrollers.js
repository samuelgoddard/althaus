import React, { useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

export default class RevealLeft extends React.Component {
  render(){
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
    return (
      <revealRef/></revealRef>
    )
  }
}
