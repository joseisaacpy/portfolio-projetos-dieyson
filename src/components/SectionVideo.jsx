export function SectionVideo() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 min-h-screen bg-linear-to-b from-black to-verde-padrao py-10 text-center">
      {/* Título */}
      <h2
        data-aos="fade-right"
        className="text-white text-3xl md:text-5xl font-bold text-center"
      >
        Um spoiler do que a gente apronta 👇
      </h2>

      {/* Container do vídeo (formato vertical) */}
      <div
        data-aos="fade-up"
        className="w-full max-w-sm aspect-9/16 rounded-xl overflow-hidden border-2 border-verde-padrao bg-black shadow-[0_0_50px] md:shadow-[0_0_100px] shadow-verde-escuro transition-all duration-500 hover:scale-105 hover:shadow-verde-padrao"
      >
        <video className="w-full h-full object-cover " controls playsInline>
          <source
            src="/videos/video-insta-dash-financas.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </section>
  );
}
