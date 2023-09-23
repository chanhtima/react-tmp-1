import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { DateBanner } from "../../data/Databanner";

function BannerCarousel() {
  return (
    <div>
      <Splide
        aria-label="Banner"
        options={{
          arrows: false,
        }}
      >
        {DateBanner.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <img
                src={item.image}
                alt="Image 1"
                className="w-full h-[30rem] object-cover"
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default BannerCarousel;
