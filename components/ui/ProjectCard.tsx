import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group">
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Imagem */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-[#0b1024]">
          <img
            src={project.image}
            alt={`Preview do projeto ${project.name}`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#050817]/0 transition-all duration-500 group-hover:bg-[#050817]/10" />

          {/* Botão */}
          <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-[#050817] opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight
              size={19}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>

      {/* Informações */}
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5b55ff]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#7c7f91]">
              {project.category}
            </p>
          </div>

          <h3 className="mt-3 text-xl font-medium tracking-[-0.03em] text-white md:text-2xl">
            {project.name}
          </h3>
        </div>

        <span className="hidden max-w-xs text-right text-sm leading-relaxed text-[#7c7f91] md:block">
          {project.description}
        </span>
      </div>
    </article>
  );
}