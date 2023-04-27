import React from "react";
import "./Manual.css";
import Navbar from "./Navbar";
import image1 from "../assets/images/Arm-Circles_Shoulders.gif"
import image2 from "../assets/images/Fast-Feet-Run.gif"
import image3 from "../assets/images/Jumping-jack.gif"
import image4 from "../assets/images/side-leg-swings.gif"

import Logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Manual = () => {
  return (
    
    









    
    <div className="Reasons" id="reasons">
        
      


      <div className="right-r">
      
      <div className="hero left-left">
        <div className="header">
      <img src={Logo} alt=" " />
      <ul className="header-menu">
        <NavLink to="/projecttest" className="btn1" >Home</NavLink>

      </ul>
    </div>

      </div>


      <section class="tm-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="hcontent">
                        <h2 class="tm-gold-text tm-title">WarmUp Exercises</h2>
                        <p class="tm-subtitle">Warming up increases your heart rate and therefore your blood flow. This enables more oxygen to reach your muscles. A warm-up also activates and primes the connections between your nerve and muscles, which improves the efficiency of movement.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="box1">

                        <div class="tm-content-box">
                            <img src={image1} alt="Image" class="tm-margin-b-20 img-fluid"/>
                            <h4 class="eabout">Arm Circles Shoulders</h4>
                            <p class="tm-margin-b-20">Content</p>
                             
                        </div>  

                    </div>

                    <div class="box1">

                        <div class="tm-content-box">
                            <img src={image2} alt="Image" class="tm-margin-b-20 img-fluid"/>
                            <h4 class="eabout">Fast Feet Run</h4>
                            <p class="tm-margin-b-20">Content</p>
                               
                        </div>  

                    </div>

                    <div class="box1">

                        <div class="tm-content-box">
                            <img src={image3} alt="Image" class="tm-margin-b-20 img-fluid"/>
                            <h4 class="eabout">Jumping Jack</h4>
                            <p class="tm-margin-b-20">Content</p>
                           
                        </div>  

                    </div>

                    <div class="box1">

                        <div class="tm-content-box">
                            <img src={image4} alt="Image" class="tm-margin-b-20 img-fluid"/>
                            <h4 class="about">side Leg Swings</h4>
                            <p class="tm-margin-b-20">Content</p>
                               
                        </div>  

                    </div>
                </div>

                
            </div>
        </section>

        {/*<p>Not motivated yet?</p>*/}
       <div class="dcontent">
        <div>
          
          <h2>FEW TERMINOLOGIES YOU SHOULD KNOW AS A BEGINNER </h2>
        </div>
        <div className="details-r">
            <div >
                <h4>AMRAP</h4>
            </div>
          <div>
            <p >AMRAP is a workout acronym popularized by the CrossFit circuit, though it is used in any strength training program. It stands for “as many repetitions as possible,” which means that instead of performing a certain number of reps in a set, you either do as many as possible in a given amount of time or truly as many as you can do to failure</p>
          </div>
          <div >
                <h4>Bulking</h4>
            </div>
          <div>
            <p>Bulking is mainly used in bodybuilding circles to describe trying to focus your diet toward gaining muscle mass. </p>
          </div>
          <div >
               <h4>Cheating</h4>
            </div>
          <div>
            <p>In terms of workout, cheating usually means you are using the wrong form to eke out extra reps by using improper technique.
</p>
          </div>
          <div >
              <h4>Cutting</h4>
            </div>
          <div>
            <p>The cutting phase is the difficult phase of the bodybuilding diet that entails restricting calories to try and lose additional body fat and better meet physique goals or qualify for a lower weight class.</p>
          </div>
          <div >
                <h4>Drop Set</h4>
            </div>
          <div>
            <p>A drop set is an advanced strength training technique designed to maximize potential hypertrophy or muscle growth. It involves a set of a given exercise until failure, then reducing the weight or resistance that you are using by 10 to 30% and then immediately beginning another set, again until failure</p>
          </div>
          <div >
              <h4>Gains</h4>
            </div>
          <div>
            <p>The gym word “gains” is almost always used in terms of building muscle mass (also called hypertrophy) and muscle strength, but it can also refer to improvements in any aspect of fitness, including cardio.</p>
          </div>
          <div >
                <h4>Macros</h4>
            </div>
          <div>
            <p>Macros is a gym slang term used in the bodybuilding circuit as shorthand for  “macronutrients,” to describe how much protein, fat, and carbohydrates you are or aren’t eating in your diet</p>
          </div>
          <div >
                <h4>Plates</h4>
            </div>
          <div>
            <p>Plates refer to the disc-shaped weight plates that you load onto a barbell.</p>
          </div>
          <div >
               <h4>Rep</h4>
            </div>
          <div>
            <p>Short for “repetition,” a rep is one complete movement of a given exercise. For most strength training exercises, this would entail beginning at the starting position, lifting the weight up, and then lowering the weight all the way back down.</p>
          </div>
          <div >
          <h4>Set</h4>
            </div>
          <div>
            <p>Another essential workout term is “set.“ This refers to a group of repetitions of a single exercise performed together. </p>
          </div>
          
        </div>
        </div> 
      </div>
    </div>
  );
};

export default Manual;