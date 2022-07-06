import { useState } from 'react';
import '../css/cart.css'
export default function Cart() {
  const[quantity,handleQuantity]=useState(0);
  // function decress()
  // {
  //   if(quantity<0)
  //  {
  //   handleQuantity(0);
  //  }
  //  else{
  //   handleQuantity(quantity-1);
  //  }
  
  // }
  return (
    <>
      <h2 className="main-headding firstText">Cart page</h2>
      <div className="cartContainer productDetailContainer">
        <div className="rightsideContainer cartItems">
        <div className="productImage">
        <img src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg" width="100" height="100" alt="img" />
        </div>
        <div className="productContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </div>
        <div className="quantity"><button className="decress" onClick={()=>{handleQuantity(quantity-1)}}>-</button>{quantity}<button className="incerss" onClick={()=>{handleQuantity(quantity+1)}}>+</button> </div>
        <div className="deleteProductBtn">
        <i className="fa fa-trash-o" aria-hidden="true"></i>
        </div>
        </div>
        <div className="leftsideContainer">
          Checkout
          <div>subtotel:₹1250 tax amount:₹50</div>
          <h2>₹1300</h2><button>checkout</button>
        </div>
    
      </div>
      </>
  )
}

 