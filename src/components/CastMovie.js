import React, { useContext } from "react";
import "../style/style.css";
import { Link } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { FavoritesContext } from "../context/FavoriteContext.js";
const CastMovie = (props) => {
  const { addToFavorite, movieIsFavorite } = useContext(FavoritesContext);
  if (props.length === 0 || props.movies.length === 0) {
    return (
      <div className="h-screen bg-gradient-to-t from-slate-900 to-black">
        <div className="container mx-auto">
          <section className="movie justify-center text-white">
            <div className="movie-list flex flex-wrap items-baseline justify-center">
              <div className=" h-screen bg-gradient-to-t from-slate-900 to-black flex items-center justify-center">
                <MutatingDots height="100" width="100" color="#71717a" secondaryColor="#71717a" radius="12.5" ariaLabel="mutating-dots-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    const getColor = (vote) => {
      if (vote >= 8) {
        return "movieRate text-white right-0 top-0 absolute  p-2 rounded-md text-lg m-4 green";
      } else if (vote >= 5) {
        return "movieRate text-white right-0 top-0 absolute  p-2 rounded-md text-lg m-4 orange";
      } else {
        return "movieRate text-white right-0 top-0 absolute  p-2 rounded-md text-lg m-4 red";
      }
    };
    const slideLeft = () => {
      var slider = document.getElementById("slider2");
      slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
      var slider = document.getElementById("slider2");
      slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
      <div className=" bg-gradient-to-t from-slate-900 to-black  ">
        <div className="container mx-auto ">
          <div className="actorMovie ">
            <h3 className="text-4xl text-center  font-semibold mb-10 text-white">Similar Movies</h3>
            <div className=" flex flex-nowrap relative items-center mx-10 group ">
              <MdChevronLeft onClick={slideLeft} size={40} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" />
              <div id="slider2" className="w-full h-full overflow-y-hidden overflow-x-scroll scroll scrollbar-hide whitespace-nowrap scroll-smooth">
                {props.movies.map((movie, index) => (
                  <div key={index} className="cursor-pointer w-[300px] movie-card mr-4 inline-block overflow-hidden bg-slate-700 rounded-md relative hover:scale-110 transition-all ease-in-out duration-500">
                    <img src={movie.poster_path ? IMG_URL + movie.poster_path : "http://via.placeholder.com/1080x1580"} alt={movie.title} className="movieImage w-full" />
                    <div>
                      <span className={getColor(movie.vote_average)}>{movie.vote_average.toFixed(1)}</span>
                    </div>
                    <div className="overview text-white   py-5 p-5 max-h-full mt-5  absolute  bottom-0 right-0 left-0  bg-black bg-opacity-60   translate-y-[100%] transition-all ease-in-out duration-500">
                      <div className="pt-1 ">
                        <h2 className="movieTitle w-11 break-words text-lg  font-semibold mb-2 mt-1">{movie.title}</h2>
                      </div>
                      <div className="flex relative justify-between flex-wrap items-center">
                        <Link to={`/movie/${movie.id}`} reloadDocument className={`btnDetail text-xl font-semibold bg-white opacity-50 text-black p-3  rounded-md`}>
                          Movie Detail
                        </Link>
                        <button onClick={() => addToFavorite(movie)} className={`favIcon  transition-all ease-in-out duration-100 m-4  w-12`}>
                          <AiFillHeart size={50} style={{ color: movieIsFavorite(movie.id) ? "red" : "#aaaaaa" }} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <MdChevronRight onClick={slideRight} size={40} className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CastMovie;
