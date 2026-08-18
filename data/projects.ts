export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: "nora-odontologia",
    name: "NORA Odontologia",
    category: "Odontologia",
    description:
      "Landing page desenvolvida para transmitir confiança, sofisticação e acolhimento.",
    image: "/projects/nora.jpg",
    url: "https://nora-odontologia.vercel.app",
  },

  {
    id: "verion-motors",
    name: "Verion Motors",
    category: "Automotivo",
    description:
      "Experiência digital desenvolvida para uma concessionária de veículos.",
    image: "/projects/verion.jpg",
    url: "https://verion-motors.vercel.app",
  },

  {
    id: "seven-academia",
    name: "Seven Academia",
    category: "Fitness",
    description:
      "Landing page moderna criada para apresentar uma academia de forma forte e profissional.",
    image: "/projects/seven.jpg",
    url: "https://seven-academia.vercel.app",
  },

  {
    id: "aurea-imoveis",
    name: "Áurea Imóveis",
    category: "Imobiliário",
    description:
      "Experiência digital sofisticada para uma imobiliária focada em imóveis de alto padrão.",
    image: "/projects/aurea.jpg",
    url: "https://aurea-imoveis-six.vercel.app",
  },
];