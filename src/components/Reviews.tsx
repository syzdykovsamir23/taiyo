import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Aruzhan S.",
    text: "Атмосфера просто невероятная. Буквально чувствуешь себя в элитном баре в Токио. Фирменные роллы — это произведение искусства.",
    rating: 5,
    date: "2 недели назад"
  },
  {
    name: "Timur K.",
    text: "Лучшие дымные коктейли в Астане! Пришли на воскресную акцию и остались допоздна. Музыка, свет, обслуживание — всё на высшем уровне.",
    rating: 5,
    date: "1 месяц назад"
  },
  {
    name: "Elena M.",
    text: "Идеальное место для свидания. Потрясающий интерьер с темной, атмосферной эстетикой. Вагю было приготовлено безупречно.",
    rating: 5,
    date: "3 недели назад"
  }
];

export function Reviews() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="reviews" className="py-32 bg-black-800 relative overflow-hidden">
      {/* Cinematic Glowing Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gold-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-black-900/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-3 mb-8 text-gold-500">
            {[1, 2, 3, 4, 5].map((star, i) => (
              <motion.div
                key={star}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + (i * 0.1), duration: 0.5, type: "spring" }}
              >
                <Star size={20} fill="currentColor" className="drop-shadow-[0_0_10px_rgba(217,119,6,0.5)]" />
              </motion.div>
            ))}
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 font-light">Впечатления гостей</h2>
          <p className="text-gray-400 tracking-[0.3em] uppercase text-xs font-light">Оценка 4.5/5 в 2ГИС (1 816 отзывов)</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + (index * 0.2), ease: [0.22, 1, 0.36, 1] }}
              className="glass p-10 relative group hover:glass-gold transition-all duration-700 rounded-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full pointer-events-none transition-colors duration-700 group-hover:bg-gold-500/10" />
              
              <Quote className="absolute top-8 right-8 text-white/[0.03] group-hover:text-gold-500/20 transition-colors duration-700 w-20 h-20" />
              
              <p className="text-gray-300 font-light leading-relaxed mb-12 relative z-10 text-sm md:text-base">
                "{review.text}"
              </p>
              
              <div className="flex justify-between items-end border-t border-white/10 pt-6 mt-auto relative z-10">
                <span className="text-white font-medium tracking-wide">{review.name}</span>
                <span className="text-xs text-gray-500 tracking-wider uppercase">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://2gis.kz/astana/geo/70000001090104472/tab/reviews" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 text-gray-400 hover:text-white uppercase tracking-[0.2em] text-xs transition-colors"
          >
            Читать все отзывы в 2ГИС
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-white/20 group-hover:bg-gold-500 transition-colors duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
}