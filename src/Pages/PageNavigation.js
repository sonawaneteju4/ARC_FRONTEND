import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillBadgeArFill } from "react-icons/bs";

const PageNavigation = ({ title, category }) => {
  return (
    <div className="w-screen bg-slate-200 h-10 ">
      <div className="flex pl-5 items-center content-center pt-2 ">
        <div>
          <NavLink to="/" className="">
            <BsFillBadgeArFill className="mt-1" />
          </NavLink>
        </div>
        <div>
          <NavLink to={`/product?${category}`} className="px-2 text-base">
            &gt; {category} &gt;
          </NavLink>
        </div>
        <div>
          <NavLink className="text-sm text-slate-700">{title ? title : 'Ar Customs'}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;
