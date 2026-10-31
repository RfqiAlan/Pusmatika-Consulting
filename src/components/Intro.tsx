interface SplitWordsProps {
  text: string
  className?: string
}

function SplitWords({ text, className = '' }: SplitWordsProps) {
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

export function Intro() {
  return (
    <section id="studio" className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
      <div>
        <h2 className="display text-4xl md:text-5xl leading-tight split-animate">
          <span className="word-wrap"><span className="word-inner">Structure&nbsp;</span></span>
          <span className="word-wrap"><span className="word-inner">as&nbsp;</span></span>
          <br />
          <span className="text-[var(--c-accent)]">
            <span className="word-wrap"><span className="word-inner">sculpture.</span></span>
          </span>
        </h2>
      </div>
      <div className="text-xl font-light leading-relaxed text-gray-700">
        <p className="mb-8 split-animate">
          <SplitWords text="We believe that architecture is frozen music. Our studio specializes in brutalist forms softened by biophilic integration. We create spaces that do not just shelter, but inspire." />
        </p>
        <div className="h-px w-full bg-black/10 my-8" />
        <div className="flex gap-12 text-sm uppercase tracking-widest split-animate">
          <div>
            <SplitWords text="Est. 2024" />
          </div>
          <div>
            <SplitWords text="Tokyo / London" />
          </div>
        </div>
      </div>
    </section>
  )
}

