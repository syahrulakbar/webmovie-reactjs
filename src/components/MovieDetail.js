import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
const MovieDetail = (props) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [shown, setShown] = useState(false);
  const [url, setUrl] = useState(null);
  const { id } = useParams();
  const BASE_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const movieCredits = `${BASE_URL}movie/${id}/videos${API_KEY}`;
  const getMovieRequest = async () => {
    try {
      const response = await fetch(movieCredits);
      const responseJson = await response.json();
      if (responseJson.results.length > 0) {
        setUrl(responseJson.results[0].key);
      } else {
        setUrl(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const noTrailer = () => {
    Swal.fire({
      icon: "error",
      title: "Oops... Trailer Not Found!",
      timer: 1500,
      showConfirmButton: false,
    });
  };
  const Trailer = () => {
    window.open(`https://www.youtube.com/embed/${url}`);
  };
  useEffect(() => {
    getMovieRequest();
  }, []);
  if (props.movies.genres === undefined || props.movieCredits.cast === undefined) {
  } else {
    const slideLeft = () => {
      var slider = document.getElementById("slider");
      slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
      var slider = document.getElementById("slider");
      slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
      <section className="banner w-full h-full ">
        <div className="relative h-fit">
          <img src={props.movies.poster_path ? IMG_URL + props.movies.poster_path : "http://via.placeholder.com/1080x1580"} alt={props.movies.title} className="h-[200vh] xl:h-[120vh] object-cover w-full bg-cover bg-center" />
          <div className="bg-gradient-to-t opacity-90 from-black absolute inset-0"></div>
          <div className="bg-gradient-to-b opacity-90 from-black absolute inset-0"></div>

          <div className="banner-contents absolute inset-0 text-white xl:flex  block justify-center items-center  ">
            <div className="flex justify-center xl:items-start xl:justify-start mb-3 xl:mb-20 relative">
              <div>
                <img
                  data-aos="fade-right"
                  src={props.movies.poster_path ? IMG_URL + props.movies.poster_path : "http://via.placeholder.com/1080x1580"}
                  alt=""
                  className="w-56 mt-20 xl:mt-0 xl:w-96   rounded-md shadow-md shadow-slate-500 object-cover bg-cover bg-center "
                />
                {url !== false ? (
                  <AiFillPlayCircle onClick={Trailer} data-aos="fade-right" size={70} className="absolute cursor-pointer animate-pulse rounded-full xl:top-[40%] top-[50%] left-[40%] sm:left-[47%] xl:left-[40%] text-red-600 " />
                ) : (
                  <AiFillPlayCircle onClick={noTrailer} data-aos="fade-right" size={70} className="absolute cursor-pointer animate-pulse rounded-full xl:top-[40%] top-[50%] left-[40%] sm:left-[47%] xl:left-[40%] text-red-600 " />
                )}
              </div>
            </div>
            <div className="max-w-4xl ml-5 ">
              <h1 className="banner-title text-4xl lg:text-7xl font-semibold pb-2 text-center  xl:text-left">{props.movies.title}</h1>
              <div className="genre flex justify-center xl:justify-start">
                {props.movies.genres.map((genre) => (
                  <h5 key={genre.id} className="p-2 mr-2 mt-2 border-solid border-2 border-sky-400 rounded-full">
                    {genre.name}
                  </h5>
                ))}
              </div>
              <div className="movie-overview mt-5">
                <h2 className="banner-title text-4xl lg:text-4xl font-semibold pb-2">Overview</h2>
                <p>{props.movies.overview}</p>
              </div>

              {/* Cast Actor */}
              <div className="actorMovie mt-5">
                <h3 className="text-4xl text-left  font-semibold mb-10 text-white">Cast</h3>
                <div className=" flex flex-nowrap relative items-center xl:mr-10 group ">
                  <MdChevronLeft onClick={slideLeft} size={40} className="bg-white text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" />
                  <div id="slider" className="w-full h-full overflow-y-hidden overflow-x-scroll scroll scrollbar-hide whitespace-nowrap scroll-smooth">
                    {props.movieCredits.cast.map((credit, index) => (
                      <div key={index} className="cursor-pointer movie-card mr-4 inline-block overflow-hidden bg-slate-700 rounded-md relative hover:scale-110 transition-all ease-in-out duration-500">
                        <img src={credit.profile_path ? IMG_URL + credit.profile_path : "http://via.placeholder.com/1080x1580"} alt={credit.name} className="movieImage w-[200px]" />
                        <div className="overview text-white   py-5 p-5 max-h-full mt-5  absolute  bottom-0 right-0 left-0  bg-black bg-opacity-60   translate-y-[100%] transition-all ease-in-out duration-500">
                          <div className="pt-1 ">
                            <h2 className="movieTitle w-11 break-words text-lg  font-semibold mb-2 mt-1">{credit.name}</h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <MdChevronRight onClick={slideRight} size={40} className="bg-white text-black rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default MovieDetail;
