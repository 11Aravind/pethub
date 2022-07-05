
export default function Card() {
  return (
    <div className="single-card">
    <div className="card-container">
      <div className="card-image">
      <img src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg" alt="img" />
      </div>
      <div className="card-description">
        <h4 className="card-headding">Pet Food Special - Chunky Chicken Meat and Bones (Small Cut, 500g pack)</h4>
        <div className="card-desc">
     <div className="price">
     <span className="old-price"> <s>₹125.00</s></span>  
       <span className="new-price highlight">₹55.00 /pack</span>
     </div>
      <p className="desc">
      Pet Food Special - Chunky Chicken Meat and...
      </p>
        </div>
      </div>
    </div>
  </div>
  )
}

 