import React, { useState } from "react";
import "../style/style.css";
import MovieList from "../components/MovieList";
import endpoint from "../data/api-config";
import useFetch from "../hooks/useFetch";
import Spinner from "../ui/Spinner";

const Category = () => {
  const [genre, setGenre] = useState(null);
  const BASE_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `${BASE_URL}discover/movie?sort_by=popularity.desc&${API_KEY.slice(1)}`;

  let url = endpoint.popular;
  if (genre) {
    url = `${API_URL}&with_genres=${genre}`;
  }
  const { data, isPending, error } = useFetch(url);
  const categories = [
    { genre: "Action", id: 28 },
    { genre: "Adventure", id: 12 },
    { genre: "Animation", id: 16 },
    { genre: "Comedy", id: 35 },
    { genre: "Drama", id: 18 },
    { genre: "Horror", id: 27 },
    { genre: "Romance", id: 10749 },
    { genre: "Tv Movie", id: 10770 },
    { genre: "War", id: 10752 },
    { genre: "Western", id: 37 },
    { genre: "Mystery", id: 9648 },
    { genre: "Music", id: 10402 },
    { genre: "Fantasy", id: 14 },
    { genre: "History", id: 36 },
    { genre: "Documentary", id: 99 },
  ];

  return (
    <div className="bg-black">
      <div className="pt-2 ">
        <label htmlFor="genre" className=" text-2xl  text-white mb-10 ml-5 pt-2">
          Genre :
        </label>
        <select className="p-3  ml-2 text-white rounded-md bg-slate-700" defaultValue="Select Genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
          <option disabled>Select Genre</option>
          {categories.map((genres) => (
            <option key={genres.id} value={genres.id}>
              {genres.genre}
            </option>
          ))}
        </select>
      </div>
      {isPending && <Spinner />}
      {error && <p>{error}</p>}
      {data && <MovieList movies={data} />}
    </div>
  );
};

export default Category;
