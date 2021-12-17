import React, { useState, useEffect } from "react";
import axios from "../../axios.js";
import requests from "../../request.js";
import "./Banner.css";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Get the movies TRENDING for banner
      const request = await axios.get(requests.fetchTrending);

      setMovies(
        // Pick 1 movies from API fetch trending
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className='banner__contents'>
        <h1>{movies?.title || movies?.name || movies?.original_name}</h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <p>{truncate(movies?.overview, 150)}</p>
      </div>
      <div className='banner--fadebottom'></div>
    </header>
  );
};

export default Banner;
