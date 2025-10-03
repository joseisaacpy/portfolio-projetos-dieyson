"use client";

// Importa Element do Scrool
import { Element } from "react-scroll";

// Importa os componetes
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Página Completa com seções/componentes
export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Element name="header">
        <Header />
      </Element>

      {/* Hero */}
      <Element name="home">
        <Hero />
      </Element>

      {/* Sobre */}
      <Element name="sobre"></Element>

      {/* Projetos */}
      <Element name="projetos"></Element>

      {/* Footer */}
      <Footer />
    </div>
  );
}
