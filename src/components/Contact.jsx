import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import contactDetails from "../api/contact.json";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
    const iconMap = {
        IoMdMail:<IoMdMail className="fa-solid fa-envelope text-black"></IoMdMail>,
        FaPhone:<FaPhone className="fa-solid  text-black fa-phone"></FaPhone>,
        FaLocationDot:<FaLocationDot className="fa-solid fa-map-marker-alt text-black"></FaLocationDot>,
        FaLinkedin:<FaLinkedin className="fa-brands fa-linkedin text-black"></FaLinkedin>,
        FaGithub:<FaGithub className="fa-brands fa-github text-black"></FaGithub>
    }

    const borderColors = ["sky", "lime", "lime", "sky", "pink"];

    return(
        <>
        <section className="
          contact-section 
          text-white 
          flex justify-center !flex-col items-center 
          h-auto !mb-20
          !px-4 sm:px-2 md:px-0
        ">
            <h1 className="
              !mt-20 !mb-8 
              text-3xl sm:text-4xl md:text-4xl 
              font-extrabold  
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r from-yellow-600 via-lime-500 to-green-600
            ">
              Get In Touch
            </h1>

            <div className="
              container 
              w-full max-w-[1000px] 
              !px-4 sm:!px-10 md:!px-13 
              !py-5  
              border  
              backdrop-blur-xl bg-white/2   
              border-white/20 rounded-3xl 
              shadow-[0_0_10px_5px_rgba(56,189,248,0.75)] 
              transition-shadow duration-300
            ">
                <div className="language border-grey-800 !px-2 sm:!px-5 !py-5 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:items-start">
                    {contactDetails.map((info)=>{
                        return(
                            <div key={info.id} className='text-sm flex flex-col sm:flex-row gap-2 items-start sm:items-center'>
                                <h1 className={`info-icon !p-2 text-xl bg-${borderColors[info.id - 1]}-400 !p-2 rounded-xl !mt-2 flex items-center gap-2 hover:scale-110 hover:shadow-1xl hover:shadow-sky-500 transition ease-in-out duration-300`}>
                                    {iconMap[info.icon]}
                                </h1>
                                <div className="">
                                    <h2 className={`info-icon text-xl text-${borderColors[info.id - 1]}-400`}> 
                                        {info.name}
                                    </h2>
                                    <p className="text-sm sm:text-base">{info.detailed}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="border-t-2 border-gray-500 !mt-5">
                    <ContactForm />
                </div>
            </div>

            <div className="!mt-5 text-center">
                <span className="relative text-gray-400 text-sm sm:text-base">© 2024 Rajan Kumar Raut. All rights reserved.</span>
            </div>
        </section>
        </>
    )
}
