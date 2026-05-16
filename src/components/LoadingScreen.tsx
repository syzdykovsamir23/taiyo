import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black-900"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full" />
          <h1 className="font-serif text-5xl md:text-7xl text-white tracking-[0.2em] relative z-10 text-glow-white">
            TAIYO
          </h1>
        </motion.div>
        
        <motion.div 
          className="mt-8 flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-gold-500 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-gold-500 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-gold-500 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}