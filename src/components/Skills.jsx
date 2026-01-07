import { Cms } from "./Cms"
import { SkillBackend } from "./SkillBackend"
import { SkillFrontendCard } from "./SkillFrontendCard"
import { ToolsCard } from "./ToolsCard"

export const Skills = () => {
    return (
        <>
           <section className="skills-section text-white flex justify-center !flex-col items-center  !mb-15   h-180">
        <h1 className=" !mb-8 text-4xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-400">
         Technical Skills
        </h1>
        <div className="container-hero   !h-130 w-330 !px-13  !h-[450px] w-[1200px]  grid grid-cols-2 gap-5">
          <SkillFrontendCard />
          <SkillBackend />
          <Cms />
          <ToolsCard />
        </div>
        </section>
        </>
    )
}