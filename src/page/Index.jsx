import React from "react";
import BannerCarousel from "../components/Carousel/BannerCarousel";
import ProductCarousel from "../components/Carousel/ProductCarousel";
import  Imagme from "../assets/img/Banner.png"
function Home() {
  return (
    <div className="bg-white">
      <BannerCarousel />
      <div className="container py-12">
        <ProductCarousel/>
      </div>
      <div className="container">

      <div className="w-full">
        <img src={Imagme} alt="" />
      </div>
      </div>
     
    </div>
  );
}

export default Home;
