import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieDetail = (props) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    AOS.init({ duration: 2000 });
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
          <img src={props.movies.poster_path ? IMG_URL + props.movies.poster_path : "http://via.placeholder.com/1080x1580"} alt={props.movies.title} className="h-[200vh] object-cover w-full bg-cover bg-center" />
          <div className="bg-gradient-to-t opacity-90 from-black absolute inset-0"></div>
          <div className="bg-gradient-to-b opacity-90 from-black absolute inset-0"></div>

          <div className="banner-contents absolute inset-0 text-white xl:flex  block justify-center items-center  ">
            <div className="flex justify-center xl:items-start xl:justify-start mb-3 xl:mb-20">
              <img
                data-aos="fade-right"
                src={props.movies.poster_path ? IMG_URL + props.movies.poster_path : "http://via.placeholder.com/1080x1580"}
                alt=""
                className="w-56 mt-20 xl:mt-0 xl:w-96  rounded-md shadow-md shadow-slate-500 object-cover bg-cover bg-center "
              />
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
              {/* <div className="actorMovie mt-4 flex overflow-hidden min-h-0 ">
              <div className="absolute">
                <h3 className="text-4xl font-semibold mb-5">Cast</h3>
                <div className=" flex flex-nowrap relative items-center mr-10 group overflow-hidden w-full">
                  <div id="slider" className="w-full h-full relative overflow-y-hidden overflow-x-hidden whitespace-nowrap scroll-smooth">
                    {props.movieCredits.cast.map((credit, index) => (
                      <div key={index} className="cursor-pointer movie-card mr-4 inline-block overflow-hidden bg-slate-700 rounded-md relative hover:scale-110 transition-all ease-in-out duration-500">
                        <img src={credit.profile_path ? IMG_URL + credit.profile_path : "http://via.placeholder.com/1080x1580"} alt={credit.name} className="movieImage w-[200px]" />
                        <div className="overview text-white  px-5 py-5 p-5 max-h-full mt-5  absolute  bottom-0 right-0 left-0  bg-black bg-opacity-60   translate-y-[100%] transition-all ease-in-out duration-500">
                          <div className="pt-1">
                            <h2 className="movieTitle text-md text-center font-semibold mb-2 mt-1">{credit.name}</h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default MovieDetail;
