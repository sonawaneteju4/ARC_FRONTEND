import React, { useState, useEffect } from "react";

const ContactUs = () => {
  const [msg, setmsg] = useState();
  const [type, settype] = useState();

  useEffect(() => {
    setTimeout(function () {
      setmsg(false);
    }, 3000);
  }, []);
  const [contactus, setContactUs] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const { name, mobile, message } = contactus;

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BASE_API}/contactus/postcontactus`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: contactus.name,
            mobile: contactus.mobile,
            message: contactus.message,
          }),
        }
      );
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setContactUs({
          name: "",
          mobile: "",
          message: "",
        });
        setmsg("Your Message Has been Submited, We Will Contact You ASAP");
        settype("#64e894");
      } else {
        setmsg("ome error occured");
        settype("#e66453");
      }
    } catch (error) {}
  };

  const onChange = (e) => {
    setContactUs({ ...contactus, [e.target.name]: e.target.value });
  };

  // const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // }

  // const closeModal = () => {
  //   setIsOpen(false);
  // }
  return (
    <div className="mt-16 bg-amber-200">
      <p className="text-3xl pt-3 font-bold text-center text">Contact Us</p>
      <hr></hr>
      <div className="  grid grid-cols-2">
        <div className="p-5  flex justify-center ">
          <iframe
            className="rounded-2xl "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0523254978707!2d73.75018711481547!3d18.661647787327006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9cbe07310ed%3A0x39c61089f1371582!2sWRAP%20ON!5e0!3m2!1sen!2sin!4v1673873429758!5m2!1sen!2sin"
            width={700}
            height={400}
            style={{ border: 4 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />{" "}
        </div>
        <div className=" p-10 flex justify-center ">
          <div className="pt-10 px-10 rounded-lg shadow-lg bg-white  w-full">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-6">
                <input
                  type="text"
                  name="name"
                  value={contactus.name}
                  required
                  onChange={onChange}
                  className="form-control block
                w-full
                px-3
                py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="phone"
                  name="mobile"
                  required
                  value={contactus.mobile}
                  onChange={onChange}
                  className="form-control block
                w-full
                px-3
                py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="phone"
                  placeholder="Contact Number"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  name="message"
                  required
                  value={contactus.message}
                  onChange={onChange}
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="
              w-full
              px-6
              py-2.5
              bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                Send
              </button>
            </form>

            <p className="alert text-center">
              {msg ? (
                <p
                  className="rounded-xl mt-4 p-2"
                  style={{ backgroundColor: `${type}` }}
                >
                  {msg}
                </p>
              ) : null}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-xl pb-5">
        <div className="basis-1/2">Contact Number :<span className="font-bold">8087258100</span> </div>
        <div className="basis-1/2">Email Id : <span className="font-bold">help@arcoustoms.in</span></div>
      </div>
    </div>
  );
};

export default ContactUs;
