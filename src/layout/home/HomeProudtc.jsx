import React from "react";
import ProductListLayout from "../../layout/products/ProductListLayout";
function HomeProudtc() {
  return (
    <div>
      <div className=" mx-auto text-center pb-6 w-9/12">
        <h2 className="home-title">Our Top Course</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla
          asperiores exercitationem molestiae aliquam, corporis ullam odit
          assumenda veniam. Reprehenderit sint dolore officiis beatae ratione ut
          atque deleniti, nobis voluptates?
        </p>
      </div>
      <ProductListLayout />
      <div className=" text-center pt-8">
        <a className=" btn btn-outline btn-primary bg-white " href="/product">
          View all courses
        </a>
      </div>
    </div>
  );
}

export default HomeProudtc;
