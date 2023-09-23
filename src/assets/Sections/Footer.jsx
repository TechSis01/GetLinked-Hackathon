import Text from "../Components/Text"
import SmallText from "../Components/SmallText"
import brandName from "../Images/brandname.png"
import {RiTwitterXFill} from "react-icons/ri"
import {FaFacebookF} from "react-icons/fa"
import {GrLinkedinOption} from "react-icons/gr"
import {BsInstagram} from "react-icons/bs"
import {BiSolidPhoneCall} from "react-icons/bi"
import {HiLocationMarker} from "react-icons/hi"
import BlurCircle from "../Components/BlurCircle"
function Footer() {
  return (
    <section className="bg-darkest pb-28 relative z-10">
        <BlurCircle blurStyle="hidden md:block circle w-2/5 h-96 bg-dark-purple rounded-full absolute mb-56 -top-14 -left-96" />
        
   <section className="grid grid-cols-1 gap-5 justify-items-center md:px-20 px-16 py-40 md:grid-cols-3 text-white relative z-10">
        <div className="flex flex-col justify-between w-full">
            <div>
                <img src={brandName} alt="getLined"></img>
                <SmallText smallText="Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology" smallTextStyle="text-smallest mt-6"/>
            </div>
            <div className="mt-24 flex justify-between w-7/12 md:w-3/5 text-smallest">
                <SmallText smallText="Terms of Use"/>
                <div className="bg-bright-purple w-1 h-10"></div>
                <SmallText smallText="Privacy Policy" />
            </div>
        </div>
        <div className="flex-col w-full  md:w-6/12 text-smallest">
            <SmallText smallText="Useful Links" smallTextStyle="text-bright-purple font-semibold text-smallTwo"/>
            <div className="mt-10 "><a href="">Overview</a></div>
            <div className="mt-10 "><a href="">Timeline</a></div>
            <div className="mt-10 "><a href="">FAQs</a></div>
            <div className="mt-10">Register</div>
            <div className="flex items-center mt-10 justify-between w-5/12 md:w-full">
                <SmallText smallText="Follow us" smallTextStyle="text-bright-purple"/>
                <a href=""><BsInstagram className="text-white"/></a>
                <a href=""><RiTwitterXFill className="text-white"/></a>
                <a href=""><FaFacebookF className="text-white"/></a>
                <a href=""><GrLinkedinOption className="text-white"/></a>
            </div>
        </div>
        <div className="flex-col w-full">
            <SmallText smallText="Contact Us" smallTextStyle="text-bright-purple font-semibold text-smallTwo"/>
            <div className="flex w-3/5 mt-10">
               <BiSolidPhoneCall className="text-white"/>
                <p className="ml-5 text-smallest">+234 679 81819</p>
            </div>
            <div className="flex w-3/5 mt-10">
               <HiLocationMarker />
                <p className="w-8/12 ml-5 text-smallest">27,Alara Street Yaba 100012 Lagos State</p>
            </div>
        </div>
        
    </section>
    <SmallText smallText="All rights reserved. &#xA9; getLinked Ltd." smallTextStyle="text-center text-white text-smallest"/>
    </section>
  )
}

export default Footer