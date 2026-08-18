"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance =
      touchStartX.current - touchEndX.current;

    const minimumSwipeDistance = 50;

    if (Math.abs(distance) < minimumSwipeDistance) {
      return;
    }

    if (distance > 0) {
      nextProject();
    } else {
      previousProject();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

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
            MOBILE — CARROSSEL
        ========================= */}
        <div className="mt-14 md:hidden">

          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full shrink-0"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              CONTROLES
          ========================= */}
          <div className="mt-7 flex items-center justify-between">

            {/* Indicadores */}
            <div className="flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Ir para ${project.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-[#5b55ff]"
                      : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            {/* Setas */}
            <div className="flex items-center gap-2">

              <button
                type="button"
                onClick={previousProject}
                aria-label="Projeto anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-[#5b55ff] hover:bg-[#5b55ff]"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextProject}
                aria-label="Próximo projeto"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-[#5b55ff] hover:bg-[#5b55ff]"
              >
                <ChevronRight size={18} />
              </button>

            </div>
          </div>

          {/* Número */}
          <div className="mt-5 text-right">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6f7282]">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

        </div>

        {/* =========================
            DESKTOP — GRID
        ========================= */}
        <div className="mt-16 hidden gap-x-8 gap-y-16 md:grid md:grid-cols-2 lg:mt-20">
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