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

  // Se menu for true, mostra o menu
  if (menuOpen) {
    return (
      // Container menu
      <div className="inset-0 fixed bg-verde-escuro flex flex-col gap-4 items-center justify-center">
        {/* Título/Logo */}
        <h1 className="font-bold text-3xl">LOGO</h1>
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
                  className="underline font-bold text-white hover:text-black transition-all duration-500"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Botão de fechar menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full px-4 py-2 border-2 text-2xl font-bold"
        >
          X
        </button>
      </div>
    );
  }

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
          Icon
        </button>
      </nav>
    </header>
  );
}
