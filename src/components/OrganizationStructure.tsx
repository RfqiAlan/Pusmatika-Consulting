import { useState } from 'react'
import { ORG_MEMBERS } from '../data/pusmatikaData'

export function OrganizationStructure() {
  const [activeTab, setActiveTab] = useState<'chart' | 'cards'>('chart')

  return (
    <section id="struktur" className="py-28 px-6 md:px-20 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold block mb-3">
            Kepengurusan &amp; Tata Kelola
          </span>
          <h2 className="display text-4xl md:text-6xl leading-tight">
            STRUKTUR ORGANISASI
          </h2>
        </div>

        {/* View Toggle */}
        <div className="inline-flex p-1 bg-black/10 rounded-full text-xs font-semibold uppercase tracking-wider">
          <button
            type="button"
            onClick={() => setActiveTab('chart')}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              activeTab === 'chart'
                ? 'bg-black text-white shadow-sm'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Bagan Struktur
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cards')}
            className={`px-5 py-2 rounded-full transition-all cursor-pointer ${
              activeTab === 'cards'
                ? 'bg-black text-white shadow-sm'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Profil Pengurus
          </button>
        </div>
      </div>

      {/* CHART VIEW */}
      {activeTab === 'chart' && (
        <div className="bg-white/80 border border-black/10 rounded-3xl p-8 md:p-12 shadow-sm">
          {/* Level 1: Dewan Pengarah */}
          <div className="flex flex-col items-center">
            <div className="max-w-md w-full bg-[#1e231f] text-white p-6 rounded-2xl text-center shadow-md border border-black/10">
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                Dewan Pembina &amp; Pengarah
              </span>
              <h4 className="font-bold text-lg">{ORG_MEMBERS[0].name}</h4>
              <p className="text-xs text-gray-400 mt-1">{ORG_MEMBERS[0].role}</p>
            </div>

            {/* Vertical Line */}
            <div className="w-0.5 h-10 bg-black/30 my-2" />

            {/* Level 2: Executive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
              <div className="bg-white p-6 rounded-2xl border-2 border-black/20 text-center shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-[var(--c-accent)] font-bold block mb-1">
                  Ketua / Direktur Eksekutif
                </span>
                <h4 className="font-bold text-base text-black">{ORG_MEMBERS[1].name}</h4>
                <p className="text-xs text-gray-500 mt-1">Konsultasi Matematika &amp; Aktuaria</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-black/20 text-center shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-[var(--c-accent)] font-bold block mb-1">
                  Wakil Direktur
                </span>
                <h4 className="font-bold text-base text-black">{ORG_MEMBERS[2].name}</h4>
                <p className="text-xs text-gray-500 mt-1">Rekayasa Sistem Informasi</p>
              </div>
            </div>

            {/* Vertical Line split */}
            <div className="w-0.5 h-10 bg-black/30 my-2" />

            {/* Level 3: Divisi Teknis */}
            <div className="w-full max-w-4xl pt-4 border-t-2 border-black/20 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#ebe8e2] p-5 rounded-xl border border-black/10 text-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-600 block mb-1">
                  Divisi Matematika
                </span>
                <h5 className="font-bold text-sm text-black">{ORG_MEMBERS[3].name}</h5>
                <p className="text-[11px] text-gray-500 mt-1">{ORG_MEMBERS[3].role}</p>
              </div>

              <div className="bg-[#ebe8e2] p-5 rounded-xl border border-black/10 text-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-600 block mb-1">
                  Divisi Aktuaria
                </span>
                <h5 className="font-bold text-sm text-black">{ORG_MEMBERS[4].name}</h5>
                <p className="text-[11px] text-gray-500 mt-1">{ORG_MEMBERS[4].role}</p>
              </div>

              <div className="bg-[#ebe8e2] p-5 rounded-xl border border-black/10 text-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-600 block mb-1">
                  Divisi Kurikulum &amp; Modul
                </span>
                <h5 className="font-bold text-sm text-black">{ORG_MEMBERS[5].name}</h5>
                <p className="text-[11px] text-gray-500 mt-1">{ORG_MEMBERS[5].role}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CARDS VIEW */}
      {activeTab === 'cards' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORG_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-black/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-base">
                    {member.name
                      .split(' ')
                      .filter((n) => !n.startsWith('Dr.') && !n.startsWith('Prof.'))
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--c-accent)] block">
                      {member.division}
                    </span>
                    <h3 className="font-bold text-base text-black leading-snug">{member.name}</h3>
                  </div>
                </div>

                <p className="text-xs font-semibold text-gray-600 mb-3">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">{member.bio}</p>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-2">
                  Bidang Kepakaran:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-neutral-100 text-neutral-800 text-[10px] rounded-md font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

