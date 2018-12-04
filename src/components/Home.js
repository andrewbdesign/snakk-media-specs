import React from 'react'
import works from './../works/index'
import Iphone from './../img/iphone.png'

console.log(works[0])
// const worksHTML = works.map((work, index) => {
//   return (
//     <div key={index}>
//       <p>Title: {work.title}</p>
//     </div>
//   )
// })

const work = works[0]

const assetsReqHTML = work.assetsReq.map((work, index) => <li key={index}>{work}</li> )
const notesHTML = work.notes.map((note, index) => <li key={index}>{note}</li> )

const Home = () => (
  <div className="browse-project">
    <div className="grey-shape"></div>
    <div className="container">

      <div className="details-container">

        <div className="iphone">
          <img src={Iphone} alt="iphone" />
            <iframe 
              className="iphone-screen" 
              title="phone-preview"
              src={work.iframeUrl}>
            </iframe>
        </div>

        <div className="details-box">
          <h1>Ad Specs</h1>

          <h2>Title</h2>
          <p>{work.title}</p>

          <h2>Category</h2>
          <p>{work.category}</p>
          
          <h2>Size</h2>
          <p>{work.size}</p>
          
          <h2>Assets Required</h2>
          <ul> {assetsReqHTML} </ul>

          <h2>Notes</h2>
          <ul> {notesHTML} </ul>

          <h2>Creative Link</h2>
          <p> <a target="_blank" rel="noopener noreferrer" href={work.creativeUrl}>{work.creativeUrl}</a> </p>

          <h2>QR code</h2>
          <img className="qr-code" src={work.qrImage} alt="qr-code"/>

        </div>

      </div>

    </div>
  </div>
)

export default Home