import { createPortal } from "react-dom";
import winkEmoji from "../Images/wink-emoji.png";
import happyman from "../Images/happyman.png";
import Text from "../Components/Text";
import SmallText from "../Components/SmallText";
import Button from "../Components/Button";
import purpleStar from "../Images/purple-star.png"
import whiteSmallStar from "../Images/whitish.png"
import brightPurpleStar from "../Images/bright-purpleStar.png"
function Modal({closeModal}) {
  return createPortal(
    <div className="modal-container text-base text-white relative">
        <img src={purpleStar} alt="star" className="absolute purpleStar"></img>
        <img src={whiteSmallStar} alt="star" className="absolute whiteStar"></img>
        <img src={brightPurpleStar} alt="star" className="absolute bright-purple"></img>
      <div className=" w-4/5 md:w-2/5 mx-auto modal text-center border border-bright-purple p-10 rounded-md md:border-0">
        <img
          src={happyman}
          alt="User has successfully registered for hackathon"
        ></img>
        <Text
          text="Congratulations you have successfully Registered!"
          textStyle="text-white text-base md:text-sbmedium font-medium my-6 w-3/5 md:w-auto mx-auto"
        />
        <SmallText
          smallText="Yes, it was easy and you did it! check your mail box for next step"
          smallTextStyle="text-white text-smallest md:text-smallTwo"
        />
        <div className="flex  justify-center items-center">
          <SmallText
            smallText="check your mail box for next step"
            smallTextStyle="text-white text-smallest md:text-smallTwo"
          />
          <img src={winkEmoji} alt="wink Emoji"></img>
        </div>

        <Button
          buttonText="Back"
          btnStyle="w-full relative z-10 bg-gradient-to-r from-brightest-purple via-bright-purple to-dark-purple py-6 px-20 rounded-md mt-10"
        btnFunction={closeModal}
        />
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
