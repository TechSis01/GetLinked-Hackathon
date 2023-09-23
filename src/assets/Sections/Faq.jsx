import { faq } from "../data";
import Text from "../Components/Text";
import SmallText from "../Components/SmallText";
import manPic from "../Images/cwok_casual.png";
import {AiOutlinePlus} from "react-icons/ai";
import whiteStar from "../Images/big-white.png"
import brightPurpleStar from "../Images/bright-purpleStar.png"
import purpleStar from "../Images/big-purpleStar.png"
import question1 from "../Images/question1.png"
import question2 from "../Images/question2.png"
import question3 from "../Images/question3.png"
function Faq() {
  return (
    <section className="relative flex flex-col lg:flex-row py-40 justify-between items-center md:px-20 px-16 border-b border-white border-opacity-10">
     <img src={purpleStar} alt="star" className="absolute faq-Star1"></img>
     <img src={brightPurpleStar} alt="star" className="absolute faq-Star2"></img>
     <img src={brightPurpleStar} alt="star" className="absolute faq-Star3"></img>
     <img src={whiteStar} alt="star" className="absolute faq-Star5"></img>
      <div className="lg:w-5/12">
      <img src={question1} alt="question mark" className="absolute question1"></img>
        <img src={question2} alt="question mark" className="absolute question2"></img>
        <img src={question3} alt="question mark" className="absolute question3"></img>
        <Text text="Frequently Ask" spanText="Question" textStyle="text-white font-bold text-center md:text-left md:text-sbmedium md:w-6/12" spanTextStyle="text-bright-purple font-bold"/>
        <SmallText smallText="We got answers to the questions that you might want to ask about" smallTextSpanStyle="text-white text-opacity-100 font-medium" smallTextSpan="getlinked Hackathon 1.0" smallTextStyle="text-opacity-70 text-white text-center md:text-left md:w-4/5" />
        {faq.map((questions)=>(
            <div className="border-b-2 border-opacity-40 border-bright-purple flex justify-between my-14">
                <SmallText smallText={questions.info} smallTextStyle="text-white font-medium pb-9"/>
                <AiOutlinePlus className="text-bright-purple self-end mb-4 md:mb-0 lg:self-auto" />
            </div>
        ))}
      </div>

      <div className="lg:w-6/12 relative">
        
        <img src={manPic}></img>
      </div>
    </section>
  );
}

export default Faq;
