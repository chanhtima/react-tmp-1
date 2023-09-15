import React from "react";
import BannerCarousel from "../components/Carousel/BannerCarousel";
import ProductCarousel from "../components/Carousel/ProductCarousel";

function Home() {
  return (
    <div className="bg-white">
      <BannerCarousel />
      <div className="container py-12">
        <ProductCarousel/>
      </div>
     
    </div>
  );
}

export default Home;
