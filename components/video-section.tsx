import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function VideoSection() {
  return (
    <section id="video" className="relative overflow-hidden py-20 text-white sm:py-28">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={siteConfig.videoPoster}
          className="h-full w-full object-cover"
        >
          <source src={siteConfig.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,20,23,0.82)_0%,rgba(4,20,23,0.58)_42%,rgba(4,20,23,0.7)_100%)]" />
      </div>

      <div className="container relative">
        <div className="max-w-2xl">
          <Reveal>
            <div>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                AINDA ESTÁ COM DÚVIDAS?
              </h2>
              <div className="mt-5 h-1 w-40 bg-white" />
              <p className="mt-6 max-w-xl text-base leading-8 text-white/95 sm:mt-8 sm:text-xl sm:leading-9">
                Não perca tempo e veja a empresa em ação. O vídeo ajuda a perceber melhor o tipo
                de trabalho e a forma como a equipa atua no terreno.
              </p>
              <div className="mt-8 sm:mt-10">
                <Button asChild size="lg" className="w-full rounded-2xl bg-primary px-8 text-lg font-bold text-white hover:bg-[#03353a] sm:w-auto">
                  <Link href="#contacto">QUERO FALAR COM A EMPRESA!</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-1 h-16 overflow-hidden sm:h-24">
        <svg viewBox="0 0 1440 220" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M0,18 C260,100 560,110 890,68 C1120,38 1280,8 1440,0 L1440,220 L0,220 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
