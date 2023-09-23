import arrow from "../Images/arrow.png";
import yellowBulb from "../Images/yellow-bulb.png";
import Text from "../Components/Text";
import SmallText from "../Components/SmallText";
import purpleStar from "../Images/big-purpleStar.png"
import brightPurpleStar from "../Images/bright-purpleStar.png"
function IntroductionSection() {
  return (
    <section className="flex flex-col md:justify-between items-center md:flex-row px-16 md:px-20 py-20 md:py-20 border-b border-t border-white border-opacity-10 relative ">
      <img src={brightPurpleStar} alt="star" className="absolute introduction-purple"></img>
      <img src={purpleStar} alt="star" className="absolute introduction-purple-2"></img>
      <div className="md:w-7/12 md:mx-auto">
        <img
          src={yellowBulb}
          alt="idea"
          className="mx-auto w-full md:w-6/12"
        ></img><span className="hidden md:flex justify-end mr-44"><img src={arrow}></img></span>
      </div>

      <div className=" md:hidden md:mt-24">
        <img src={arrow} alt="arrow" className="w-12"></img>
      </div>

      <div className="text-white md:w-6/12 md:leading-10 ">
        <Text
          textStyle="text-center md:text-left font-bold text-medium mt-10 md:text-sbmedium"
          text="Introduction to getLinked"
          spanText="techHackathon1.0"
          spanTextStyle="text-bright-purple"
        />
        <SmallText
          smallTextStyle="text-smallTwo lg:text-left text-center mt-10 "
          smallText="Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!"
        />
      </div>
    </section>
  );
}

export default IntroductionSection;
