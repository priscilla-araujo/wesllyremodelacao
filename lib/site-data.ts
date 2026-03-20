import type { LucideIcon } from "lucide-react";
import {
  Axe,
  Brush,
  Hammer,
  LandPlot,
  Shovel,
  Trash2,
  Truck,
  Users
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type BenefitItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const siteConfig = {
  name: "Weslly Remodelações e Entulhos",
  shortName: "Weslly Entulhos",
  title: "Recolha de Entulhos em Lisboa | Weslly Remodelações e Entulhos",
  description:
    "Serviço rápido e profissional de recolha de entulho, madeiras, escavações, terraplanagem, limpeza de terrenos, remodelações e pinturas em Lisboa e região metropolitana.",
  url: "https://wesllyentulhos.pt/",
  region: "Lisboa e região metropolitana",
  address: "R. do Emb. 55, 1300-217 Lisboa",
  heroTitle: "Recolha de Entulhos em Lisboa",
  heroSubtitle:
    "Retiramos entulho, madeiras e resíduos de obra com rapidez, segurança e resposta profissional para clientes particulares, obras e remodelações em Lisboa.",
  video: "/video/weslly-hero.mp4",
  videoPoster: "/images/video-poster.jpg",
  heroImage: "/images/hero-truck.jpg",
  logo: "/images/logo.png"
};

export const services: ServiceItem[] = [
  {
    title: "Recolha de entulhos",
    description:
      "Removemos resíduos de obra com agilidade para libertar o espaço e manter a frente de trabalho organizada.",
    icon: Truck
  },
  {
    title: "Recolha de madeiras",
    description:
      "Recolha de madeiras e materiais volumosos com transporte rápido e operação adaptada a acessos difíceis.",
    icon: Trash2
  },
  {
    title: "Escavações",
    description:
      "Serviço de escavação com apoio técnico, segurança operacional e foco em produtividade no terreno.",
    icon: Shovel
  },
  {
    title: "Terraplanagem com escavadora",
    description:
      "Nivelamos e preparamos o terreno para deixar a obra pronta para avançar com segurança e eficiência.",
    icon: LandPlot
  },
  {
    title: "Limpeza de terrenos",
    description:
      "Limpeza completa de lotes e áreas exteriores para valorizar o espaço e acelerar o início do trabalho.",
    icon: Axe
  },
  {
    title: "Remodelações",
    description:
      "Apoiamos remodelações com equipa dedicada para executar o serviço com qualidade e ritmo profissional.",
    icon: Hammer
  },
  {
    title: "Pinturas",
    description:
      "Pinturas interiores e exteriores com acabamento limpo, apresentação cuidada e execução eficiente.",
    icon: Brush
  }
];

export const benefits: BenefitItem[] = [
  {
    title: "Atendimento rápido",
    description: "Respondemos rápido para evitar atrasos na obra e reduzir tempo parado.",
    icon: Truck
  },
  {
    title: "Equipa profissional",
    description: "Equipa experiente e dedicada para executar cada serviço com confiança.",
    icon: Users
  },
  {
    title: "Preços justos",
    description: "Orçamentos claros, competitivos e ajustados ao tipo de serviço.",
    icon: Trash2
  },
  {
    title: "Descarte autorizado",
    description: "Encaminhamento responsável dos resíduos para locais adequados.",
    icon: Shovel
  },
  {
    title: "Atendimento em Lisboa",
    description: "Cobertura em Lisboa e região metropolitana com viaturas preparadas para acesso urbano.",
    icon: LandPlot
  }
];

export const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Recolha de entulho com camião em Lisboa"
  },
  {
    src: "/images/gallery-2.png",
    alt: "Serviço de remoção de resíduos de construção"
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Limpeza e transporte de entulhos"
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Terreno preparado para limpeza e terraplanagem"
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Entulho recolhido em ambiente urbano"
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Equipa a realizar recolha e apoio a obra"
  }
];
