import React from "react";
import "./Manual2.css";
import Navbar from "./Navbar";

import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/gif1.gif";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
const Manual = () => {
  return (
    
  <div>
      <Navbar/>

<section class="tm-section">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-xs-center">
                <h2 class="tm-gold-text tm-title">FEW TERMINOLOGIES YOU SHOULD KNOW AS A BEGINNER</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                <div class="tm-content-box">
                    <img src={image2} alt="Image" class="tm-margin-b-20 img-fluid"/>
                    <h4 class="tm-margin-b-20 tm-gold-text">Arm Circles_Shoulders #1</h4>
                    <p class="tm-margin-b-20">AMRAP is a workout acronym popularized by the CrossFit circuit, though it is used in any strength training program. It stands for “as many repetitions as possible,” which means that instead of performing a certain number of reps in a set, you either do as many as possible in a given amount of time or truly as many as you can do to failure</p>
                    <a href="#" class="tm-btn text-uppercase">Detail</a>    
                </div>  

            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                <div class="tm-content-box">
                    <img src={image2} alt="Image" class="tm-margin-b-20 img-fluid"/>
                    <h4 class="tm-margin-b-20 tm-gold-text">Fast-Feet-Run #2</h4>
                    <p class="tm-margin-b-20">Bulking is mainly used in bodybuilding circles to describe trying to focus your diet toward gaining muscle mass.</p>
                    <a href="#" class="tm-btn text-uppercase">Read More</a>    
                </div>  

            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                <div class="tm-content-box">
                    <img src={image2} alt="Image" class="tm-margin-b-20 img-fluid"/>
                    <h4 class="tm-margin-b-20 tm-gold-text">Jumping-jack #3</h4>
                    <p class="tm-margin-b-20">Aenean cursus tellus mauris, quis
                    consequat mauris dapibus id. Donec
                    scelerisque porttitor pharetra</p>
                    <a href="#" class="tm-btn text-uppercase">Detail</a>    
                </div>  

            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                <div class="tm-content-box">
                    <img src={image2} alt="Image" class="tm-margin-b-20 img-fluid"/>
                    <h4 class="tm-margin-b-20 tm-gold-text">side-leg-swings #4</h4>
                    <p class="tm-margin-b-20">Aenean cursus tellus mauris, quis
                    consequat mauris dapibus id. Donec
                    scelerisque porttitor pharetra</p>
                    <a href="#" class="tm-btn text-uppercase">Read More</a>    
                </div>  

            </div>
        </div>

        

    </div>
</section>
</div>


  )
  }




export default Manual;