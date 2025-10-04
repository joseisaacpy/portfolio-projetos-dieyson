// Importa o objeto de projetos
import { projetos } from "@/data/projetos";

// Importa o card de projeto
import { CardProjeto } from "./CardProjeto";

export function Projetos() {
  return (
    // Section
    <section className="bg-gradient-to-b from-verde-padrao to-verde-escuro py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Projetos
        </h2>
        {/* Grid de projetos  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((projeto, index) => (
            <CardProjeto
              key={index}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              linkDemo={projeto.linkDemo}
              imagem={projeto.imagem}
              palavrasChave={projeto.palavrasChave}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
