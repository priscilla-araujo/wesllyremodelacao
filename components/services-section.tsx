import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="ambient-orb absolute left-[-8%] top-28 h-60 w-60 rounded-full bg-[#2f7fa3]/10 blur-3xl" />
      <div className="ambient-orb-delayed absolute right-[-10%] bottom-10 h-72 w-72 rounded-full bg-[#044950]/8 blur-3xl" />

      <div className="container relative">
        <Reveal>
          <SectionHeading
            eyebrow="Vantagens Para Você"
            title="Serviços essenciais para limpar, organizar e fazer a obra avançar"
            description="Utilizamos as informações do site original da empresa e reorganizamos tudo num formato mais direto, comercial e fácil de perceber."
            center
          />
        </Reveal>

        <div className="mx-auto mt-5 h-1 w-40 bg-primary" />

        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 4).map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={0.08 * index}>
                <div className="rounded-[24px] border border-slate-200/80 bg-white p-5 text-center shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:rounded-[28px] sm:p-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary/15 text-primary sm:h-20 sm:w-20">
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-tight text-slate-800 sm:mt-6 sm:text-2xl">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div id="vantagens" className="mt-10 grid gap-5 sm:mt-14 sm:gap-8 md:grid-cols-3">
          {services.slice(4).map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={0.12 * index}>
                <div className="section-sheen rounded-[24px] bg-[#f7f7f7] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(15,23,42,0.12)] sm:rounded-[28px] sm:p-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white sm:h-16 sm:w-16">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 text-center sm:mt-14">
          <Button asChild size="lg" className="w-full rounded-2xl bg-primary px-8 text-lg font-bold text-white hover:bg-[#03353a] sm:w-auto">
            <Link href="https://wa.me/351927060007" target="_blank" rel="noreferrer">
              PEÇA A SUA RECOLHA PELO WHATSAPP!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
