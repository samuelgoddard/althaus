import React from "react"
import PropTypes from "prop-types"
import { AnimatePresence } from "framer-motion"
import { Link } from "gatsby"
import SmoothScroll from "./SmoothScroll";

import "../styles/main.css"

const Layout = ({ children, location }) => {
  return (
    <div id="viewport">
      <div className="fixed z-50 fixed-text-left pl-6 hidden lg:block">
        <span className="text-lg text-white">Learn Digital. Lead Digital.</span>
      </div>
      <div className="fixed z-30 right-0 fixed-text-right pl-6 hidden lg:block transform rotate-180">
        <div className="flex flex-wrap">
          <Link to="/learners" className="btn block w-full py-5 px-3 btn--sideways">
            <span className="btn__inner">Learners</span>
          </Link>
          <Link to="/employers" className="btn btn--pink block w-full mt-3 px-3 py-5 btn--sideways">
            <span className="btn__inner">Employers</span>
          </Link>
        </div>
      </div>
      <SmoothScroll>
        <AnimatePresence exitBeforeEnter initial={false}>
          {children}
        </AnimatePresence>
      </SmoothScroll>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

