import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DateProduct } from "../data/DataProduct";
const ProudtcDetails = () => {
  const { id } = useParams();
  const product = DateProduct.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="bg-tmp-top">
      <div className="bg-tmp-bottom">
        <div className="container">
          <div className=" grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className=" text-center lg:text-left px-8 pb-8 lg:pb-0">
              <h1 className="home-title line-clamp-2 pb-4">{product.title}</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis eligendi, ratione veniam officiis, velit vel rem dicta
                repellendus fugiat numquam qui. Quia consectetur eius voluptate
                architecto recusandae similique tempore nesciunt.
              </p>
            </div>
            <img
              src={product.image}
              alt={product.title}
              className=" aspect-video object-cover rounded-lg"
            />
          </div>
          <div className=" text-center mt-8">
            <h2 className=" font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h2>
            <p className="mx-auto w-9/12 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              magnam accusantium quos praesentium. Cupiditate accusantium quod
              iure numquam voluptatibus repudiandae unde, ea consectetur
              deleniti saepe? Distinctio ratione eum earum amet.
            </p>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default ProudtcDetails;
