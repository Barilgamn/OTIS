import { motion } from 'motion/react';
import { Facebook, Phone, Settings, ArrowUp, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [doorState, setDoorState] = useState<'open' | 'closed'>('open');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDoorState('closed');
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const leftVariants = {
    open: { x: "-100%", transition: { duration: 1.5, ease: "easeInOut" } },
    closed: { x: "0%", transition: { duration: 1.5, ease: "easeInOut" } }
  };

  const rightVariants = {
    open: { x: "100%", transition: { duration: 1.5, ease: "easeInOut" } },
    closed: { x: "0%", transition: { duration: 1.5, ease: "easeInOut" } }
  };

  return (
    <div className="min-h-screen bg-[#000f24] flex flex-col justify-between font-sans text-gray-200 relative overflow-hidden z-10 selection:bg-[#FF4971] selection:text-white border-[12px] border-[#001736] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] box-border">
      
      {/* ELEVATOR CONTROL PANEL (Inside the elevator) */}
      <div className="absolute right-3 md:right-12 top-1/2 -translate-y-1/2 w-14 md:w-24 bg-[#d1d5da]/85 md:bg-[#d1d5da] border-[2px] md:border-[3px] border-[#aab0b8] rounded-lg md:rounded-xl p-2 md:p-4 shadow-[6px_6px_20px_rgba(0,0,0,0.35),inset_1px_1px_3px_rgba(255,255,255,0.7)] md:shadow-[10px_10px_30px_rgba(0,0,0,0.4),inset_2px_2px_5px_rgba(255,255,255,0.7)] flex flex-col items-center gap-2 md:gap-5 z-[60] opacity-70 md:opacity-100 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
        
        <div className="w-full text-center text-[7px] md:text-[9px] uppercase font-bold text-[#8a8d91] mb-0.5 md:mb-2 tracking-widest leading-none">
           OTIS
        </div>

        <button 
          onClick={() => setDoorState('open')}
          className={`w-10 h-10 md:w-16 md:h-16 rounded-full border shadow-[1px_1px_4px_rgba(0,0,0,0.15),inset_1px_1px_2px_rgba(255,255,255,0.9)] md:shadow-[2px_2px_8px_rgba(0,0,0,0.15),inset_2px_2px_4px_rgba(255,255,255,0.9)] md:border-2 flex flex-col items-center justify-center transition-all focus:outline-none group ${doorState === 'open' ? 'bg-[#d8dbdf] border-[#8c9298] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] md:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2)]' : 'bg-[#e8ebee] border-[#b5b8bd] hover:brightness-105 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] active:bg-[#d8dbdf]'}`}
        >
          <div className={`flex gap-0.5 md:gap-1 text-[11px] md:text-xl font-bold leading-none ${doorState === 'open' ? 'text-[#FF4971]' : 'text-[#54585A] group-active:text-[#00285A]'}`}>
             <span>◁</span>
             <span>▷</span>
          </div>
          <span className={`text-[5px] md:text-[7px] font-bold mt-0.5 md:mt-1 scale-90 md:scale-100 ${doorState === 'open' ? 'text-[#FF4971]' : 'text-[#54585A]'}`}>НЭЭХ</span>
        </button>

        <button 
          onClick={() => setDoorState('closed')}
          className={`w-10 h-10 md:w-16 md:h-16 rounded-full border shadow-[1px_1px_4px_rgba(0,0,0,0.15),inset_1px_1px_2px_rgba(255,255,255,0.9)] md:shadow-[2px_2px_8px_rgba(0,0,0,0.15),inset_2px_2px_4px_rgba(255,255,255,0.9)] md:border-2 flex flex-col items-center justify-center transition-all focus:outline-none group ${doorState === 'closed' ? 'bg-[#d8dbdf] border-[#8c9298] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] md:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2)]' : 'bg-[#e8ebee] border-[#b5b8bd] hover:brightness-105 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] active:bg-[#d8dbdf]'}`}
        >
          <div className={`flex text-[11px] md:text-xl font-bold leading-none ${doorState === 'closed' ? 'text-[#FF4971]' : 'text-[#54585A] group-active:text-[#00285A]'}`}>
             <span>▷</span>
             <span>◁</span>
          </div>
          <span className={`text-[5px] md:text-[7px] font-bold mt-0.5 md:mt-1 scale-90 md:scale-100 ${doorState === 'closed' ? 'text-[#FF4971]' : 'text-[#54585A]'}`}>ХААХ</span>
        </button>
      </div>

      {/* ELEVATOR DOORS */}
      <div className="absolute inset-x-0 inset-y-0 z-50 pointer-events-none flex">
        {/* LEFT DOOR */}
        <motion.div 
          className="w-1/2 h-full bg-[#00285A] flex justify-end relative shadow-[5px_0_20px_rgba(0,0,0,0.4)] z-10 border-r border-[#1a4073] overflow-hidden"
          variants={leftVariants}
          animate={doorState}
          initial="closed"
        >
          {/* Logo Left Half */}
          <div className="absolute top-1/2 right-0 translate-x-[50%] -translate-y-1/2 flex items-center justify-center pointer-events-none z-10">
            <span className="text-[#FF4971] text-[80px] md:text-[200px] font-black tracking-tighter uppercase leading-none opacity-90 drop-shadow-lg">OTIS</span>
          </div>
          {/* Subtle metallic reflection */}
          <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] z-0"></div>
          {/* Edge detail */}
          <div className="w-1.5 h-full bg-[#001736] shadow-[-2px_0_5px_rgba(0,0,0,0.5)] z-20 relative"></div>
        </motion.div>
        
        {/* RIGHT DOOR */}
        <motion.div 
          className="w-1/2 h-full bg-[#00285A] flex justify-start relative shadow-[-5px_0_20px_rgba(0,0,0,0.4)] z-10 border-l border-[#1a4073] overflow-hidden"
          variants={rightVariants}
          animate={doorState}
          initial="closed"
        >
          {/* Logo Right Half */}
          <div className="absolute top-1/2 left-0 -translate-x-[50%] -translate-y-1/2 flex items-center justify-center pointer-events-none z-10">
            <span className="text-[#FF4971] text-[80px] md:text-[200px] font-black tracking-tighter uppercase leading-none opacity-90 drop-shadow-lg">OTIS</span>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(-90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] z-0"></div>
          <div className="w-1.5 h-full bg-[#001736] shadow-[2px_0_5px_rgba(0,0,0,0.5)] z-20 relative"></div>
        </motion.div>
      </div>

      {/* Accent Line */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        className="absolute left-0 top-[20%] w-1.5 h-[60%] bg-[#FF4971] origin-top"
      ></motion.div>
      
      {/* Background Graphic (Like an etched interior panel) */}
      <div 
        className="absolute top-0 right-0 w-[70%] md:w-1/2 h-full bg-gradient-to-br from-white/[0.03] to-transparent -z-10" 
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
      ></div>

      {/* Header Container */}
      <header className="px-8 md:px-20 py-8 flex items-center justify-between z-20">
        {/* Real Logo based on the user's uploaded image wordmark */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
          className="flex items-center"
        >
          <div className="flex items-center select-none cursor-pointer hover:scale-105 transition-transform duration-300 pointer-events-auto">
            <span className="text-[#FF4971] text-5xl md:text-6xl font-black tracking-[-0.05em] uppercase leading-none drop-shadow-[0_4px_12px_rgba(255,73,113,0.2)]">
              OTIS
            </span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="hidden md:flex items-center space-x-3 text-[11px] tracking-[2px] uppercase text-slate-400 font-semibold"
        >
          <span className="w-8 h-px bg-[#FF4971]"></span>
          <span>Engineering Excellence</span>
        </motion.div>
      </header>

      {/* Main Content Container */}
      <main className="flex-grow px-8 md:px-20 flex flex-col justify-center max-w-7xl">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
        >
          {/* Status Pill & Animated Gear Icon */}
          <div className="inline-flex items-center px-5 py-2 bg-[#001736]/80 backdrop-blur-md border border-[#FF4971]/30 text-white rounded-full text-[12px] font-bold uppercase tracking-[1.5px] mb-8 shadow-lg shadow-black/25">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="mr-3 text-[#FF4971]"
            >
               <Settings size={16} strokeWidth={2.5} />
            </motion.div>
            Шинэчлэл хийгдэж байна
          </div>

          <h2 className="text-5xl md:text-[72px] font-light mb-6 md:mb-8 text-white leading-[1.05] tracking-tight max-w-[800px]">
            Вэбсайт <br className="hidden md:block" />
            <strong className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4971] to-[#ff7d99] drop-shadow-sm">шинэчлэгдэж байна</strong>
          </h2>
          
          <p className="text-lg md:text-[22px] text-slate-300 max-w-[600px] leading-[1.7] font-medium mb-4">
            Бид тун удахгүй илүү шинэлэг өнгө төрхтэйгөөр эргэн ирэх болно. Бидэнтэй холбоотой байгаад баярлалаа.
          </p>
        </motion.div>
      </main>

      {/* Footer / Contact Links Container */}
      <motion.footer 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }}
        className="bg-[#001736]/70 backdrop-blur-md border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] px-8 md:px-20 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0 z-10"
      >
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <a 
            href="tel:72880001" 
            className="group flex flex-col transition-all hover:opacity-85"
          >
            <span className="text-[11px] uppercase tracking-[1.5px] text-slate-400 font-medium mb-1.5 inline-flex items-center">
              <Phone size={14} className="mr-2 text-[#FF4971]" />
              Холбоо барих
            </span>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[#FF4971] transition-colors">
              +976 7288 0001
            </span>
          </a>

          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[1.5px] text-slate-400 font-medium mb-1.5">
               И-мэйл хаяг
            </span>
            <span className="text-2xl font-bold tracking-tight text-white">
               info@otis.mn
            </span>
          </div>
        </div>

        <a 
          href="https://www.facebook.com/otis.mn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-center space-x-3 bg-[#00285A] border border-[#FF4971]/20 text-white px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-[14px] font-bold shadow-lg hover:bg-[#FF4971] hover:border-[#FF4971] hover:-translate-y-1 hover:shadow-xl"
        >
          <Facebook size={20} className="group-hover:animate-pulse" />
          <span className="tracking-wide">FACEBOOK ХУУДАС</span>
        </a>
      </motion.footer>
    </div>
  );
}
