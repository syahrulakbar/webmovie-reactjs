import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/style.css";
import { AiFillHeart } from "react-icons/ai";
import { FavoritesContext } from "../context/FavoriteContext.js";
const MovieList = (props) => {
  const { addToFavorite, movieIsFavorite } = useContext(FavoritesContext);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  if (props.length === 0 || props.movies.length === 0) {
    return (
      <div className="h-screen bg-gradient-to-t from-slate-900 to-black">
        <div className="container mx-auto">
          <section className="movie justify-center text-white">
            <div className="movie-list flex flex-wrap items-baseline justify-center">
              <div className="h-screen bg-gradient-to-t from-slate-900 to-black flex items-center justify-center">
                <h1 className="text-2xl font-semibold text-white text-center">Not Movies Found</h1>
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
        return "movieRate right-0 top-0 absolute  p-2 rounded-md text-lg m-4 green";
      } else if (vote >= 5) {
        return "movieRate right-0 top-0 absolute  p-2 rounded-md text-lg m-4 orange";
      } else {
        return "movieRate right-0 top-0 absolute  p-2 rounded-md text-lg m-4 red";
      }
    };
    return (
      <div className=" bg-gradient-to-t from-slate-900 to-black">
        <div className="container mx-auto ">
          <section className="movie justify-center  text-white">
            <div className="movie-list flex flex-wrap items-baseline justify-center">
              {props.movies.map((movie) => (
                <div key={movie.id} className=" movie-card m-4 w-[300px] overflow-hidden bg-slate-700 rounded-md relative hover:scale-110 transition-all ease-in-out duration-500">
                  <img src={movie.poster_path ? IMG_URL + movie.poster_path : "http://via.placeholder.com/1080x1580"} alt={movie.title} className="movieImage w-full" />
                  <div>
                    <span className={getColor(movie.vote_average)}>{movie.vote_average.toFixed(1)}</span>
                  </div>
                  <div className="overview text-white  px-5 py-5 p-5 max-h-full mt-5  absolute  bottom-0 right-0 left-0  bg-black bg-opacity-60   translate-y-[100%] transition-all ease-in-out duration-500">
                    <div className="pt-1">
                      <h2 className="movieTitle text-2xl font-semibold mb-2 mt-1">{movie.title}</h2>
                    </div>
                    <div className="flex relative justify-between flex-wrap items-center">
                      <Link to={`/movie/${movie.id}`} className={`btnDetail text-2xl font-semibold bg-white opacity-50   p-3 text-black rounded-md `}>
                        Movie Detail
                      </Link>
                      <button onClick={() => addToFavorite(movie)} className={`favIcon  transition-all ease-in-out duration-100 m-4  `}>
                        <AiFillHeart size={50} style={{ color: movieIsFavorite(movie.id) ? "red" : "#aaaaaa" }} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
};

export default MovieList;
