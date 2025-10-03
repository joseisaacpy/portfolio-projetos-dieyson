// Importa image
import Image from "next/image";

export function CardProjeto({ titulo, descricao, linkDemo, imagem }) {
  return (
    // Div do card
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg flex flex-col gap-1 transition-all ease-in-out duration-300 hover:scale-95">
      {/* Imagem do projeto */}
      <img src={imagem} alt="Imagem do projeto" className="rounded-t-xl" />
      {/* Div dos textos */}
      <div className="p-2">
        {/* Textos */}
        <h2 className="text-2xl font-bold">{titulo}</h2>
        <p>{descricao}</p>
      </div>
      {/* Div de links */}
      <div className="flex flex-col md:flex-row gap-3 px-2 pb-2">
        {/* Link para demo do projeto */}
        <a
          href={linkDemo}
          className="flex-1 text-center bg-transparent border border-verde-escuro text-verde-escuro font-medium py-2 rounded-lg hover:bg-verde-escuro hover:text-white transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        {/* Link dinâmico para adquirir o projeto pelo whatsapp */}
        <a
          href={`https://wa.me/558699525475?text=${encodeURIComponent(
            `Olá, visitei seu portfólio e gostaria de adquirir o projeto sobre ${titulo}`
          )}`}
          className="flex-1 text-center bg-verde-escuro text-white font-medium py-2 rounded-lg hover:bg-verde-escuro/80 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adquirir
        </a>
      </div>
    </div>
  );
}
