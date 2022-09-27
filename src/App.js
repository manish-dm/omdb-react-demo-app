import React, {useEffect} from 'react'
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/dashboard/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./components/movies/Movies";
import Shows from "./components/shows/Shows";
import {fetchMovies, fetchShows} from "./redux/actions/movieAction";
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies('thor'));
    dispatch(fetchShows('batman'));
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:id" exact element={<Home />} />
          <Route path="/movies" exact element={<Movies />} />
          <Route path="/movies/:id" exact element={<Movies />} />
          <Route path="/shows" exact element={<Shows />} />
          <Route path="/shows/:id" exact element={<Shows />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
