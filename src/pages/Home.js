import "../style/style.css";
import "aos/dist/aos.css";
import TabNav from "../components/TabNav";
import HeroSection from "../components/HeroSection";

import MovieList from "../components/MovieList";
import endpoint from "../data/api-config";
import useFetch from "../hooks/useFetch";
import Spinner from "../ui/Spinner";
import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", listenToScroll);
  }, []);

  // Fetching Data
  let url = endpoint.nowPlaying;
  if (searchValue) {
    url = `${endpoint.search}${searchValue}`;
  }
  const { data, isPending, error } = useFetch(url);

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
      <HeroSection />
      <TabNav searchValue={searchValue} setSearchValue={setSearchValue} />
      {isPending && <Spinner />}
      {error && <p>{error}</p>}
      {data && <MovieList movies={data} />}
      {isVisible && <BsFillArrowUpCircleFill data-aos="fade-down" onClick={toTop} size={50} className=" cursor-pointer fixed bottom-0 right-0 mb-20 mr-5 text-slate-400  scroll-smooth" />}
    </>
  );
};

export default Home;
