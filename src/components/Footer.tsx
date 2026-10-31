export function Footer() {
  return (
    <footer id="kontak" className="footer-sticky">
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-400">
          Siap Memulai Sesi Bimbingan?
        </div>
        <a
          href="https://wa.me/6281234567890?text=Halo%20Admin%20PUSMATIKA%2C%20saya%20ingin%20berkonsultasi"
          target="_blank"
          rel="noopener noreferrer"
          className="display text-[6vw] leading-none hover:text-gray-300 transition-colors uppercase cursor-pointer inline-block"
        >
          KONSULTASI SEKARANG
        </a>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10 text-xs uppercase tracking-widest text-gray-400">
          <a href="#visi-misi" className="hover:text-white transition-colors">
            Visi &amp; Misi
          </a>
          <a href="#layanan" className="hover:text-white transition-colors">
            Bidang Konsultasi
          </a>
          <a href="#modul" className="hover:text-white transition-colors">
            Modul
          </a>
          <a href="#struktur" className="hover:text-white transition-colors">
            Struktur Organisasi
          </a>
        </div>

        <div className="mt-8 text-xs text-gray-400 font-light">
          Email: <a href="mailto:konsultasi@pusmatika.org" className="text-white underline">konsultasi@pusmatika.org</a> | WhatsApp: +62 812-3456-7890
        </div>

        <div className="mt-14 text-[11px] text-gray-500 uppercase tracking-wider">
          © 2026 PUSAT KONSULTASI MATEMATIKA (PUSMATIKA)
          <div className="text-[10px] text-gray-600 mt-1 lowercase">
            matematika • aktuaria • sistem informasi
          </div>
        </div>
      </div>

      {/* Footer Background Image */}
      <img
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        alt="Footer architectural texture"
      />
    </footer>
  )
}
