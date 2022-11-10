const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const endpoint = {
  nowPlaying: `${BASE_URL}movie/popular${API_KEY}`,
  trending: `${BASE_URL}trending/movie/week${API_KEY}`,
  popular: `${BASE_URL}movie/popular${API_KEY}`,
  topRated: `${BASE_URL}movie/top_rated${API_KEY}`,
  upcoming: `${BASE_URL}movie/upcoming${API_KEY}`,
  search: `${BASE_URL}search/movie${API_KEY}&query=`,
};

export default endpoint;
