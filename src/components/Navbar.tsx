import { useState, useEffect } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 w-full px-6 md:px-12 transition-all duration-300 flex justify-between items-center z-50 ${
          isScrolled
            ? 'py-4 bg-[#121212] text-white shadow-xl border-b border-white/10'
            : 'py-6 bg-transparent text-white'
        }`}
      >
        <a href="#" className="display font-bold text-xl md:text-2xl tracking-tighter">
          PUSMATIKA
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 text-xs uppercase tracking-widest items-center">
          <a href="#visi-misi" className="hover:text-gray-300 transition-colors">
            Visi &amp; Misi
          </a>
          <a href="#layanan" className="hover:text-gray-300 transition-colors">
            Bidang Konsultasi
          </a>
          <a href="#modul" className="hover:text-gray-300 transition-colors">
            Modul
          </a>
          <a href="#struktur" className="hover:text-gray-300 transition-colors">
            Struktur Organisasi
          </a>
          <a
            href="#kontak"
            className="px-5 py-2.5 rounded-full bg-white text-black text-[11px] font-bold tracking-wider hover:bg-neutral-200 transition-all cursor-pointer shadow-md inline-block"
          >
            Kontak Kami
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden text-xs uppercase tracking-widest cursor-pointer hover:opacity-75 focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#121212] z-40 flex flex-col items-center justify-center gap-7 lg:hidden text-white font-display text-xl uppercase tracking-widest px-6 text-center">
          <a
            href="#visi-misi"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition-colors"
          >
            Visi &amp; Misi
          </a>
          <a
            href="#layanan"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition-colors"
          >
            Bidang Konsultasi
          </a>
          <a
            href="#modul"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition-colors"
          >
            Modul PUSMATIKA
          </a>
          <a
            href="#struktur"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition-colors"
          >
            Struktur Organisasi
          </a>
          <a
            href="#kontak"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-widest cursor-pointer inline-block"
          >
            Kontak Kami
          </a>
        </div>
      )}
    </>
  )
}
