import React from 'react'
import Card from '../component/Card'

function Products() {
  return (
    <div>

          <h2 className="main-headding firstText">OUR  <span className="secondText">PETS</span></h2>
      <div className="row">
        {/* single card design start  */}
    
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
        {/* single card design end  */}
        </div>
    </div>
  )
}

export default Products