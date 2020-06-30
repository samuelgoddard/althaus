import React from "react"
import PropTypes from "prop-types"
import { AnimatePresence } from "framer-motion"
import { Link } from "gatsby"
// import SmoothScroll from "./SmoothScroll";

import "../styles/main.css"

const Layout = ({ children, location }) => {
  return (
    <div id="viewport">
      <div className="fixed z-50 fixed-text-left pl-6 hidden lg:block">
        <span className="text-lg text-white">Learn Digital. Lead Digital.</span>
      </div>
      <div className="fixed z-30 right-0 fixed-text-right pl-6 hidden lg:block transform rotate-180">
        <div className="flex flex-wrap">
          <Link to="/learners" className="xl:text-lg text-white bg-purple-light p-3 py-5 uppercase font-semibold ">Learners</Link>
          <Link to="/employers" className="xl:text-lg text-white bg-pink p-3 py-5 uppercase font-semibold mt-3">Employers</Link>
        </div>
      </div>
      {/* <SmoothScroll> */}
        <AnimatePresence exitBeforeEnter initial={false}>
          {children}
        </AnimatePresence>
      {/* </SmoothScroll> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

