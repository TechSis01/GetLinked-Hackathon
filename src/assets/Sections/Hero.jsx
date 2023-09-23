import React from "react";
import SubHero from "./SubHero";
import heroHeader from "../Images/hero-header.png";
import Text from "../Components/Text";
import Button from "../Components/Button";
import countdown from "../Images/Countdown.png";
import man from "../Images/man-vr.png";
import mobileHeader from "../Images/mobile-title.png"
import burstedBubble from "../Images/bursted-bubble.png"
import whiteStar from "../Images/big-white.png"
import greyStar from "../Images/whitish.png"
function Hero() {
  return (
    <section className=" flex flex-col md:flex-row px-16 md:px-20 pt-6 md:mt-20 relative z-10">
      <img src={whiteStar} alt="star" className="absolute big-whiteStar"></img>
      <img src={greyStar} alt="star" className="absolute purple-heroStar"></img>
      <div>
        <img src={heroHeader} alt="Brand header" className=" hidden md:block"></img>
        <img src={mobileHeader} alt="Brand header" className="md:hidden mx-auto"></img>
        <Text text="Participate in getLinked tech Hackathon 2023 stand a chance to win a Big Prize" textStyle="mt-8 text-white text-center text-opacity-70 text-small md:text-medium w-full md:text-left"/>
        <div className="flex justify-center items-center md:block">
        <Button
          buttonText="Register"
          btnStyle=" mt-8 bg-gradient-to-r from-brightest-purple via-bright-purple to-dark-purple md:py-6 md:px-20 py-4 px-16 rounded-md text-white"
        />
        </div>
       
        <img src={countdown} alt="countdown timer" className="mt-8 mx-auto md:mx-0"></img>
      </div>
      <div className="relative">
        <img src={man} alt="virtual reality"></img>
        <img src={burstedBubble} alt="virtual reality" className="absolute -top-10 lg:-top-20 lg:-right-28"></img>
      </div>
    </section>
  );
}

export default Hero;
