import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { DateProduct } from "../../data/DataProduct";
import ProductCard from "../Card/ProductCard";

function ProductCarousel() {
  const dataCardSlide = DateProduct.map((item) => {
    return (
      <SplideSlide key={item.id} className="p-4">
        <ProductCard
          image={item.image}
          title={item.title}
          detail={item.detail}
          Btn={item.Btn}
        />
      </SplideSlide>
    );
  });
  return (
    <div>
      <Splide
        aria-label="Product"
        options={{
          perPage: 4,
          pagination: false,
          breakpoints: {
            1200: {
              perPage: 3,
            },

            992: {
              perPage: 2,
            },
            768: {
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

export default ProductCarousel;
