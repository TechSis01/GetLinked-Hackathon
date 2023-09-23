import { GrCheckmark } from "react-icons/gr";
import { IoCheckmarkSharp } from "react-icons/io5";
import padlock from "../Images/padlock.png";
import keyman from "../Images/keyman.png";
import Text from "../Components/Text";
import SmallText from "../Components/SmallText";
import Button from "../Components/Button";
import BlurCircle from "../Components/BlurCircle";
function Privacy() {
  return (
    <section className="overflow-x-hidden">
      <BlurCircle blurStyle="hidden circle md:block w-1/4 h-40 bg-dark-purple rounded-full absolute -right-28 " />

      <section className="flex flex-col md:flex-row justify-around items-center relative md:px-20 px-16 py-12 overflow-x-hidden">
        <div className="flex flex-col justify-around md:pt-28 items-around md:w-5/12 text-white relative z-10">
          <div>
            <Text
              text="Privacy Policy and "
              spanText="Terms"
              spanTextStyle="text-bright-purple"
              textStyle="text-medium w-8/12 mx-auto md:w-full md:text-sbmedium font-bold text-center md:text-left"
            />
            <SmallText
              smallText="Last updated on September 12, 2023"
              smallTextStyle="mb-6 md:my-14  text-white text-opacity-70 text-center md:text-left text-smallest md:text-smallTwo"
            />
            <SmallText
              smallText="Below are our privacy & policy, which outline a lot of goodies. 
                    its our aim to always take of our participant"
              smallTextStyle="text-center text-smallest md:text-smallTwo md:text-left md:my-14 mb-10"
            />
          </div>

          <div className="border border-bright-purple rounded-md sm:p-28 p-10 w-full">
      <BlurCircle blurStyle="circle md:hidden w-1/4 h-50 bg-dark-purple rounded-full absolute bottom-64" />

            <SmallText
              smallText="At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, 
                    and safeguard your data when you participate in our tech 
                    hackathon event. By participating in our event, you consent 
                    to the practices described in this policy."
              smallTextStyle="w-full text-center md:text-left text-smallest md:text-smallTwo leading-9 my-10"
            />
            <Text
              text="Licensing Policy"
              textStyle="text-bright-purple text-small md:text-base"
            />
            <SmallText
              smallText="Here are terms of our Standard License:"
              smallTextStyle="text-smallest md:text-smallTwo font-semibold"
            />

            <div className="flex justify-center my-10">
              <IoCheckmarkSharp className=" text-white text-base bg-green w-14 rounded-full mt-2" />

              <SmallText
                smallText="The Standard License grants you a non-exclusive right to
                    navigate and register for our event"
                smallTextStyle="text-smallest md:text-smallTwo ml-6"
              />
            </div>

            <div className="flex justify-around">
              <IoCheckmarkSharp className="text-white text-base bg-green w-14 rounded-full mt-2" />

              <SmallText
                smallText="You are licensed to use the item available at any free source
              sites, for your project developement"
                smallTextStyle="text-smallest md:text-smallTwo ml-6"
              />
            </div>
            <div className="flex justify-center items-center md:block">
              <Button
                buttonText="Read More"
                btnStyle="mt-24 text-white text-smallTwo bg-gradient-to-r from-brightest-purple via-bright-purple to-dark-purple py-4 px-10 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="md:w-6/12 mt-28 md:mt-28 relative overflow-hidden">
          <div className=" hidden md:block absolute md:ml-28">
            <img src={padlock} alt="padlock"></img>
          </div>
          <img src={padlock} alt="padlock" className="absolute md:hidden"></img>
          <img src={keyman} alt="keyman " className="mt-44 md:mt-80"></img>
        </div>
        <BlurCircle blurStyle="hidden md:block circle w-2/5 h-60 bg-dark-purple rounded-full absolute -left-56 bottom-10" />
      </section>
    </section>
  );
}

export default Privacy;
