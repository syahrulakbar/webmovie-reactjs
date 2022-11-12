import { createContext, useEffect, useReducer } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addToFavorite: (movie) => {},
  movieIsFavorite: (movieId) => {},
});

const favoriteReducer = (favorites, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [action.payload, ...favorites];
    case "REMOVE_FAVORITE":
      return favorites.filter((favoritemovie) => favoritemovie.id !== action.payload);
    default:
      return favorites;
  }
};

export default function FavoritesContextProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoriteReducer, [], () => {
    return JSON.parse(localStorage.getItem("favoriteMovies")) ?? [];
  });

  const movieIsFavorite = (movieId) => {
    return favorites.some((favoritemovie) => favoritemovie.id === movieId);
  };

  const addToFavorite = (movie) => {
    if (movieIsFavorite(movie.id)) {
      dispatch({ type: "REMOVE_FAVORITE", payload: movie.id });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: movie });
    }
  };

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        totalFavorites: favorites.length,
        addToFavorite,
        movieIsFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
