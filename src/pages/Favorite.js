import "../style/style.css";
import React, { useContext } from "react";
import MovieList from "../components/MovieList";
import secondImage from "../image/netflix-banner.png";
import { FavoritesContext } from "../context/FavoriteContext";
const Favorite = () => {
  const { favorites, totalFavorites } = useContext(FavoritesContext);
  return (
    <>
      <section className="banner">
        <div className="relative">
          <img src={secondImage} alt="banner" className="h-52 object-cover w-full bg-cover bg-center" />
          <div className="bg-gradient-to-t opacity-70 from-black absolute inset-0"></div>
          <div className="bg-gradient-to-b opacity-70 from-black absolute inset-0"></div>
        </div>
        <div className="banner-contents  absolute top-20 w-full text-center ">
          <div className="flex justify-center items-center ">
            <h1 className="banner-title text-white text-2xl  lg:text-4xl font-semibold pb-2">Your Favorite Movies</h1>
          </div>
        </div>
      </section>
      {totalFavorites === 0 ? <MovieList movies={favorites} /> : <MovieList movies={favorites} />}
    </>
  );
};

export default Favorite;
