import { CONSULTATION_FIELDS } from '../data/pusmatikaData'
import { scrollToBottom } from '../utils/scroll'

export function ConsultationFields() {
  return (
    <section id="layanan" className="py-28 px-6 md:px-20 max-w-[1800px] mx-auto bg-[#e8e6e1] border-t border-b border-black/10">
      <div className="max-w-3xl mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold block mb-3">
          Tujuan Layanan
        </span>
        <h2 className="display text-4xl md:text-6xl leading-tight mb-6">
          3 PILAR KONSULTASI PUSMATIKA
        </h2>
        <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
          PUSMATIKA didirikan khusus untuk mendampingi mahasiswa, peneliti, dan praktisi industri dalam memecahkan problematis analitis dan teknis paling menantang.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {CONSULTATION_FIELDS.map((field) => (
          <div
            key={field.id}
            className="bg-white rounded-2xl p-8 md:p-10 border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="display text-4xl font-bold text-gray-300 group-hover:text-[var(--c-accent)] transition-colors">
                  {field.code}
                </span>
                <span className="text-3xl p-3 bg-neutral-100 rounded-xl group-hover:scale-110 transition-transform">
                  {field.icon}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-2 text-black">
                {field.title}
              </h3>
              <p className="text-xs font-semibold text-[var(--c-accent)] uppercase tracking-wider mb-4">
                {field.subtitle}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {field.description}
              </p>

              <div className="border-t border-black/5 pt-6 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-3">
                  Cakupan Layanan:
                </h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  {field.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--c-accent)] font-bold">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  Topik Populer:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {field.popularTopics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 text-[10px] rounded-full uppercase tracking-wider font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToBottom}
              className="mt-8 w-full py-3.5 px-4 rounded-xl bg-neutral-900 text-white font-semibold text-xs uppercase tracking-widest hover:bg-[var(--c-accent)] transition-all cursor-pointer text-center group-hover:shadow-md block"
            >
              Hubungi Konsultan →
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
