"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contacto", href: "#contacto" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container px-2 pt-3 sm:px-4 sm:pt-4">
        <div className="rounded-[26px] border border-white/20 bg-black/15 px-5 py-0 backdrop-blur-md sm:rounded-[30px] sm:px-5 sm:py-0 lg:rounded-[34px] lg:px-8 lg:py-0">
          <div className="flex items-center justify-between gap-3 sm:gap-5 lg:gap-7">
            <Link href="/" className="flex shrink-0 items-center">
              <div className="relative h-[5.8rem] w-52 sm:h-[82px] sm:w-60 lg:h-[118px] lg:w-[27rem]">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.shortName}
                  fill
                  className="object-contain object-left [filter:drop-shadow(0_8px_18px_rgba(0,0,0,0.22))]"
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 240px, 432px"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[0.96rem] font-semibold uppercase tracking-[0.16em] text-white transition hover:text-white/80"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button asChild size="lg" className="rounded-2xl bg-[#2f7fa3] px-7 text-base text-white hover:bg-[#286d8c]">
                <Link href="https://wa.me/351927060007" target="_blank" rel="noreferrer">
                  Peça no WhatsApp
                </Link>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-14 w-14 items-center justify-center rounded-[1.35rem] border border-white/20 text-white sm:h-12 sm:w-12 sm:rounded-2xl lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-5.5 w-5.5" />
            </button>
          </div>

          <div className={cn("overflow-hidden transition-all lg:hidden", open ? "max-h-80 pt-4" : "max-h-0")}>
            <div className="space-y-3 border-t border-white/15 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-semibold uppercase tracking-[0.14em] text-white sm:text-base sm:tracking-[0.16em]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="lg" className="w-full rounded-2xl bg-[#2f7fa3] text-white hover:bg-[#286d8c]">
                <Link
                  href="https://wa.me/351927060007"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Peça no WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
