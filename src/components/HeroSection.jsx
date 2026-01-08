// import profileImg from "../assets/rajanportfolio.png";
import profileImg from "../assets/rajanportfolio.png";

export const Herosection = ({ ContactRef, ProjectsRef }) => {
  const scrollToSection = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        className="
        hero-section 
        flex justify-center items-center  
          border-b border-gray-600 
        
        min-h-screen
        !px-4 sm:px-5 md:px-0  
      "
      >
        <div
          className=" 
          !mt-20
          container-hero  
          grid grid-cols-1 md:grid-cols-2
          !h-auto md:!h-150
          gap-10 md:gap-20 
          !px-25  
          
          w-full md:w-[1200px]
          !px-6  sm:px-10 md:px-16
          shadow-[0_0_10px_1px_rgba(56,189,248,0.75)] 
          rounded-2xl 
          shadow-2xl
        "
        >
          <div
            className="
            content-section 
            text-white  
            flex flex-col 
            justify-center 
            items-center 
            text-center md:text-center
          "
          >
            <h3 className="text-2xl font-sans text-yellow-400 font-bold ">
              Hi, Iam
            </h3>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
              Rajan kumar Raut
            </h1>

            <div className="h-1 w-40 md:w-50 bg-gradient-to-t from-sky-500 to-indigo-500"></div>

            <h1
              className="
              text-2xl sm:text-3xl 
              !mt-2 
              font-extrabold 
              inline-block 
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r 
              from-sky-600 via-white-500 to-pink-400
            "
            >
              Web Developer
            </h1>

            <p
              className="
              text-grey-800 
              text-sm 
              text-center 
              !mt-2 
              max-w-md
            "
            >
              Motivated and self-driven developer skilled in modern web
              technologies, passionate about creating innovative digital
              solutions.
            </p>

            <div
              className="
              section-button 
              flex flex-col sm:flex-row
              gap-4 sm:gap-5 
              !mt-8
            "
            >
              <button
                className="bg-sky-500 !px-2 !py-3 text-1xl font-bold text-black border border-white rounded-lg shadow-lg transition ease-in-out duration-300 hover:scale-110 hover:shadow-1xl hover:shadow-sky-500"
                onClick={() => scrollToSection(ContactRef)}
              >
                Get In Touch
              </button>

              <button
                className="bg-pink-500 !px-2 !py-3 text-1xl font-bold text-white border border-white rounded-lg shadow-lg transition ease-in-out duration-300 hover:scale-110 hover:shadow-1xl hover:shadow-pink-500"
                onClick={() => scrollToSection(ProjectsRef)}
              >
                View Project
              </button>
              
              <button
                className="bg-lime-500 !px-2 !py-3 text-1xl font-bold text-white border border-white rounded-lg shadow-lg transition ease-in-out duration-300 hover:scale-110 hover:shadow-1xl hover:shadow-pink-500"
                onClick={() => scrollToSection(ProjectsRef)}
              >
                View Resume
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center  bottom-10">
            <div className="absolute inset-10 md:inset-15 bg-sky-500 blur-2xl opacity-50 rounded-full"></div>
            <img
              src={profileImg}
              className="relative h-48 sm:h-60 md:h-150"
              alt="profile"
            />
          </div>
        </div>
      </section>
    </>
  );
};
