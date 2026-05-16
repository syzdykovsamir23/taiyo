import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-32 md:py-48 bg-black-900 relative overflow-hidden">
      {/* Deep Atmospheric Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-900/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Background Typography */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[20vw] font-serif text-white/[0.015] whitespace-nowrap pointer-events-none select-none">
        EXPERIENCE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Editorial Image Composition */}
          <div ref={ref} className="lg:col-span-7 relative h-[700px] w-full flex justify-center lg:justify-start">
            <motion.div 
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              animate={inView ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-4 lg:right-12 w-[80%] h-[500px] z-10"
            >
              <div className="w-full h-full relative group overflow-hidden">
                <img 
                  src="/interior-1.jpg" 
                  alt="Taiyo Interior" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-1000" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-10 left-0 w-[60%] h-[400px] z-20 glass p-2"
            >
              <div className="w-full h-full relative overflow-hidden group">
                <img 
                  src="/tokyo-1.jpg" 
                  alt="Tokyo Vibe" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 to-transparent opacity-60" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold-500/20" />
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center lg:pl-12"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="h-[1px] w-12 bg-gold-500/50" />
              <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-light">Атмосфера</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-10 leading-[1.1] font-light">
              Ночная жизнь Токио <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 italic font-medium">в Астане</span>
            </h2>
            
            <div className="space-y-8 text-gray-400 font-light leading-loose text-sm md:text-base">
              <p>
                Taiyo Bar & Terrace привносит электризующую энергию премиальной ночной жизни Токио в самое сердце Астаны. Расположившись на улице Достык, мы предлагаем непревзойденный фьюжн аутентичного японского кулинарного искусства и современной миксологии.
              </p>
              <p>
                Наша философия уходит корнями в омотенаши — японский дух гостеприимства. Каждая деталь, от кинематографичного освещения до безупречной подачи наших фирменных роллов, создана для того, чтобы перенести вас в мир современной роскоши.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
              <div className="relative group">
                <div className="absolute -inset-4 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 rounded-lg -z-10" />
                <p className="text-4xl font-serif text-white mb-3 tracking-wide flex items-start gap-1">
                  4.5<span className="text-gold-500 text-xl mt-1">★</span>
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">1800+ Отзывов в 2ГИС</p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 rounded-lg -z-10" />
                <p className="text-4xl font-serif text-white mb-3 tracking-wide">14:00</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">До 05:00 Утра</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}