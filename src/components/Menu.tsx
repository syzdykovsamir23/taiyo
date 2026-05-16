import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const menuCategories = ['Фирменные Роллы', 'Горячие Блюда', 'Барное Меню', 'Специальные Предложения'];

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image: string;
  highlight?: boolean;
};

const menuItems: Record<string, MenuItem[]> = {
  'Фирменные Роллы': [
    { name: 'Golden Dragon Roll', desc: 'Угорь, авокадо, соус унаги, съедобное сусальное золото', price: '6,500 ₸', image: '/sushi-1.jpg' },
    { name: 'Taiyo Volcano', desc: 'Острый тунец, крабовый микс, опаленный лосось, спайси майо', price: '5,800 ₸', image: '/sushi-2.jpg' },
    { name: 'Truffle Wagyu Maki', desc: 'Обжаренная говядина вагю, трюфельное масло, спаржа', price: '8,200 ₸', image: '/food-1.jpg' },
    { name: 'Ocean Pearl', desc: 'Гребешок, черная тобико, юдзу кошо, огурец', price: '6,000 ₸', image: '/sushi-1.jpg' },
  ],
  'Горячие Блюда': [
    { name: 'Miso Glazed Black Cod', desc: 'Премиальная черная треска, сладкий сайкё мисо, хадзиками', price: '12,500 ₸', image: '/chef-1.jpg' },
    { name: 'Wagyu Ishiyaki', desc: 'Говядина вагю A5, приготовленная на горячем камне у вашего стола', price: '24,000 ₸', image: '/food-1.jpg' },
    { name: 'Yuzu Kosho Chicken', desc: 'Куриное бедро на гриле, паста из перца юдзу, зеленый лук', price: '4,500 ₸', image: '/chef-1.jpg' },
    { name: 'Spicy Seafood Udon', desc: 'Креветки, кальмары, мидии, толстая лапша удон, острый бульон', price: '5,200 ₸', image: '/food-1.jpg' },
  ],
  'Барное Меню': [
    { name: 'Tokyo Drift', desc: 'Японский виски, юдзу, сироп матча, яичный белок', price: '4,500 ₸', image: '/cocktail-1.jpg' },
    { name: 'Kyoto Sunset', desc: 'Джин Roku, сливовое вино, лист шисо, газированная вода', price: '4,200 ₸', image: '/whiskey-1.jpg' },
    { name: 'Smoked Samurai', desc: 'Мескаль, имбирный ликер, подается с дымом', price: '5,000 ₸', image: '/cocktail-1.jpg' },
    { name: 'Sake Flight', desc: 'Дегустационный сет из 3 видов премиального саке', price: '7,500 ₸', image: '/whiskey-1.jpg' },
  ],
  'Специальные Предложения': [
    { name: 'Smoke Cocktail Special', desc: 'Вс-Чт до 18:00', price: '6,000 ₸', image: '/cocktail-1.jpg', highlight: true },
    { name: 'Omakase Experience', desc: 'Авторский сет от шеф-повара из сезонных продуктов (предзаказ за 24 часа)', price: '35,000 ₸', image: '/chef-1.jpg' },
  ]
};

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="menu" className="py-32 bg-black-800 relative">
      {/* Subtle cinematic texture */}
      <div className="absolute inset-0 bg-[url('/tokyo-1.jpg')] bg-cover bg-center opacity-[0.02] mix-blend-screen pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 font-light">Кулинарное Искусство</h2>
          <p className="text-gold-500 tracking-[0.3em] uppercase text-xs font-light">Откройте наше меню</p>
        </motion.div>

        {/* Elegant Category Selector */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative text-xs md:text-sm uppercase tracking-[0.2em] pb-3 transition-colors duration-300 group"
            >
              <span className={`relative z-10 ${activeCategory === cat ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                {cat}
              </span>
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-500"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8"
            >
              {menuItems[activeCategory].map((item, index) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                  className={`group relative flex items-center gap-6 p-6 rounded-xl transition-all duration-500 hover:bg-white/[0.02] ${
                    item.highlight ? 'bg-gold-900/5' : ''
                  }`}
                >
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                  
                  {/* Highlight Border */}
                  {item.highlight && (
                    <div className="absolute inset-0 border border-gold-500/20 rounded-xl pointer-events-none" />
                  )}

                  <div className="w-28 h-28 flex-shrink-0 overflow-hidden rounded-full border border-white/5 shadow-2xl relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out"
                    />
                  </div>
                  <div className="flex-grow relative z-10">
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-gold-400 transition-colors duration-300 font-light tracking-wide">
                        {item.name}
                      </h3>
                      <div className="flex-grow border-b border-white/10 mx-6 transform translate-y-[-6px]" />
                      <span className="text-gold-500 whitespace-nowrap font-medium tracking-wider">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
                    {item.highlight && (
                      <span className="inline-block mt-3 text-[9px] uppercase tracking-[0.2em] text-gold-400 border border-gold-500/30 px-3 py-1 rounded-full">
                        Спецпредложение
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-24 text-center">
          <a 
            href="https://2gis.kz/astana/geo/70000001090104472" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 glass border border-gold-600/30 text-gold-400 font-light tracking-[0.2em] uppercase text-xs hover:bg-gold-600/10 hover:border-gold-500 transition-all duration-500 rounded-sm"
          >
            Смотреть полное меню в 2ГИС
          </a>
        </div>
      </div>
    </section>
  );
}