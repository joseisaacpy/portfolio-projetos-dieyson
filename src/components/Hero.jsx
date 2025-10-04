import { FaHandPointDown } from "react-icons/fa";

import { Link } from "react-scroll";

export function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center bg-black">
      {/* Textos */}
      <h1 className="text-3xl md:text-5xl max-w-3xl text-center font-bold text-white">
        Transformamos dados em decisões inteligentes
      </h1>
      {/* Div de botões */}
      <Link
        to="sobre"
        smooth={true}
        duration={500}
        className="absolute bottom-10"
      >
        <FaHandPointDown className="text-white text-4xl cursor-pointer font-bold transition-all animate-bounce" />
      </Link>
    </section>
  );
}
