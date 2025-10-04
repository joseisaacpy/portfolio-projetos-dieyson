"use client";

// Importa Element do Scrool
import { Element } from "react-scroll";

// Importa os componetes
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Projetos } from "@/components/Projetos";
import { Footer } from "@/components/Footer";

// Importa icon do whatsapp
import { FaWhatsapp } from "react-icons/fa";

// Importa Link
import Link from "next/link";

// Página Completa com seções/componentes
export default function Page() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Header */}
      <Element name="header">
        <Header />
      </Element>

      {/* Hero */}
      <Element name="home">
        <Hero />
      </Element>

      {/* Sobre */}
      <Element name="sobre">
        <Sobre />
      </Element>

      {/* Projetos */}
      <Element name="projetos">
        <Projetos />
      </Element>

      {/* Footer */}
      <Footer />

      {/* Link com icon para o whatsapp */}
      <Link
        href="https://wa.me/558699525475"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-verde-escuro p-2 rounded-full text-white simple-hover"
      >
        <FaWhatsapp className="text-3xl" />
      </Link>
    </div>
  );
}
