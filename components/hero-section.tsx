import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0b6d75_0%,#044950_52%,#03353a_100%)] pt-24 text-white sm:pt-32 lg:pt-32">
      <div className="absolute inset-0">
        <div className="ambient-grid absolute inset-x-0 top-0 h-[72%] opacity-20 sm:opacity-30" />
        <div className="ambient-orb absolute left-[-10%] top-[12%] h-48 w-48 rounded-full bg-[#2f7fa3]/18 blur-3xl sm:h-72 sm:w-72" />
        <div className="ambient-orb-delayed absolute right-[6%] top-[10%] h-32 w-32 rounded-full bg-white/10 blur-3xl sm:h-48 sm:w-48" />
        <div className="absolute right-[-8%] top-0 h-full w-[40%] bg-[linear-gradient(180deg,rgba(47,127,163,0.18),rgba(4,73,80,0.02))]" />
        <div className="ambient-pulse absolute bottom-0 left-0 right-0 h-24 bg-[radial-gradient(ellipse_at_center,rgba(47,127,163,0.22),transparent_70%)] sm:h-28" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/20" />
      </div>

      <div className="container relative py-8 sm:py-16 lg:py-12">
        <div className="relative lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10">
          <div className="absolute inset-x-0 bottom-0 top-24 overflow-hidden rounded-[28px] opacity-30 sm:hidden">
            <Image
              src="/images/gallery-2.png"
              alt="Camião de recolha de entulhos"
              fill
              className="scale-[1.62] object-contain object-bottom"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,73,80,0.2)_0%,rgba(4,73,80,0.58)_45%,rgba(3,53,58,0.82)_100%)]" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-md flex-col items-center px-3 text-center lg:mx-0 lg:max-w-2xl lg:items-start lg:px-0 lg:text-left lg:ml-[124px]">
            <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[0.68rem] leading-tight backdrop-blur sm:px-4 sm:text-sm lg:justify-start">
              <MapPin className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              Atendimento na Margem Sul, Margem Norte e Lisboa
            </div>

            <h1 className="mt-4 max-w-[10ch] text-[2.82rem] font-extrabold leading-[0.92] tracking-[-0.03em] sm:mt-6 sm:max-w-[12ch] sm:text-[3.5rem] lg:max-w-[9ch] lg:text-[3.45rem] lg:leading-[0.92] xl:max-w-[10ch] xl:text-[3.9rem]">
              REMODELAÇÃO E RECOLHA DE ENTULHO COM RÁPIDO ATENDIMENTO EM LISBOA.
            </h1>

            <p className="mt-4 max-w-[20rem] text-[1rem] leading-7 text-white/92 sm:mt-6 sm:max-w-xl sm:text-[1.45rem] sm:leading-8 lg:max-w-[29rem] lg:text-[1.08rem] lg:leading-7">
              {siteConfig.heroSubtitle}
            </p>

            <div className="mt-6 flex w-full max-w-[20rem] flex-col gap-2.5 sm:mt-9 sm:max-w-none sm:flex-row sm:gap-4 lg:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full rounded-2xl bg-[#2f7fa3] px-4 text-[0.82rem] text-white shadow-[0_18px_38px_rgba(47,127,163,0.32)] transition hover:-translate-y-1 hover:bg-[#286d8c] sm:w-auto sm:px-8 sm:text-lg"
              >
                <Link href="https://wa.me/351927060007" target="_blank" rel="noreferrer">
                  PEÇA PELO WHATSAPP
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full rounded-2xl border-white/30 bg-white/10 text-[0.82rem] text-white transition hover:-translate-y-1 hover:bg-white/15 sm:w-auto sm:text-lg"
              >
                <Link href="#video">Ver vídeo</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[58rem] lg:block">
            <div className="relative h-[540px]">
              <div className="ambient-pulse absolute right-4 top-6 h-40 w-40 rounded-full bg-[#2f7fa3]/22 blur-3xl sm:right-6 sm:top-8 sm:h-80 sm:w-80 lg:h-56 lg:w-56" />
              <div className="absolute bottom-10 right-8 h-20 w-[72%] rounded-full bg-black/30 blur-2xl" />
              <div className="absolute right-0 top-16 h-[260px] w-[80%] rounded-[48px] bg-white/8 backdrop-blur-[2px]" />
              <div className="absolute -right-10 -top-2 h-[525px] w-[112%]">
                <Image
                  src="/images/gallery-2.png"
                  alt="Camião de recolha de entulhos"
                  fill
                  className="object-contain object-right-bottom drop-shadow-[0_28px_45px_rgba(0,0,0,0.28)]"
                  sizes="54vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
