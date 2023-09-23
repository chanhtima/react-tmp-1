import React from "react";
import ImageAbout from "../../assets/img/img-1 1 (1).png";

function HomeAbout() {
  return (
    <div className="co-text-editor ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <img
          src={ImageAbout}
          alt="about"
          className="w-full lg:w-9/12 lg:ml-auto"
        />
        <div className="p-0 lg:px-8">
          <p className="text-20">Welcome to</p>
          <h1 className="text-primary text-32 font-semibold">
            Course Builder - Online
          </h1>
          <p className="text-14 pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            nam numquam ipsa, ipsum officiis quia, praesentium minima et
            tempora exercitationem vel dolore possimus deleniti dolor
            ducimus esse dignissimos quis. In.
          </p>
          <a href="/" className="text-14 text-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
