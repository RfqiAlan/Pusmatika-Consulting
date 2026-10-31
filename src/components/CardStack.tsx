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
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
  },
  {
    id: 'modul-2',
    number: '02',
    title: 'MODUL STRUKTUR ALJABAR',
    subtitle: 'Bidang Aljabar • Struktur & Kriptografi',
    description:
      'Pembelajaran abstraksi teori grup, ring, field, transformasi matriks linier terapan, serta implementasi algoritma kriptografi modern.',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp',
  },
  {
    id: 'modul-3',
    number: '03',
    title: 'MODUL KOMBINATORIKA & GRAF',
    subtitle: 'Bidang Kombinatorika • Struktur Diskrit & Lintasan',
    description:
      'Eksplorasi matematika diskrit terapan: teknik pencacahan enumeratif, relasi rekurensi, pewarnaan graf, dan perancangan algoritma pencarian rute terpendek.',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp',
  },
  {
    id: 'modul-4',
    number: '04',
    title: 'MODUL PEMODELAN DINAMIK',
    subtitle: 'Bidang Matematika Terapan • Simulasi Saintifik',
    description:
      'Merumuskan fenomena nyata biologi, fisika, dan dinamika industri ke dalam sistem persamaan diferensial dengan simulasi komputasi numerik Python/MATLAB.',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp',
  },
  {
    id: 'modul-5',
    number: '05',
    title: 'MODUL ILMU AKTUARIA',
    subtitle: 'Bidang Aktuaria • Risiko Finansial & Asuransi',
    description:
      'Kurikulum bimbingan persiapan sertifikasi aktuaris (PAI/SOA): evaluasi waktu nilai uang, model kontinjensi hidup, dan valuasi cadangan risiko premi asuransi.',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp',
  },
  {
    id: 'modul-6',
    number: '06',
    title: 'MODUL BIG DATA & KOMPUTASI',
    subtitle: 'Bidang Pemrograman & Big Data • Sains Data & Arsitektur',
    description:
      'Integrasi analisis matematika dengan teknologi komputasi modern: arsitektur basis data enterprise, machine learning terapan, dan pengolahan data skala besar.',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
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
