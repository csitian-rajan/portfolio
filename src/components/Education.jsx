import EducationDetails from "../api/education.json"
import { GrCertificate } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa";

export const Education = () => {
    return(
        <>
        <section className="
          education-section 
          text-white 
          flex flex-col items-center 
          min-h-screen
          !px-4 sm:!px-6 md:!px-0 
        ">
        
          <h1 className=" 
            !mt-20 
            !text-4xl sm:!text-2xl md:!text-4xl 
            font-extrabold  
            text-transparent 
            bg-clip-text 
            bg-gradient-to-r 
            from-yellow-600 via-lime-500 to-green-600 
          ">
            Education & Certifications
          </h1>

          {/* Education Heading */}
          <div className="flex items-center gap-2 !mt-10">
            <FaUserGraduate className="
              text-5xl sm:text-5xl 
              bg-sky-400 text-black rounded-lg !p-2 
              shadow-[0_0_20px_2px_rgba(56,189,248,0.75)]
            "/>
            <h2 className="text-cyan-500 text-2xl sm:text-3xl font-bold ">
              Education
            </h2>
          </div>

          {/* Education Cards */}
          <div className="
            container 
            w-full max-w-[1200px] 
            !px-2 sm:!px-10 md:!px-13 
            !py-5
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 
            gap-5
          ">
            {EducationDetails.educationData.map((edu) => (
              <div key={edu.id} className="
                bg-white/7 rounded-lg !mt-10 !p-5 
                h-auto sm:h-50 
                hover:translate-y-2 
                border border-sky-700 hover:border-sky-400
              ">
                <h2 className="skill-name text-2xl sm:text-3xl text-cyan-400 font-bold !mt-4">
                  {edu.course}
                </h2>
                <p className="text-gray-100 !mt-2">{edu.College}</p>
                <p className="text-gray-400 !mt-2 !mb-2">{edu.University}</p>
                <p className="text-sky-400 !mt-2 border border-sky-400 rounded-full !px-3 bg-sky-900/70 inline">
                  {edu.level}
                </p>
              </div>
            ))}
          </div>

          {/* Certificates Heading */}
          <div className="flex items-center gap-2 !mt-10">
            <GrCertificate className="
              text-5xl sm:text-5xl 
              bg-lime-400 text-black rounded-lg !p-2 
              shadow-[0_0_20px_2px_rgba(163,230,53,0.75)]
            "/>
            <h2 className="text-lime-400 text-2xl sm:text-3xl font-bold">
              Certificates
            </h2>
          </div>

          {/* Certificates Cards */}
          <div className="
            container 
            w-full max-w-[1200px] 
            !px-2 sm:!px-10 md:!px-13 
            !py-5
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 
            gap-5
          ">
            {EducationDetails.Certifications.map((cert) => (
              <div key={cert.id} className="
                bg-white/7 rounded-lg !mt-10 !p-5 
                h-auto sm:h-50 
                hover:translate-y-2 
                border border-lime-700 hover:border-lime-400
              ">
                <h2 className="skill-name text-2xl sm:text-3xl text-lime-400 font-bold !mt-4">
                  {cert.course}
                </h2>
                <p className="text-gray-100 !mt-2">{cert.platform}</p>
                <a 
                  href={cert.link} target="_blank" rel="noopener noreferrer" 
                  className="text-lime-500 !mt-2 border border-lime-400 rounded-full !px-3 bg-lime-900/70 inline"
                >
                  View Certificate
                </a>
                <p className="text-gray-400 !mt-2">{cert.date}</p>
              </div>
            ))}
          </div>

        </section>
        </>
    )
}
