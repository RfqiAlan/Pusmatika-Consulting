export interface ModuleItem {
  id: string
  number: string
  title: string
  category: 'Matematika' | 'Aktuaria' | 'Sistem Informasi'
  tagline: string
  description: string
  topics: string[]
  targetAudience: string
  image: string
}

export interface ConsultationField {
  id: string
  code: string
  title: string
  subtitle: string
  description: string
  services: string[]
  icon: string
  popularTopics: string[]
}

export interface OrgMember {
  name: string
  role: string
  division: string
  bio: string
  expertise: string[]
}

export const CONSULTATION_FIELDS: ConsultationField[] = [
  {
    id: 'matematika',
    code: '01',
    title: 'Konsultasi Matematika',
    subtitle: 'Teori Murni, Analisis, Pemodelan & Statistika Terapan',
    description:
      'Layanan konsultasi mendalam untuk membedah permasalahan kalkulus tingkat lanjut, aljabar linier terapan, pemodelan stokastik, persamaan diferensial, serta optimasi numerik baik untuk riset akademis maupun pemecahan masalah industri.',
    icon: '∑',
    services: [
      'Bimbingan Tugas Akhir, Skripsi & Tesis Matematika',
      'Pemodelan Matematika Sistem Nyata & Simulasi',
      'Analisis Data Statistika & Teori Peluang',
      'Optimasi Linier, Non-Linier & Riset Operasi',
    ],
    popularTopics: ['Kalkulus Vektor', 'Aljabar Abstrak', 'Diferensial Parsial', 'Markov Chain'],
  },
  {
    id: 'aktuaria',
    code: '02',
    title: 'Konsultasi Aktuaria',
    subtitle: 'Manajemen Risiko Finansial, Asuransi & Valuasi Cadangan',
    description:
      'Dukungan konsultasi komprehensif bagi persiapan ujian profesi aktuaria (PAI / SOA), perhitungan cadangan premi asuransi jiwa dan umum, analisis tabel mortalitas, valuasi dana pensiun, serta pemodelan risiko portofolio keuangan.',
    icon: '📈',
    services: [
      'Persiapan Ujian Profesi Aktuaris (A10-A70 / SOA Exam)',
      'Perhitungan Kontinjensi Hidup & Tabel Mortalitas',
      'Valuasi Cadangan Premi & Teori Kredibilitas',
      'Manajemen Solvabilitas & Enterprise Risk Management',
    ],
    popularTopics: ['Matematika Keuangan', 'Kontinjensi Hidup', 'Teori Risiko', 'Valuasi Dana Pensiun'],
  },
  {
    id: 'sistem-informasi',
    code: '03',
    title: 'Konsultasi Sistem Informasi',
    subtitle: 'Arsitektur Data, Rekayasa Perangkat Lunak & Sistem Cerdas',
    description:
      'Solusi strategis dan teknis dalam perancangan arsitektur basis data, pemodelan sistem bisnis enterprise, rekayasa perangkat lunak modern, analisis data analitik cerdas, serta integrasi algoritma komputasi ke dalam ekosistem digital.',
    icon: '⚡',
    services: [
      'Perancangan Arsitektur Basis Data Enterprise (SQL & NoSQL)',
      'Analisis & Desain Sistem Terstruktur (UML, BPMN, DFD)',
      'Integrasi Algoritma Sains Data & Machine Learning',
      'Audit Sistem Informasi & Optimalisasi Infrastruktur Data',
    ],
    popularTopics: ['Database Normalization', 'Business Process Reengineering', 'Predictive Modeling', 'System Architecture'],
  },
]

export const MODULES: ModuleItem[] = [
  {
    id: 'modul-1',
    number: '01',
    category: 'Matematika',
    title: 'Fondasi Analisis & Pemodelan Dinamik',
    tagline: 'Kalkulus Multivariabel & Formulasi Fenomena Riil',
    description:
      'Membekali peserta kemampuan merumuskan fenomena fisik, biologis, dan ekonomi ke dalam persamaan diferensial dan sistem dinamik dengan analisis kestabilan titik ekuilibrium.',
    topics: [
      'Kalkulus Multivariabel & Ruang Vektor',
      'Persamaan Diferensial Biasa & Parsial',
      'Metode Fase Plane & Analisis Kestabilan Lyapunov',
      'Simulasi Numerik dengan Python/MATLAB',
    ],
    targetAudience: 'Mahasiswa Matematika, Fisika, Teknik, & Peneliti Pemodelan',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
  },
  {
    id: 'modul-2',
    number: '02',
    category: 'Matematika',
    title: 'Matematika Diskrit & Struktur Algoritmik',
    tagline: 'Kombinatorika, Teori Graf & Logika Pembuktian Formal',
    description:
      'Eksplorasi matematika diskrit yang menjadi fondasi ilmu komputer, keamanan informasi, struktur data, dan optimasi jaringan rute terpendek.',
    topics: [
      'Logika Matematika & Metode Pembuktian Formal',
      'Teori Graf & Masalah Lintasan Optimal',
      'Kombinatorika Lanjutan & Relasi Rekurensi',
      'Kriptografi Dasar & Teori Bilangan Modular',
    ],
    targetAudience: 'Mahasiswa Informatika, Matematika, dan Peminat Algoritma Kompleks',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp',
  },
  {
    id: 'modul-3',
    number: '03',
    category: 'Aktuaria',
    title: 'Matematika Finansial & Dinamika Investasi',
    tagline: 'Teori Bunga, Anuitas Majemuk & Portofolio Obligasi',
    description:
      'Pondasi utama bagi calon aktuaris untuk memahami nilai waktu dari uang (time value of money), perhitungan skedul amortisasi, durasi Macaulay, dan imunisasi portofolio bunga.',
    topics: [
      'Teori Tingkat Bunga & Diskonto Majemuk',
      'Anuitas Pasti (Annuity-Immediate & Due)',
      'Amortisasi Pinjaman & Dana Pelunasan (Sinking Funds)',
      'Valuasi Obligasi & Manajemen Risiko Durasi / Konveksitas',
    ],
    targetAudience: 'Kandidat Ujian Matematika Keuangan PAI, Mahasiswa Aktuaria & Finance',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp',
  },
  {
    id: 'modul-4',
    number: '04',
    category: 'Aktuaria',
    title: 'Kontinjensi Hidup & Pemodelan Risiko Asuransi',
    tagline: 'Tabel Mortalita, Cadangan Premi & Teori Risiko Kolektif',
    description:
      'Modul spesialisasi aktuaria yang membahas penerapan teori peluang dan matematika keuangan pada kontrak perlindungan asuransi jiwa, anuitas seumur hidup, dan perhitungan premi bersih.',
    topics: [
      'Tabel Mortalita Standar & Fungsi Kelangsungan Hidup',
      'Asuransi Jiwa Berjangka, Seumur Hidup & Endowment',
      'Anuitas Jiwa & Perhitungan Premi Bersih (Net Premium)',
      'Valuasi Cadangan Manfaat (Benefit Reserves) & Model Multi-Status',
    ],
    targetAudience: 'Mahasiswa Aktuaria Tingkat Lanjut & Praktisi Industri Asuransi',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp',
  },
  {
    id: 'modul-5',
    number: '05',
    category: 'Sistem Informasi',
    title: 'Arsitektur Basis Data Enterprise & Rekayasa Sistem',
    tagline: 'Pemodelan Relasional, Normalisasi & Perancangan Solusi Digital',
    description:
      'Penguasaan rekayasa sistem informasi dari level konseptual hingga implementasi database berkinerja tinggi yang mampu menangani skala data masif dan alur bisnis rumit.',
    topics: [
      'Data Modeling Enterprise (Enhanced ERD, Relational Schema)',
      'Normalisasi Basis Data Lanjut (1NF s/d BCNF, Denormalisasi Strategis)',
      'Arsitektur REST API & Integrasi Layanan Backend',
      'Keamanan Basis Data, Indexing & Optimasi Query SQL Komposit',
    ],
    targetAudience: 'Mahasiswa Sistem Informasi, Database Engineer & Solution Architect',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp',
  },
  {
    id: 'modul-6',
    number: '06',
    category: 'Sistem Informasi',
    title: 'Sains Data, Komputasi Cerdas & Algoritma Keputusan',
    tagline: 'Integrasi Matematika, Statistika & Pembelajaran Mesin',
    description:
      'Jembatan antara teori matematika dan implementasi sistem informasi modern, mempelajari cara mengekstrak insight bisnis tersembunyi dengan algoritma prediktif mutakhir.',
    topics: [
      'Pembersihan & Pra-pemrosesan Data Skala Besar',
      'Regresi Linier Majemuk, Logistik & Model Klasifikasi',
      'Algoritma Pengelompokan (Clustering) & Evaluasi Metrik Model',
      'Deployment Model Prediktif ke Dashboard Interaktif',
    ],
    targetAudience: 'Data Scientist, Business Analyst & Pengembang Sistem Cerdas',
    image:
      'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
  },
]

export const ORG_MEMBERS: OrgMember[] = [
  {
    name: 'Prof. Dr. Ir. H. Sudirman, M.Sc.',
    role: 'Dewan Pengarah & Pembina Utama',
    division: 'Dewan Pengarah PUSMATIKA',
    bio: 'Guru besar matematika terapan dengan pengalaman lebih dari 25 tahun dalam riset sistem stokastik dan pemodelan kuantitatif.',
    expertise: ['Matematika Terapan', 'Stochastic Systems', 'Analisis Numerik'],
  },
  {
    name: 'Dr. Ahmad Fauzi, S.Si., M.Mat., FSAI',
    role: 'Direktur Eksekutif / Ketua PUSMATIKA',
    division: 'Pimpinan Eksekutif',
    bio: 'Pakar riset aktuaria dan matematika murni, bersertifikasi FSAI dengan rekam jejak bimbingan ujian profesi dan pemodelan risiko terkemuka.',
    expertise: ['Aktuaria Finansial', 'Aljabar Linier Terapan', 'Risk Governance'],
  },
  {
    name: 'Nadia Larasati, S.Kom., M.T.I.',
    role: 'Wakil Direktur Bidang Sistem Informasi',
    division: 'Pimpinan Eksekutif',
    bio: 'Spesialis perancangan arsitektur sistem informasi enterprise dan data governance dengan pengalaman riset industri teknologi tinggi.',
    expertise: ['Database Architecture', 'Enterprise Systems', 'Data Pipelines'],
  },
  {
    name: 'Rian Pratama, S.Si., M.Sc.',
    role: 'Kepala Divisi Konsultasi Matematika',
    division: 'Divisi Konsultasi Matematika',
    bio: 'Fokus pada bimbingan pemodelan matematika dinamis, optimasi nonlinear, dan bimbingan tugas akhir matematika murni & terapan.',
    expertise: ['Pemodelan Matematika', 'Kalkulus Multivariabel', 'Optimasi'],
  },
  {
    name: 'Zahra Annisa, S.Si., ASAI, M.Akt.',
    role: 'Kepala Divisi Konsultasi Aktuaria',
    division: 'Divisi Konsultasi Aktuaria',
    bio: 'Aktuaris praktisi dengan keahlian valuasi dana pensiun, pemodelan tabel mortalitas, dan kurikulum ujian profesi PAI.',
    expertise: ['Kontinjensi Hidup', 'Valuasi Pensiun', 'Cadangan Premi'],
  },
  {
    name: 'Bintang Wicaksana, S.Kom., M.Cs.',
    role: 'Kepala Divisi Kurikulum, Modul & Komputasi',
    division: 'Divisi Kurikulum & Modul',
    bio: 'Bertanggung jawab atas standarisasi kualitas materi modul, materi praktikum digital, serta pengembangan lab simulasi komputasi.',
    expertise: ['Applied Machine Learning', 'Kurikulum Modul', 'Scientific Computing'],
  },
]

