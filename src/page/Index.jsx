import React from "react";
import BannerCarousel from "../components/Carousel/BannerCarousel";
import HomeAbout from "../layout/home/HomeAbout";
import HomeProduct from "../layout/home/HomeProduct";
import HomeNews from "../layout/home/HomeNews";
function Home() {
  return (
    <main>
      <BannerCarousel />
      {/* About */}
      <div className="container">
        <HomeAbout />
      </div>
      {/* Our Top Course */}
      <div className=" bg-gradient-to-r from-cyan-100 to-blue-100">
        <div className="container ">
          <HomeProduct />
        </div>
      </div>
      {/*  New & Events */}
      <div className="container">
      <HomeNews />
      </div>
    </main>
  );
}

export default Home;
