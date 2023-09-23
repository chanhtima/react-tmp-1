import React from "react";
import CardDateBasuc01 from "../Card/CardDateBasuc01";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { DataNew } from "../../data/DataNew"
 
function NewCarousel() {
  const dataCardSlide = DataNew.map((item) => {
    return (
      <SplideSlide key={item.id} className="p-3">
        <CardDateBasuc01
          image={item.image}
          title={item.title}
          detail={item.detail}
           url={item. url}
          date={item.date}

          Btn={item.Btn}
        />
      </SplideSlide>
    );
  });
  return (
    <div>
      <Splide
        aria-label="NewEvents"
        options={{
          perPage: 3,
          pagination: false,
          breakpoints: {
            992: {
              perPage: 2,
            },
            600: {
              perPage: 1,
            },
          },
        }}
      >
        {dataCardSlide}
      </Splide>
    </div>
  );
}

export default NewCarousel;
