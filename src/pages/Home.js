import React from "react";
import Card from "../component/Card";

function Home() {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
{/* <img src="./asset/image/category.png" alt="productCategory" /> */}
      <div className="bannerImgDiv">
        <div className="bannerContent">
          <div>
            <h1>PETHUB</h1>
            <h1>TEXT CONTENT</h1>
            <h1 className="secondText">NOT ANYMORE</h1>
            <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            vero magnam non dignissimos unde, qui, quaerat modi ad corrupti
            sequi animi aperiam eum suscipit libero laboriosam deleniti. Eos,
            quidem perspiciatis?.</small>
          </div>
<div>        <button className="bannerButton">SHOW MORE DETAILS</button></div>

        </div>
      </div>
      <h2 className="main-headding firstText">OUR  <span className="secondText">PETS</span></h2>

      {/* <img src="./asset/image/banner.jpg" className="bannerImg" alt="banner" /> */}

      <Card />
    </div>
  );
}

export default Home;
