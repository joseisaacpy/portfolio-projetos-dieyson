"use client";

// Importa o AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Importa Hooks
import { useEffect } from "react";

export function Manutencao() {
  useEffect(() => {
    // Configura o AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-black to-verde-padrao text-white text-center p-6">
      <h1 data-aos="fade-right" className="text-3xl md:text-6xl font-bold mb-4">
        🚧 Em manutenção 🚧
      </h1>
      <p data-aos="fade-left" className="text-lg md:text-2xl max-w-md">
        Estamos atualizando o site para oferecer uma experiência ainda melhor.
        Volte em breve! 💚
      </p>
    </div>
  );
}
