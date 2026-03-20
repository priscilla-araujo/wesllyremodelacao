"use client";

import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { galleryImages } from "@/lib/site-data";

export function GallerySection() {
  return (
    <section id="galeria" className="bg-white py-20 sm:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Trabalhos Reais"
            title="Imagens reais do serviço executado"
            description="As fotos abaixo vêm do site original da empresa e ajudam a mostrar o tipo de serviço realizado no dia a dia."
            center
          />
        </Reveal>
        <div className="mx-auto mt-5 h-1 w-40 bg-primary" />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={0.08 * index}>
              <div className="group overflow-hidden rounded-[22px] bg-[#f7f7f7] shadow-sm transition hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(15,23,42,0.14)] sm:rounded-[26px]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(2,6,23,0.55)_100%)] opacity-75 transition group-hover:opacity-95" />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-sm font-semibold text-slate-800 transition group-hover:translate-x-1 sm:text-base">
                    {image.alt}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
