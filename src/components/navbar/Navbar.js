import React from 'react';
import "./Navbar.css";
import appLogo from "../../assets/appLogo.png";
import userIcon from "../../assets/userIcon.png";
import SearchBar from './searchbar/SearchBar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const onTabLinkClick = (path) => {
    navigate(path);
  }

  return (
    <div className='mainNav'>
        <div className='logoAndTitle'>
            <img src={appLogo} alt="logo" width="30rem"/>
            <h3 onClick={() => onTabLinkClick("/")} style={{cursor: 'pointer'}}>Film Bhrammand</h3>
        </div>
        <div className='SearchAndLinks'>
            <SearchBar />
            <h4 className='tabLink' onClick={() => onTabLinkClick("/movies")}>Movies</h4>
            <h4 className='tabLink' onClick={() => onTabLinkClick("/shows")}>Shows</h4>
        </div>
        <img src={userIcon} alt="user icon" className='userIconCss'/>
    </div>
  )
}

export default Navbar;