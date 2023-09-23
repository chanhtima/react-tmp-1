import React from "react";
import TextTitle from "../components/utility/TextTitle";
import ImageAbout1 from "../assets/img/img-1 1 (1).png";
import ImageAbout2 from "../assets/img/home-illustration 1.png";
import ImageAbout3 from "../assets/img/header-search 1.png";

function About() {
  return (
    <div className="bg-tmp-top">
      <div className="bg-tmp-bottom">
        <div className="container">
          <TextTitle
            title="About Us"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          nam numquam ipsa, ipsum officiis quia, praesentium minima et
          tempora exercitationem vel dolore possimus deleniti dolor ducimus
          esse dignissimos quis. In."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-8">
            <img
              src={ImageAbout1}
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
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-4">
            <div className="p-0 lg:px-8">
              <h1 className=" text-secondary text-32 font-semibold">
                Our Story
              </h1>
              <p className="text-14 pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                nam numquam ipsa, ipsum officiis quia, praesentium minima et
                tempora exercitationem vel dolore possimus deleniti dolor
                ducimus esse dignissimos quis. In.
              </p>
            </div>
            <img
              src={ImageAbout2}
              alt="about"
              className="w-full lg:w-9/12 lg:mr-auto"
            />
          </div>
          <div className="mt-8">
            <div className="p-0 lg:px-8 text-center">
              <h1 className="text-[#56BD88] text-32 font-semibold">
                Improve QualityWith Technology
              </h1>
              <p className="text-14 pb-2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                nam numquam ipsa, ipsum officiis quia, praesentium minima et
                tempora exercitationem vel dolore possimus deleniti dolor
                ducimus esse dignissimos quis. In.
              </p>
            </div>
            <img
              src={ImageAbout3}
              alt="about"
              className="w-full lg:w-9/12 lg:mx-auto mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
