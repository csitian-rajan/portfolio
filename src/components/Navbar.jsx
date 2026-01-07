import {useState } from "react";
import "./navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
export const Navabar = ({
  HomeRef,
  AboutMeRef,
  SkillsRef,
  ProjectsRef,
  EducationRef,
  ContactRef,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const hadleButtonToggle = () => {
    setShowMenu(!showMenu);
  };


  const scrollToSection = (ref) => {
    
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header>
      <div className="container-navbar  flex justify-between items-center  border-b-1 border-b-gray-500 h-20 fixed top-0 left-0 right-0  z-10 px-10">
        <div className="logo">
          <h1 className="text-3xl font-bold">RKR</h1>
        </div>
        <div className="links">
          <nav className={showMenu ? "menu-mobile" : "menu-desktop"}>
            <div className="navigation flex gap-10  text-xl font-medium">
              <button onClick={()=>scrollToSection(HomeRef)}  className="rounded-md px-30 py-2   hover:bg-sky-600 block">Home</button>
              <button
                onClick={() => scrollToSection(AboutMeRef)}
                className="rounded-md px-30 py-2   hover:bg-sky-600 block"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(SkillsRef)}
                className="rounded-md   hover:bg-sky-600 block"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection(ProjectsRef)}
                className="rounded-md   hover:bg-sky-600 block"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection(EducationRef)}
                className="rounded-md   hover:bg-sky-600 block"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection(ContactRef)}
                className="rounded-md   hover:bg-sky-600 block"
              >
                Contact
              </button>
            </div>
          </nav>
        </div>
        <div className="ham-menu">
          <button onClick={hadleButtonToggle}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
};
