// COMPONENTS
import NavBar from "../Components/NavBar"
import SubHero from "./SubHero"

// SECTIONS
import Attributes from "./Attributes"
import Faq from "./Faq"
import Footer from "./Footer"
import Hero from "./Hero"
import IntroductionSection from "./IntroductionSection"
import Partners from "./Partners"
import Privacy from "./Privacy"
import Prizes from "./Prizes"
import Rules from "./Rules"
import Timeline from "./Timeline"

function Landing() {
  return (
    <main className=" text-base bg-primary-purple">
    <NavBar />
      <SubHero />
      <Hero />
      <IntroductionSection />
      <Rules />
      <Attributes />
      <Faq />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </main>
  )
}

export default Landing