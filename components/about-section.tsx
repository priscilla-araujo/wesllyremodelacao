import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery-3.jpg"
          alt="Serviço de recolha em operação"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="ambient-orb absolute left-[8%] top-[14%] h-44 w-44 rounded-full bg-[#2f7fa3]/20 blur-3xl" />
        <div className="ambient-orb-delayed absolute right-[6%] bottom-[12%] h-60 w-60 rounded-full bg-[#2f7fa3]/18 blur-3xl" />
      </div>

      <div className="container relative text-center">
        <h2 className="mx-auto max-w-5xl text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          SERVIÇO PROFISSIONAL DE RECOLHA DE ENTULHOS, MADEIRAS E APOIO À OBRA EM LISBOA.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/90 sm:mt-8 sm:text-xl sm:leading-9">
          A Weslly Remodelações e Entulhos trabalha com foco em rapidez, organização do espaço,
          segurança no serviço e resposta prática para clientes particulares e empresas.
        </p>
        <div className="mt-8 sm:mt-10">
          <Button
            asChild
            size="lg"
            className="w-full rounded-2xl bg-[#2f7fa3] px-8 text-lg font-bold text-white hover:bg-[#286d8c] sm:w-auto"
          >
            <Link href="https://wa.me/351927060007" target="_blank" rel="noreferrer">
              PEÇA A SUA RECOLHA PELO WHATSAPP!
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-sm font-medium text-white/80 sm:mt-8 sm:text-base">{siteConfig.address}</p>
      </div>
    </section>
  );
}
