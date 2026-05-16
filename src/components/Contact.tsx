import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-32 bg-black-900 border-t border-white/5 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/tokyo-1.jpg')] bg-cover bg-center opacity-[0.03] grayscale pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="h-[1px] w-12 bg-gold-500/50" />
              <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-light">Контакты</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-16 font-light">Посетите Taiyo</h2>
            
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-14 h-14 rounded-full border border-white/10 group-hover:border-gold-500/50 flex items-center justify-center flex-shrink-0 text-white/50 group-hover:text-gold-500 transition-all duration-500">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white uppercase tracking-[0.2em] text-xs mb-3 font-medium">Локация</h3>
                  <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">Улица Достык, 4<br/>Район Нура, Астана</p>
                  <p className="text-gray-500 text-xs mt-2 tracking-widest">Z05P3H0</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-14 h-14 rounded-full border border-white/10 group-hover:border-gold-500/50 flex items-center justify-center flex-shrink-0 text-white/50 group-hover:text-gold-500 transition-all duration-500">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white uppercase tracking-[0.2em] text-xs mb-3 font-medium">Время работы</h3>
                  <p className="text-gray-400 font-light text-sm md:text-base">Ежедневно</p>
                  <p className="text-gold-400 font-medium mt-1 text-lg">14:00 – 05:00</p>
                  <div className="mt-6 p-5 glass border-l-2 border-l-gold-500 rounded-r-lg">
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                      <span className="text-gold-500 font-medium uppercase tracking-widest text-xs block mb-1">Акция</span> 
                      Вс-Чт до 18:00<br/>Дымные коктейли по 6 000 ₸
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-14 h-14 rounded-full border border-white/10 group-hover:border-gold-500/50 flex items-center justify-center flex-shrink-0 text-white/50 group-hover:text-gold-500 transition-all duration-500">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white uppercase tracking-[0.2em] text-xs mb-3 font-medium">Бронирование</h3>
                  <p className="text-gray-400 font-light text-sm md:text-base">+7‒776‒111‒66‒33</p>
                  <div className="flex gap-6 mt-6">
                    <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                      <Instagram size={16} /> Instagram
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-500 transition-colors flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-[600px] w-full relative rounded-xl overflow-hidden group"
          >
            {/* Map Placeholder with Cinematic Polish */}
            <div className="absolute inset-0 bg-black-900 z-0" />
            <div className="absolute inset-0 bg-[url('/tokyo-1.jpg')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/50 to-transparent z-10" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 z-20 pointer-events-none rounded-xl" />
            
            <div className="absolute inset-0 z-30 flex items-center justify-center p-6">
              <div className="glass-gold p-10 text-center rounded-2xl max-w-sm w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="w-16 h-16 mx-auto border border-gold-500/30 rounded-full flex items-center justify-center mb-6 text-gold-500">
                  <MapPin size={24} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-3xl text-white mb-6 font-light">Как нас найти</h3>
                <a 
                  href="https://2gis.kz/astana/geo/70000001090104472" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-4 bg-gold-600/20 border border-gold-500/50 text-gold-400 text-xs uppercase tracking-[0.2em] hover:bg-gold-500 hover:text-black-900 transition-all duration-500 rounded-sm font-medium"
                >
                  Открыть в 2ГИС
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
