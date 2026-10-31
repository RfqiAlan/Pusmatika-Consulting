import { useState } from 'react'
import { MODULES } from '../data/pusmatikaData'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
  initialModule?: string
  initialField?: string
}

function resolveInitialField(f?: string): string {
  if (!f) return 'Matematika'
  if (f.toLowerCase().includes('matematika')) return 'Matematika'
  if (f.toLowerCase().includes('aktuaria')) return 'Aktuaria'
  if (f.toLowerCase().includes('informasi')) return 'Sistem Informasi'
  return 'Matematika'
}

export function ConsultationModal({
  isOpen,
  onClose,
  initialModule,
  initialField,
}: ConsultationModalProps) {
  const [name, setName] = useState('')
  const [institution, setInstitution] = useState('')
  const [phone, setPhone] = useState('')
  const [field, setField] = useState<string>(() => resolveInitialField(initialField))
  const [selectedModule, setSelectedModule] = useState<string>(initialModule || '')
  const [notes, setNotes] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Halo Admin PUSMATIKA, saya ingin mendaftar sesi konsultasi:
*Nama:* ${name}
*Instansi/Kampus:* ${institution}
*Nomor Kontak:* ${phone}
*Bidang Konsultasi:* ${field}
*Pilihan Modul/Topik:* ${selectedModule || 'Konsultasi Kustom/Umum'}
*Kebutuhan:* ${notes}`

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank')
    setIsSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="bg-[#f0ede6] text-black w-full max-w-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-black/10 relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-xl font-bold text-gray-500 hover:text-black transition-colors cursor-pointer w-8 h-8 rounded-full bg-black/5 flex items-center justify-center"
          aria-label="Tutup formulir"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl mb-4 font-bold">
              ✓
            </div>
            <h3 className="display text-2xl font-bold mb-2">Permintaan Terkirim!</h3>
            <p className="text-sm text-gray-600 mb-6">
              Tim konsultan PUSMATIKA akan segera meninjau jadwal dan menghubungi Anda melalui WhatsApp.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false)
                onClose()
              }}
              className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Selesai
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSubmit}>
            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--c-accent)] block mb-1">
                Formulir Pendaftaran
              </span>
              <h3 className="display text-2xl md:text-3xl font-bold">
                Jadwalkan Konsultasi
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Pilih bidang (Matematika, Aktuaria, atau Sistem Informasi) dan modul yang Anda perlukan.
              </p>
            </div>

            <div className="space-y-4">
              {/* Bidang Konsultasi */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Bidang Konsultasi Utama
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Matematika', 'Aktuaria', 'Sistem Informasi'].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setField(f)}
                      className={`py-2 px-2 text-[11px] font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                        field === f
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-white text-gray-700 border-black/10 hover:border-black/30'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modul Spesifik */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Pilihan Modul / Topik
                </label>
                <select
                  value={selectedModule}
                  onChange={(e) => setSelectedModule(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-black/15 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">-- Pilih Modul PUSMATIKA (Opsional) --</option>
                  {MODULES.map((m) => (
                    <option key={m.id} value={`Modul ${m.number}: ${m.title}`}>
                      Modul {m.number}: {m.title} ({m.category})
                    </option>
                  ))}
                  <option value="Sesi Konsultasi Kustom / Skripsi / Tesis">
                    Sesi Konsultasi Kustom / Skripsi / Tesis
                  </option>
                </select>
              </div>

              {/* Nama & Instansi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-black/15 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Instansi / Universitas *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Universitas Gadjah Mada"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-black/15 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              {/* No WhatsApp */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-black/15 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Catatan / Kebutuhan */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Topik / Catatan Kebutuhan
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan ringkas materi, kendala riset, tugas akhir, atau persiapan ujian yang ingin dikonsultasikan..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-black/15 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="submit"
                className="flex-1 py-3.5 px-4 rounded-xl bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Kirim Pendaftaran via WhatsApp</span>
                <span>→</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
