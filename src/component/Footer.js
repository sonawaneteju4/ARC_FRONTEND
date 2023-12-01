import React from "react";
import { BsInstagram } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div >
      <footer  style={{ backgroundImage: `url("/image/mainbgg.jpg")` }} className="top-full bottom-0 left-0 w-full md:px-1 md:py-1">
        <div className="flex flex-row">
          <div className="basis-1/3 mt-2">
            <h1 className="text-center font-bold text-white font-serif">
              AR COUSTOMS
            </h1>
            <h1 className="text-center text-xs  text-blue-300 font-mono">
              A Step Toword A Home Of Art And Creation
            </h1>
          </div>
          <div className="basis-4/6 flex justify-end mt-3">
            <ul className="flex flex-wrap  text-sm text-gray-500 mr-5">
              <li className=" mx-3 hover:scale-125 ">
                <a
                  href="https://www.instagram.com/_wrap_on_/"
                  target="_blank"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  <span className="text-2xl text-purple-400">
                    <BsInstagram className="" />
                  </span>
                </a>
              </li>
              <li className=" mx-3 hover:scale-125 ">
                <a
                  href="https://goo.gl/maps/igdLQqepJfQC8ZtTA"
                  target="_blank"
                  className="mr-4 hover:underline md:mr-6"
                >
                  <span className="text-2xl ">
                    <SiGooglemaps className="" />
                  </span>
                </a>
              </li>
              <li className=" mx-3 hover:scale-125 ">
                <a
                  href="https://wa.me/918087258100?text=I'm%20interested%20in%20coustomization%20car"
                  target="_blank"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  <span className="text-2xl text-green-700">
                    <FaWhatsapp className="" />
                  </span>
                </a>
              </li>
              <li className=" mx-3 hover:scale-125 ">
                <a href="tel:+9180087258100" className="mr-4 hover:underline">
                  <span className="text-2xl text-green-700">
                    <AiOutlinePhone className="" />
                  </span>
                </a>
              </li>
              <li className=" mx-3 hover:scale-125 ">
                <a href="tel:+9180087258100" className="mr-4 hover:underline">
                  <span className="text-2xl text-red-700">
                    <AiFillYoutube className="" />
                  </span>
                </a>
              </li>
            </ul>
          </div>{" "}
        </div>

        <hr className=""></hr>
        <div className="pt-1 font-mono font-thin text-center text-white">&copy; 2023 Copyright: <span className="text-slate-200">
          AR COUSTOMS  </span>
            | Devloped By    
        <span className="text-sky-400 px-2 underline">
          <a href="Devloper">
        Tejas Sonawane
          </a>
        </span>
        </div>
      </footer>

    
    </div>
  );
};

export default Footer;
