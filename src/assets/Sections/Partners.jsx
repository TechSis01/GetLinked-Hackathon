import sponsors from "../Images/sponsors.png"
import Text from "../Components/Text"
import SmallText from "../Components/SmallText"
import BlurCircle from "../Components/BlurCircle"
function Partners() {
  return (
   <section className="flex flex-col text-white py-24 md:px-20 px-16 relative overflow-x-hidden">
    <BlurCircle blurStyle="circle left-14 w-52 md:w-1/4 h-80 bg-dark-purple absolute md:left-56 md:mt-14"/>
        <Text textStyle="text-center font-bold text-medium md:text-sbmedium" text="Partners and Sponsers"/>
       
        <SmallText smallTextStyle="text-center  text-smallest md:text-smallTwo md:w-5/12 mx-auto mt-10" smallText="Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors"/>
        <div className="border mx-auto border-bright-purple rounded-md mt-28 md:px-64 md:py-28 py-14 px-10">
            <img src={sponsors} alt="sponsors"></img>
        </div>
   <BlurCircle blurStyle="circle w-1/4 h-80 bg-dark-purple rounded-full absolute -right-56 bottom-52"/>
   </section>
  )
}

export default Partners