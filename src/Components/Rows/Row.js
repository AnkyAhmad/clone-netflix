import React, { useState, useEffect } from "react";
import axios from "../../axios.js";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row__posters'>
        {movies.map((movies) => (
          <img
            key={movies.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movies.poster_path : movies.backdrop_path}`}
            alt={movies.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
