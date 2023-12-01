import React from "react";

const TrustedBy = () => {
  return (
    <div>
      <section className=" text-gray-800 text-center">
        <style
          dangerouslySetInnerHTML={{
            __html: "\n      . {\n        filter: (100%);\n      }\n    ",
          }}
        />
        <h2
          className="lg:text-5xl text-2xl font-bold mb-6"
          style={{ color: "dodgerblue" }}
        >
          Our Service Partners
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          <div className="mb-12 lg:mb-0">
            <img
              src="/image/3m.png"
              className="img-fluid  px-6 md:px-12"
              alt="Nasa - logo"
            />
          </div>
          <div className="mb-12 lg:mb-0 text-center font-extrabold  lg:text-4xl sm:text-3xl">
            <span className="md:px-12 px-3 lg:px-3">GARAVE MOTARS</span>
          </div>
          <div className="mb-12 lg:mb-0">
            <img
              src="/image/avd.png  "
              className="img-fluid  px-6 md:px-12"
              alt="Amazon - logo"
            />
          </div>
          
          <div className="mb-12 lg:mb-0 font-extrabold lg:text-5xl sm:text-3xl">
            <span className="md:px-12 px-3 lg:px-6">100KMph</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedBy;
