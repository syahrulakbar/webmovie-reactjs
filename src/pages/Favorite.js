import "../style/style.css";
import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import secondImage from "../image/netflix-banner.png";
import Banner from "../components/Banner";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const titlePages = "Your Favorite Movies";
  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter((favorite) => favorite.id !== movie.id);
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };
  const saveToLocalStorage = (items) => {
    window.localStorage.setItem("favoriteMovies", JSON.stringify(items));
  };
  useEffect(() => {
    const movieFavourites = JSON.parse(window.localStorage.getItem("favoriteMovies"));
    if (movieFavourites == null) {
      setFavorites([]);
    } else {
      setFavorites(movieFavourites);
    }
  }, [setFavorites]);
  return (
    <>
      <Banner bannerPhoto={secondImage} titlePages={titlePages} />
      <MovieList movies={favorites} handleFavoritesClick={removeFavoriteMovie} />
    </>
  );
};

export default Favorite;
