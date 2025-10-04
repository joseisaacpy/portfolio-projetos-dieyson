// Importa imagens
import fundoTec from "../../public/images/fundo-parabolic-rectangle.svg";

// Importa icons
import {
  HiOutlineChartBar,
  HiOutlineChartPie,
  HiOutlineChartSquareBar,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export function Sobre() {
  return (
    // Seção Sobre com fundo
    <section
      className="min-h-screen bg-center bg-cover flex flex-col justify-center items-center gap-4"
      style={{ backgroundImage: `url(${fundoTec.src})` }}
    >
      {/* Título */}
      <h2 className="text-white text-3xl md:text-5xl text-center max-w-3xl md:max-w-4xl font-bold">
        Nosso propósito é transformar dados em insights estratégicos
      </h2>

      {/* Descrição */}
      <p className="text-gray-200 max-w-3xl text-center">
        Criamos dashboards, planilhas e análises que apoiam decisões
        estratégicas e geram valor real para o seu negócio.
      </p>

      {/* Benefícios / diferenciais */}
      <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-3 my-4">
        <li className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
          <HiOutlineChartBar className="text-verde-escuro text-2xl" />{" "}
          Dashboards BI’s claros e interativos
        </li>
        <li className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
          <HiOutlineChartSquareBar className="text-verde-escuro text-2xl" />{" "}
          Análises de dados precisas para decisões assertivas
        </li>
        <li className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
          <HiOutlineChartPie className="text-verde-escuro text-2xl" />{" "}
          Transformamos dados em insights acionáveis
        </li>
      </ul>
      {/* Botão Call to Action */}
      <a
        href="https://wa.me/558699525475"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-bounce flex items-center justify-center gap-2 bg-verde-escuro/50 text-white font-bold px-6 py-3 rounded-lg hover:bg-verde-escuro transition-all"
      >
        <FaWhatsapp className="text-white text-2xl" /> Entre em contato
      </a>
    </section>
  );
}
