import React from "react";
import NewCarousel from "../../components/Carousel/NewCarousel";

function HomeNews() {
  return (
    <>

        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/4">
            <div className=" pt-8">
              <h2 className="home-title">Lastest New</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                nulla asperiores exercitationem molestiae aliquam
              </p>
              <a
                href="/new-events"
                className=" btn btn-primary hover:bg-white text-white hover:text-black mt-4"
              >
                View all courses
              </a>
            </div>
          </div>
          <div className=" w-full lg:w-3/4 ">
            <NewCarousel/>
          </div>
        </div>
    </>
  );
}

export default HomeNews;
