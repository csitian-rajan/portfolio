import { FaExternalLinkAlt } from "react-icons/fa";
import PojectsData from "../api/projects.json";
export const Projects = () => {
  const borderColors = ["sky", "lime", "lime", "sky"];
  return (
    <>
      <section className="projects-section text-white flex justify-center !flex-col items-center    ">
        <h1 className=" !mt-20 text-4xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-lime-500 to-green-600">
          Features projects
        </h1>
        <div className="container  !px-13 !py-5  w-[1200px]  grid grid-cols-2 gap-5">
          {PojectsData.projectsDetails.map((info) => (
            <div
              key={info.id}
              className={`border border-t-5  border-${
                borderColors[info.id - 1]
              }-400 bg-white/7 rounded-lg !mt-5  !p-5  hover:translate-y-2`}
            >
              <h2
                className={`skill-name text-3xl text-${
                  borderColors[info.id - 1]
                }-400  font-bold `}
              >
                {info.name}
              </h2>
              <h3 className="skill-name text-xl font-bold !mt-2">
                {info.teckTitle}
              </h3>
              <p className="text-1xl !mt-2 text-gray-400 lime-clamp-3">{info.description}</p>
              <div className="flex flex-wrap gap-4 !mt-2">
                {info.teckstack.map((tech, i) => (
                  <span
                    key={i}
                    className="!px-2 !py-1 bg-white/10 rounded-xl text-1xl border border-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                className={`text-sm font-bold text-white border bg-${
                  borderColors[info.id - 1]
                }-400 !p-2 rounded-xl  !mt-6 flex items-center gap-2 hover:scale-110 hover:shadow-1xl hover:shadow-sky-500 transition ease-in-out duration-300`}
              >
                <a href={info.link} target="_blank">
                  {info.View}
                </a>
                <FaExternalLinkAlt className="text-white" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
