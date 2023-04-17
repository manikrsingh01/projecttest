/*import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

//import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized for you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={570} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '180px' }}>
     Sparked
    </Typography>
    <img src="https://drive.google.com/uc?export=view&id=1dRNlppMywXLpTptnja_zmzEb7N8g9dYD" alt="hero-banner" className="hero-banner-img" style={{ marginTop: '-280px' }} />
  </Box>
);

export default HeroBanner;*/

import React from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import hero_image from "../assets/images/hero_image_test.png";
//import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../assets/images/heart.png";
//import Calories from "../../assets/calories.png";
const HeroBanner = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Navbar />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>sweat, smile and repeat</span>
        </div>

        {/*  Hero heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Dream Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to the fullest
            </span>
          </div>
        </div>
        {/* figures*/}
        <div className="figure">
          <div>
            <span>50%</span>
            <span>DECREASE IN MAJOR ILLNESSES</span>
          </div>
          <div>
            <span>14%</span>
            <span>LESS RISK OF CORONARY HEART DISEASES</span>
          </div>
          <div>
            <span>30%</span>
            <span>AVERAGE DECREASE IN RISK OF DEPRESSION</span>
          </div>
        </div>
      </div>
      <div className="right-h">
        {/*<button className="btn">Join Now</button>*/}
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>146.5-160.75 bpm</span>
        </div>

        {/*heroimages*/}
        <img src={hero_image} alt="" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroBanner;