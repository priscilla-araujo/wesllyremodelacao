import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/351927060007"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/20 transition hover:scale-105"
      aria-label="Abrir conversa no WhatsApp"
    >
      <MessageCircleMore className="h-7 w-7" />
    </Link>
  );
}
