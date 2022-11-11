import "../style/style.css";
import TabNav from "../components/TabNav";
import HeroSection from "../components/HeroSection";

import MovieList from "../components/MovieList";
import endpoint from "../data/api-config";
import React, { useEffect, useState } from "react";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async (url) => {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      setMovies(responseJson.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (searchValue == "") {
      getMovieRequest(endpoint.nowPlaying);
    } else {
      getMovieRequest(`${endpoint.search}${searchValue}`);
    }
    const movieFavourites = JSON.parse(window.localStorage.getItem("favoriteMovies"));
    setFavorites(movieFavourites);
  }, [searchValue]);

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
      <HeroSection />
      <TabNav searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movies} handleFavoritesClick={addFavoriteMovie} />
    </>
  );
};

export default Home;
