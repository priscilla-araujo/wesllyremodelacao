import Link from "next/link";

import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Que serviços a empresa realiza?",
    answer:
      "Recolha de entulhos, recolha de madeiras, escavações, terraplanagem com escavadora, limpeza de terrenos, remodelações e pinturas."
  },
  {
    question: "A empresa atende em que zona?",
    answer:
      "O atendimento é feito em Lisboa e região metropolitana, conforme indicado no conteúdo original da empresa."
  },
  {
    question: "A empresa faz recolha em locais de acesso mais difícil?",
    answer:
      "Sim. Um dos diferenciais comunicados é o uso de dois camiões pequenos para facilitar o acesso."
  },
  {
    question: "Os resíduos são descartados de forma adequada?",
    answer:
      "Sim. A empresa destaca a dispensa em lugares adequados e o encaminhamento responsável dos resíduos."
  }
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="container max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Perguntas Frequentes</p>
          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Tire as suas dúvidas</h2>
          <div className="mx-auto mt-5 h-1 w-40 bg-primary" />
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="rounded-[24px] bg-[#f1f1f1] p-6">
              <summary className="cursor-pointer list-none text-xl font-bold text-primary">
                {item.question}
              </summary>
              <p className="mt-4 text-lg leading-8 text-slate-700">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-2xl bg-primary px-8 text-lg font-bold text-white hover:bg-[#03353a]">
            <Link href="https://wa.me/351927060007" target="_blank" rel="noreferrer">
              FALAR AGORA PELO WHATSAPP
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
