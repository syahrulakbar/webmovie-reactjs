import "../style/style.css";
import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
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
  return <MovieList movies={favorites} handleFavoritesClick={removeFavoriteMovie} />;
};

export default Favorite;
