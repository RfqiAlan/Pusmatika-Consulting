export function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <img
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"
        className="absolute inset-0 w-full h-full object-cover brightness-75 hero-img"
        alt="PUSMATIKA Background"
      />
      <div className="relative z-10 text-center text-white mix-blend-difference px-4 max-w-5xl mx-auto">
        <h1 className="display text-[5.5vw] sm:text-[6.5vw] md:text-[7.5vw] leading-tight hero-text overflow-hidden uppercase">
          <span className="block translate-y-full">Pusat Konsultasi</span>
        </h1>
        <h1 className="display text-[7vw] sm:text-[8.5vw] md:text-[9.5vw] leading-tight hero-text overflow-hidden uppercase">
          <span className="block translate-y-full">Matematika</span>
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
