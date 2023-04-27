/*import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const location = useLocation();
  //console.log(location.pathname, location.pathname.includes("exercise"));

  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/major-project">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/major-project" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      {!location.pathname.includes("exercise") && <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>}
    </Stack>
  </Stack>
  );
}

export default Navbar;*/

import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Logo from "../assets/images/logo.png";
import SearchExercises from "./SearchExercises";
import { useEffect } from "react";
import Exercises from "./Exercises";
const Header = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("searchexercises");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () =>{ 
    let path = '/BmiCalculator'; 
    console.log("clicked");
    navigate(path);
  }

  return (
    <div className="header">
      <img src={Logo} alt=" " />
      <ul className="header-menu">
        <button className="btn-scroll btn-outline">Home</button>
        <button className="btn-scroll btn-outline" onClick={handleClickScroll}>
          Programs
        </button>
        <Link to = "/BmiCalculator">
          <button className="btn-scroll btn-outline">BMI</button>
        </Link>
        <Link to = "/Manual">
          <button className="btn-scroll btn-outline">Manual</button>
        </Link>
        </ul>
    </div>
  );
};

export default Header;