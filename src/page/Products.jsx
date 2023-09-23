import React from "react";
import ProductListLayout from "../layout/products/ProductListLayout";
import TextTitle from "../components/utility/TextTitle";

function Products() {
  const limit = 12;
  return (
    <div className="bg-tmp-top">
      <div className="bg-tmp-bottom">
        <div className="container">
          <TextTitle
            title="Our Products"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla asperiores exercitationem molestiae aliquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla asperiores exercitationem molestiae aliquam"
          />

          <ProductListLayout limit={limit} />
        </div>
      </div>
    </div>
  );
}

export default Products;
