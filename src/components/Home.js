import React from 'react'
import works from './../works/index'

console.log(works)
const worksHTML = works.map((work, index) => {
  return (
    <div key={index}>
      <p>Title: {work.title}</p>
    </div>
  )
})
const Home = () => (
  <div className="browse-project">
    <div className="container">
      <h1>Snakk Media Spec</h1>
      <p>RICH MEDIA BUILD ASSETS REQUIREMENTS</p>
      <p>Rich Media Build Assets Requirements (Smartphone/Tablet) </p>
      <p>Rich Media Build Assets Requirements (Video and Availability)</p>
      {worksHTML}

      <h1>Mobile</h1>
      {worksHTML}

      <h1>Tablet</h1>
      {worksHTML}
    </div>
  </div>
)

export default Home