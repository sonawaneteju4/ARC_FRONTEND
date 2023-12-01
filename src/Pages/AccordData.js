import React from "react";
import { useState } from "react";


const AccordData = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="" onClick={() => setIsActive(!isActive)}>
        <div className="flex justify-between mt-2 rounded-t-xl lg:text-xl text-sm font-bold bg-white cursor-pointer shadow">
          <div className="m-2 ">{title}</div>
          <div className="font-extrabold lg:text-2xl text-sm mx-2 order-last">
            {isActive ? "-" : "+"}
          </div>
        </div>
      </div>
      {/* <UploadGallery/> */}
      <hr></hr>
      {isActive && (
        <div className="accordion-content bg-white/80 p-2  rounded-b-2xl">{content}</div>
      )}
    </div>
  );
};

export default AccordData;
