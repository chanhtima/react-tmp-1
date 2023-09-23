import React from "react";
import TextTitle from "../components/utility/TextTitle";
import NewListLayout from "../layout/new/NewListLayout";

function NewEvent() {
  return (
    <div className="bg-tmp-top">
      <div className="bg-tmp-bottom">
        <div className="container">
          <TextTitle
            title="Lastest New"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla asperiores exercitationem molestiae aliquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla asperiores exercitationem molestiae aliquam"
          />
          <NewListLayout />
        </div>
      </div>
    </div>
  );
}

export default NewEvent;
