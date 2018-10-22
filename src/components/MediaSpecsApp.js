import React, { Component } from 'react'

import Header from './Header'
import MediaSpecs from './MediaSpecs'

class MediaSpecsApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <MediaSpecs />
      </div>
    )
  }
}

export default MediaSpecsApp