import React from "react";
import ProductCard from "../components/Card/ProductCard";
import { DateProduct } from "../data/DataProduct";


function ProductListLayout() {
  const dataCardP = DateProduct.map((item) => {
    return (
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <ProductCard
          key={item.id}
          image={item.image}
          title={item.title}
          detail={item.detail}
          Btn={item.Btn}
        />
      </div>
    );
  });
  return (
    <div className=" container py-12">
      <div className="flex flex-wrap ">{dataCardP}</div>
    </div>
  );
}

export default ProductListLayout;
