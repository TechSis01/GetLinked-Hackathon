import React from "react";
import { timeline } from "../data";
import HorizontalLine from "./HorizontalLine";
import BlurCircle from "./BlurCircle";
import { timeline1 } from "../data";
import { timeline2 } from "../data";
import whiteStar from "../Images/big-white.png"
import greyStar from "../Images/whitish.png"
import purpleStar from "../Images/big-purpleStar.png"
function TimelineTexts() {
  return (
    <>
      <section>
        {timeline.map((texts) => (
          <div className="flex flex-col lg:hidden ">
            <div key={texts.id} className="flex my-10">
            <HorizontalLine horizontalStyle="bg-bright-purple w-1 h-40 flex text-center mx-auto"/>
              <div className="ml-8 w-11/12">
                <p className="font-bold text-bright-purple">{texts.header}</p>
                <p className="text-white text-opacity-70">
                  {texts.information}
                </p>
              </div>
            </div>
            <div className="flex w-full text-left">
              <BlurCircle
                circleText={texts.id}
                blurStyle="w-10 text-white font-semibold bg-gradient-to-r from-dark-purple to-bright-purple text-center rounded-full"
              />
              <p className="text-bright-purple font-semibold ml-8">
                {texts.date}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="hidden lg:grid-cols-3 py-40 lg:grid relative">
      <img src={purpleStar} alt="" className="absolute timelineStar1"></img>
      <img src={whiteStar} alt="" className="absolute timelineStar2"></img>
      <img src={greyStar} alt="" className="absolute timelineStar3"></img>
        <div className="hidden md:flex lg:flex-col md:justify-around">
          {timeline1.map((text) => (
            <>
              <div>
                <p className="font-bold text-bright-purple text-right">{text.header}</p>
                <p className="text-white text-opacity-70 text-right ">
                  {text.information}
                </p>
              </div>
              <div className="text-bright-purple font-semibold text-right ">
                {text.date}
              </div>
            </>
          ))}
        </div>
        <div className=" place-items-center flex flex-col md:justify-around py-16">
          {timeline.map((text) => (
            <>
              <HorizontalLine horizontalStyle="bg-bright-purple w-1 h-40 flex text-center mx-auto my-4"/>

              <BlurCircle
                circleText={text.id}
                blurStyle="w-10 text-white font-semibold bg-gradient-to-r from-dark-purple to-bright-purple text-center rounded-full"
              />

            </>
          ))}
        </div>

        <div className="hidden md:flex md:flex-col">
          {timeline2.map((text) => (
            <>
              <div className={`text-bright-purple font-semibold ${text.class}`}>
                {text.date}
              </div>
              <div className="mt-auto">
                <p className="font-bold text-bright-purple">{text.header}</p>
                <p className="text-white text-opacity-70">
                  {text.information}
                </p>
              </div>
            </>
          ))}
        </div>
      </section>

    </>
  );
}

export default TimelineTexts;
