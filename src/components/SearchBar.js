import "../style/style.css";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  return (
    <header className="hidden md:block navbar-fixed bg-transparent absolute top-0 left-0 w-full flex items-center z-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="/" className="font-bold text-3xl block py-6 text-slate-50">
              Nobar<span className="text-red-600">Kuy</span>
            </a>
          </div>
          <div className="flex justify-center text-2xl font-semibold  mx-5">
            <NavLink
              to="/"
              id="nowPlaying"
              style={({ isActive }) => ({
                color: isActive ? "rgb(220 38 38)" : "rgb(255 255 255)",
              })}
              className="nav-link  cursor-pointer   hover:text-slate-800 lg:text-3xl sm:text-xl text-lg font-semibold  sm:px-2 px-2 py-3 lg:px-3 lg:py-3 rounded-lg ease-in-out transition-all duration-100"
            >
              Home
            </NavLink>
            <NavLink
              to="popular"
              id="nowPlaying"
              style={({ isActive }) => ({
                color: isActive ? "rgb(220 38 38)" : "rgb(255 255 255)",
              })}
              className="nav-link  cursor-pointer   hover:text-slate-800 lg:text-3xl sm:text-xl text-lg font-semibold  sm:px-2 px-2 py-3 lg:px-3 lg:py-3 rounded-lg ease-in-out transition-all duration-100"
            >
              Genre
            </NavLink>
            <NavLink
              to="favorite"
              id="nowPlaying"
              style={({ isActive }) => ({
                color: isActive ? "rgb(220 38 38)" : "rgb(255 255 255)",
              })}
              className="nav-link  cursor-pointer   hover:text-slate-800 lg:text-3xl sm:text-xl text-lg font-semibold  sm:px-2 px-2 py-3 lg:px-3 lg:py-3 rounded-lg ease-in-out transition-all duration-100"
            >
              Favorite
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
