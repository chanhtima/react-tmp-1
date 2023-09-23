import React from "react";
import CardDateBasuc01 from "../../components/Card/CardDateBasuc01";
import { DataNew } from "../../data/DataNew";

function NewListLayout() {
  const dataCard = DataNew.map((item) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3" key={item.id}>
        <CardDateBasuc01
          image={item.image}
          title={item.title}
          detail={item.detail}
          url={item.url}
          date={item.date}
          Btn={item.Btn}
        />
      </div>
    );
  });

  return <div className="flex flex-wrap -mx-8 px-4 sm:p-0">{dataCard}</div>;
}

export default NewListLayout;
