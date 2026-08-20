import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="eleva-background relative flex min-h-screen overflow-hidden bg-[#050817]">

      {/* =========================
          MOCKUP — MOBILE
      ========================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-38%]
          top-[27%]
          z-0
          w-[105%]
          sm:right-[-32%]
          sm:top-[25%]
          sm:w-[100%]
          md:hidden
          hero-fade
          opacity-0
          [animation-delay:450ms]
        "
      >

        {/* Glow atrás do mockup */}
        <div className="absolute right-[8%] top-[40%] h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[#5b55ff]/10 blur-[110px]" />

        {/* Mockup */}
        <div className="relative">
          <Image
            src="/images/mockups/hero-mockup.png"
            alt=""
            width={1600}
            height={1000}
            priority
            className="relative h-auto w-full object-contain drop-shadow-[0_35px_80px_rgba(0,0,0,0.7)]"
          />
        </div>

      </div>

      {/* =========================
          MOCKUP — DESKTOP
      ========================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-2%]
          top-1/2
          z-0
          hidden
          -translate-y-1/2
          lg:block
          xl:right-[2%]
          hero-fade
          opacity-0
          [animation-delay:450ms]
        "
      >

        {/* Glow principal */}
        <div className="absolute right-[5%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#5b55ff]/10 blur-[120px]" />

        {/* Glow secundário */}
        <div className="absolute right-[15%] top-[35%] h-[250px] w-[250px] rounded-full bg-[#706bff]/10 blur-[90px]" />

        {/* Mockup */}
        <div className="relative z-10 w-[820px] xl:w-[910px]">

          <Image
            src="/images/mockups/hero-mockup.png"
            alt="Projeto desenvolvido pela Eleva Studio"
            width={1600}
            height={1000}
            priority
            className="h-auto w-full object-contain drop-shadow-[0_45px_100px_rgba(0,0,0,0.65)]"
          />

          {/* Gradiente somente no desktop */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#050817] via-[#050817]/70 to-transparent" />

        </div>

      </div>

      {/* =========================
          CONTEÚDO
      ========================= */}
      <div className="relative z-30 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-20 pt-28 md:px-12 md:pt-32 lg:px-20">

        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div
            className="
              hero-enter
              mb-7
              flex
              items-center
              gap-3
              opacity-0
              [animation-delay:100ms]
              md:mb-8
            "
          >
            <span className="h-px w-7 bg-[#5b55ff] md:w-8" />

            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#a5a7b5] md:text-xs md:tracking-[0.28em]">
              Eleva Studio
            </p>
          </div>

          {/* Headline */}
          <h1
            className="
              hero-enter
              max-w-[650px]
              text-[clamp(3.4rem,12vw,5.5rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.065em]
              text-white
              opacity-0
              [animation-delay:200ms]
              md:text-[clamp(4rem,8vw,6rem)]
              lg:text-[clamp(3.5rem,7vw,7rem)]
            "
          >
            Experiências digitais
            <br />

            <span className="text-[#5b55ff]">
              que elevam negócios.
            </span>
          </h1>

          {/* Descrição */}
          <p
            className="
              hero-enter
              mt-9
              max-w-lg
              text-sm
              leading-[1.75]
              text-[#d1d3dc]
              opacity-0
              [animation-delay:350ms]
              md:mt-12
              md:text-base
              lg:text-lg
            "
          >
            Landing pages e sites profissionais criados para apresentar
            marcas com clareza, personalidade e presença digital.
          </p>

          {/* CTA */}
          <Link
            href="#projetos"
            className="
              hero-enter
              group
              mt-7
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              bg-[#5b55ff]
              px-5
              py-3.5
              text-sm
              font-medium
              text-white
              opacity-0
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#706bff]
              [animation-delay:400ms]
              md:mt-9
              md:px-6
            "
          >
            Explorar projetos

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

        </div>
      </div>

      {/* =========================
          INDICADOR INFERIOR
      ========================= */}
      <div
        className="
          hero-fade
          absolute
          bottom-7
          left-6
          z-40
          flex
          items-center
          gap-3
          text-[9px]
          uppercase
          tracking-[0.22em]
          text-[#6f7282]
          opacity-0
          [animation-delay:700ms]
          md:left-12
          md:text-[10px]
          md:tracking-[0.25em]
          lg:left-20
        "
      >

        <span className="h-px w-7 bg-[#5b55ff] md:w-8" />

        Portfólio 2026
      </div>

      {/* =========================
          SCROLL
      ========================= */}
      <div
        className="
          hero-fade
          absolute
          bottom-7
          right-6
          z-40
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

    </section>
  );
}