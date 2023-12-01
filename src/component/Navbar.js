import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsBox } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import { BiPaperPlane } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { BsFillSave2Fill } from "react-icons/bs";
import { GiHomeGarage } from "react-icons/gi";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
  const [mobileDisplay, setmobileDisplay] = useState(false);
  const handleClick = () => {
    if (mobileDisplay) {
      setTimeout(() => {
        setmobileDisplay(false);
      }, 100);
    
    } else {
      setTimeout(() => {
        setmobileDisplay(true);
      }, 100);
    }
  };

  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <>
      <nav
        className="flex justify-between  px-2  py-2.5 h-16 bg-black fixed w-full top-0 mt-0 z-50 "
      >
        <div className="lg:hidden flex items-center text-white ml-3">
          <span className="">
            <span className="">
              {mobileDisplay ? (
                <RxCross1
                  className="text-xl active:animate-spin"
                  onClick={handleClick}
                />
              ) : (
                <HiMenu
                  className="text-xl active:animate-spin"
                  onClick={handleClick}
                />
              )}
            </span>
          </span>
        </div>
        <div className="lg:hidden  sm:flex">
          <Link className="block" to="/">
            <img
              src="/image/logo.png"
              className="mt-4 ml-3  block lg:h-12 w-12"
              alt="logo"
            ></img>
          </Link>
        </div>
        <div className="w-full lg:flex">
          <div>
            <Link className="hidden lg:block" to="/">
              <img
                src="/image/logo.png"
                className="m-1  block lg:h-12 w-12"
                alt="logo"
              ></img>
            </Link>{" "}
          </div>
          <div className="">
            <ul className="hidden text-white order-first lg:flex lg:flex-row">
              <li className="m-3 flex  ">
                <span className=" m-1 text-xl">
                  <GiHomeGarage />
                </span>
                <Link
                  to="/"
                  className={`  ${
                    location.pathname === "/" ? "text-sky-500" : ""
                  }  `}
                >
                  Home
                </Link>
              </li>
              <li className="m-3 flex ">
                <span className=" m-1 text-xl">
                  <BsBox />
                </span>
                <Link
                  to="/product"
                  className={`  ${
                    location.pathname === "/product" ? "text-sky-500" : ""
                  }  `}
                >
                  Product
                </Link>
              </li>
              <li className="m-3 flex ">
                <span className=" m-1 text-xl">
                  <BsGear />
                </span>
                <Link
                  to="/services"
                  className={`  ${
                    location.pathname === "/services" ? "text-sky-500" : ""
                  }  `}
                >
                  {" "}
                  Services
                </Link>
              </li>
              <li className="m-3 flex ">
                <span className=" m-1 text-xl">
                  <TfiGallery />
                </span>
                <Link
                  to="/gallery"
                  className={`  ${
                    location.pathname === "/gallery" ? "text-sky-500" : ""
                  }  `}
                >
                  {" "}
                  Gallery
                </Link>
              </li>
              {/* <li className="m-3 flex ">
                <span className=" m-1 text-xl">
                  <BsFillSave2Fill />
                </span>
                <Link
                  className={`  ${
                    location.pathname === "/getqoute" ? "text-sky-500" : ""
                  }  `}
                  to="/getqoute"
                >
                  Get Qoutes
                </Link>
              </li> */}
              {/* <li className="m-3 flex ">
                <span className=" m-1 text-xl">
                  <FcAbout />
                </span>
                <Link
                  className={`  ${
                    location.pathname === "/blogs" ? "text-sky-500" : ""
                  }  `}
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li> */}
              <li className="m-3 flex ">
                <span className=" m-1 text-xl">
                  <BiPaperPlane />
                </span>
                <Link
                  className={`  ${
                    location.pathname === "/contactus" ? "text-sky-500" : ""
                  }  `}
                  to="/contactus"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="order-last">
            <ul className="text-white flex"></ul>
          </div>
        </div>

        <div className="">
          <ul className="text-white order-first flex">
            <li className="m-3 flex hover:text-xl">
              <Link
                to="/cart"
                className={`  ${
                  location.pathname === "/cart" ? "text-sky-500" : ""
                }  `}
              >
                <FiShoppingCart />
              </Link>
            </li>
            {!sessionStorage.getItem("token") ? (
              <li className="m-3 flex hover:text-xl!">
                <Link
                  className={`  ${
                    location.pathname === "/login" ? "text-sky-500" : ""
                  }  `}
                  to="/login"
                >
                  <AiOutlineUser />
                </Link>
              </li>
            ) : (
              <li className="m-3 flex hover:text-xl text-sky-500">
                <Link
                  className={`  ${
                    location.pathname === "/login" ? "text-sky-500" : ""
                  }  `}
                  to="/login"
                >
                  <AiOutlineUser />
                </Link>
              </li>
            )}
          </ul>
        </div>
        {mobileDisplay ? (
          <>
            <div className="flex justify-center mt-5  overflow-x-hidden overflow-y-auto fixed inset-0 z-10 outline-none focus:outline-none">
              <div
                className="relative w-screen my-6 "
                onClick={() => setmobileDisplay(false)}
              >
                <ul className=" text-white  bg-black">
                  <li className="m-3 flex  ">
                    <span className=" m-1 text-xl">
                      <GiHomeGarage />
                    </span>
                    <Link
                      to="/"
                      className={`  ${
                        location.pathname === "/" ? "text-sky-500" : ""
                      }  `}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="m-3 flex ">
                    <span className=" m-1 text-xl">
                      <BsBox />
                    </span>
                    <Link
                      to="/product"
                      className={`  ${
                        location.pathname === "/product" ? "text-sky-500" : ""
                      }  `}
                    >
                      Product
                    </Link>
                  </li>
                  <li className="m-3 flex ">
                    <span className=" m-1 text-xl">
                      <BsGear />
                    </span>
                    <Link
                      to="/services"
                      className={`  ${
                        location.pathname === "/services" ? "text-sky-500" : ""
                      }  `}
                    >
                      {" "}
                      Services
                    </Link>
                  </li>
                  <li className="m-3 flex ">
                    <span className=" m-1 text-xl">
                      <TfiGallery />
                    </span>
                    <Link
                      to="/gallery"
                      className={`  ${
                        location.pathname === "/gallery" ? "text-sky-500" : ""
                      }  `}
                    >
                      {" "}
                      Gallery
                    </Link>
                  </li>
                  <li className="m-3 flex ">
                    <span className=" m-1 text-xl">
                      <BsFillSave2Fill />
                    </span>
                    <Link
                      className={`  ${
                        location.pathname === "/getqoute" ? "text-sky-500" : ""
                      }  `}
                      to="/getqoute"
                    >
                      Get Qoutes
                    </Link>
                  </li>
                  <li className="m-3 flex ">
                    <span className=" m-1 text-xl">
                      <FcAbout />
                    </span>
                    <Link
                      className={`  ${
                        location.pathname === "/blogs" ? "text-sky-500" : ""
                      }  `}
                      to="/blogs"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="m-3 pb-3 flex ">
                    <span className=" m-1 text-xl">
                      <BiPaperPlane />
                    </span>
                    <Link
                      className={`  ${
                        location.pathname === "/contactus" ? "text-sky-500" : ""
                      }  `}
                      to="/contactus"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
