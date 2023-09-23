import Text from "../Components/Text"
import headerLine from "../Images/header-line.png"
import BlurCircle from "../Components/BlurCircle"
function SubHero() {
  return (
    <>
         <BlurCircle blurStyle=" circle bg-opacity-70 w-1/4 h-80 bg-dark-purple absolute md:left-56"/>

    <section className="text-center relative overflow-hidden z-10">
      <div>
        <Text text="Igniting a Revolution in HR Innovation" textStyle="text-white py-10 italic font-bold w-full md:text-right md:pr-44 md:text-large "/>
        <img src={headerLine} alt="horizontal line" className="absolute w-52 right-16 top-20 md:w-auto md:right-44 md:top-24"></img>
      </div>
     </section>

     </>
  )
}

export default SubHero