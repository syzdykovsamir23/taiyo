export function Footer() {
  return (
    <footer className="bg-black-900 border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-900/5 rounded-t-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <a href="#" className="font-serif text-4xl tracking-[0.2em] text-white font-light">
              TAIYO<span className="text-gold-500">.</span>
            </a>
            <p className="text-gray-500 text-xs tracking-[0.3em] uppercase mt-4 font-light">Бар и Терраса</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['О нас', 'Меню', 'Галерея', 'Контакты'].map((item) => (
              <a 
                key={item}
                href={`#${item === 'О нас' ? 'about' : item === 'Меню' ? 'menu' : item === 'Галерея' ? 'gallery' : 'contact'}`} 
                className="text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} TAIYO BAR & TERRACE. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
          <p className="mt-4 md:mt-0">СДЕЛАНО С <span className="text-gold-500/50">♥</span> ДЛЯ АСТАНЫ</p>
        </div>
      </div>
    </footer>
  );
}