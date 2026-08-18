import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#070b19] px-6 py-28 md:px-12 md:py-36 lg:px-20 lg:py-40"
    >
      {/* Glow geral */}
      <div className="pointer-events-none absolute right-[-250px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#5b55ff]/[0.05] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ==================================================
            MOBILE
        ================================================== */}
        <div className="relative min-h-[720px] md:hidden">

          {/* MOCKUP */}
          <div className="pointer-events-none absolute left-[-48%] top-[48%] z-0 w-[138%] -translate-y-1/2">

            {/* Glow atrás do mockup */}
            <div className="absolute left-[38%] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#5b55ff]/10 blur-[120px]" />

            <Image
              src="/images/about/sobre-eleva.png"
              alt=""
              width={1600}
              height={1000}
              sizes="138vw"
              className="relative h-auto w-full object-contain opacity-95"
            />

          </div>

          {/* CONTEÚDO */}
          <div className="relative z-10 ml-auto w-[82%] pt-16">

            {/* Eyebrow */}
            <div className="flex items-center justify-end gap-3">
              <p className="text-right text-[10px] font-medium uppercase tracking-[0.25em] text-[#8f92a3]">
                Sobre a Eleva
              </p>

              <span className="h-px w-7 shrink-0 bg-[#5b55ff]" />
            </div>

            {/* Título */}
            <h2 className="mt-6 text-right text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-white">
              Design, estratégia e tecnologia
              <span className="text-[#5b55ff]">
                {" "}
                em um só lugar.
              </span>
            </h2>

            {/* Texto */}
            <div className="mt-8 space-y-5">

              <p className="text-right text-sm leading-[1.75] text-[#a5a7b5]">
                A Eleva Studio cria experiências digitais para negócios que
                querem construir uma presença profissional na internet.
              </p>

              <p className="text-right text-sm leading-[1.75] text-[#a5a7b5]">
                Cada projeto é pensado para unir estética, estratégia e
                experiência do usuário, transformando uma simples página em
                uma ferramenta para apresentar, conectar e gerar novas
                oportunidades.
              </p>

            </div>

            {/* Princípios */}
            <div className="mt-10 border-t border-white/[0.08] pt-7">

              <div className="grid grid-cols-3 gap-3">

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#5b55ff]">
                    01
                  </p>

                  <p className="mt-2 text-xs font-medium text-white">
                    Estratégia
                  </p>
                </div>

                <div className="border-l border-white/[0.08] pl-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#5b55ff]">
                    02
                  </p>

                  <p className="mt-2 text-xs font-medium text-white">
                    Design
                  </p>
                </div>

                <div className="border-l border-white/[0.08] pl-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#5b55ff]">
                    03
                  </p>

                  <p className="mt-2 text-xs font-medium text-white">
                    Tecnologia
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ==================================================
            DESKTOP
        ================================================== */}
        <div className="hidden items-center gap-8 md:grid md:grid-cols-[1.05fr_0.95fr] lg:grid-cols-[1fr_1fr] lg:gap-0">

          {/* Imagem */}
          <div className="relative -ml-12 min-h-[620px] lg:-ml-20 lg:min-h-[700px]">

            <Image
              src="/images/about/sobre-eleva.png"
              alt="Projeto desenvolvido pela Eleva Studio"
              fill
              priority={false}
              sizes="60vw"
              className="object-contain object-left"
            />

            {/* Gradiente somente na direita */}
            <div className="pointer-events-none absolute inset-y-0 right-[-1px] w-[42%] bg-gradient-to-l from-[#070b19] via-[#070b19]/70 to-transparent" />

          </div>

          {/* Conteúdo */}
          <div className="relative z-10 max-w-2xl lg:-ml-4 lg:pr-4">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#5b55ff]" />

              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8f92a3]">
                Sobre a Eleva
              </p>
            </div>

            {/* Título */}
            <h2 className="mt-7 max-w-3xl text-5xl font-medium leading-[1] tracking-[-0.05em] text-white lg:text-6xl">
              Design, estratégia e tecnologia
              <span className="text-[#5b55ff]">
                {" "}
                em um só lugar.
              </span>
            </h2>

            {/* Texto */}
            <div className="mt-9 space-y-5">

              <p className="max-w-xl text-lg leading-[1.8] text-[#a5a7b5]">
                A Eleva Studio cria experiências digitais para negócios que
                querem construir uma presença profissional na internet.
              </p>

              <p className="max-w-xl text-lg leading-[1.8] text-[#a5a7b5]">
                Cada projeto é pensado para unir estética, estratégia e
                experiência do usuário, transformando uma simples página em
                uma ferramenta para apresentar, conectar e gerar novas
                oportunidades.
              </p>

            </div>

            {/* Princípios */}
            <div className="mt-14 max-w-lg border-t border-white/[0.08] pt-8">

              <div className="grid grid-cols-3 gap-6">

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#5b55ff]">
                    01
                  </p>

                  <p className="mt-3 text-sm font-medium text-white">
                    Estratégia
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-[#6f7282]">
                    Pensar antes de construir.
                  </p>
                </div>

                <div className="border-l border-white/[0.08] pl-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#5b55ff]">
                    02
                  </p>

                  <p className="mt-3 text-sm font-medium text-white">
                    Design
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-[#6f7282]">
                    Criar com propósito.
                  </p>
                </div>

                <div className="border-l border-white/[0.08] pl-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#5b55ff]">
                    03
                  </p>

                  <p className="mt-3 text-sm font-medium text-white">
                    Tecnologia
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-[#6f7282]">
                    Desenvolver com performance.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}