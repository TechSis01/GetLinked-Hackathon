import TimelineTexts from "../Components/TimelineTexts";
import Text from "../Components/Text";
import SmallText from "../Components/SmallText";


function Timeline() {
  return (
    <section className=" mx-auto flex items-center flex-col py-12 px-16">
        <Text textStyle="text-white text-center font-bold text-medium md:text-sbmedium" text="Timeline"/>
        <SmallText smallText="Here is the breakdown of the time we anticipate using for the upcoming event." smallTextStyle="text-white text-opacity-70 text-center text-smallest md:text-smallTwo w-full md:w-4/12 mx-auto"/>
      <TimelineTexts />
    </section>
  );
}

export default Timeline;
