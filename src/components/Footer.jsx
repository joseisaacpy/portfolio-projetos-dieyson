// Importa Link
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-verde-escuro py-2 flex flex-col text-center text-white">
      <p className="text-sm">
        Insight Data Analisys | Todos os direitos reservados
      </p>
      <p className="text-sm">
        Desenvolvido por{" "}
        <Link href="https://github.com/joseisaacpy" className="underline">
          José Isaac
        </Link>
      </p>
    </footer>
  );
}
