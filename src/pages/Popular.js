import "../style/style.css";
import MovieList from "../components/MovieList";
import Banner from "../components/Banner";
import endpoint from "../data/api-config";
import React, { useEffect, useState } from "react";
import heroImage from "../image/banner.jpg";
const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const titlePages = "All movies are here, search by category";

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
      <Banner bannerPhoto={heroImage} titlePages={titlePages} />
      <MovieList movies={movies} handleFavoritesClick={addFavoriteMovie} />
    </>
  );
};

export default Popular;
