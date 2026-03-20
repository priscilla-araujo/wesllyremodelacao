import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services, siteConfig } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
      <div className="ambient-orb absolute left-[-8%] top-14 h-56 w-56 rounded-full bg-[#2f7fa3]/18 blur-3xl" />
      <div className="ambient-orb-delayed absolute right-[-10%] bottom-8 h-72 w-72 rounded-full bg-white/8 blur-3xl" />

      <div className="container relative">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="section-sheen rounded-[24px] bg-white/12 p-5 backdrop-blur-sm sm:rounded-[30px] sm:p-8">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                Fale com a equipa e peça o seu orçamento
              </h2>
              <p className="mt-5 text-base leading-8 text-white/92 sm:mt-6 sm:text-xl sm:leading-9">
                Atendimento para recolha de entulhos, madeiras, limpeza de terrenos, escavações,
                terraplanagem, remodelações e pinturas.
              </p>

              <div className="mt-6 space-y-4 text-base sm:mt-8 sm:space-y-5 sm:text-lg">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-bold">Telefone</p>
                    <p className="text-white/85">Disponível no contacto direto do site original</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-bold">WhatsApp</p>
                    <p className="text-white/85">Canal prioritário para atendimento rápido</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-bold">Área de serviço</p>
                    <p className="text-white/85">{siteConfig.region}</p>
                    <p className="text-white/70">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="relative overflow-hidden rounded-[26px] border border-white/60 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-5 text-slate-900 shadow-[0_30px_70px_rgba(0,0,0,0.18)] sm:rounded-[34px] sm:p-8">
            <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#044950_0%,#2f7fa3_50%,#8dbdd2_100%)]" />
            <div className="ambient-pulse absolute right-[-30px] top-[-30px] h-36 w-36 rounded-full bg-primary/5 blur-2xl" />

            <div className="relative">
              <div className="inline-flex rounded-full bg-primary/8 px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary sm:px-4 sm:text-sm sm:tracking-[0.18em]">
                Formulário de contacto
              </div>
              <h3 className="mt-4 text-3xl font-extrabold leading-tight text-slate-950 sm:mt-5 sm:text-4xl">
                Peça informações agora
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">
                Preencha os dados abaixo para deixar o contacto preparado. O formulário foi
                reorganizado para ficar mais claro, mais profissional e mais fácil de usar.
              </p>
            </div>

            <div className="relative mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="nome" className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  Nome
                </label>
                <Input id="nome" name="nome" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label htmlFor="telefone" className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  Telefone
                </label>
                <Input id="telefone" name="telefone" placeholder="+351" />
              </div>
            </div>

            <div className="relative mt-6 space-y-2">
              <label htmlFor="servico" className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                Serviço
              </label>
              <Select id="servico" name="servico" defaultValue="">
                <option value="" disabled>
                  Selecione o serviço
                </option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </Select>
            </div>

            <div className="relative mt-6 space-y-2">
              <label htmlFor="mensagem" className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                Mensagem
              </label>
              <Textarea
                id="mensagem"
                name="mensagem"
                placeholder="Descreva o tipo de serviço, o local e a urgência."
              />
            </div>

            <div className="relative mt-8 rounded-[22px] bg-primary/5 p-4 sm:rounded-[26px]">
              <p className="mb-4 text-sm leading-7 text-slate-600">
                Quanto mais detalhes enviar, mais fácil fica orientar o atendimento e preparar a
                resposta ideal.
              </p>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-2xl bg-primary text-lg font-bold text-white shadow-[0_16px_35px_rgba(4,73,80,0.28)] hover:bg-[#03353a]"
              >
                QUERO FALAR COM A EMPRESA
              </Button>
            </div>
          </form>
        </div>

        <footer className="mt-12 border-t border-white/20 pt-8 sm:mt-16">
          <div className="grid gap-6 rounded-[24px] bg-white/8 px-5 py-6 backdrop-blur-sm sm:gap-8 sm:rounded-[28px] sm:px-6 sm:py-7 md:grid-cols-[1.3fr_0.9fr_0.9fr] md:px-8">
            <div>
              <p className="text-xl font-bold text-white">{siteConfig.name}</p>
              <p className="mt-3 max-w-md text-base leading-7 text-white/78">
                Soluções para recolha de entulhos, limpeza e apoio à obra com atendimento rápido em
                Lisboa e região metropolitana.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/60">Atendimento</p>
              <div className="mt-4 space-y-3 text-base text-white/88">
                <p>{siteConfig.region}</p>
                <p>{siteConfig.address}</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/60">Links úteis</p>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="#servicos" className="text-base text-white/88 transition hover:text-white">
                  Ver serviços
                </Link>
                <Link href="#contacto" className="text-base text-white/88 transition hover:text-white">
                  Pedir orçamento
                </Link>
                <Link
                  href={siteConfig.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-base text-white/88 transition hover:text-white"
                >
                  Site original
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
            <p>{siteConfig.name}</p>
            <p>Lisboa e região metropolitana</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
