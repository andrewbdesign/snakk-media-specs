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
    <h1>Browse project</h1>
    {worksHTML}
  </div>
)

export default Home