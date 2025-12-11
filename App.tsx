import React, { useState, useEffect, useRef } from 'react';
import { CalendarIcon, MapPinIcon, ClockIcon, MusicIcon, MuteIcon, BookIcon, RundownIcon } from './components/Icons';
import Countdown from './components/Countdown';
import { MandalaTop, FlowerDivider } from './components/Decorations';

// --- Types & Data ---
const EVENT_DATA = {
  title: "Musyawarah Besar XVII",
  subtitle: "Keluarga Besar Mahasiswa STMIK Bina Mulia Palu",
  theme: "Reposisi Organisasi untuk Membangun SDM yang Berintegritas Tinggi Terhadap Lembaga",
  // Updated to 09:00 WITA based on user request ("9 AM")
  date: new Date('2025-12-11T09:00:00+08:00'),
  location: "Perpustakaan STMIK Bina Mulia Palu",
  address: "Jl. Suprapto No. 38, Palu, Sulawesi Tengah",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=STMIK+Bina+Mulia+Palu"
};

const RUNDOWN_ITEMS = [
  { time: "09.00 – 09.05", event: "Pembukaan MC" },
  { time: "09.05 – 09.15", event: "Menyanyikan Lagu Indonesia Raya" },
  { time: "09.15 – 09.25", event: "Menyanyikan Lagu Mars STMIK Bina Mulia Palu" },
  { time: "09.25 – 09.35", event: "Laporan Ketua Panitia" },
  { time: "09.35 – 09.45", event: "Sambutan Ketua Umum" },
  { time: "09.45 – 09.55", event: "Sambutan Dewan Pendiri" },
  { time: "09.55 – 10.10", event: "Sambutan Wakil Ketua III" },
  { time: "10.10 – 10.20", event: "Pembacaan Doa" },
];

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio
  useEffect(() => {
    // Using a royalty-free track or placeholder
    audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112778.mp3");
    audioRef.current.loop = true;
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed interaction required", e));
      setIsPlaying(true);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-6 max-w-lg w-full animate-float">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-amber-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
               {/* Placeholder Logo */}
               <BookIcon className="w-10 h-10 text-amber-500" />
            </div>
          </div>
          <h3 className="text-slate-300 tracking-[0.2em] text-sm uppercase mb-2">Undangan Digital</h3>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
            Musyawarah Besar <br />
            <span className="gold-gradient-text">Ke-XVII</span>
          </h1>
          <p className="text-slate-400 mb-8 italic">STMIK Bina Mulia Palu</p>
          
          <button 
            onClick={handleOpenInvitation}
            className="group relative px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/30 flex items-center justify-center mx-auto gap-2"
          >
            <BookIcon className="w-4 h-4" />
            <span>Buka Undangan</span>
            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 animate-ping opacity-30"></div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-slate-950 pb-20">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/20 rounded-full blur-[100px]"></div>
      </div>

      <MandalaTop />

      {/* Music Control */}
      <button 
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-40 w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-amber-500 shadow-lg hover:bg-slate-800 transition-colors"
      >
        {isPlaying ? <MusicIcon className="w-4 h-4 animate-pulse" /> : <MuteIcon className="w-4 h-4" />}
      </button>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-2xl pt-12 md:pt-20">
        
        {/* Header Section */}
        <header className="text-center mb-12" data-aos="fade-up">
          <p className="text-amber-500 font-medium tracking-widest text-xs uppercase mb-4">Assalamu’alaikum Warahmatullahi Wabarakatuh</p>
          <div className="glass-panel p-8 rounded-2xl shadow-2xl border-t border-white/10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
             
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Musyawarah Besar</h2>
             <h1 className="text-5xl md:text-6xl font-serif font-bold gold-gradient-text mb-6">XVII</h1>
             <p className="text-slate-300 text-lg">Keluarga Besar Mahasiswa</p>
             <p className="text-slate-400 font-medium">STMIK Bina Mulia Palu</p>
             
             <FlowerDivider />
             
             <p className="text-sm text-slate-400 mb-2">Dengan tema:</p>
             <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
               <p className="italic text-slate-200 leading-relaxed font-serif">
                 "{EVENT_DATA.theme}"
               </p>
             </div>
          </div>
        </header>

        {/* Date & Time Section */}
        <section className="mb-12">
           <h3 className="text-center text-xl font-serif text-white mb-8">Waktu & Tempat</h3>
           <div className="grid gap-6">
              {/* Date Card */}
              <div className="glass-panel p-6 rounded-xl flex items-start gap-4 hover:bg-slate-900/40 transition-colors">
                <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500">
                  <CalendarIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Hari & Tanggal</h4>
                  <p className="text-slate-300">Kamis, 11 Desember 2025</p>
                </div>
              </div>

              {/* Time Card */}
              <div className="glass-panel p-6 rounded-xl flex items-start gap-4 hover:bg-slate-900/40 transition-colors">
                <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500">
                  <ClockIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Waktu</h4>
                  <p className="text-slate-300">09:00 WITA - Selesai</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-panel p-6 rounded-xl flex items-start gap-4 hover:bg-slate-900/40 transition-colors">
                <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Lokasi</h4>
                  <p className="text-slate-300 font-medium">{EVENT_DATA.location}</p>
                  <p className="text-slate-400 text-sm mt-1">{EVENT_DATA.address}</p>
                  <a 
                    href={EVENT_DATA.mapsUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block mt-3 text-xs font-bold text-amber-500 hover:text-amber-400 uppercase tracking-wide border-b border-amber-500/30 pb-0.5"
                  >
                    Lihat Peta Google
                  </a>
                </div>
              </div>
           </div>
        </section>

        {/* Rundown Section */}
        <section className="mb-12">
           <h3 className="text-center text-xl font-serif text-white mb-8">Susunan Acara</h3>
           <div className="glass-panel p-6 md:p-8 rounded-xl relative overflow-hidden">
             <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/50">
               <div className="bg-amber-500/10 p-2 rounded-lg text-amber-500">
                 <RundownIcon className="w-5 h-5" />
               </div>
               <h4 className="text-white font-bold text-lg">Rundown Kegiatan</h4>
             </div>

             <div className="space-y-0">
               {RUNDOWN_ITEMS.map((item, index) => (
                 <div key={index} className="flex gap-4 relative group">
                    {/* Timeline Line */}
                    {index !== RUNDOWN_ITEMS.length - 1 && (
                      <div className="absolute left-[15px] top-10 bottom-[-10px] w-[2px] bg-slate-800 group-hover:bg-amber-900/30 transition-colors"></div>
                    )}
                    
                    {/* Time Bubble */}
                    <div className="flex-shrink-0 w-[32px] h-[32px] rounded-full bg-slate-900 border border-slate-700 group-hover:border-amber-500/50 flex items-center justify-center relative z-10 transition-colors mt-1">
                      <span className="text-xs font-bold text-slate-400 group-hover:text-amber-500">{index + 1}</span>
                    </div>

                    {/* Content */}
                    <div className="pb-8 flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-1">
                         <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-slate-800 text-amber-500 w-fit">
                           {item.time} WITA
                         </span>
                      </div>
                      <p className="text-slate-200 font-serif text-lg leading-tight group-hover:text-white transition-colors">
                        {item.event}
                      </p>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Countdown Section */}
        <section className="text-center mb-16">
           <FlowerDivider />
           <p className="text-slate-400 mb-6 uppercase tracking-widest text-xs">Menuju Acara</p>
           <Countdown targetDate={EVENT_DATA.date} />
        </section>

        {/* Closing */}
        <footer className="text-center pb-8 pt-8 border-t border-slate-800">
          <p className="text-slate-300 text-sm italic mb-6">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Saudara/i berkenan hadir dalam acara ini.
          </p>
          <p className="text-amber-500 font-medium text-xs uppercase mb-8">Wassalamu’alaikum Warahmatullahi Wabarakatuh</p>
          
          <div className="flex justify-center items-center gap-2 text-slate-600 text-[10px] uppercase tracking-widest">
            <span>© 2025 Panitia Mubes XVII</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;