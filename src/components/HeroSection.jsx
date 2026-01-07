// import profileImg from "../assets/rajanportfolio.png";
import profileImg from '../assets/rajanportfolio.png';
export const Herosection=({ ContactRef, ProjectsRef })=>{

     const scrollToSection = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
    return(
        <>
        <section className="hero-section flex justify-center items-center  h-200  ">
            <div className="container-hero  grid grid-cols-2 h-148 gap-20  !px-25  w-[1200px] px-16 shadow-[0_0_10px_1px_rgba(56,189,248,0.75)] rounded-2xl 
        
        shadow-2xl ">
                <div className=" content-section text-white  flex flex-col justify-center items-center  ">
                    <h3 className='text-2xl font-sans text-yellow-400 font-bold '>Hi, Iam</h3>
                    <h1 className="text-white text-5xl font-serif font-bold ">Rajan kumar Raut </h1>
                    <div className="h-1 w-50 bg-gradient-to-t from-sky-500 to-indigo-500"></div>
                    <h1 className="text-3xl !mt-2 font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-white-500 to-pink-400">
  Web Developer
</h1>

                   
                    <p className="text-grey-800 text-sm text-center !mt-2">Motivated and self-driven developer skilled in modern web technologies, passionate about creating innovative digital solutions.</p>
                    <div className="section-button flex gap-5 !mt-8">
                       <button className="bg-sky-500 !px-2 !py-3 text-1xl font-bold text-black border border-white rounded-lg shadow-lg  transition ease-in-out duration-300 hover:scale-110 hover:shadow-1xl hover:shadow-sky-500"  onClick={() => scrollToSection(ContactRef)}>Get In Touch</button>
                      <button className="bg-pink-500 !px-2 !py-3 text-1xl font-bold text-white border border-white rounded-lg shadow-lg transition ease-in-out duration-300 hover:scale-110 hover:shadow-1xl hover:shadow-pink-500" onClick={() => scrollToSection(ProjectsRef)}>View Project</button>
                    </div>
                    
                </div>
               <div className="relative">
  <div className="absolute inset-15 bg-sky-500 blur-2xl opacity-50 rounded-full"></div>
  <img src={profileImg} className="relative h-150" />
</div>

            </div>

            
        </section>
        </>
    )
}