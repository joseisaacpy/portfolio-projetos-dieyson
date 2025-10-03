"use client";

// Importa Element do Scrool
import { Element } from "react-scroll";

// Importa os componetes
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Projetos } from "@/components/Projetos";
import { Footer } from "@/components/Footer";
import Loading from "@/components/Loading";

// Página Completa com seções/componentes
export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      {/* <Element name="header">
        <Header />
      </Element> */}

      {/* Hero */}
      {/* <Element name="home">
        <Hero />
      </Element> */}

      {/* Sobre */}
      {/* <Element name="sobre">
        <Sobre />
      </Element> */}

      {/* Projetos */}
      {/* <Element name="projetos">
        <Projetos />
      </Element> */}

      {/* Footer */}
      {/* <Footer /> */}

      <Loading />
    </div>
  );
}
