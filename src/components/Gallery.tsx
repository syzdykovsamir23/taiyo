import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  { src: '/interior-1.jpg', span: 'col-span-2 row-span-2' },
  { src: '/sushi-1.jpg', span: 'col-span-1 row-span-1' },
  { src: '/cocktail-1.jpg', span: 'col-span-1 row-span-2' },
  { src: '/chef-1.jpg', span: 'col-span-1 row-span-1' },
  { src: '/food-1.jpg', span: 'col-span-2 row-span-1' },
  { src: '/tokyo-1.jpg', span: 'col-span-1 row-span-1' },
];

export function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="gallery" className="py-32 bg-black-900 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 font-light">Атмосфера</h2>
            <p className="text-gold-500 tracking-[0.3em] uppercase text-xs font-light">Взгляд на Taiyo</p>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <span className="text-gray-500 text-xs tracking-[0.2em] uppercase">Подписывайтесь</span>
            <div className="w-16 h-[1px] bg-white/20" />
            <a href="#" className="text-white hover:text-gold-500 transition-colors text-sm font-serif tracking-widest">IG</a>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-2 md:gap-4 h-[60vh] md:h-[900px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
              animate={inView ? { opacity: 1, filter: 'blur(0px)', scale: 1 } : {}}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden group rounded-sm ${img.span} bg-black-800`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-1000 z-10" />
              <img 
                src={img.src} 
                alt="Gallery image" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[2s] ease-out"
              />
              {/* Premium Inner Shadow */}
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] z-20 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 z-20 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}