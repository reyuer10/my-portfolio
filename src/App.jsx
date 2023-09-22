import { Element } from "react-scroll";

// component
import TopNav from "./components/TopNav";
import About from "./components/About";
import TechnicalSkills from "./components/TechnicalSkills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <TopNav />
      <MainContent />
      <Element name="about">
        <About />
      </Element>
      <Element name="technical">
        <TechnicalSkills />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}
