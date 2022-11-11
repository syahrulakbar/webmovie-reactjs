import React from "react";

const Banner = (props) => {
  return (
    <section className="banner">
      <div className="relative">
        <img src={props.bannerPhoto} alt="banner-image" className="h-52 object-cover w-full bg-cover bg-center" />
        <div className="bg-gradient-to-t opacity-70 from-black absolute inset-0"></div>
        <div className="bg-gradient-to-b opacity-70 from-black absolute inset-0"></div>
      </div>
      <div className="banner-contents  absolute top-20 w-full text-center ">
        <div className="flex justify-center items-center ">
          <h1 className="banner-title text-white text-2xl  lg:text-4xl font-semibold pb-2">{props.titlePages}</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
