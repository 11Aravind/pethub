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
            <h1 className="bannerHeadding">PETHUB.COM <br />  For Pet Careing</h1>
            <h3 className="secondText">Kollam</h3>
            <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            vero magnam non dignissimos unde,</small>
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
