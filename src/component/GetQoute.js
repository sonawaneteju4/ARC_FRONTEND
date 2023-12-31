import React from "react";
import { NavLink } from "react-router-dom";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaCarSide } from 'react-icons/fa';
import Spinner from "./Spinner";
const GetQoute = () => {
  return (
    <div className="text-black mt-16 h-screen  bg-white ">
      {/* <Spinner/> */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get Your Coustom Qoute
                <br />
                By Today
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Click Bike And Card To Move Forward
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <button
                  to="/getqoute/getService"
                  className="rounded-md flex bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span className="mt-1 pr-2">
                    <RiMotorbikeFill />
                  </span>
                  Bike
                </button>
                <button
                  to="/getqoute/getService"
                  
                  className="rounded-md flex bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span className="mt-1 pr-2 ">
                    <FaCarSide />
                  </span>
                  Car
                </button>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <p className="absolute w-96 text-white top-48 left-64 h-96 font-semibold text-2xl transition-opacity duration-1000 ease-in-out opacity-100">
                Budjet Friendly
              </p>
              <img
                className="w-auto absolute top-10 left-36 h-96 max-w-none rounded-md bg-white/5 ring-1 ring-white/10 transition-opacity duration-1000 ease-in-out opacity-100 hover:opacity-20"
                src="https://i.ibb.co/x5fDY3t/Invoice.jpg"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
      <div>Here Is Next Selection</div>
    </div>
  );
};

export default GetQoute;
