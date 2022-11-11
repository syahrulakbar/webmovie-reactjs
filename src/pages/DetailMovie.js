import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import CastMovie from "../components/CastMovie";

const DetailMovie = () => {
  const { id } = useParams();
  const BASE_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const movieById = `${BASE_URL}movie/${id}${API_KEY}`;
  const movieCredits = `${BASE_URL}movie/${id}/credits${API_KEY}`;
  const movieSimiliar = `${BASE_URL}movie/${id}/similar${API_KEY}`;
  const [movies, setMovies] = useState([]);
  const [credits, setCredits] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const getMovieRequest = async () => {
    try {
      const response = await fetch(movieById);
      const responseSimilar = await fetch(movieSimiliar);
      const responseCredits = await fetch(movieCredits);
      const responseJson = await response.json();
      const responseJsonCredits = await responseCredits.json();
      const responseJsonSimilar = await responseSimilar.json();
      setMovies(responseJson);
      setCredits(responseJsonCredits);
      setSimilar(responseJsonSimilar.results);
    } catch (error) {
      console.error(error);
    }
  };
  const saveToLocalStorage = (items) => {
    window.localStorage.setItem("favoriteMovies", JSON.stringify(items));
  };
  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...(favorites || []), movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  useEffect(() => {
    getMovieRequest();
    const movieFavourites = JSON.parse(window.localStorage.getItem("favoriteMovies"));
    setFavorites(movieFavourites);
  }, []);
  return (
    <>
      <MovieDetail movies={movies} movieCredits={credits} />
      <CastMovie movies={similar} handleFavoritesClick={addFavoriteMovie} />
    </>
  );
};

export default DetailMovie;
