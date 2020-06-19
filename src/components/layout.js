import React from "react"
import PropTypes from "prop-types"
// import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"

import "../styles/main.css"

// const duration = 0.15

// const variants = {
//   initial: {
//     opacity: 0,
//   },
//   enter: {
//     opacity: 1,
//     transition: {
//       duration: duration,
//       ease: [0.43, 0.13, 0.23, 0.96],
//       delay: duration,
//       when: 'beforeChildren',
//       staggerChildren: 0.5,
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       staggerChildren: 0.5,
//       ease: [0.43, 0.13, 0.23, 0.96],
//       duration: duration,
//     },
//   },
// }

const Layout = ({ children, location }) => {
  return (
    <>
      <div className="fixed z-50 fixed-text-left pl-6 hidden lg:block">
        <span className="text-lg text-white">Learn Digital. Lead Digital.</span>
      </div>
      <div className="fixed z-30 right-0 fixed-text-right pl-6 hidden lg:block transform rotate-180">
        <div className="flex flex-wrap">
          <Link to="/" className="xl:text-lg text-white bg-purple-light p-3 py-5 uppercase font-semibold ">Learners</Link>
          <Link to="/" className="xl:text-lg text-white bg-pink p-3 py-5 uppercase font-semibold mt-3">Employers</Link>
        </div>
      </div>
      {/* <AnimatePresence> */}
        <main>
          {children}
        </main>
      {/* </AnimatePresence> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
