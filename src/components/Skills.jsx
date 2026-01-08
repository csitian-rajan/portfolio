import { Cms } from "./Cms"
import { SkillBackend } from "./SkillBackend"
import { SkillFrontendCard } from "./SkillFrontendCard"
import { ToolsCard } from "./ToolsCard"

export const Skills = () => {
    return (
        <>
          <section className="
            skills-section 
            text-white 
            flex flex-col items-center    
            min-h-screen
            px-4 sm:px-6 md:px-0 !mt-10
          ">
            <h1 className="
              !mt-20
              text-3xl sm:text-4xl md:text-4xl 
              font-extrabold  
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r 
              from-sky-500 via-cyan-400 to-indigo-400
            ">
              Technical Skills
            </h1>

            <div className="
              container-hero   
              w-full max-w-[1200px]  
              !px-4 sm:!px-10 md:!px-13  
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2
              gap-5
            ">
              <SkillFrontendCard />
              <SkillBackend />
              <Cms />
              <ToolsCard />
            </div>

          </section>
        </>
    )
}
