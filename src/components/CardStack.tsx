interface ModuleCard {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  image: string
}

const MODULES_LIST: ModuleCard[] = [
  {
    id: 'modul-1',
    number: '01',
    title: 'MODUL ANALISIS RIIL',
    subtitle: 'Bidang Analisis • Teori Murni & Ukuran',
    description:
      'Modul komprehensif kajian analisis riil, ruang Banach & Hilbert, topologi metrik, serta teori ukuran dan integrasi Lebesgue untuk landasan riset teoritis.',
    image: '/modules/modul-1.svg',
  },
  {
    id: 'modul-2',
    number: '02',
    title: 'MODUL STRUKTUR ALJABAR',
    subtitle: 'Bidang Aljabar • Struktur & Kriptografi',
    description:
      'Pembelajaran abstraksi teori grup, ring, field, transformasi matriks linier terapan, serta implementasi algoritma kriptografi modern.',
    image: '/modules/modul-2.svg',
  },
  {
    id: 'modul-3',
    number: '03',
    title: 'MODUL KOMBINATORIKA & GRAF',
    subtitle: 'Bidang Kombinatorika • Struktur Diskrit & Lintasan',
    description:
      'Eksplorasi matematika diskrit terapan: teknik pencacahan enumeratif, relasi rekurensi, pewarnaan graf, dan perancangan algoritma pencarian rute terpendek.',
    image: '/modules/modul-3.svg',
  },
  {
    id: 'modul-4',
    number: '04',
    title: 'MODUL PEMODELAN DINAMIK',
    subtitle: 'Bidang Matematika Terapan • Simulasi Saintifik',
    description:
      'Merumuskan fenomena nyata biologi, fisika, dan dinamika industri ke dalam sistem persamaan diferensial dengan simulasi komputasi numerik Python/MATLAB.',
    image: '/modules/modul-4.svg',
  },
  {
    id: 'modul-5',
    number: '05',
    title: 'MODUL ILMU AKTUARIA',
    subtitle: 'Bidang Aktuaria • Risiko Finansial & Asuransi',
    description:
      'Kurikulum bimbingan persiapan sertifikasi aktuaris (PAI/SOA): evaluasi waktu nilai uang, model kontinjensi hidup, dan valuasi cadangan risiko premi asuransi.',
    image: '/modules/modul-5.svg',
  },
  {
    id: 'modul-6',
    number: '06',
    title: 'MODUL BIG DATA & KOMPUTASI',
    subtitle: 'Bidang Pemrograman & Big Data • Sains Data & Arsitektur',
    description:
      'Integrasi analisis matematika dengan teknologi komputasi modern: arsitektur basis data enterprise, machine learning terapan, dan pengolahan data skala besar.',
    image: '/modules/modul-6.svg',
  },
]

export function CardStack() {
  return (
    <section id="modul" className="stack-section">
      <div className="text-center mb-20 px-6">
        <div className="text-xs uppercase tracking-widest mb-4 opacity-50">
          Kurikulum 6 Bidang Keilmuan
        </div>
        <h2 className="display text-5xl md:text-7xl">MODUL PUSMATIKA</h2>
      </div>

      <div className="stack-container">
        {MODULES_LIST.map((modul) => (
          <div key={modul.id} className="card-item">
            <div className="card-inner">
              <div className="card-content">
                <div>
                  <div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">
                    {modul.number}
                  </div>
                  <h3 className="text-3xl font-bold">{modul.title}</h3>
                  <p className="text-sm mt-4 opacity-70 uppercase tracking-widest">
                    {modul.subtitle}
                  </p>
                </div>
                <div className="text-gray-400 font-light">
                  {modul.description}
                </div>
                <a
                  href="#kontak"
                  className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors cursor-pointer inline-block"
                >
                  Konsultasi Modul Ini →
                </a>
              </div>
              <div className="card-img-wrap">
                <img
                  src={modul.image}
                  className="card-img object-cover w-full h-auto"
                  alt={modul.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
