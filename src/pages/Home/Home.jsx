
import Carousel from "../../components/Carousel/styles/Carousel"
import { CarouselImg } from "../../data/carouselImages";
import Sponsered from "../../components/Sponser/Sponsered";
import HeroSection from "../../components/Hero/HeroSection";
import Feedback from "../../components/Feedback/Feedback" ;
import Contact from "../../components/Contact/Contact";
import EventPopup from "../../components/EventPopup/EventPopup"
import About from '../../components/About/About'

export default function Home() {
  return (
    <div>

     {/* <Carousel images={CarouselImg} />
     <Sponsered /> */}
     <EventPopup/>
      <HeroSection />
      <About />
      <Sponsered />
      <Contact/>
      <Feedback/>



      

    </div>
  )
}
