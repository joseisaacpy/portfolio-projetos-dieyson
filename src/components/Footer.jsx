import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-verde-escuro py-6 flex flex-col items-center text-center text-gray-200">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-1">
        <p className="text-sm">
          Insight Data Analysis | Todos os direitos reservados
        </p>
        <p className="text-sm">
          Desenvolvido por{" "}
          <Link
            href="https://github.com/joseisaacpy"
            className="underline hover:text-white transition-colors"
            target="_blank"
          >
            José Isaac
          </Link>
        </p>
      </div>
    </footer>
  );
}
