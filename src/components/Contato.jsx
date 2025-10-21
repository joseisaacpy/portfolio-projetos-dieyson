"use client";

// Importa fundo
import fundoPenta from "../../public/images/fundo-parabolic-pentagon.svg";

// Importa toastify
import { toast } from "react-toastify";
// Importa icons
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Contato() {
  // Função para copiar o e-mail
  function conpiarEmail(email) {
    if (!email || email === "") {
      toast.error("E-mail ainda não cadastrado.");
    } else {
      navigator.clipboard.writeText(email);
      toast.success("E-mail copiado com sucesso!");
    }
  }
  // Redenriza o componente
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-cover text-white px-6"
      style={{ backgroundImage: `url(${fundoPenta.src})` }}
    >
      {/* Título */}
      <h1
        data-aos="fade-right"
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        Fale conosco!
      </h1>
      <p data-aos="fade-left" className="text-center text-lg mb-12 max-w-md">
        Escolha o canal que preferir e entre em contato. Respondo o mais rápido
        possível.
      </p>

      {/* Ícones de contato */}
      <div
        data-aos="fade-up"
        className="flex flex-col gap-6 md:flex-row md:gap-12"
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/558699525475"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-xl justify-center font-medium bg-cinza-medio/30 px-4 py-2 rounded-lg hover:text-green-500 transition-all"
        >
          <FaWhatsapp className="text-3xl text-green-500" />
          <span>WhatsApp</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/insight.dataanalisys"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-xl justify-center font-medium bg-cinza-medio/30 px-4 py-2 rounded-lg hover:text-pink-500 transition-all"
        >
          <FaInstagram className="text-3xl text-pink-500" />
          <span>Instagram</span>
        </a>

        {/* Email */}
        <a
          className="flex items-center gap-3 cursor-pointer text-xl justify-center font-medium bg-cinza-medio/30 px-4 py-2 rounded-lg hover:text-blue-400 transition-all"
          onClick={() => conpiarEmail("insigth.contatoadm@gmail.com")}
        >
          <FaEnvelope className="text-3xl text-blue-400" />
          <span>E-mail</span>
        </a>
      </div>
    </section>
  );
}
