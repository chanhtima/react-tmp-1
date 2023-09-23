import React from "react";
import ProductListLayout from "../products/ProductListLayout";
import TextTitle from "../../components/utility/TextTitle";
function HomeProduct() {
  const limit = 8; 
  return (
    <div>
      <div className=" mx-auto text-center pb-6 w-9/12">
       <TextTitle title="Our Products" detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla asperiores exercitationem molestiae aliquam" />
      </div>
      <ProductListLayout limit={limit} />
      <div className=" text-center pt-8">
        <a className=" btn btn-outline btn-primary bg-white " href="/product">
          View all courses
        </a>
      </div>
    </div>
  );
}

export default HomeProduct;
