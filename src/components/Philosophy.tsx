interface PhilosophyProps {
  onOpenBooking?: () => void
}

export function Philosophy({ onOpenBooking }: PhilosophyProps) {
  return (
    <section className="py-36 bg-[#E3E1DC] text-center flex flex-col items-center justify-center relative z-10 px-6">
      <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-gray-500 mb-4">
        Komitmen Akademik &amp; Profesi
      </span>
      <h2 className="display text-3xl md:text-5xl mb-6 max-w-3xl leading-tight">
        Presisi Analitis Menjawab Tantangan Kompleks
      </h2>
      <div className="max-w-2xl text-gray-600 font-light mb-10 leading-relaxed text-sm md:text-base">
        PUSMATIKA berakar pada komitmen bahwa logika matematika murni, ketelitian kalkulasi risiko aktuaria, dan keandalan rekayasa sistem informasi adalah pilar esensial untuk melahirkan keputusan strategis yang berdampak nyata.
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={() => onOpenBooking?.()}
          className="px-8 py-3.5 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-all cursor-pointer shadow-md"
        >
          Mulai Diskusi Konsultasi
        </button>
      </div>
      <div className="h-16 w-px bg-black/20 mt-12" />
    </section>
  )
}
