import React from 'react'

const MediaSpecs = () => (
  <div className='container'>
    <h2>Rich Media Build Assets Requirements (Smart Phone / Tablets)</h2>
    <p>Please contact TouchCreate team for more details.</p>
    <table>
      <tbody>
        <tr>
          <th>Mobile</th>
          <th>Creative Size</th>
          <th>PSD Assets Dimensions</th>
          <th>Assets required</th>
          <th>Animation length</th>
          <th>Expandable size</th>
          <th>File size limit</th>
          <th>Can video be included?</th>
          <th>Notes</th>
        </tr>

        <tr>
          <td></td>
          <td>320x50 (Mobile Banner)</td>
          <td>640x100</td>
          <td>PSD, Fonts, Storyboards. Third party Click trackers and impression trackers (if applicable)</td>
          <td>30 secs max</td>
          <td>Fullscreen Responsive</td>
          <td>60kb - jpg/gif</td>
          <td>Yes - Will autoplay with sound mute.</td>
          <td>Please contact TouchCreate team for more detail.</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default MediaSpecs