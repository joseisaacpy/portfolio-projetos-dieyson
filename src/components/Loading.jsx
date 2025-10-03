"use client";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-black to-verde-escuro text-white gap-4">
      <div className="animate-spin rounded-full h-26 w-26 border-t-4 border-b-4 border-verde-padrao"></div>
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Só mais um segundo… mentira, 5 horas 👍🏽
      </h1>
    </div>
  );
}
