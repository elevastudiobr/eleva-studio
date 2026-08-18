"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.04] bg-[#050817]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">

        {/* ==================================================
            LOGO
        ================================================== */}

        <Link
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="flex items-center"
        >
          <img
            src="/images/logo-eleva.png"
            alt="Eleva Studio"
            className="h-auto w-[38px] object-contain"
          />
        </Link>

        {/* ==================================================
            DESKTOP NAV
        ================================================== */}

        <nav className="hidden items-center gap-8 md:flex">

          {/* Início */}
          <button
            type="button"
            onClick={scrollToTop}
            className="text-sm text-[#a5a7b5] transition-colors duration-300 hover:text-white"
          >
            Início
          </button>

          {/* Projetos */}
          <button
            type="button"
            onClick={() => scrollToSection("projetos")}
            className="text-sm text-[#a5a7b5] transition-colors duration-300 hover:text-white"
          >
            Projetos
          </button>

          {/* Sobre */}
          <button
            type="button"
            onClick={() => scrollToSection("sobre")}
            className="text-sm text-[#a5a7b5] transition-colors duration-300 hover:text-white"
          >
            Sobre
          </button>

        </nav>

        {/* ==================================================
            CTA DESKTOP
        ================================================== */}

        <button
          type="button"
          onClick={() => scrollToSection("projetos")}
          className="
            group
            relative
            hidden
            items-center
            gap-3
            overflow-hidden
            rounded-full
            border
            border-[#5b55ff]/50
            bg-[#5b55ff]
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            shadow-[0_0_25px_rgba(91,85,255,0.15)]
            transition-all
            duration-500
            hover:-translate-y-0.5
            hover:border-[#706bff]
            hover:bg-[#706bff]
            hover:shadow-[0_0_35px_rgba(91,85,255,0.3)]
            md:flex
          "
        >
          {/* Brilho interno */}

          <span
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-r
              from-white/10
              via-transparent
              to-transparent
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* Texto */}

          <span className="relative z-10">
            Ver projetos
          </span>

          {/* Ícone */}

          <span
            className="
              relative
              z-10
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              bg-white/10
              transition-all
              duration-500
              group-hover:bg-white/15
            "
          >
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-500
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </span>
        </button>

        {/* ==================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
            text-white
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-white/20
            hover:bg-white/[0.09]
            md:hidden
          "
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <X size={19} strokeWidth={1.8} />
          ) : (
            <Menu size={19} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* ==================================================
          MOBILE MENU
      ================================================== */}

      {menuOpen && (
        <div
          className="
            mx-4
            mb-4
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-[#070b19]/95
            p-6
            shadow-2xl
            backdrop-blur-xl
            md:hidden
          "
        >
          <nav className="flex flex-col gap-5">

            {/* Início */}

            <button
              type="button"
              onClick={scrollToTop}
              className="
                text-left
                text-sm
                text-[#a5a7b5]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Início
            </button>

            {/* Projetos */}

            <button
              type="button"
              onClick={() => scrollToSection("projetos")}
              className="
                text-left
                text-sm
                text-[#a5a7b5]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Projetos
            </button>

            {/* Sobre */}

            <button
              type="button"
              onClick={() => scrollToSection("sobre")}
              className="
                text-left
                text-sm
                text-[#a5a7b5]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Sobre
            </button>

            {/* CTA Mobile */}

            <button
              type="button"
              onClick={() => scrollToSection("projetos")}
              className="
                group
                relative
                mt-2
                flex
                w-full
                items-center
                justify-between
                overflow-hidden
                rounded-full
                border
                border-[#5b55ff]/50
                bg-[#5b55ff]
                px-5
                py-3
                text-sm
                font-medium
                text-white
                shadow-[0_0_25px_rgba(91,85,255,0.15)]
                transition-all
                duration-500
                hover:bg-[#706bff]
              "
            >
              {/* Brilho */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-white/10
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <span className="relative z-10">
                Ver projetos
              </span>

              <span
                className="
                  relative
                  z-10
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                "
              >
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                />
              </span>
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}