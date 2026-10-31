import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SCIENCE_DIVISIONS } from '../data/pusmatikaData'

gsap.registerPlugin(ScrollTrigger)

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
              <span className="word-wrap"><span className="word-inner">Keilmuan&nbsp;</span></span>
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
              <div>6 Bidang Keilmuan</div>
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
                Divisi Keilmuan &amp; Riset Terapan
              </span>
              <h3 className="display text-2xl md:text-3xl font-bold">
                6 BIDANG KEILMUAN PUSMATIKA
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
              {SCIENCE_DIVISIONS.map((div) => (
                <div
                  key={div.id}
                  style={{
                    width: cardWidth > 0 ? `${cardWidth}px` : undefined,
                  }}
                  className="shrink-0 p-8 md:p-10 bg-[#dad7d0] hover:bg-white transition-all duration-300 rounded-2xl border border-black/10 flex flex-col justify-between group shadow-sm hover:shadow-xl min-h-[440px] md:min-h-[460px]"
                >
                  <div>
                    {/* Number & Glyph Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="display text-4xl md:text-5xl font-bold opacity-30 group-hover:opacity-100 group-hover:text-[var(--c-accent)] transition-all">
                          {div.code}
                        </span>
                        <span className="text-sm font-bold font-mono text-gray-500">
                          {div.icon}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-black/5 text-gray-700">
                        Pilar {div.code}
                      </span>
                    </div>

                    {/* Division Title */}
                    <h4 className="font-bold text-xl md:text-2xl mt-3 mb-2 text-black tracking-tight leading-snug group-hover:text-[var(--c-accent)] transition-colors">
                      {div.name}
                    </h4>

                    {/* Ketua Bidang Box */}
                    <div className="mb-3 px-3 py-1.5 rounded-lg bg-black/5 text-xs">
                      <span className="font-semibold text-gray-600">Ketua Bidang: </span>
                      <span className="font-bold text-black">{div.leader}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light mb-4">
                      {div.description}
                    </p>

                    {/* Members Pill List */}
                    <div className="text-[11px] text-gray-600 mb-4">
                      <span className="font-semibold block mb-1 text-[10px] uppercase tracking-wider text-gray-500">
                        Anggota Peneliti ({div.members.length}):
                      </span>
                      <p className="font-medium text-gray-800 leading-normal">
                        {div.members.join(', ')}
                      </p>
                    </div>
                  </div>

                  {/* Topics Footer */}
                  <div className="mt-4 pt-4 border-t border-black/10 flex items-center justify-between text-xs font-semibold text-gray-700 group-hover:text-black">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 truncate max-w-[80%]">
                      {div.focus}
                    </span>
                    <a
                      href="#struktur"
                      className="text-base group-hover:translate-x-1 transition-transform inline-block"
                      title="Lihat di Bagan Struktur Organisasi"
                    >
                      →
                    </a>
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
