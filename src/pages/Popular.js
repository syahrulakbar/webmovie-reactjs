import "../style/style.css";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import heroImage from "../image/banner.jpg";
import Category from "../components/Category";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Popular = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", listenToScroll);
  }, []);
  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="banner">
        <div className="relative">
          <img src={heroImage} alt="banner" className="h-52 object-cover w-full bg-cover bg-center" />
          <div className="bg-gradient-to-t opacity-70 from-black absolute inset-0"></div>
          <div className="bg-gradient-to-b opacity-70 from-black absolute inset-0"></div>
        </div>
        <div className="banner-contents  absolute top-20 w-full text-center ">
          <div className="flex justify-center items-center ">
            <h1 className="banner-title text-white text-2xl  lg:text-4xl font-semibold pb-2">
              All Movies Are Here, <span className="text-red-500"> Search By Genre</span>
            </h1>
          </div>
        </div>
      </section>
      <Category />
      {isVisible && <BsFillArrowUpCircleFill data-aos="fade-down" onClick={toTop} size={50} className=" cursor-pointer fixed bottom-0 right-0 m-5 text-white scroll-smooth" />}
    </>
  );
};

export default Popular;
