import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface MissionItem {
  no: string
  title: string
  desc: string
  category: string
}

const MISSIONS: MissionItem[] = [
  {
    no: '01',
    title: 'Konsultasi Presisi & Berkelanjutan',
    desc: 'Menyelenggarakan bimbingan konsultasi berstandar tinggi di bidang matematika murni, matematika terapan, aktuaria, dan sistem informasi bagi akademisi dan profesional.',
    category: 'Misi Strategis',
  },
  {
    no: '02',
    title: 'Kurikulum Modul Komprehensif',
    desc: 'Mengembangkan dan menyajikan modul pembelajaran berbasis proyek nyata untuk mempercepat penguasaan pemodelan, risiko, dan data.',
    category: 'Misi Strategis',
  },
  {
    no: '03',
    title: 'Akselerasi Karir & Profesi Aktuaria',
    desc: 'Mendampingi persiapan sertifikasi aktuaris nasional (PAI) dan internasional (SOA) melalui simulasi kasus dan pemodelan kontinjensi hidup.',
    category: 'Misi Strategis',
  },
  {
    no: '04',
    title: 'Integrasi Algoritma & Sistem Informasi',
    desc: 'Menjembatani teori matematika tingkat tinggi dengan perancangan arsitektur basis data, enterprise systems, dan kecerdasan buatan terapan.',
    category: 'Misi Strategis',
  },
  {
    no: '05',
    title: 'Riset Multidisiplin & Publikasi Ilmiah',
    desc: 'Mendorong kolaborasi riset kuantitatif, pemodelan stokastik tingkat lanjut, serta penulisan karya ilmiah bereputasi nasional dan internasional.',
    category: 'Misi Strategis',
  },
  {
    no: '06',
    title: 'Inkubasi Solusi Komputasi Industri',
    desc: 'Menyediakan solusi konsultasi komputasi praktis, automasi pemodelan analitika, dan transformasi digital bagi kemitraan industri serta institusi.',
    category: 'Misi Strategis',
  },
]

function SplitWords({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word-wrap">
          <span className="word-inner">{word}&nbsp;</span>
        </span>
      ))}
    </span>
  )
}

export function VisionMission() {
  const pinSectionRef = useRef<HTMLDivElement>(null)
  const trackContainerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState<number>(0)

  // Calculate card width so exactly 3 cards fit in container on desktop
  useEffect(() => {
    const updateDimensions = () => {
      if (trackContainerRef.current) {
        const containerWidth = trackContainerRef.current.clientWidth
        if (window.innerWidth >= 1024) {
          // Exactly 3 cards visible, with 2 gaps of 24px (gap-6)
          setCardWidth((containerWidth - 48) / 3)
        } else if (window.innerWidth >= 640) {
          // 2 cards visible on tablet, 1 gap of 24px
          setCardWidth((containerWidth - 24) / 2)
        } else {
          // 1 card with peek on mobile
          setCardWidth(containerWidth * 0.86)
        }
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Setup GSAP horizontal scroll pinning when cardWidth is ready
  useEffect(() => {
    const pinSection = pinSectionRef.current
    const track = trackRef.current
    const container = trackContainerRef.current
    if (!pinSection || !track || !container || cardWidth <= 0) return

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        return Math.max(0, track.scrollWidth - container.clientWidth)
      }

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: pinSection,
          start: 'top 10%',
          end: () => `+=${Math.max(getScrollAmount() * 1.5, 1800)}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          preventOverlaps: true,
          fastScrollEnd: true,
          scrub: 0.3,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${Math.min(100, Math.max(0, self.progress * 100))}%`
            }
          },
        },
      })
    }, pinSection)

    ScrollTrigger.sort()
    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
    }
  }, [cardWidth])

  return (
    <section id="visi-misi" className="pt-28 pb-16 bg-[var(--c-bg)]">
      {/* Top Header & Visi */}
      <div className="px-6 md:px-20 max-w-[1800px] mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold block mb-3">
              Landasan Fondasi
            </span>
            <h2 className="display text-4xl md:text-5xl leading-tight split-animate">
              <span className="word-wrap"><span className="word-inner">Visi&nbsp;</span></span>
              <span className="word-wrap"><span className="word-inner">&amp;&nbsp;</span></span>
              <span className="word-wrap"><span className="word-inner">Misi&nbsp;</span></span>
              <br />
              <span className="text-[var(--c-accent)]">
                <span className="word-wrap"><span className="word-inner">PUSMATIKA.</span></span>
              </span>
            </h2>
          </div>

          <div className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
            <div className="p-8 bg-white/70 border border-black/10 rounded-2xl shadow-sm mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--c-accent)] block mb-2">
                Visi Kami
              </span>
              <p className="split-animate">
                <SplitWords text="Menjadi pusat rujukan konsultasi dan pembinaan analitis unggulan yang mengintegrasikan Matematika, Ilmu Aktuaria, dan Rekayasa Sistem Informasi guna menghasilkan solusi presisi yang berdampak luas bagi peradaban." />
              </p>
            </div>

            <div className="flex gap-10 text-xs uppercase tracking-widest split-animate text-gray-500 font-medium">
              <div>Fokus: Riset &amp; Industri</div>
              <div>Berdiri: 2024</div>
              <div>6 Misi Strategis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section: 6 Cards (3 cards visible at a time on desktop) */}
      <div ref={pinSectionRef} className="overflow-hidden w-full py-6">
        <div className="px-6 md:px-20 max-w-[1800px] mx-auto">
          {/* Section Subhead & Scroll Instruction */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-t border-black/10 pt-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--c-accent)] font-bold block mb-1">
                Arah Strategis Organisasi
              </span>
              <h3 className="display text-2xl md:text-3xl font-bold">
                6 MISI STRATEGIS PUSMATIKA
              </h3>
            </div>

            <div className="flex items-center">
              {/* Progress Track */}
              <div className="w-32 h-1.5 bg-black/10 rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full bg-black rounded-full transition-all duration-100"
                  style={{ width: '16.66%' }}
                />
              </div>
            </div>
          </div>

          {/* Cards Track Container */}
          <div ref={trackContainerRef} className="overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex gap-6 will-change-transform pb-4"
              style={{ width: 'max-content' }}
            >
              {MISSIONS.map((m) => (
                <div
                  key={m.no}
                  style={{
                    width: cardWidth > 0 ? `${cardWidth}px` : undefined,
                  }}
                  className="shrink-0 p-8 md:p-10 bg-[#dad7d0] hover:bg-white transition-all duration-300 rounded-2xl border border-black/10 flex flex-col justify-between group shadow-sm hover:shadow-xl min-h-[380px] md:min-h-[400px]"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="display text-4xl md:text-5xl font-bold opacity-30 group-hover:opacity-100 group-hover:text-[var(--c-accent)] transition-all">
                        {m.no}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-black/5 text-gray-700">
                        Pilar {m.no}
                      </span>
                    </div>
                    <h4 className="font-bold text-xl md:text-2xl mt-4 mb-3 text-black tracking-tight leading-snug">
                      {m.title}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-light">
                      {m.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-xs font-semibold text-gray-700 uppercase tracking-widest group-hover:text-black">
                    <span>{m.category}</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
