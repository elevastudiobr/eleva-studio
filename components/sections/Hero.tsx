import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="eleva-background relative flex min-h-screen items-center overflow-hidden bg-[#050817]"
    >
      {/* ==================================================
          CONTEÚDO PRINCIPAL
      ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 md:px-12 lg:px-20">
        <div className="relative flex min-h-[calc(100vh-12rem)] items-center">

          {/* ==================================================
              MOCKUP DE FUNDO
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-32%]
              top-[44%]
              z-0
              w-[105%]
              -translate-y-1/2
              hero-fade
              opacity-0
              [animation-delay:450ms]
              md:right-[-28%]
              md:w-[92%]
              lg:right-[-20%]
              lg:top-[46%]
              lg:w-[78%]
              xl:right-[-15%]
              xl:w-[72%]
            "
          >
            <Image
              src="/images/mockups/hero-mockup.png"
              alt=""
              width={1600}
              height={1000}
              priority
              className="
                h-auto
                w-full
                object-contain
                drop-shadow-[0_45px_100px_rgba(0,0,0,0.45)]
              "
            />
          </div>

          {/* ==================================================
              GRADIENT DE LEITURA
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-[1]
              w-full
              bg-gradient-to-r
              from-[#050817]
              via-[#050817]/90
              to-transparent
            "
          />

          {/* ==================================================
              CONTEÚDO
          ================================================== */}

          <div className="relative z-20 w-full max-w-4xl">

            {/* Eyebrow */}
            <div
              className="
                hero-enter
                mb-8
                flex
                items-center
                gap-3
                opacity-0
                [animation-delay:100ms]
              "
            >
              <span className="h-px w-8 bg-[#5b55ff]" />

              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#a5a7b5]">
                Eleva Studio
              </p>
            </div>

            {/* Headline */}
            <h1
              className="
                hero-enter
                max-w-4xl
                text-[clamp(3.5rem,7vw,7rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.065em]
                text-white
                opacity-0
                [animation-delay:200ms]
              "
            >
              Experiências digitais
              <br />

              <span className="text-[#5b55ff]">
                que elevam negócios.
              </span>
            </h1>

            {/* Descrição + CTA */}
            <div
              className="
                hero-enter
                mt-12
                flex
                flex-col
                gap-8
                opacity-0
                [animation-delay:350ms]
                md:mt-14
                md:flex-row
                md:items-end
              "
            >
              <p className="max-w-xl text-base leading-relaxed text-[#a5a7b5] md:text-lg">
                Landing pages e sites profissionais criados para apresentar
                marcas com clareza, personalidade e presença digital.
              </p>

              <Link
                href="#projetos"
                className="
                  group
                  flex
                  w-fit
                  shrink-0
                  items-center
                  gap-3
                  rounded-full
                  bg-[#5b55ff]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#706bff]
                  hover:shadow-[0_0_35px_rgba(91,85,255,0.25)]
                "
              >
                Explorar projetos

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </div>
          </div>
        </div>

        {/* ==================================================
            INDICADOR INFERIOR ESQUERDO
        ================================================== */}

        <div
          className="
            hero-fade
            absolute
            bottom-8
            left-6
            flex
            items-center
            gap-3
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-[#6f7282]
            opacity-0
            [animation-delay:700ms]
            md:left-12
            lg:left-20
          "
        >
          <span className="h-px w-8 bg-[#5b55ff]" />

          Portfólio 2026
        </div>

        {/* ==================================================
            INDICADOR INFERIOR DIREITO
        ================================================== */}

        <div
          className="
            hero-fade
            absolute
            bottom-7
            right-6
            hidden
            items-center
            gap-3
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-[#6f7282]
            opacity-0
            [animation-delay:800ms]
            md:right-12
            md:flex
            lg:right-20
          "
        >
          Scroll

          <ArrowDown
            size={14}
            className="animate-bounce text-[#5b55ff]"
          />
        </div>
      </div>
    </section>
  );
}