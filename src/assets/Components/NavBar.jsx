import brandName from "../Images/brandname.png";
import Button from "./Button";
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate()
  const[hasBorderBottom,setBorderBottom] = useState(true)
  const[navBarState,setNavBarState] = useState(false)

  function registerUser(){
    setBorderBottom(false)
    navigate("/registration")
  }  

  function navigateContactPage(){
    navigate("/contact")
  }

  function toggleNavOpen(){
    setNavBarState(true)
  }

  function toggleNavClose(){
    setNavBarState(false)
  }
  return (
     <nav className={`w-full py-12 flex justify-between items-center md:px-20 px-16 ${hasBorderBottom ? 'border-b border-white border-opacity-10' : 'border-0'}`}>
      <div>
        <img src={brandName} alt="getLinked" className="w-2/4 m:w-full"></img>
      </div>
      <div className="flex justify-evenly md:w-8/12">
        <div className="hamburger flex flex-col w-7 lg:hidden" onClick={toggleNavOpen}>
          <div className="horizontal-line first-line rounded-sm "></div>
          <div className="horizontal-line my-1 rounded-sm"></div>
          <div className="horizontal-line third-line rounded-sm "></div>
        </div>
        <div className={`left-0 top-0 ${navBarState ? "translate-x-0 duration-700 ease-in-out md:translate-x-0 md:duration-0 md:ease-none" : "transform translate-x-full duration-700 ease-in-out md:translate-x-0 md:duration-0 md:ease-none"} fixed h-full px-24 py-72 flex flex-col z-20 justify-between md:h-auto flex  md:py-0 bg-primary-purple md:bg-transparent w-full md:static md:flex-row links text-white md:flex md:justify-around lg:items-center`}>
          <div className="absolute top-20 right-20 border border-brightest-purple font-bold px-2 py-2 rounded-full md:hidden" onClick={toggleNavClose}>
          <AiOutlineClose />
          </div>
          <div>
            <a href="">Timeline</a>
          </div>
          <div>
            <a href="">Overview</a>
          </div>
          <div>
            <a href="">FAQs</a>
          </div>
          <div onClick={navigateContactPage} className="cursor-pointer">
             Contact
          </div>
          <Button buttonText="Register" btnStyle="w-3/5 md:w-auto bg-gradient-to-r from-brightest-purple via-bright-purple to-dark-purple py-6 px-20 rounded-md" btnFunction={registerUser}/>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
