import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030611] px-6 md:px-12 lg:px-20">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[420px] w-[600px] -translate-x-1/2 rounded-full bg-[#5b55ff]/[0.08] blur-[140px] md:top-[-250px] md:h-[500px] md:w-[700px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ==================================================
            CTA PRINCIPAL
        ================================================== */}

        <div className="border-b border-white/[0.07] py-24 md:py-36 lg:py-44">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end lg:gap-16">

            <div className="max-w-full">

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#5b55ff] md:w-8" />

                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#7c7f91] md:text-xs md:tracking-[0.28em]">
                  Vamos criar algo?
                </p>
              </div>

              {/* Heading */}
              <h2 className="mt-6 max-w-[900px] text-[clamp(3.2rem,14vw,7rem)] font-medium leading-[0.88] tracking-[-0.07em] text-white md:mt-7 md:text-[clamp(3.5rem,7vw,7rem)] md:tracking-[-0.065em]">
                Seu próximo projeto
                <br />
                <span className="text-[#5b55ff]">
                  começa aqui.
                </span>
              </h2>
            </div>

            {/* CTA */}
            <Link
              href="https://wa.me/5519992768133"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                flex
                w-full
                max-w-[300px]
                items-center
                justify-between
                gap-6
                overflow-hidden
                rounded-full
                border
                border-[#5b55ff]/40
                bg-[#0b1024]
                px-5
                py-3
                text-sm
                font-medium
                text-white
                shadow-[0_0_40px_rgba(91,85,255,0.08)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#5b55ff]/70
                hover:bg-[#111735]
                hover:shadow-[0_0_50px_rgba(91,85,255,0.18)]
                md:min-w-[230px]
                md:w-fit
              "
            >
              {/* Glow interno */}
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-[#5b55ff]/10
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <span className="relative z-10">
                Falar com a Eleva
              </span>

              <span
                className="
                  relative
                  z-10
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.06]
                  transition-all
                  duration-500
                  group-hover:border-[#5b55ff]/40
                  group-hover:bg-[#5b55ff]
                "
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* ==================================================
            INFORMAÇÕES
        ================================================== */}

        <div className="grid gap-12 border-b border-white/[0.07] py-12 md:grid-cols-2 md:py-14 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr] lg:gap-8 lg:py-16">

          {/* Marca */}
          <div>
            <Image
              src="/images/logo-eleva.png"
              alt="Eleva Studio"
              width={120}
              height={40}
              className="h-auto w-[48px] object-contain md:w-[55px]"
            />

            <p className="mt-5 max-w-xs text-sm leading-[1.7] text-[#6f7282]">
              Experiências digitais pensadas para elevar marcas,
              negócios e oportunidades.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#5f6272]">
              Navegação
            </p>

            <nav className="flex flex-col gap-3.5">

              <Link
                href="#inicio"
                className="w-fit text-sm text-[#a5a7b5] transition-colors hover:text-white"
              >
                Início
              </Link>

              <Link
                href="#projetos"
                className="w-fit text-sm text-[#a5a7b5] transition-colors hover:text-white"
              >
                Projetos
              </Link>

              <Link
                href="#sobre"
                className="w-fit text-sm text-[#a5a7b5] transition-colors hover:text-white"
              >
                Sobre
              </Link>

            </nav>
          </div>

          {/* Contato */}
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#5f6272]">
              Contato
            </p>

            <div className="flex flex-col gap-3.5">

              {/* Email */}
              <a
                href="mailto:elevastudio.dev@gmail.com"
                className="group flex w-fit items-center gap-2 text-sm text-[#a5a7b5] transition-colors duration-300 hover:text-white"
              >
                <Mail
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />

                <span>
                  elevastudio.dev@gmail.com
                </span>
              </a>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/5519992768133"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm text-[#a5a7b5] transition-colors hover:text-white"
              >
                WhatsApp
              </Link>

            </div>
          </div>

          {/* Social */}
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#5f6272]">
              Social
            </p>

            <Link
              href="https://instagram.com/elevastudioweb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm text-[#a5a7b5] transition-colors hover:text-white"
            >
              Instagram
            </Link>
          </div>

        </div>

        {/* ==================================================
            MARCA GIGANTE
        ================================================== */}

        <div className="relative overflow-hidden py-12 md:py-14">

          <div
            className="
              pointer-events-none
              select-none
              whitespace-nowrap
              text-center
              text-[clamp(5.5rem,24vw,17rem)]
              font-semibold
              leading-[0.7]
              tracking-[-0.1em]
              text-white/[0.025]
            "
          >
            ELEVA
          </div>

        </div>

        {/* ==================================================
            COPYRIGHT
        ================================================== */}

        <div className="flex flex-col gap-3 border-t border-white/[0.05] py-6 text-[9px] uppercase tracking-[0.14em] text-[#555867] md:flex-row md:items-center md:justify-between md:gap-4 md:text-[10px] md:tracking-[0.16em]">

          <span>
            © 2026 Eleva Studio
          </span>

          <span>
            Design · Strategy · Technology
          </span>

          <span>
            Todos os direitos reservados
          </span>

        </div>

      </div>
    </footer>
  );
}