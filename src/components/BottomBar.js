import "../style/style.css";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsBookmarkHeartFill, BsFilterCircleFill } from "react-icons/bs";
const BottomBar = () => {
  return (
    <header className="md:hidden navbar-fixed bg-transparent absolute bottom-0 left-0 w-full flex items-center z-20">
      <div className="container mx-auto">
        <div className="flex justify-between mx-2">
          {/* <div className="flex relative items-center  text-2xl font-semibold  mx-5"> */}
          <NavLink
            to="/"
            id="nowPlaying"
            style={({ isActive }) => ({
              color: isActive ? "rgb(220 38 38)" : "rgb(255 255 255)",
            })}
            className="nav-link   cursor-pointer   hover:text-slate-800 lg:text-3xl sm:text-xl text-lg font-semibold  sm:px-2 px-2 py-3 lg:px-3 lg:py-3 rounded-lg ease-in-out transition-all duration-100"
          >
            <AiFillHome className="w-full" />
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
            <BsFilterCircleFill className="w-full" />
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
            <BsBookmarkHeartFill className="w-full" />
            Favorite
          </NavLink>
        </div>
        {/* </div> */}
      </div>
    </header>
  );
};

export default BottomBar;
