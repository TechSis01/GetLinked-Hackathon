import Text from "../Components/Text"
import SmallText from "../Components/SmallText"
import woman from "../Images/illustrate.png"
import BlurCircle from "../Components/BlurCircle"
import whiteStar from "../Images/big-white.png"
import greyStar from "../Images/whitish.png"
function Rules() {
  return (
   <section className="relative py-12 flex flex-col-reverse md:flex-row justify-between items-center md:px-20 px-16 border-b border-white border-opacity-10">
   <img src={greyStar} alt="star" className="absolute rulesStar1"></img>
   <img src={whiteStar} alt="star" className="absolute rulesStar2"></img>
    <BlurCircle blurStyle=" md:bg-opacity-50 circle w-2/6 h-2/5 md:h-5/6 rounded-full bg-dark-purple absolute md:left-36 md:top-auto top-6 -left-24"/>
        <div className="md:w-5/12 relative z-10">
        <Text text="Rules and" spanText="Guidelines" spanTextStyle="text-bright-purple" textStyle="font-bold text-center md:text-left md:text-sbmedium text-white"/>
        <SmallText smallTextStyle="text-white text-center md:text-left text-opacity-70 text-smallTwo" smallText="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"/>
        </div>
        <div className="md:w-6/12 relative z-10">
            <img src={woman} alt="woman"></img>
        </div>
    <BlurCircle blurStyle="circle w-1/4 h-96 rounded-full bg-dark-purple absolute md:-right-64 md:bottom-24 md:top-auto top-72 -right-1"/>

   </section>
  )
}

export default Rules