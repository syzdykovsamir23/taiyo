import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black-900 flex items-center justify-center">
      {/* Video Background with Parallax */}
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0 origin-top">
        <div className="absolute inset-0 bg-gradient-to-b from-black-900/60 via-black-900/30 to-black-900 z-10" />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_100%)] z-10 opacity-90" />
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Massive Background Kanji */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden"
      >
        <span className="text-[40vw] font-serif text-white/[0.02] select-none leading-none tracking-tighter">
          太陽
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex justify-center items-center gap-6"
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
          <span className="text-gold-400 uppercase tracking-[0.4em] text-xs font-light">Главное место притяжения Астаны</span>
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-7xl md:text-8xl lg:text-[10rem] text-white tracking-[0.15em] mb-6 leading-none text-glow-white font-light"
        >
          TAIYO
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="text-gray-400 text-sm md:text-base font-light tracking-[0.3em] uppercase mb-16 max-w-2xl mx-auto"
        >
          Бар и Терраса <span className="mx-4 text-gold-500/50">|</span> Японский Фьюжн
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#menu" 
            className="group relative px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-light tracking-[0.2em] uppercase text-xs overflow-hidden w-full sm:w-auto hover:border-gold-500/50 transition-colors duration-500"
          >
            <span className="relative z-10 group-hover:text-gold-400 transition-colors duration-500">Изучить меню</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/10 to-gold-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </a>
          <a 
            href="https://2gis.kz/astana/geo/70000001090104472" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gold-600/10 border border-gold-500/30 text-gold-400 font-light tracking-[0.2em] uppercase text-xs hover:bg-gold-500 hover:text-black-900 transition-all duration-500 w-full sm:w-auto backdrop-blur-md shadow-[0_0_20px_rgba(217,119,6,0.1)] hover:shadow-[0_0_30px_rgba(217,119,6,0.3)]"
          >
            Резерв стола
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-light">Вниз</span>
        <motion.div 
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }} 
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0"
        />
      </motion.div>
    </section>
  );
}