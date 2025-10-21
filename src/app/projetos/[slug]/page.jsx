// Importa image
import Image from "next/image";
// Importa imagem padrão
import biFallBack from "@/../public/images/sem-bi.webp";

import { CardProjeto } from "@/components/CardProjeto";

// importa os projetos
import { projetos } from "@/data/projetos";

// importa o link
import Link from "next/link";

export default function ProjetoPage({ params }) {
  // Pega o slug do projeto
  const { slug } = params;

  //   Pega o projeto com o slug correspondente
  const projeto = projetos.find((projeto) => projeto.slug === slug);

  if (!projeto) {
    return (
      <section className="bg-verde-padrao h-screen w-screen flex items-center justify-center flex-col text-center">
        {/* Título */}
        <h1 className="text-4xl font-bold">Ops, projeto não encontrado!</h1>
        {/* Botão de voltar */}
        <button className="bg-verde-escuro text-white px-6 py-3 rounded-md mt-4">
          <Link href="/#projetos">Voltar</Link>
        </button>
      </section>
    );
  }
  return (
    <section className="bg-verde-padrao h-screen w-screen flex flex-col gap-4 items-center justify-center px-2">
      <CardProjeto
        key={projeto.slug}
        unico={true}
        titulo={projeto.titulo}
        descricao={projeto.descricao}
        linkDemo={projeto.linkDemo}
        imagem={projeto.imagem}
        palavrasChave={projeto.palavrasChave}
      />
      {/* Botão de voltar */}
      {/* Botão de voltar */}
      <button className=" bg-verde-escuro text-white px-6 py-3 rounded-md">
        <Link href="/#projetos">Voltar</Link>
      </button>
    </section>
  );
}
