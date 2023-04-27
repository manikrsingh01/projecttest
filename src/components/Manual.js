import React from "react";
import "./Manual";
import Navbar from "./Navbar";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
const Manual = () => {
  return (
    
    <div className="Reasons" id="reasons">
        
      <div className="right-r">
      <Navbar />
     

        {/*<span>Not motivated yet?</span>*/}
        <div>
          <span className="stroke-textm">FEW TERMINOLOGIES </span>
          <span className="stroke-textm"> YOU SHOULD KNOW AS A BEGINNER</span>
        </div>
        <div className="details-r">
            <div >
                <span className="stroke-textp">AMRAP</span>
            </div>
          <div>
            <span>AMRAP is a workout acronym popularized by the CrossFit circuit, though it is used in any strength training program. It stands for “as many repetitions as possible,” which means that instead of performing a certain number of reps in a set, you either do as many as possible in a given amount of time or truly as many as you can do to failure</span>
          </div>
          <div >
                <span className="stroke-textp">Bulking</span>
            </div>
          <div>
            <span>Bulking is mainly used in bodybuilding circles to describe trying to focus your diet toward gaining muscle mass. </span>
          </div>
          <div >
                <span className="stroke-textp">Cheating</span>
            </div>
          <div>
            <span>In terms of workout, cheating usually means you are using the wrong form to eke out extra reps by using improper technique.
</span>
          </div>
          <div >
                <span className="stroke-textp">Cutting</span>
            </div>
          <div>
            <span>The cutting phase is the difficult phase of the bodybuilding diet that entails restricting calories to try and lose additional body fat and better meet physique goals or qualify for a lower weight class.</span>
          </div>
          <div >
                <span className="stroke-textp">Drop Set</span>
            </div>
          <div>
            <span>A drop set is an advanced strength training technique designed to maximize potential hypertrophy or muscle growth. It involves a set of a given exercise until failure, then reducing the weight or resistance that you are using by 10 to 30% and then immediately beginning another set, again until failure</span>
          </div>
          <div >
                <span className="stroke-textp">Gains</span>
            </div>
          <div>
            <span>The gym word “gains” is almost always used in terms of building muscle mass (also called hypertrophy) and muscle strength, but it can also refer to improvements in any aspect of fitness, including cardio.</span>
          </div>
          <div >
                <span className="stroke-textp">Macros</span>
            </div>
          <div>
            <span>Macros is a gym slang term used in the bodybuilding circuit as shorthand for  “macronutrients,” to describe how much protein, fat, and carbohydrates you are or aren’t eating in your diet</span>
          </div>
          <div >
                <span className="stroke-textp">Plates</span>
            </div>
          <div>
            <span>Plates refer to the disc-shaped weight plates that you load onto a barbell.</span>
          </div>
          <div >
                <span className="stroke-textp">Rep</span>
            </div>
          <div>
            <span>Short for “repetition,” a rep is one complete movement of a given exercise. For most strength training exercises, this would entail beginning at the starting position, lifting the weight up, and then lowering the weight all the way back down.</span>
          </div>
          <div >
                <span className="stroke-textp">Set</span>
            </div>
          <div>
            <span>Another essential workout term is “set.“ This refers to a group of repetitions of a single exercise performed together. </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Manual;