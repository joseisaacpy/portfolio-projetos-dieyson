"use client";

// Importa fundo
import fundoPenta from "../../public/images/fundo-parabolic-pentagon.svg";

// Importa icons
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Contato() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-cover text-white px-6"
      style={{ backgroundImage: `url(${fundoPenta.src})` }}
    >
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Fale comigo
      </h1>
      <p className="text-center mb-12 max-w-md">
        Escolha o canal que preferir e entre em contato. Respondo o mais rápido
        possível.
      </p>

      {/* Ícones de contato */}
      <div className="flex flex-col gap-6 md:flex-row md:gap-12">
        {/* WhatsApp */}
        <a
          href="https://wa.me/558699525475"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg font-medium bg-cinza-medio/30 px-4 py-2 rounded-lg hover:text-green-500 transition-all"
        >
          <FaWhatsapp className="text-3xl text-green-500" />
          <span>WhatsApp</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/insight.dataanalisys"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg font-medium bg-cinza-medio/30 px-4 py-2 rounded-lg hover:text-pink-500 transition-all"
        >
          <FaInstagram className="text-3xl text-pink-500" />
          <span>Instagram</span>
        </a>

        {/* Email */}
        <a className="flex items-center gap-3 text-lg font-medium bg-cinza-medio/30 px-4 py-2 rounded-lg hover:text-blue-400 transition-all">
          <FaEnvelope className="text-3xl text-blue-400" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}
