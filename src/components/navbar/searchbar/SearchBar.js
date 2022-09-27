import React, { useState, useEffect } from "react";
import clearIcon from "../../../assets/cross.png";
import "./SearchBar.css";
import { fetchMovies, fetchShows } from "../../../redux/actions/movieAction";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const onChangeHandle = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setVal(lowerCase);
  };

  const clearSearchHandler = () => {
    setVal("");
  }

  const onSearchHandler = () => {
    if(!val == ""){
      let fetched = new Promise((resolve)=>{
        //on movies page
        if(location.pathname === '/movies') dispatch(fetchMovies(val));
        //on shows page
        if(location.pathname === '/shows') dispatch(fetchShows(val));
        //on home page
        if(location.pathname === '/'){
          dispatch(fetchMovies(val));
          dispatch(fetchShows(val));
        }
        resolve();
      })
      fetched.then(setVal(""));
    }
  }

  return (
    <>
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search Your Favorite Movies or Shows"
        className="searchField"
        value={val}
        onChange={onChangeHandle}
      />
      {val !== "" && (
      <img
        src={clearIcon}
        alt="clear search"
        width="24rem"
        className="clearIconStyle"
        onClick={clearSearchHandler}
      />
      )}
    </div>
    <button className="searchBtn" onClick={onSearchHandler}>Search</button>
    </>
  );
};

export default SearchBar;