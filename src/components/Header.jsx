"use client";
// Importa Hooks
import { useState, useEffect } from "react";
// Importa image
import Image from "next/image";
// Importa imagem da logo
import elementoLogo from "../../public/images/logo-completa-sem-fundo-clara.webp";
// Importa Link
import { Link } from "react-scroll";
// Importa icon
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";

export function Header() {
  // Armazena os links e seu redirecionamento
  const menuLinks = [
    {
      to: "home",
      label: "Home",
    },
    {
      to: "sobre",
      label: "Sobre",
    },
    {
      to: "projetos",
      label: "Projetos",
    },
    {
      to: "contato",
      label: "Contato",
    },
  ];

  // Estado para controlar a aparição do menu
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect para controlar o scroll
  useEffect(() => {
    // Se menu estiver aberto, ocultar o scroll
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
      // Se menu estiver fechado, mostrar o scroll
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    //
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    // Header
    <header>
      {/* Nav */}
      <nav className="z-10 fixed w-full flex justify-around items-center bg-verde-escuro py-4">
        {/* Logo */}
        <Link to="home" smooth={true} duration={600}>
          <Image
            src={elementoLogo}
            alt="Logo"
            width={150}
            priority
            className="cursor-pointer simple-hover"
          />
        </Link>
        {/* Ul */}
        <ul className="hidden md:flex gap-4">
          {/* Redenriza os links com map */}
          {menuLinks.map((link) => {
            return (
              <li key={link.label}>
                {/* Mudar para to após instalar o react-scroll */}
                <Link
                  to={link.to}
                  offset={-50}
                  smooth={true}
                  duration={600}
                  className="cursor-pointer text-white hover:text-black transition-all duration-500"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Menu Button Mobile com função de mostrar menu */}
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          title="Abrir menu"
          className="md:hidden"
        >
          <HiMenuAlt1 className="text-white text-3xl cursor-pointer simple-hover" />
        </button>
      </nav>

      <div
        className={`z-20 bg-black/40 backdrop-blur-2xl flex flex-col gap-8 items-center justify-center fixed inset-0 ${
          menuOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
        } transition-all duration-500`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* Título/Logo */}
        <Image
          src={elementoLogo}
          alt="Logo"
          width={150}
          priority
          className="cursor-pointer simple-hover"
        />

        {/* Ul */}
        <ul className="flex flex-col gap-4 text-center">
          {/* Redenriza os links com map */}
          {menuLinks.map((link) => {
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  smooth={true}
                  offset={-50}
                  duration={600}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="underline cursor-pointer text-3xl font-bold text-white hover:text-verde-escuro transition-all duration-500"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Botão de fechar menu */}
        <button
          title="Fechar menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer simple-hover"
        >
          <IoMdCloseCircle className="text-white text-5xl" />
        </button>
      </div>
    </header>
  );
}
