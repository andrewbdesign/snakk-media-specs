import React, { Component } from 'react'
import { TweenMax } from 'gsap/all'

class AdForm extends Component {
  constructor(props) {
    super(props)

    // Labels
    this.labelTitle = null
    this.labelBrand = null
    this.labelCreativeUrl = null
    this.labelAdSpecs = null
    this.labelSize = null

    // Images
    this.qrCode = null

    // State
    this.state = {
      brand: '',
      title: '',
      size: '',
      creativeUrl: '',
      adSpecs: '',
      qrImage: '',
      qrImageFile: '',
      screenshot: ''
    }
  }

  labelIn = (el) => {
    TweenMax.to(el, .2, { x:-10, y:-28, scale: .7, transformOrigin: '0% 50%', ease: 'Sine.easeOut' })
  }
  labelOut = (el) => {
    TweenMax.to(el, .2, { x:0, y:0, scale: 1, transformOrigin: '0% 50%', ease: 'Sine.easeOut' })
  }

  onTitleChange = (e) => {
    const title = e.target.value
    this.setState({ title })
  }

  onBrandChange = (e) => {
    const brand = e.target.value
    this.setState({ brand })
  }

  onCreativeUrlChange = (e) => {
    const creativeUrl = e.target.value
    this.setState({ creativeUrl })
  }

  onAdSpecsChange = (e) => {
    const adSpecs = e.target.value
    this.setState({ adSpecs })
  }

  onSizeChange = (e) => {
    const size = e.target.value
    this.setState({ size })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('form is submitted', this.state)
  }

  handleFileSelected = (e) => {
    e.preventDefault()
    const files = e.target.files
    let filename = files[0].name
    if (filename.lastIndexOf('.') <= 0) {
      return alert('Please add a valid image')
    }
    // console.log('filename', filename)
    const fileReader = new FileReader()
    fileReader.addEventListener('load', () => {
      const qrImage = fileReader.result 
      this.setState({ qrImage })
    })
    fileReader.readAsDataURL(files[0])
    const qrImageFile = files[0]
    this.setState({ qrImageFile })
  }

  onHandleFormReset = () => {
    console.log('the form has been reset')
    this.setState({
      brand: '',
      title: '',
      size: '',
      creativeUrl: '',
      adSpecs: '',
      qrImage: '',
      screenshot: ''
    })
  }

  render() {
    return (
      <div className="ad-form">
        <h1>Creative Template</h1>
        <form onSubmit={this.handleOnSubmit} autoComplete="off">
          
          <label 
            htmlFor="title"
            ref={title => this.labelTitle = title}
          >Title</label>
          <input 
            id="title"
            onFocus={ () => { this.labelIn(this.labelTitle) }}
            onBlur={ () => { this.state.title ? this.labelIn(this.labelTitle) : this.labelOut(this.labelTitle) }}
            value={this.state.title} 
            onChange={this.onTitleChange} />

          <label 
            htmlFor="size"
            ref={size => this.labelSize = size}
          >Size</label>
          <input 
            id="size"
            onFocus={ () => { this.labelIn(this.labelSize) }}
            onBlur={ () => { this.state.size ? this.labelIn(this.labelSize) : this.labelOut(this.labelSize) }}
            value={this.state.size}
            onChange={this.onSizeChange}
          />
          
          <label 
            htmlFor="brand"
            ref={brand => this.labelBrand = brand}
          >Brand</label>
          <input 
            id="brand"
            onFocus={ () => { this.labelIn(this.labelBrand) }}
            onBlur={ () => { this.state.brand ? this.labelIn(this.labelBrand) : this.labelOut(this.labelBrand) }}
            value={this.state.brand}
            onChange={this.onBrandChange} />


          <label 
            htmlFor="creative-url"
            ref={creativeUrl => this.labelCreativeUrl = creativeUrl}
          >Creative URL</label>
          <input 
            id="creative-url"
            onFocus={ () => { this.labelIn(this.labelCreativeUrl) }}
            onBlur={ () => { this.state.creativeUrl ? this.labelIn(this.labelCreativeUrl) : this.labelOut(this.labelCreativeUrl) }}
            value={this.state.creativeUrl}
            onChange={this.onCreativeUrlChange}
          />

          <input 
            type="file" 
            id="qr-code" 
            name="qrcode" 
            accept="image/png, image/jpeg"
            ref={qrCode => this.qrCode = qrCode}
            onChange={this.handleFileSelected}
          />
          <button 
            className="qr-btn"
            onClick={(e) => { 
              this.qrCode.click()
              e.preventDefault()
            } }
          >Upload QR code</button>

          <label 
            htmlFor="ad-specs"
            ref={labelAdSpecs => this.labelAdSpecs = labelAdSpecs}
          >Ad Specs</label>
          <textarea 
            id="ad-specs"
            onFocus={ () => { this.labelIn(this.labelAdSpecs) }}
            onBlur={ () => { this.state.adSpecs ? this.labelIn(this.labelAdSpecs) : this.labelOut(this.labelAdSpecs) }}
            value={this.state.adSpecs}
            onChange={this.onAdSpecsChange}
            ></textarea>



          <input type="button" value="Reset" onClick={this.onHandleFormReset} />
          <button className="submit-btn">Submit Form</button>
        </form>
        
        <img src={this.state.qrImage} alt='qr-code'/>
      </div>
    )
  }
}

export default AdForm