import React from "react";
import { AiOutlineDropbox } from "react-icons/ai";
import CarsouelMy from "./CarsouelMy";

const Feature = () => {
  return (
    <>
      <div className="pt-5 pb-5">
        <div className="lg:text-5xl text-3xl flex justify-center font-bold mb-10 ">
          <span className="" style={{color: "dodgerblue"}}>
            <AiOutlineDropbox />
            </span>
          <span style={{color: "dodgerblue"}}>Feature Product</span>
        </div>
        <div className="lg:px-10 px-5">
          <CarsouelMy/>
        </div>
      </div>
    </>
  );
};

export default Feature;
