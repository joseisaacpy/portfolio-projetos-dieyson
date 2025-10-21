// Importa icons
import { FaHandPointDown } from "react-icons/fa";

// Importa Link
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center  bg-linear-to-b from-black via-verde-escuro/50 to-black">
      {/* Textos */}
      <h1 className="animate-wiggle text-3xl text-center font-bold leading-snug text-white md:text-5xl max-w-3xl">
        Transformamos <span className="text-verde-padrao">dados</span> em
        decisões inteligentes
      </h1>
      {/* Link com icon para sobre */}
      <Link
        to="sobre"
        smooth={true}
        duration={500}
        offset={-50}
        className="absolute bottom-40 md:bottom-10"
      >
        {/* Mãozinha */}
        <FaHandPointDown className="text-white text-4xl cursor-pointer font-bold transition-all animate-bounce" />
      </Link>
    </section>
  );
}
