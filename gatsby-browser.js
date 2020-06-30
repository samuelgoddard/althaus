import React from "react"
import Layout from "./src/components/layout"

// const transitionDelay = 350

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

// export const shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   if (location.action === "PUSH") {
//     window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
//   } else {
//     const savedPosition = getSavedScrollPosition(location)
//     window.setTimeout(
//       () => window.scrollTo(...(savedPosition || [0, 0])),
//       transitionDelay
//     )
//   }
//   return false
// }

// const insertJS = () => {
//   const s = document.createElement(`script`)
//   s.type = `text/javascript`
//   s.src = "//217641.tctm.co/t.js"
//   document.getElementsByTagName(`head`)[0].appendChild(s)
// }

// export const onInitialClientRender = () => {
//   insertJS()
// }

// export const onRouteUpdate = function({ location }) {
  // Don't track while developing.
  // let fbq = null;
  
  // if (process.env.NODE_ENV === `production` && typeof fbq === `function`) {
  //   fbq('track', 'ViewContent');
  // }
// };
