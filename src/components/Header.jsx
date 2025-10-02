"use client";

// Importa Hooks
import { useState } from "react";
// Importa imagem da logo

// Importa image
import Image from "next/image";

// Importa Link
import Link from "next/link";

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
      <nav className="w-full flex justify-around items-center bg-verde-escuro py-4">
        {/* Logo */}
        <h1 className="text-3xl text-white font-bold">
          <Link href={"/"}>LOGO</Link>
        </h1>
        {/* Ul */}
        <ul className="hidden md:flex gap-4">
          {/* Redenriza os links com map */}
          {menuLinks.map((link) => {
            return (
              <li key={link.label}>
                {/* Mudar para to após instalar o react-scroll */}
                <Link
                  href={link.label}
                  className="text-white hover:text-black transition-all duration-500"
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
          className="md:hidden"
        >
          Menu
        </button>
      </nav>

      <div
        className={`bg-verde-escuro flex flex-col gap-4 items-center justify-center fixed inset-0 ${
          menuOpen ? "translate-x-0" : "translate-x-[100%]"
        } transition-all duration-500`}
      >
        {/* Título/Logo */}
        <h1 className="font-bold text-3xl text-white">LOGO</h1>
        {/* Ul */}
        <ul className="flex flex-col gap-4 text-center">
          {/* Redenriza os links com map */}
          {menuLinks.map((link) => {
            return (
              <li key={link.label}>
                {/* Mudar para to após instalar o react-scroll */}
                <Link
                  href={link.label}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="underline text-lg font-bold text-white hover:text-black transition-all duration-500"
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
          className="cursor-pointer rounded-full px-3 py-1 border-2 text-lg font-bold text-white"
        >
          X
        </button>
      </div>
    </header>
  );
}
