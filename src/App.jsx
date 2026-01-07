import { useRef } from "react";
import "./App.css";
import { Navabar } from "./components/Navbar";
import { Herosection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

function App() {
  const HomeRef = useRef(null);
  const AboutMeRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const EducationRef = useRef(null);
  const ContactRef = useRef(null);

  return (
    <>
      {/* Navbar */}
      <Navabar
      HomeRef={HomeRef}
        AboutMeRef={AboutMeRef}
        SkillsRef={SkillsRef}
        ProjectsRef={ProjectsRef}
        EducationRef={EducationRef}
        ContactRef={ContactRef}
      />


      {/* Sections */}
      <section ref={HomeRef} className="min-h-screen"> <Herosection  ContactRef={ContactRef} ProjectsRef={ProjectsRef}/></section>
   

      <section ref={AboutMeRef} className="min-h-screen">
        <AboutSection />
      </section>

      <section ref={SkillsRef} className="min-h-screen">
        <Skills />
      </section>

      <section ref={ProjectsRef} className="min-h-screen">
        <Projects />
      </section>

      <section ref={EducationRef} className="min-h-screen">
        <Education />
      </section>

      <section ref={ContactRef} className="min-h-screen">
        <Contact />
      </section>
    </>
  );
}

export default App;
