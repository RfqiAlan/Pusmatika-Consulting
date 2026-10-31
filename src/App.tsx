import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import { NoiseOverlay } from './components/NoiseOverlay'
import { Preloader } from './components/Preloader'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { VisionMission } from './components/VisionMission'
import { ConsultationFields } from './components/ConsultationFields'
import { CardStack } from './components/CardStack'
import { OrganizationStructure } from './components/OrganizationStructure'
import { Philosophy } from './components/Philosophy'
import { Footer } from './components/Footer'
import { ConsultationModal } from './components/ConsultationModal'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedModule, setSelectedModule] = useState<string | undefined>()
  const [selectedField, setSelectedField] = useState<string | undefined>()

  const handleOpenBooking = (initialModule?: string, initialField?: string) => {
    setSelectedModule(initialModule)
    setSelectedField(initialField)
    setIsBookingOpen(true)
  }

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    const updateScrollTrigger = () => {
      ScrollTrigger.update()
    }

    lenis.on('scroll', updateScrollTrigger)

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    // GSAP context for safe cleanup in React
    const ctx = gsap.context(() => {
      // Loader Timeline
      const loadTl = gsap.timeline({
        onComplete: () => {
          initSite()
        },
      })

      loadTl
        .to('.loader-bar', { width: '100%', duration: 1.5, ease: 'power2.inOut' })
        .to('.loader-text', { y: -50, opacity: 0, duration: 0.5 })
        .to('.loader', { yPercent: -100, duration: 1, ease: 'power4.inOut' })

      function initSite() {
        // Hero text reveal
        gsap.to('.hero-text span', {
          y: 0,
          stagger: 0.1,
          duration: 1.5,
          ease: 'power4.out',
        })

        // Hero subtitle & badges fade
        gsap.to('.hero-fade', {
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          delay: 0.4,
        })

        // Hero Parallax
        gsap.to('.hero-img', {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-img',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        // Text reveal on scroll
        const splitElements = containerRef.current?.querySelectorAll('.split-animate')
        splitElements?.forEach((el) => {
          const words = el.querySelectorAll('.word-inner')
          gsap.to(words, {
            y: '0%',
            duration: 1,
            ease: 'power3.out',
            stagger: 0.02,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
        })

        // --- CARD STACK ANIMATION (1:1 from futuristic-real-12.html) ---
        const cards = gsap.utils.toArray<HTMLElement>('.card-item')
        cards.forEach((card, i) => {
          const nextCard = cards[i + 1]
          if (nextCard) {
            gsap.to(card.querySelector('.card-inner'), {
              scale: 0.9,
              opacity: 0.4,
              ease: 'none',
              scrollTrigger: {
                trigger: nextCard,
                start: 'top bottom',
                end: 'top 10vh',
                scrub: true,
              },
            })
          }
        })

        // Ensure triggers are properly sorted by DOM order and refreshed
        ScrollTrigger.sort()
        ScrollTrigger.refresh()

        // Footer Parallax Effect
        gsap.from('.footer-sticky > div', {
          y: 100,
          opacity: 0.5,
          scale: 0.9,
          scrollTrigger: {
            trigger: '.footer-sticky',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
          },
        })

        // Refresh ScrollTrigger after elements settled
        ScrollTrigger.refresh()
      }
    }, containerRef)

    return () => {
      ctx.revert()
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen text-[var(--c-dark)] bg-[var(--c-bg)] font-sans antialiased selection:bg-neutral-800 selection:text-white"
    >
      {/* Texture Noise */}
      <NoiseOverlay />

      {/* Preloader */}
      <Preloader />

      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Wrapper (Z-INDEX 10) */}
      <div className="wrapper">
        <Hero />
        <VisionMission />
        <ConsultationFields
          onSelectField={(fieldId) => handleOpenBooking(undefined, fieldId)}
        />
        <CardStack
          onSelectModule={(moduleTitle) => handleOpenBooking(moduleTitle)}
        />
        <OrganizationStructure />
        <Philosophy onOpenBooking={() => handleOpenBooking()} />
      </div>

      {/* Footer (Fixed Behind wrapper) */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Consultation Booking Modal */}
      <ConsultationModal
        key={`${selectedField || ''}-${selectedModule || ''}-${isBookingOpen}`}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialModule={selectedModule}
        initialField={selectedField}
      />
    </div>
  )
}
