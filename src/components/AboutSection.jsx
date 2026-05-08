import information from '../api/info.json';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const AboutSection = () => {

  const iconMap = {
    FaPhoneAlt: <FaPhoneAlt className="fa-solid text-sky-500 fa-phone" />,
    IoMdMail: <IoMdMail className="fa-solid fa-envelope text-pink-500" />,
    FaLocationDot: <FaLocationDot className="fa-solid fa-location-dot text-green-500" />,
    FaGithub: <FaGithub className="fa-brands fa-github text-sky-500" />,
    FaLinkedin: <FaLinkedin className="fa-brands fa-linkedin text-pink-500" />,
  };

  return (
    <>
      <section className=" mt-20
        about-section 
        text-white 
        flex justify-center !flex-col !items-center 
      
        min-h-screen
       
        !px-4 !sm:6px md:px-0  
      ">
        <h1 className="
          !mb-8 
          text-3xl sm:text-4xl 
          font-extrabold  
          text-transparent 
          bg-clip-text 
          bg-gradient-to-r 
          from-sky-600 via-green-500 to-indigo-400
        ">
          About Me
        </h1>

        <div
          className="
            container-hero    
            !px-6 sm:!px-10 md:!px-13 
            !mt-2 
            !h-150 md:!h-[450px]
            w-full md:w-[1200px]
            backdrop-blur-xl 
            bg-white/2  
            border border-white/20 
            rounded-3xl 
            shadow-[0_0_10px_5px_rgba(56,189,248,0.75)] 
            transition-shadow duration-300
          "
        >
          <h1 className="text-sm sm:text-base !mt-10">
            Motivated and self-driven Web Developer skilled in Web development (frontend focused) and WordPress, with hands-on experience building real-world applications. Passionate about learning modern technologies and contributing to innovative digital solutions.
          </h1>

          <div className="
            section-information  
            grid grid-cols-1 sm:grid-cols-2 
            gap-3
          ">
            {information.map((info) => (
              <div key={info.id} className="info-item flex gap-3 !mt-5 text-white">
                <div className="info-icon text-xl">
                  {iconMap[info.icon]}
                </div>
                <div className="info-name text-sm sm:text-base">
                  {info.name}
                </div>
              </div>
            ))}
          </div>

          <div className="language !mt-5 border-t border-grey-800">
            <h1 className="text-xl sm:text-2xl text-sky-400 font-bold !mt-5">
              Language
            </h1>

            <h2 className="flex flex-wrap gap-3 sm:gap-5">
              {information
                .filter((info) => info.id > 0 && info.id <= 4)
                .map((info) => {
                  return (
                    <div
                      key={info.id}
                      className="
                        text-sm sm:text-xl 
                        border-1 
                        border-pink-600 
                        rounded-xl 
                        !p-2 
                        !mt-2  !mb-5
                        hover:text-pink-400 
                        hover:border-pink-400 
                      "
                    >
                      {info.language}
                    </div>
                  );
                })}
            </h2>
          </div>

        </div>
      </section>
    </>
  );
};
