import { useState, useMemo } from 'react'
import {
  EXECUTIVE_BOARD,
  SCIENCE_DIVISIONS,
  getAllMemberProfiles,
} from '../data/pusmatikaData'

export function OrganizationStructure() {
  const [activeTab, setActiveTab] = useState<'chart' | 'directory'>('chart')
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const allMembers = useMemo(() => getAllMemberProfiles(), [])

  // Filter members for directory tab
  const filteredMembers = useMemo(() => {
    return allMembers.filter((m) => {
      const matchSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.roles.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase())) ||
        m.divisions.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()))

      if (!matchSearch) return false

      if (selectedFilter === 'all') return true
      if (selectedFilter === 'bph') {
        return m.divisions.some((d) => d.includes('BPH'))
      }
      return m.divisions.some((d) =>
        d.toLowerCase().includes(selectedFilter.toLowerCase())
      )
    })
  }, [allMembers, searchQuery, selectedFilter])

  return (
    <section id="struktur" className="py-28 px-6 md:px-20 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-accent)] inline-block" />
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
              Kepengurusan &amp; Tata Kelola
            </span>
          </div>
          <h2 className="display text-4xl sm:text-5xl md:text-6xl leading-tight">
            STRUKTUR ORGANISASI
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-3 max-w-2xl font-light">
            Sinergi kepemimpinan eksekutif dan 6 divisi keilmuan spesifik untuk menghasilkan layanan konsultasi presisi tinggi, modul riset, dan analisis komputasi.
          </p>
        </div>

        {/* View Toggle */}
        <div className="inline-flex p-1.5 bg-black/5 border border-black/10 rounded-full text-xs font-semibold uppercase tracking-wider shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('chart')}
            className={`px-6 py-2.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'chart'
                ? 'bg-black text-white shadow-md'
                : 'text-gray-600 hover:text-black hover:bg-black/5'
            }`}
          >
            Bagan Hierarki
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('directory')}
            className={`px-6 py-2.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'directory'
                ? 'bg-black text-white shadow-md'
                : 'text-gray-600 hover:text-black hover:bg-black/5'
            }`}
          >
            Direktori Pengurus ({allMembers.length})
          </button>
        </div>
      </div>

      {/* ========================================================
          TAB 1: BAGAN STRUKTUR (HIERARCHY VIEW)
      ======================================================== */}
      {activeTab === 'chart' && (
        <div className="space-y-12">
          {/* LEVEL 1: BADAN PENGURUS HARIAN (BPH) */}
          <div className="bg-white/80 border border-black/10 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-black/10 gap-2">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[var(--c-accent)] block mb-1">
                  Tier 1 — Kepemimpinan Eksekutif
                </span>
                <h3 className="display text-2xl font-bold text-black tracking-tight">
                  Badan Pengurus Harian (BPH)
                </h3>
              </div>
              <span className="text-xs font-mono font-medium text-gray-500 bg-black/5 px-3 py-1 rounded-full">
                4 Posisi Kunci
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {EXECUTIVE_BOARD.map((exec) => (
                <div
                  key={exec.role}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    exec.role === 'Ketua'
                      ? 'bg-[#181a18] text-white border-black/20 shadow-md'
                      : 'bg-white text-black border-black/10 hover:border-black/30 hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full ${
                          exec.role === 'Ketua'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-black/5 text-gray-700'
                        }`}
                      >
                        {exec.badge}
                      </span>
                      <span
                        className={`text-xs font-mono font-bold ${
                          exec.role === 'Ketua' ? 'text-gray-400' : 'text-gray-400'
                        }`}
                      >
                        {exec.code}
                      </span>
                    </div>

                    <span
                      className={`text-xs uppercase tracking-wider font-semibold block mb-1 ${
                        exec.role === 'Ketua' ? 'text-gray-300' : 'text-gray-500'
                      }`}
                    >
                      {exec.role}
                    </span>
                    <h4 className="font-bold text-lg md:text-xl tracking-tight leading-snug">
                      {exec.name}
                    </h4>
                  </div>

                  <p
                    className={`text-xs mt-4 pt-3 border-t font-light leading-relaxed ${
                      exec.role === 'Ketua'
                        ? 'border-white/10 text-gray-300'
                        : 'border-black/5 text-gray-600'
                    }`}
                  >
                    {exec.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL HIERARCHY CONNECTOR */}
          <div className="flex flex-col items-center justify-center my-4">
            <div className="w-0.5 h-8 bg-black/20" />
            <div className="px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest shadow-sm">
              Mengkoordinasikan 6 Bidang Keilmuan
            </div>
            <div className="w-0.5 h-8 bg-black/20" />
          </div>

          {/* LEVEL 2: 6 BIDANG KEILMUAN */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[var(--c-accent)] block mb-1">
                  Tier 2 — Spesialisasi &amp; Riset Terapan
                </span>
                <h3 className="display text-2xl md:text-3xl font-bold tracking-tight">
                  6 Bidang Keilmuan PUSMATIKA
                </h3>
              </div>
              <span className="text-xs font-mono text-gray-500 hidden sm:block">
                Total 6 Divisi Riset
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SCIENCE_DIVISIONS.map((div) => (
                <div
                  key={div.id}
                  className="bg-white rounded-2xl border border-black/10 p-7 flex flex-col justify-between hover:shadow-lg hover:border-black/30 transition-all duration-300 group"
                >
                  <div>
                    {/* Top Tag & Code */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm font-mono group-hover:bg-[var(--c-accent)] transition-colors">
                          {div.icon}
                        </span>
                        <span className="text-xs font-mono font-bold text-gray-500">
                          BIDANG {div.code}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-black/5 text-gray-600">
                        {div.members.length + 1} Peneliti
                      </span>
                    </div>

                    {/* Department Title */}
                    <h4 className="font-bold text-xl text-black mb-2 tracking-tight group-hover:text-[var(--c-accent)] transition-colors">
                      {div.name}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-light mb-5">
                      {div.description}
                    </p>

                    {/* Ketua Bidang Box */}
                    <div className="p-3.5 bg-[#f5f3ef] rounded-xl border border-black/5 mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--c-accent)] block mb-0.5">
                        Ketua Bidang
                      </span>
                      <span className="font-bold text-sm text-black block">
                        {div.leader}
                      </span>
                    </div>

                    {/* Anggota List */}
                    <div className="mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 block mb-2">
                        Anggota Bidang ({div.members.length})
                      </span>
                      <ul className="space-y-1.5">
                        {div.members.map((member, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-gray-800 flex items-center gap-2 bg-neutral-50 px-2.5 py-1.5 rounded-lg border border-black/5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
                            <span className="font-medium">{member}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Topics Footer */}
                  <div className="pt-4 border-t border-black/10 mt-2">
                    <div className="flex flex-wrap gap-1">
                      {div.topics.map((t, i) => (
                        <span
                          key={i}
                          className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-black/5 text-gray-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 2: DIREKTORI PENGURUS & ANGGOTA (SEARCH & FILTER)
      ======================================================== */}
      {activeTab === 'directory' && (
        <div className="bg-white/80 border border-black/10 rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Filter Bar & Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-black/10">
            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                placeholder="Cari nama pengurus / bidang..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 text-xs bg-white border border-black/15 rounded-full focus:outline-none focus:border-black transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-black cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Division Filter Pills */}
            <div className="flex flex-wrap gap-1.5 text-xs">
              {[
                { id: 'all', label: 'Semua' },
                { id: 'bph', label: 'BPH' },
                { id: 'analisis', label: 'Analisis' },
                { id: 'aljabar', label: 'Aljabar' },
                { id: 'kombinatorika', label: 'Kombinatorika' },
                { id: 'terapan', label: 'Terapan' },
                { id: 'aktuaria', label: 'Aktuaria' },
                { id: 'pemrograman', label: 'Big Data' },
              ].map((pill) => (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => setSelectedFilter(pill.id)}
                  className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                    selectedFilter === pill.id
                      ? 'bg-black text-white'
                      : 'bg-black/5 text-gray-700 hover:bg-black/10'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMembers.map((member, idx) => {
              const initials = member.name
                .split(' ')
                .filter((p) => !p.startsWith('Muh.') && !p.startsWith('M.'))
                .slice(0, 2)
                .map((p) => p[0])
                .join('')

              return (
                <div
                  key={idx}
                  className="p-5 bg-white rounded-2xl border border-black/10 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                          member.isLeader
                            ? 'bg-black text-white'
                            : 'bg-black/10 text-gray-800'
                        }`}
                      >
                        {initials || member.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-sm text-black truncate">
                          {member.name}
                        </h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {member.roles.map((role, rIdx) => (
                            <span
                              key={rIdx}
                              className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                role.startsWith('Ketua') || role.startsWith('Wakil')
                                  ? 'bg-[var(--c-accent)] text-white'
                                  : 'bg-black/5 text-gray-700'
                              }`}
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/5 mt-2">
                    <span className="text-[10px] text-gray-500 font-mono block">
                      {member.divisions.join(' • ')}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-16 text-gray-500 text-sm">
              Tidak ada pengurus yang cocok dengan kriteria pencarian "{searchQuery}".
            </div>
          )}
        </div>
      )}
    </section>
  )
}
