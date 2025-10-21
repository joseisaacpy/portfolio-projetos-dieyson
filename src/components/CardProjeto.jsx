"use client";
// Importa image
import Image from "next/image";
// Importa imagem padrão
import biFallBack from "../../public/images/sem-bi.webp";

export function CardProjeto({
  titulo,
  descricao,
  linkDemo,
  imagem,
  palavrasChave,
  unico = false,
}) {
  return (
    // Div do card
    <div
      data-aos="fade-up"
      className={`bg-white rounded-xl shadow-md hover:shadow-lg flex flex-col ${
        unico ? "justify-baseline" : "justify-between h-full"
      }  gap-1 transition-all ease-in-out duration-300 hover:scale-95`}
    >
      {/* Imagem do projeto e se não tiver imagem, mostra uma imagem padrão */}
      <Image
        src={imagem || biFallBack}
        onClick={() => {
          if (imagem) {
            window.open(linkDemo, "_blank");
          }
        }}
        alt="Imagem do projeto"
        className={`rounded-t-xl w-full h-50 object-cover ${
          imagem ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        width={500}
        height={500}
      />
      {/* Div dos textos */}
      <div className="p-2">
        {/* Textos */}
        <h2 className="text-2xl font-bold">{titulo}</h2>
        <p>{descricao}</p>
        {/* Lista de palavras chave */}
        <details className="mt-3 group">
          <summary className="cursor-pointer text-verde-escuro font-semibold flex items-center justify-between select-none border-t border-gray-200 pt-2 transition-all hover:text-verde-padrao">
            Explorações Possíveis
            <span className="transition-all group-open:rotate-180 text-gray-400">
              ▼
            </span>
          </summary>
          <ul className="flex flex-wrap gap-2">
            {palavrasChave.map((palavra, index) => (
              <li
                key={index}
                className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
              >
                {palavra}
              </li>
            ))}
          </ul>
        </details>
      </div>
      {/* Div de links */}
      <div className="flex flex-col md:flex-row gap-3 px-2 pb-2">
        {/* Link para demo do projeto */}
        <a
          href={linkDemo ? linkDemo : ""}
          title={
            linkDemo ? "Demonstração do projeto" : "Projeto sem demonstração"
          }
          className={`flex-1 text-center border border-verde-escuro text-verde-escuro font-medium py-2 rounded-lg hover:bg-verde-escuro hover:text-white transition-all ${
            linkDemo
              ? "bg-transparent "
              : "bg-gray-500 pointer-events-none opacity-50 text-white"
          }`}
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
