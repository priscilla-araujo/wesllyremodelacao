import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const reasons = [
  "Cuidado com o meio ambiente",
  "Descarte consciente",
  "Equipa experiente e dedicada",
  "Atendimento rápido",
  "Agilidade no serviço",
  "Serviço em Lisboa e região metropolitana",
  "Dois camiões pequenos para fácil acesso",
  "Limpeza, recolha e apoio à obra"
];

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden bg-[#6f9194] py-20 text-white sm:py-24">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/gallery-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
            MOTIVOS PARA CONTRATAR AGORA A SUA RECOLHA DE ENTULHO
          </h2>
          <div className="mx-auto mt-6 h-1 w-40 bg-white/90" />
          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-white/95 sm:mt-8 sm:text-xl sm:leading-9">
            Se estava a procurar um serviço rápido e profissional para recolha de entulho,
            madeiras, limpeza de terrenos e apoio à obra, fale com quem entende do assunto.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-10 xl:gap-y-5">
          {reasons.map((reason, index) => (
            <div
              key={reason}
              className="section-sheen flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/6 p-4 text-base leading-7 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10 sm:text-lg sm:leading-8"
              style={{ animationDelay: `${index * 0.6}s` }}
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#0b7fd1]" />
              <span>{reason}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="w-full rounded-2xl bg-primary px-8 text-lg font-bold text-white hover:bg-[#03353a] sm:w-auto">
            <Link href="https://wa.me/351927060007" target="_blank" rel="noreferrer">
              PEÇA A SUA RECOLHA PELO WHATSAPP!
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-1 h-28 overflow-hidden">
        <svg viewBox="0 0 1440 220" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M0,40 C220,10 360,180 720,180 C1050,180 1220,40 1440,10 L1440,220 L0,220 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
