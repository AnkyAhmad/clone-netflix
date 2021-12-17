import React from "react";
import "./App.css";
import Banner from "./Components/Banners/Banner";
import Navbar from "./Components/Navbars/Navbar";
import Row from "./Components/Rows/Row";
import request from "./request.js";

function App() {
  return (
    <div className='App'>
      {/* NAVBAR */}
      <Navbar />
      <Banner />
      <Row title='Netflix Trending' fetchUrl={request.fetchNetflixOriginal} isLargeRow />
      <Row title='Trending Now' fetchUrl={request.fetchTrending} />
      <Row title='Top Rared' fetchUrl={request.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={request.fetchActionMovie} />
      <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovie} />
      <Row title='Horor Movies' fetchUrl={request.fetchHororMovie} />
      <Row title='Romance Movies' fetchUrl={request.fetchRomanceMovie} />
      <Row title='Documentaries Movies' fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
