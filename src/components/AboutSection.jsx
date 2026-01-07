import information from '../api/info.json';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const AboutSection = () => {

  const iconMap = {
    FaPhoneAlt: <FaPhoneAlt className="fa-solid  text-sky-500 fa-phone"></FaPhoneAlt>,
    IoMdMail: <IoMdMail className="fa-solid fa-envelope text-pink-500"></IoMdMail>,
    FaLocationDot: <FaLocationDot className="fa-solid fa-location-dot text-green-500"></FaLocationDot>,
    FaGithub: <FaGithub className="fa-brands fa-github text-sky-500"></FaGithub>,
    FaLinkedin: <FaLinkedin className="fa-brands fa-linkedin text-pink-500"></FaLinkedin>,
  };

  return (
    <>
      <section className="about-section text-white flex justify-center !flex-col !items-center h-180   ">
        <h1 className="!mb-8 text-4xl !mt-2 font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-green-500 to-indigo-400">
          About Me
        </h1>

        <div
          className="container-hero    !px-13 !mt-5 !h-[450px] w-[1200px] backdrop-blur-xl bg-white/2  border border-white/20 rounded-3xl shadow-[0_0_20px_6px_rgba(56,189,248,0.75)] transition-shadow duration-300"
        >
          <h1 className="text-1xl !mt-10">Motivated and self-driven Web Developer skilled in Web development (frontend focused) and WordPress, with hands-on experience building real-world applications. Passionate about learning modern technologies and contributing to innovative digital solutions.</h1>
                 <div className="section-information  grid grid-cols-2 gap-3">
            {information.map((info) => (
              <>
              <div key={info.id} className="info-item flex gap-3 !mt-5 text-white  ">
                <div className="info-icon text-xl">{iconMap[info.icon]}</div>
                <div className="info-name text-1xl">{info.name}</div>
              
              </div>
              </>
            ))}
          </div>
          <div className="language !mt-5 border-t  he border-grey-800">
            <h1 className='text-2xl text-sky-400 font-bold !mt-5'>Language</h1>
            <h2 className="  flex flex-cols gap-5">

              {information
              .filter((info) => info.id >0 && info.id <=4)      
              .map((info)=>{
                return(
                  <div key={info.id} className='text-xl border-1 border-pink-600 rounded-xl !p-2 !mt-2 hover:text-pink-400 hover:border-pink-400'>{info.language}</div>
                )
              })}
            </h2>
          </div>

        </div>
      </section>
    </>
  );
};
