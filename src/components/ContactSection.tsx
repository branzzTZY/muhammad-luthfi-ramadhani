import { useState, type FormEvent } from 'react';
import { Check, Copy, FileText } from 'lucide-react';
import { studentProfile } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCv: () => void;
}

export function ContactSection({ onOpenCv }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [institution, setInstitution] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(studentProfile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!senderName.trim() || !message.trim()) {
      setErrorMsg('Mohon lengkapi nama pengirim dan isi pesan terlebih dahulu.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
    setSenderName('');
    setInstitution('');
    setMessage('');
  };

  return (
    <section id="kontak" className="bg-[#F8FAFC] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#1D4ED8]">
                05. Kontak &amp; Korespondensi Resmi
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Informasi Sekolah &amp; Permintaan Dokumen
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Portofolio ini disusun sebagai dokumentasi resmi kegiatan akademik dan
                praktikum kompetensi kejuruan untuk keperluan evaluasi pembelajaran,
                pembimbingan kejuruan, serta persiapan Praktik Kerja Lapangan (PKL).
              </p>

              <dl className="mt-8 space-y-5 border-t border-slate-200 pt-6 text-sm">
                <div>
                  <dt className="text-xs font-medium text-slate-500">Satuan Pendidikan</dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    {studentProfile.school} — Jurusan {studentProfile.major}
                  </dd>
                  <dd className="mt-0.5 text-slate-600">{studentProfile.schoolAddress}</dd>
                </div>

                <div>
                  <dt className="text-xs font-medium text-slate-500">
                    Surel Akademik Siswa
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm font-medium text-slate-900">
                      {studentProfile.email}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#1D4ED8]" aria-hidden="true" />
                          <span>Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Salin Surel</span>
                        </>
                      )}
                    </button>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onOpenCv}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                <FileText className="h-4 w-4 text-[#1D4ED8]" aria-hidden="true" />
                <span>Buka Ringkasan CV Cetak</span>
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
            <h3 className="text-lg font-bold tracking-tight text-slate-950">
              Kirim Catatan atau Tanggapan Evaluasi
            </h3>
            <p className="mt-1.5 text-sm text-slate-600">
              Formulir ini ditujukan bagi guru pembimbing, penguji kejuruan, atau mitra
              industri yang ingin memberikan catatan evaluasi maupun undangan kegiatan.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-lg border border-slate-200 bg-[#F8FAFC] p-6">
                <p className="text-sm font-semibold text-slate-900">
                  Pesan Anda telah dicatat dalam sesi portofolio ini.
                </p>
                <p className="mt-1.5 text-sm text-slate-600">
                  Terima kasih atas perhatian dan masukan yang diberikan kepada{' '}
                  {studentProfile.fullName} ({studentProfile.classRoom}).
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex min-h-10 items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors duration-150 hover:bg-slate-50"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="sender-name"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Nama Lengkap Pengirim
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Contoh: Drs. Ahmad Fauzi"
                      className="mt-1.5 block min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sender-institution"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Instansi / Jabatan (Opsional)
                    </label>
                    <input
                      id="sender-institution"
                      type="text"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="Contoh: Guru Produktif TITL"
                      className="mt-1.5 block min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="sender-message"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Isi Pesan atau Catatan
                  </label>
                  <textarea
                    id="sender-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan tanggapan, evaluasi praktikum, atau informasi kerja sama..."
                    className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15"
                  />
                </div>

                {errorMsg && (
                  <p role="alert" className="text-xs font-medium text-red-700">
                    {errorMsg}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#1D4ED8] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                  >
                    Kirim Catatan Resmi
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
