import React from "react"
import Img from "gatsby-image"
// import { Link } from "gatsby"

class Teaser extends React.Component {
  render () {
    return (
      <div className="w-full">
        { this.props.image && (
          <Img fluid={this.props.image.fluid} className="relative w-full" />
        )}
        
        <div className="py-6 xl:py-8 px-5 bg-purple">
          <span className="text-xl md:text-2xl xl:text-3xl block font-semibold mb-2 leading-extra-tight">{ this.props.heading }</span>
          <span className="block md:text-lg">{ this.props.description }</span>
        </div>
        <div className="gradient-ltr h-3 w-full"></div>
      </div>
    )
  }
}

export default Teaser
