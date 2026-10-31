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
    title: 'FONDASI PEMODELAN',
    subtitle: 'Matematika • Analisis Dinamik',
    description:
      'Kalkulus multivariabel dan pemodelan sistem dinamik untuk merumuskan fenomena riil ke dalam sistem persamaan diferensial dengan analisis kestabilan ekuilibrium.',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
  },
  {
    id: 'modul-2',
    number: '02',
    title: 'MATEMATIKA DISKRIT',
    subtitle: 'Matematika • Struktur Algoritmik',
    description:
      'Eksplorasi matematika diskrit fondasi ilmu komputer, teori graf lintasan optimal, kombinatorika lanjut, relasi rekurensi, dan logika pembuktian formal.',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp',
  },
  {
    id: 'modul-3',
    number: '03',
    title: 'MATEMATIKA FINANSIAL',
    subtitle: 'Aktuaria • Investasi & Bunga',
    description:
      'Pondasi aktuaris memahami nilai waktu uang (time value of money), perhitungan skedul amortisasi, durasi Macaulay, valuasi obligasi, dan imunisasi bunga.',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp',
  },
  {
    id: 'modul-4',
    number: '04',
    title: 'KONTINJENSI HIDUP',
    subtitle: 'Aktuaria • Risiko Asuransi',
    description:
      'Penerapan teori peluang dan matematika keuangan pada kontrak asuransi jiwa, tabel mortalita, perhitungan premi bersih, dan valuasi cadangan manfaat.',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp',
  },
  {
    id: 'modul-5',
    number: '05',
    title: 'ARSITEKTUR BASIS DATA',
    subtitle: 'Sistem Informasi • Rekayasa Data',
    description:
      'Data modeling enterprise tingkat tinggi (ERD, Relational Schema), normalisasi database, REST API backend, dan optimasi query skala masif.',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp',
  },
  {
    id: 'modul-6',
    number: '06',
    title: 'SAINS DATA & ALGORITMA',
    subtitle: 'Sistem Informasi • Komputasi Cerdas',
    description:
      'Integrasi matematika prediktif, evaluasi metrik model machine learning, visualisasi insight, dan deployment model prediktif ke sistem keputusan nyata.',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
  },
]

interface CardStackProps {
  onSelectModule?: (moduleTitle: string) => void
}

export function CardStack({ onSelectModule }: CardStackProps) {
  return (
    <section id="modul" className="stack-section">
      <div className="text-center mb-20 px-6">
        <div className="text-xs uppercase tracking-widest mb-4 opacity-50">
          Kurikulum PUSMATIKA
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
                <button
                  type="button"
                  onClick={() => onSelectModule?.(`Modul ${modul.number}: ${modul.title}`)}
                  className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors cursor-pointer"
                >
                  Konsultasi Modul
                </button>
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
