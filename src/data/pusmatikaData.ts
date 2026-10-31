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

export interface FacultyAdvisor {
  role: string
  name: string
  titleLabel: string
  badge: string
  bio: string
}

export interface ExecutiveLeader {
  role: string
  name: string
  code: string
  badge: string
  bio: string
}

export interface ScienceDivision {
  id: string
  code: string
  name: string
  shortName: string
  leader: string
  members: string[]
  focus: string
  description: string
  icon: string
  topics: string[]
}

export interface MemberProfile {
  name: string
  roles: string[]
  divisions: string[]
  isLeader?: boolean
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

// ==========================================
// STRUKTUR ORGANISASI RESMI PUSMATIKA
// ==========================================

export const FACULTY_ADVISOR: FacultyAdvisor = {
  role: 'Dosen Pembina',
  name: 'Dr. Andi Muhammad Anwar, S.Si, M.Si',
  titleLabel: 'Pembina & Pengarah Akademik',
  badge: 'Dosen Pembina',
  bio: 'Memberikan supervisi akademik, bimbingan strategis kurikulum modul keilmuan, dan arahan riset analitika bagi seluruh divisi PUSMATIKA.',
}

export const EXECUTIVE_BOARD: ExecutiveLeader[] = [
  {
    role: 'Ketua',
    name: 'Normand Tengga',
    code: 'BPH-01',
    badge: 'Pimpinan Utama',
    bio: 'Memimpin visi strategis, tata kelola, dan koordinasi umum seluruh divisi keilmuan serta kemitraan eksternal PUSMATIKA.',
  },
  {
    role: 'Wakil Ketua',
    name: 'Alriqza Muhammad',
    code: 'BPH-02',
    badge: 'Pimpinan Eksekutif',
    bio: 'Mendampingi kepemimpinan umum, mengawasi operasional harian, dan akselerasi riset program kerja lintas bidang.',
  },
  {
    role: 'Sekretaris',
    name: 'Shafiqa Nurcahyani',
    code: 'BPH-03',
    badge: 'Administrasi & Regulasi',
    bio: 'Mengelola tata kelola administrasi organisasi, korespondensi resmi, dokumentasi kurikulum modul, dan penjadwalan konsultasi.',
  },
  {
    role: 'Bendahara',
    name: 'Ariqah Rif’at Rafilah Sapsuha',
    code: 'BPH-04',
    badge: 'Keuangan & Anggaran',
    bio: 'Bertanggung jawab atas pengelolaan keuangan, akuntabilitas anggaran operasional modul, dan perbendaharaan organisasi.',
  },
]

export const SCIENCE_DIVISIONS: ScienceDivision[] = [
  {
    id: 'analisis',
    code: '01',
    name: 'Bidang Analisis',
    shortName: 'Analisis',
    leader: 'Muh. Iqra Al Huda Awe',
    members: ['Apriansyah', 'Erwin Suliano', 'Ariqah Rif’at Rafilah Sapsuha'],
    focus: 'Analisis Riil, Analisis Kompleks, Ruang Metrik & Teori Ukuran',
    description:
      'Mendalami fondasi matematika murni tingkat tinggi, meliputi analisis riil, ruang Banach & Hilbert, topologi, serta teori ukuran dan integrasi Lebesgue. Berperan penting dalam membedah permasalahan analitik teoritis dan formulasi kalkulus lanjutan.',
    icon: '∫',
    topics: ['Real Analysis', 'Measure Theory', 'Complex Functions', 'Metric Spaces'],
  },
  {
    id: 'aljabar',
    code: '02',
    name: 'Bidang Aljabar',
    shortName: 'Aljabar',
    leader: 'Muhammad Risky Abigael Akbar',
    members: ['Alia Maizahara', 'Irmayanti', 'Alriqza Muhammad', 'Shafiqa Nurcahyani'],
    focus: 'Aljabar Abstrak, Teori Grup & Ring, Aljabar Linier Terapan',
    description:
      'Mengkaji struktur dan abstraksi matematika modern melalui teori grup, ring, field, ruang vektor, dan modul. Menjadi fondasi dalam aljabar linier komputasional, perancangan algoritma kriptografi, serta keamanan data modern.',
    icon: '⊗',
    topics: ['Abstract Algebra', 'Group & Ring Theory', 'Linear Algebra', 'Module Theory'],
  },
  {
    id: 'kombinatorika',
    code: '03',
    name: 'Bidang Kombinatorika',
    shortName: 'Kombinatorika',
    leader: 'Andi Radian Sirat',
    members: ['Alycia Chandra', 'Riskayanti Rahim', 'Kasmayanti'],
    focus: 'Teori Graf, Kombinatorika Terapan, Optimasi Diskrit',
    description:
      'Meneliti struktur diskrit, teori graf, teknik pencacahan rekursif, pewarnaan graf, dan optimasi jaringan rute. Sangat krusial dalam perancangan algoritma efisien, jaringan telekomunikasi, dan pemodelan jalur terpendek.',
    icon: '∢',
    topics: ['Graph Theory', 'Discrete Mathematics', 'Network Routing', 'Enumeration'],
  },
  {
    id: 'matematika-terapan',
    code: '04',
    name: 'Bidang Matematika Terapan',
    shortName: 'Matematika Terapan',
    leader: 'Muh Taslim',
    members: [
      'Nur Annisa Haruna',
      'Akhrima Haira',
      'Sitti Nadira',
      'Nazarriesta Dhuhasa Tri Wahyudi',
      'Normand Tengga',
    ],
    focus: 'Pemodelan Dinamik, Persamaan Diferensial, Analisis Numerik',
    description:
      'Menjembatani konsep matematika dengan fenomena fisis dan dinamika dunia nyata melalui persamaan diferensial biasa/parsial, pemodelan sistem dinamik, simulasi numerik, dan analisis kestabilan bagi rekayasa industri.',
    icon: '∂',
    topics: ['Mathematical Modeling', 'Numerical Methods', 'Dynamical Systems', 'Scientific Simulation'],
  },
  {
    id: 'aktuaria',
    code: '05',
    name: 'Bidang Aktuaria',
    shortName: 'Aktuaria',
    leader: 'Muh Rafi Al Mubarak',
    members: ['Mutashim Billah M.', 'Erwin Suliano', 'Chreis Klarisa Bandaso'],
    focus: 'Matematika Finansial, Kontinjensi Hidup, Valuasi Cadangan Premi',
    description:
      'Mengembangkan pemodelan matematika risiko finansial, evaluasi tabel mortalita, perhitungan kontinjensi hidup, valuasi dana pensiun, serta pendampingan intensif persiapan ujian sertifikasi profesi aktuaris (PAI & SOA).',
    icon: 'ℜ',
    topics: ['Life Contingencies', 'Risk Theory', 'Financial Math', 'Pension Valuation'],
  },
  {
    id: 'pemrograman-big-data',
    code: '06',
    name: 'Bidang Pemrograman dan Big Data',
    shortName: 'Pemrograman & Big Data',
    leader: 'Rifqi Alan Maulana',
    members: ['I Buleleng Masrifatullah', 'Akhmad Hidayat'],
    focus: 'Sains Data, Rekayasa Algoritma, Machine Learning, Basis Data Enterprise',
    description:
      'Mengintegrasikan kekuatan analisis matematika dan statistika dengan teknologi komputasi modern. Berfokus pada arsitektur data enterprise, pemrosesan big data, algoritma machine learning terapan, dan transformasi digital analitis.',
    icon: '⌘',
    topics: ['Big Data Engineering', 'Machine Learning', 'Data Architecture', 'Applied Algorithms'],
  },
]

// Ekstrak profil individu unik untuk tab Direktori Anggota
export function getAllMemberProfiles(): MemberProfile[] {
  const memberMap = new Map<string, { roles: Set<string>; divisions: Set<string>; isLeader: boolean }>()

  // 0. Masukkan Dosen Pembina
  memberMap.set(FACULTY_ADVISOR.name, {
    roles: new Set([FACULTY_ADVISOR.role]),
    divisions: new Set(['Dosen Pembina & Pengarah Akademik']),
    isLeader: true,
  })

  // 1. Masukkan pimpinan BPH
  for (const exec of EXECUTIVE_BOARD) {
    if (!memberMap.has(exec.name)) {
      memberMap.set(exec.name, { roles: new Set(), divisions: new Set(), isLeader: true })
    }
    const rec = memberMap.get(exec.name)!
    rec.roles.add(exec.role)
    rec.divisions.add('Badan Pengurus Harian (BPH)')
    rec.isLeader = true
  }

  // 2. Masukkan ketua dan anggota bidang
  for (const div of SCIENCE_DIVISIONS) {
    // Leader
    if (!memberMap.has(div.leader)) {
      memberMap.set(div.leader, { roles: new Set(), divisions: new Set(), isLeader: true })
    }
    const leaderRec = memberMap.get(div.leader)!
    leaderRec.roles.add(`Ketua ${div.name}`)
    leaderRec.divisions.add(div.name)
    leaderRec.isLeader = true

    // Members
    for (const member of div.members) {
      if (!memberMap.has(member)) {
        memberMap.set(member, { roles: new Set(), divisions: new Set(), isLeader: false })
      }
      const memberRec = memberMap.get(member)!
      memberRec.roles.add(`Anggota ${div.name}`)
      memberRec.divisions.add(div.name)
    }
  }

  return Array.from(memberMap.entries()).map(([name, data]) => ({
    name,
    roles: Array.from(data.roles),
    divisions: Array.from(data.divisions),
    isLeader: data.isLeader,
  }))
}
