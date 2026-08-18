import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="bg-[#050817] px-6 py-24 text-white md:px-12 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            CABEÇALHO
        ========================= */}
        <div className="max-w-2xl">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#5b55ff]" />

            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#a5a7b5]">
              Portfólio
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-7xl">
            Projetos que falam
            <br />

            <span className="text-[#5b55ff]">
              por nós.
            </span>
          </h2>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-[#a5a7b5] md:text-lg">
            Uma seleção de experiências digitais desenvolvidas pela
            Eleva Studio para diferentes negócios e segmentos.
          </p>

        </div>

        {/* =========================
            PROJETOS
            MOBILE + DESKTOP
        ========================= */}
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-12 md:mt-16 md:gap-x-8 md:gap-y-16 lg:mt-20">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}