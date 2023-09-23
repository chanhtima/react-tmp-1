import React from "react";
import ProductCard from "../../components/Card/CardBasic01";
import { DateProduct } from "../../data/DataProduct";

function ProductListLayout({ limit }) {
  const dataCardP = DateProduct.slice(0, limit).map((item) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3" key={item.id}>
        <ProductCard
          id={item.id}
          image={item.image}
          title={item.title}
          Btn={item.Btn}
        />
      </div>
    );
  });

  return <div className="flex flex-wrap -mx-8 px-4 sm:p-0">{dataCardP}</div>;
}

export default ProductListLayout;
