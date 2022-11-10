import "../style/style.css";
import MovieList from "../components/MovieList";
import endpoint from "../data/api-config";
import React, { useEffect, useState } from "react";
const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const getMovieRequest = async () => {
    try {
      const response = await fetch(endpoint.topRated);
      const responseJson = await response.json();
      setMovies(responseJson.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMovieRequest();
    const movieFavourites = JSON.parse(window.localStorage.getItem("favoriteMovies"));
    setFavorites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    window.localStorage.setItem("favoriteMovies", JSON.stringify(items));
  };
  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...(favorites || []), movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <>
      <MovieList movies={movies} handleFavoritesClick={addFavoriteMovie} />
    </>
  );
};

export default Popular;
