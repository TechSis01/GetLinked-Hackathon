import picture from "../Images/illustrate2.png";
import { array } from "../data";
import Text from "../Components/Text";
import BlurCircle from "../Components/BlurCircle";
import Button from "../Components/Button";
import whiteStar from "../Images/big-white.png"
import greyStar from "../Images/whitish.png"
import purpleStar from "../Images/big-purpleStar.png"
function Attributes() {
  return (
    <section className="relative flex py-44 flex-col md:flex-row items-center justify-between md:px-20 px-16 border-b border-white border-opacity-10">
      <img src={purpleStar} alt="star"  className="absolute attributeStar1"></img>
      <img src={greyStar} alt="star" className="absolute attributeStar2"></img>
      <img src={whiteStar} alt="star" className="absolute attributeStar3"></img>
      <div className="md:w-5/12 relative z-10">
        <img src={picture} alt="man and woman"></img>
      </div>
      <BlurCircle blurStyle="circle w-2/6 h-96 md:h-1/4 sm:w-1/4 rounded-full bg-dark-purple absolute md:left-36 md:top-96 top-64 left-4"/>
      <div className="md:w-6/12">
        <Text
          text="Judging Criteria"
          textStyle="font-bold text-center lg:text-left lg:text-sbmedium text-white"
        />
        <Text
          text="Key attributes"
          textStyle="font-bold text-center md:text-left md:text-sbmedium text-bright-purple"
        />
        {array.map((attribute) => (
          <div key={attribute.id} className="mt-10 relative z-10">
            <p className="text-opacity-70 text-white text-center md:text-left">
              <span className="text-purple font-semibold">
                {attribute.heading}
              </span>
              {attribute.description}
            </p>
          </div>
        ))}
        <div className="flex justify-center items-center md:block">
          <Button
            buttonText="Read More"
            btnStyle=" mt-24 text-white bg-gradient-to-r from-brightest-purple via-bright-purple to-dark-purple py-6 px-20 rounded-md"
          />
        </div>
      </div>
    <BlurCircle blurStyle="circle w-1/4 h-96 rounded-full bg-dark-purple absolute md:bottom-24 md:top-auto -bottom-14 right-1 md:-right-8"/>
    </section>
  );
}

export default Attributes;
