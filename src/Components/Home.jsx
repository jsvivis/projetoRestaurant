import Slider from "./Slider";
import About from "./About";
import Services from "./Services";
import Price from "./Price";
import Team from "./Team";
import Contact from "./Contact";




export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Services />
      <Price />
      <Team />
      <Contact />
    </div>
  )
}