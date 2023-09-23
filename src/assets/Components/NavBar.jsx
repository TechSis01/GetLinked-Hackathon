import brandName from "../Images/brandname.png";
import Button from "./Button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate()
  const[hasBorderBottom,setBorderBottom] = useState(true)
  function registerUser(){
    setBorderBottom(false)
    navigate("/registration")
  }   
  function navigateContactPage(){
    navigate("/contact")
  }
  return (
     <nav className={`py-12 flex justify-between items-center md:px-20 px-16 ${hasBorderBottom ? 'border-b border-white border-opacity-10' : 'border-0'}`}>
      <div>
        <img src={brandName} alt="getLinked" className="w-2/4 m:w-full"></img>
      </div>
      <div className="md:w-8/12">
        <div className="hamburger flex flex-col w-7 lg:hidden">
          <div className="horizontal-line first-line rounded-sm "></div>
          <div className="horizontal-line my-1 rounded-sm"></div>
          <div className="horizontal-line third-line rounded-sm "></div>
        </div>
        <div className="hidden links text-white md:flex lg:justify-around lg:items-center">
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
          <Button buttonText="Register" btnStyle="bg-gradient-to-r from-brightest-purple via-bright-purple to-dark-purple py-6 px-20 rounded-md" btnFunction={registerUser}/>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
