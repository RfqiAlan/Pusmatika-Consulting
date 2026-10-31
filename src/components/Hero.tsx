export function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <img
        src="/foto.jpeg"
        className="absolute inset-0 w-full h-full object-cover brightness-75 hero-img"
        alt="PUSMATIKA Background"
      />
      <div className="relative z-10 text-center text-white mix-blend-difference px-4 w-full max-w-[96vw] mx-auto">
        <h1 className="display text-[5vw] sm:text-[6vw] md:text-[6.8vw] leading-tight hero-text overflow-hidden uppercase tracking-tight">
          <span className="block translate-y-full whitespace-nowrap">Pusat</span>
        </h1>
        <h1 className="display text-[5vw] sm:text-[6vw] md:text-[6.8vw] leading-tight hero-text overflow-hidden uppercase tracking-tight">
          <span className="block translate-y-full whitespace-nowrap">Konsultasi</span>
        </h1>
        <h1 className="display text-[clamp(1.6rem,7vw,7rem)] leading-tight hero-text overflow-hidden uppercase tracking-tight mt-1 sm:mt-2">
          <span className="block translate-y-full whitespace-nowrap">Matematika</span>
        </h1>

        <p className="mt-8 text-sm uppercase tracking-[0.5em] opacity-0 hero-fade">
          at your service
        </p>

        {/* 3 Pillars Badge */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-2 md:gap-4 text-[10px] md:text-xs tracking-widest uppercase opacity-0 hero-fade">
          <span className="border border-white/30 px-3 py-1 rounded-full">Matematika</span>
          <span className="border border-white/30 px-3 py-1 rounded-full">Aktuaria</span>
          <span className="border border-white/30 px-3 py-1 rounded-full">Sistem Informasi</span>
        </div>
      </div>
    </section>
  )
}
