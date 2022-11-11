import "../style/style.css";
import { Link } from "react-router-dom";

const CastMovie = (props) => {
  if (props.length === 0 || props.movies.length === 0) {
    return (
      <div className=" bg-gradient-to-t from-slate-900 to-black">
        <div className="container mx-auto">
          <section className="movie justify-center text-white">
            <div className="movie-list flex flex-wrap items-baseline justify-center">
              <div className="min-h-[70vh] bg-gradient-to-t from-slate-900 to-black flex items-center justify-center">
                <h1 className="text-2xl font-semibold text-white text-center">Data Not Found</h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    const getColor = (vote) => {
      if (vote >= 8) {
        return "movieRate text-white right-0 top-0 absolute  p-2 rounded-md text-lg m-4 green";
      } else if (vote >= 5) {
        return "movieRate text-white right-0 top-0 absolute  p-2 rounded-md text-lg m-4 orange";
      } else {
        return "movieRate text-white right-0 top-0 absolute  p-2 rounded-md text-lg m-4 red";
      }
    };
    return (
      <div className=" bg-gradient-to-t from-slate-900 to-black">
        <div className="container mx-auto ">
          <div className="actorMovie ">
            <h3 className="text-4xl text-center  font-semibold mb-10 text-white">Similar Movies</h3>
            <div className=" flex flex-nowrap relative items-center mx-10 ">
              <div className="w-full h-full overflow-y-hidden overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
                {props.movies.map((movie, index) => (
                  <div key={index} className="cursor-pointer w-[300px] movie-card mr-4 inline-block overflow-hidden bg-slate-700 rounded-md relative hover:scale-110 transition-all ease-in-out duration-500">
                    <img src={movie.poster_path ? IMG_URL + movie.poster_path : "http://via.placeholder.com/1080x1580"} alt={movie.title} className="movieImage w-full" />
                    <div>
                      <span className={getColor(movie.vote_average)}>{movie.vote_average.toFixed(1)}</span>
                    </div>
                    <div className="overview text-white   py-5 p-5 max-h-full mt-5  absolute  bottom-0 right-0 left-0  bg-black bg-opacity-60   translate-y-[100%] transition-all ease-in-out duration-500">
                      <div className="pt-1 ">
                        <h2 className="movieTitle w-11 break-words text-lg  font-semibold mb-2 mt-1">{movie.title}</h2>
                      </div>
                      <div className="flex relative justify-between flex-wrap items-center">
                        <Link to={`/movie/${movie.id}`} reloadDocument className={`btnDetail text-xl font-semibold bg-green-500 p-3 text-white rounded-md`}>
                          Movie Detail
                        </Link>
                        <button onClick={() => props.handleFavoritesClick(movie)} className={`favIcon  transition-all ease-in-out duration-100 m-4  w-12`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 512 512">
                            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CastMovie;
