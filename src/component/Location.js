import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const Location = () => {
  const [direction] = useTypewriter({
    words: ["for an adventure?", "Ravet Hyw, Ravet."],
    loop: 0,
    typeSpeed: 80,
  });
  return (
    <div>
      {" "}
      <section className="bg-gradient-to-r from-slate-50 via-slate-200 to-slate-100 text-gray-800  ">
        <div className="px-6 py-0 md:px-12 text-center lg:text-left">
          <div className="py-5">
            <div className="grid lg:grid-cols-2 gap-12  items-center">
              <div className="lg:mt-0">
                <h1
                  className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                  // style={{ color: "hsl(218, 81%, 95%)" }}
                >
                  Direction <br />
                  <div className="h-10">
                    <span className="" style={{ color: "deepskyblue" }}>
                      {direction}
                    </span>
                  </div>
                </h1>
                <p className="text-lg py-4" style={{ color: "black" }}>
                  Embark on a thrilling adventure with a sense of direction.
                  Explore new paths, embrace the unknown, and create
                  unforgettable memories along the way. Get ready to follow your
                  wanderlust.
                </p>
              </div>
              <div className=" lg:mb-0">
                <div
                  className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.413955664588!2d73.77047751481524!3d18.64541118733637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9cbe07310ed%3A0x39c61089f1371582!2sWRAP%20ON!5e0!3m2!1sen!2sin!4v1672596482033!5m2!1sen!2sin"
                    allowFullScreen
                    data-gtm-yt-inspected-2340190_699="true"
                    id={240632615}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
