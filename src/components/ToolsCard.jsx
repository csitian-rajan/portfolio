import technicalSkills from '../api/tools.json';
import { FaCode } from "react-icons/fa6";

export const ToolsCard = () => {
  return (
    <>  
    <section className="skills-card w-full">
        <div className="skill-card-front border-1 border-white/20 backdrop-blur bg-white/4 rounded-lg !p-5 !mt-5 hover:-translate-y-1 hover:border-sky-400 transition-all duration-100 h-auto sm:h-60">
          <div className="skill-header info-item flex flex-col sm:flex-row gap-3 !mt-5 text-white items-start sm:items-center">
           <h1 className='text-3xl font-bold text-black bg-slate-400 rounded-lg !p-2 shadow-[0_0_20px_2px_rgba(148,163,184,0.75)]'> <FaCode /></h1>
          <h1 className='text-3xl font-bold text-white-400 font-serif mt-2 sm:mt-0'>Tools And Others</h1>
          </div>

            <div className="skills grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 !mt-5 !p-3">
            {technicalSkills.map((info)=>(
              <div key={info.id} className='border border-white/20 rounded-lg flex flex-col justify-center items-center hover:text-sky-400 hover:border-sky-400 !p-2 w-full sm:w-22 h-12'>
                <h2 className="skill-name text-sm">{info.name}</h2>
              </div>
            ))}
          </div>

        </div>
     </section>
    </>
  );
}
