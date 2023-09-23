import prizes from "../Images/prizes.png";
import rewards from "../Images/Rewards.png";
import Text from "../Components/Text";
import SmallText from "../Components/SmallText";
import BlurCircle from "../Components/BlurCircle";
import brightPurple from "../Images/bright-purpleStar.png"
import whiteStar from "../Images/big-white.png"
import bigWhiteStar from "../Images/big-whiteStar.png"
import greyStar from "../Images/whitish.png"
import smallWhiteStar from "../Images/whitestar.png"
function Prizes() {
  return (
    <>
    <section className="px-16 md:px-auto pb-14 pt-44 border-b border-white border-opacity-10 relative z-10 bg-darkest">
      <img src={brightPurple} alt="star" className="absolute prizes-star1"></img>
      <img src={whiteStar} alt="star" className="absolute prizes-star2"></img>
      <img src={bigWhiteStar} alt="star" className="absolute prizes-star3"></img>
      <img src={greyStar} alt="star" className="absolute prizes-star4"></img>
      <img src={smallWhiteStar} alt="star" className="absolute prizes-star5"></img>

         <BlurCircle blurStyle="circle left-14 w-52 md:w-1/4 h-80 bg-dark-purple absolute md:left-56 md:mt-96"/>
        <div className="md:ml-auto lg:w-2/5">
            <Text text="Prizes and " textStyle="text-smallest md:text-medium text-white font-bold text-medium md:text-sbmedium w-1/4 lg:w-4/12 text-center lg:text-left mx-auto lg:mx-0 my-2" spanText="Rewards" spanTextStyle="text-bright-purple font-bold"/>
            <SmallText smallText="Highlight for the prizes or rewards for winners and for participants" smallTextStyle="text-center text-white text-smallest text-opacity-70 md:text-base md:text-white lg:text-left"/>
        </div>
      <section className="flex flex-col lg:flex-row py-12 justify-around items-center">
        <div className="lg:w-5/12 my-6 md:my-0 py-24 lg:py-auto">
          <img src={prizes} alt="prizes" className="relative z-10 "></img>
        </div>
        <div className="lg:w-5/12 my-6 md:my-0">
          <img src={rewards} alt="rewards"></img>
        </div>
      <BlurCircle blurStyle="circle w-1/4 h-80 bg-dark-purple absolute ml-auto md:-right-96 right-0 bottom-14"/>
      </section>
    </section>
    </>
  );
}

export default Prizes;
