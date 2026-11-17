export type ProjectCategory =
  | 'Semua'
  | 'Instalasi Penerangan'
  | 'Panel & Kontrol'
  | 'Pengukuran Listrik';

export interface PracticalProject {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Semua'>;
  semester: string;
  standard: string;
  image: string;
  imageAlt: string;
  summary: string;
  objective: string;
  toolsAndMaterials: string[];
  specifications: { label: string; value: string }[];
  verificationNotes: string;
}

export interface CompetencyItem {
  number: string;
  title: string;
  reference: string;
  description: string;
  deliverables: string[];
}

export interface AcademicSubject {
  code: string;
  subject: string;
  focus: string;
  hoursPerWeek: number;
  score: number;
  predicate: string;
}

export interface TrainingRecord {
  period: string;
  title: string;
  organizer: string;
  scope: string;
}

export const studentProfile = {
  fullName: 'Muhammad Luthfi Ramadhani',
  shortName: 'M. Luthfi Ramadhani',
  classRoom: 'X TITL 2',
  major: 'Teknik Instalasi Tenaga Listrik (TITL)',
  program: 'Teknik Ketenagalistrikan',
  school: 'SMK Negeri 1 Sidayu',
  schoolShort: 'SMKN 1 Sidayu',
  location: 'Kabupaten Gresik, Jawa Timur',
  schoolAddress: 'Jl. Raya Wadeng, Kec. Sidayu, Kab. Gresik, Jawa Timur 61153',
  academicYear: '2026 / 2027',
  phase: 'Fase E (Kelas X)',
  email: 'luthfi.ramadhani.titl@smkn1sidayu.sch.id',
  portraitImage: '/src/assets/images/hero_student_luthfi_1794891209626.jpg',
  portraitAlt:
    'Potret resmi Muhammad Luthfi Ramadhani mengenakan seragam praktik bengkel listrik di laboratorium SMKN 1 Sidayu',
  formalSummary:
    'Siswa kelas X TITL 2 SMKN 1 Sidayu yang berfokus pada penguasaan dasar instalasi penerangan satu fasa, pembacaan gambar teknik kelistrikan, perakitan panel hubung bagi sederhana, serta penerapan prosedur Keselamatan dan Kesehatan Kerja (K3LH) sesuai standar PUIL 2011.',
  statementQuote:
    'Ketelitian dalam pengawatan dan kepatuhan terhadap prosedur K3LH merupakan fondasi utama setiap instalasi tenaga listrik yang aman, andal, dan berstandar industri.',
  keyMetrics: [
    { label: 'Identitas Kelas', value: 'X TITL 2', detail: 'Program Keahlian Listrik' },
    { label: 'Satuan Pendidikan', value: 'SMKN 1 Sidayu', detail: 'Gresik, Jawa Timur' },
    { label: 'Modul Praktikum', value: '4 Proyek', detail: 'Teruji di Bengkel TITL' },
    { label: 'Standar Acuan', value: 'PUIL 2011', detail: 'Kepatuhan K3LH & SNI' },
  ],
};

export const coreCompetencies: CompetencyItem[] = [
  {
    number: '01.',
    title: 'Gambar Teknik & Perencanaan Diagram',
    reference: 'Standar IEC 60617 · PUIL 2011',
    description:
      'Mampu membaca dan menggambar diagram garis tunggal (single-line diagram), diagram pengawatan (wiring diagram), serta tata letak titik lampu dan kotak kontak untuk bangunan tinggal sederhana.',
    deliverables: [
      'Simbol komponen instalasi penerangan dan pengaman',
      'Perencanaan pembagian grup beban 1 fasa',
      'Penentuan luas penampang penghantar NYA/NYM',
    ],
  },
  {
    number: '02.',
    title: 'Alat Ukur & Instrumentasi Listrik',
    reference: 'Multimeter · Tang Ampere · Megger',
    description:
      'Terampil mengoperasikan alat ukur analog maupun digital untuk memeriksa besaran tegangan AC/DC, arus beban, kontinuitas penghantar, serta nilai tahanan isolasi instalasi.',
    deliverables: [
      'Kalibrasi nol dan pemilihan batas ukur multimeter',
      'Pengujian tahanan isolasi minimal > 1.000 Ohm/Volt',
      'Identifikasi fasa, netral, dan penghantar pembumian',
    ],
  },
  {
    number: '03.',
    title: 'Instalasi Penerangan & Prosedur K3LH',
    reference: 'K3LH Bengkel · Instalasi 1 Fasa',
    description:
      'Melaksanakan pemasangan pipa pelindung PVC, kotak sambung, sakelar tunggal, sakelar seri, sakelar tukar, dan kotak kontak dengan kerapian terminasi dan disiplin alat pelindung diri.',
    deliverables: [
      'Penggunaan APD lengkap sebelum bertegangan',
      'Penyambungan kabel ekor babi dan terminal sekrup yang kuat',
      'Pemasangan klem pipa presisi pada papan kerja',
    ],
  },
  {
    number: '04.',
    title: 'Perakitan Panel Hubung Bagi & Kontrol',
    reference: 'PHB 1 Fasa · Kontaktor Magnetik',
    description:
      'Merangkai panel distribusi sederhana menggunakan rel DIN, Miniature Circuit Breaker (MCB), busbar netral dan pembumian, serta rangkaian pengendali dasar berbasis kontaktor magnetik.',
    deliverables: [
      'Pengawatan panel dengan kode warna standar fasa/netral/PE',
      'Rangkaian pengunci (self-holding) Start-Stop kontaktor',
      'Pemeriksaan hubung singkat sebelum penyambungan sumber',
    ],
  },
];

export const practicalProjects: PracticalProject[] = [
  {
    id: 'penerangan-1-fasa',
    title: 'Instalasi Penerangan 1 Fasa dengan Sakelar Seri dan Tukar',
    category: 'Instalasi Penerangan',
    semester: 'Semester Ganjil · Kelas X',
    standard: 'PUIL 2011 / SNI 0225',
    image: '/src/assets/images/project_lighting_wiring_1794891210199.jpg',
    imageAlt:
      'Papan praktik instalasi penerangan satu fasa dengan pipa PVC, kotak sambung, sakelar, dan MCB',
    summary:
      'Pemasangan sistem penerangan dua titik lampu yang dikendalikan oleh sakelar tunggal dan sakelar tukar menggunakan saluran pipa PVC pada papan praktik bengkel.',
    objective:
      'Melatih ketepatan pembacaan diagram pengawatan, kerapian pembengkokan dan pengkleman pipa PVC, serta kepatuhan kode warna penghantar fasa, netral, dan pengaman.',
    toolsAndMaterials: [
      'Kabel NYA 1,5 mm² (Cokelat, Biru, Kuning-Hijau)',
      'Pipa PVC 5/8 inci, T-Dos, dan klem pipa',
      'MCB 1 Fasa 6A dalam boks pengaman',
      'Sakelar tunggal, sakelar tukar, dan 2 fitting lampu E27',
      'Tang kombinasi, tang potong, tang pengupas, dan obeng terisolasi',
    ],
    specifications: [
      { label: 'Tegangan Kerja', value: '220 V AC / 50 Hz' },
      { label: 'Pengaman Utama', value: 'MCB 1 Fasa 6 A (Kurva C)' },
      { label: 'Penghantar', value: 'NYA 1,5 mm²' },
      { label: 'Tahanan Isolasi', value: '> 20 MΩ (Uji 500 V DC)' },
    ],
    verificationNotes:
      'Seluruh sambungan di dalam T-Dos ditutup dengan lasdop, kontinuitas penghantar nol gangguan, dan lampu L1 serta L2 beroperasi sesuai logika pensakelaran tanpa kedipan.',
  },
  {
    id: 'panel-phb-1-fasa',
    title: 'Perakitan Panel Hubung Bagi (PHB) Sederhana 1 Fasa',
    category: 'Panel & Kontrol',
    semester: 'Semester Genap · Kelas X',
    standard: 'IEC 61439 · PUIL 2011',
    image: '/src/assets/images/project_distribution_panel_1794891211125.jpg',
    imageAlt:
      'Panel Hubung Bagi satu fasa terbuka dengan deretan MCB pada rel DIN dan terminal kuningan netral serta grounding',
    summary:
      'Perakitan boks panel distribusi domestik 1 fasa yang membagi saluran utama ke beberapa grup pengaman MCB dengan pemisahan busbar netral dan pembumian.',
    objective:
      'Menguasai penataan komponen pada rel DIN, pembentukan tekukan kabel yang rapi (wiring dressing), dan terminasi penghantar ke busbar kuningan secara aman.',
    toolsAndMaterials: [
      'Enklosur boks panel besi standar bengkel',
      'Rel DIN simetris 35 mm',
      'RCCB 25A 30mA dan deretan MCB 6A / 10A',
      'Busbar kuningan terminal Netral (N) dan Pembumian (PE)',
      'Kabel NYAF 2,5 mm² dengan sepatu kabel (ferrule)',
    ],
    specifications: [
      { label: 'Kapasitas Panel', value: '1 Fasa, 220 V / Maks. 25 A' },
      { label: 'Proteksi Arus Bocor', value: 'RCCB 30 mA' },
      { label: 'Grup Cabang', value: '4 Jalur MCB (6A & 10A)' },
      { label: 'Torsi Terminal', value: 'Kencang & Terverifikasi Ferrule' },
    ],
    verificationNotes:
      'Pembagian fasa, netral, dan pembumian terpisah secara visual maupun elektrik; pengujian tombol test RCCB memutus suplai seketika sesuai spesifikasi pengaman.',
  },
  {
    id: 'pengukuran-tahanan-isolasi',
    title: 'Pengujian Tahanan Isolasi, Tegangan, dan Kontinuitas Rangkaian',
    category: 'Pengukuran Listrik',
    semester: 'Semester Ganjil · Kelas X',
    standard: 'SOP Pengujian K3LH',
    image: '/src/assets/images/project_electrical_testing_1794891211373.jpg',
    imageAlt:
      'Pengukuran terminal blok menggunakan multimeter digital dan insulation tester di meja laboratorium listrik',
    summary:
      'Prosedur pemeriksaan dan pencatatan parameter kelistrikan pada blok terminal instalasi sebelum dan sesudah pemberian tegangan sumber AC 220V.',
    objective:
      'Memastikan tidak terjadi hubung singkat maupun kebocoran arus antar penghantar melalui pengukuran tahanan isolasi dan verifikasi tegangan kerja nyata.',
    toolsAndMaterials: [
      'Digital Multimeter (True RMS)',
      'Insulation Tester (Megger 250V / 500V DC)',
      'Blok terminal rel DIN dan rangkaian uji 1 fasa',
      'Lembar kerja diagram skematik dan catatan hasil ukur',
      'Sarung tangan isolasi kerja bengkel',
    ],
    specifications: [
      { label: 'Tegangan Uji Isolasi', value: '500 V DC' },
      { label: 'Hasil Ukur Fasa–Netral', value: '48,5 MΩ (Layak)' },
      { label: 'Tegangan Terukur', value: '238,5 V AC' },
      { label: 'Uji Kontinuitas PE', value: '0,2 Ω (Terhubung Baik)' },
    ],
    verificationNotes:
      'Pengujian tahanan isolasi dilakukan dalam kondisi tanpa tegangan (dead circuit) sesuai prosedur K3LH sebelum MCB utama dinaikkan untuk pengukuran tegangan operasional.',
  },
  {
    id: 'rangkaian-pengendali-kontaktor',
    title: 'Simulasi Rangkaian Pengendali Dasar dengan Kontaktor Magnetik',
    category: 'Panel & Kontrol',
    semester: 'Semester Genap · Kelas X',
    standard: 'Dasar Otomasi Industri',
    image: '/src/assets/images/project_contactor_control_1794891211802.jpg',
    imageAlt:
      'Panel latih pengendali kontaktor magnetik dengan tombol tekan Start hijau, Stop merah, dan lampu indikator',
    summary:
      'Perancangan dan pengawatan rangkaian pengendali Direct On-Line (DOL) dasar dengan fungsi pengunci (self-holding) menggunakan tombol Start-Stop dan lampu indikator status.',
    objective:
      'Memahami cara kerja kontak bantu Normally Open (NO) dan Normally Closed (NC) pada kontaktor magnetik serta penomoran terminal kabel kontrol pada duct panel.',
    toolsAndMaterials: [
      'Kontaktor Magnetik 1 Fasa / 3 Kutub + Kontak Bantu NO/NC',
      'Push Button Hijau (NO) & Emergency/Stop Merah (NC)',
      'Lampu indikator pilot (Run & Power On)',
      'Duct kabel slotted dan penanda nomor kabel (cable marker)',
      'Terminal blok kontrol 12 pin',
    ],
    specifications: [
      { label: 'Tegangan Koil Kontrol', value: '24 V DC / 220 V AC' },
      { label: 'Konfigurasi Kontak', value: '3 Pole Utama + 1 NO / 1 NC' },
      { label: 'Fungsi Proteksi', value: 'Tombol Stop NC Prioritas' },
      { label: 'Penandaan Kabel', value: 'Label Ferrule L1, K1, S1, S2' },
    ],
    verificationNotes:
      'Penekanan tombol Start mengaktifkan koil dan mengunci rangkaian melalui kontak bantu NO; penekanan tombol Stop memutus arus koil secara langsung dengan indikator lampu yang akurat.',
  },
];

export const academicSubjects: AcademicSubject[] = [
  {
    code: 'TITL-101',
    subject: 'Dasar-Dasar Teknik Ketenagalistrikan',
    focus: 'Prinsip arus searah/bolak-balik, komponen pasif, dan sistem tenaga dasar',
    hoursPerWeek: 6,
    score: 91,
    predicate: 'Sangat Baik',
  },
  {
    code: 'TITL-102',
    subject: 'Gambar Teknik Listrik',
    focus: 'Diagram garis tunggal, diagram pengawatan, dan standar simbol IEC/PUIL',
    hoursPerWeek: 4,
    score: 89,
    predicate: 'Sangat Baik',
  },
  {
    code: 'TITL-103',
    subject: 'Alat Ukur & Pengukuran Listrik',
    focus: 'Multimeter, clamp meter, megger, dan analisis kesalahan pengukuran',
    hoursPerWeek: 4,
    score: 90,
    predicate: 'Sangat Baik',
  },
  {
    code: 'TITL-104',
    subject: 'Pekerjaan Dasar Elektromekanik & K3LH',
    focus: 'Peralatan tangan, pemipaan PVC, terminasi kabel, dan prosedur keselamatan',
    hoursPerWeek: 6,
    score: 92,
    predicate: 'Sangat Baik',
  },
  {
    code: 'TITL-105',
    subject: 'Praktikum Instalasi Penerangan Dasar',
    focus: 'Pemasangan sakelar tunggal, seri, tukar, dan box pengaman MCB 1 fasa',
    hoursPerWeek: 4,
    score: 90,
    predicate: 'Sangat Baik',
  },
];

export const trainingRecords: TrainingRecord[] = [
  {
    period: 'Agustus 2026',
    title: 'Pembekalan Keselamatan dan Kesehatan Kerja (K3LH) Bengkel Listrik',
    organizer: 'Bengkel Jurusan TITL · SMKN 1 Sidayu',
    scope:
      'Penggunaan alat pelindung diri (APD), prosedur Lockout/Tagout (LOTO) dasar, dan penanganan darurat sengatan listrik.',
  },
  {
    period: 'Oktober 2026',
    title: 'Workshop Pembacaan Skema & Perakitan Panel Distribusi 1 Fasa',
    organizer: 'Program Keahlian Teknik Ketenagalistrikan SMKN 1 Sidayu',
    scope:
      'Standarisasi kerapian pengawatan pada rel DIN, pemilihan rating MCB sesuai kapasitas hantar arus kabel, dan uji kontinuitas.',
  },
  {
    period: 'November 2026',
    title: 'Anggota Aktif Kelompok Studi Praktikum Ketenagalistrikan (KSPK)',
    organizer: 'Ekstrakurikuler Kejuruan · SMKN 1 Sidayu',
    scope:
      'Pendalaman latihan instalasi rumah tinggal dan simulasi rangkaian pengendali kontaktor sebagai persiapan uji kompetensi keahlian.',
  },
];
