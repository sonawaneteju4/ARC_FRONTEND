import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const SectionUpdate = () => {
  const [text] = useTypewriter({
    words: ["_Wrap_On_", "7066696990"],
    loop: 0,
    typeSpeed: 80,
  });
  return (
    <>
      {" "}

      <div className="bg-cover"  style={{backgroundImage: `url("/image/Product/bgmain.png")`}}  >
        {" "}
        <section className="">
          <div className="px-6 py-5 lg:my- md:px-12 text-gray-800 text-center lg:text-left">
            <div className="container mx-auto xl:px-20">
              <div className="grid lg:grid-cols-2 gap-12  items-center">
                <div className="mt-12 lg:mt-0">
                  {/* <img src="/image/insta.gif" className="h-48 " alt=""></img>
                   */}
                  <div className="h-10">
                    <p
                      className="pb-2 text-4xl font-extrabold text-purple-400"
                      style={{ color: "", fontWeight: "bold" }}
                    >
                      {/* {text} */}
                      7066696990
                    </p>
                  </div>
                  {/* <video src="/image/wrapnon.mp4" cl ></video> */}
                  <div>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-5">
                      We Are Now In <br />
                      <span className="text-blue-600">Ravet</span>
                    </h1>
                  </div>
                  <a
                    className="inline-block px-7 py-3 mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="https://goo.gl/maps/azWqWeP5vpH9eNw79" 
                    target="_blank"
                    role="button"
                  >
                    {/* <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span> */}
                    Direction
                  </a>
                  <a
                    className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-white hover:bg-black focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="tel:+9180087258100"
                    role="button"
                  >
                    Learn more
                  </a>
                </div>
                <div className="mb-5 lg:mb-0">
                  <img
                    src="/image/demo.jpg"
                    className="lg:w-full sm:w-96  rounded-lg shadow-lg hover:contrast-50 " 
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionUpdate;
