"use client";

// Importa Hooks
import { useState } from "react";

// Importa image
import Image from "next/image";

// Importa imagem da logo
import elementoLogo from "../../public/images/elemento-logo-sem-fundo.png";

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

  return (
    // Header
    <header>
      {/* Nav */}
      <nav className="fixed w-full flex justify-around items-center bg-verde-escuro py-4">
        {/* Logo */}
        <Link to="/">
          <Image
            src={elementoLogo}
            alt="Logo"
            width={70}
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
          <HiMenuAlt1 className="text-white text-2xl cursor-pointer simple-hover" />
        </button>
      </nav>

      <div
        className={`bg-verde-escuro flex flex-col gap-6 items-center justify-center fixed inset-0 ${
          menuOpen ? "translate-x-0" : "translate-x-[100%]"
        } transition-all duration-500`}
      >
        {/* Título/Logo */}
        <Image
          src={elementoLogo}
          alt="Logo"
          width={100}
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
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="underline cursor-pointer text-lg font-bold text-white hover:text-black transition-all duration-500"
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
          <IoMdCloseCircle className="text-white text-3xl" />
        </button>
      </div>
    </header>
  );
}
