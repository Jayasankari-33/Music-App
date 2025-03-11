import React from 'react'
import Unavbar from './Unavbar'
import "./uhome.css"


const Uhome = () => {

  return (
    <div>
      <Unavbar />

      <div>
        <h1 className='text-center' style={{ fontSize: "50px" }}>Music Player Home</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* Add Music Player Home content here if needed.
             Currently, it's showing book store related content which might not be relevant. */}
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Example content - adjust as needed */}
            <p>Welcome to your Music Player!</p>
          </div>

        </div>
        <br />
        <br />
        <br />
        <div>
          <h1 className='text-center' style={{ fontSize: "50px" }}>Top Picks</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* Example content - adjust as needed */}
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Featured Songs or Artists could go here.</p>
            </div>
          </div>
        </div>
      </div>
      <br />

    </div>
  )
}

export default Uhome