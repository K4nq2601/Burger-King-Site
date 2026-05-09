import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-bk-brown text-bk-cream rounded-full font-bold uppercase tracking-widest text-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-bk-amber animate-pulse" />
          Flame-Grilled Since 1954
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.9] text-bk-red mb-6 drop-shadow-sm"
        >
          Have It <br />
          <span className="text-bk-brown">Your Way.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl font-medium text-bk-brown max-w-2xl mb-10"
        >
          100% beef, flame-grilled to perfection. Order now for exclusive app deals and fresh delivery.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-bk-red text-bk-cream rounded-full font-black text-xl uppercase tracking-tighter hover:bg-bk-red-hover hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2">
            Order Now
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-bk-cream border-2 border-bk-brown text-bk-brown rounded-full font-black text-xl uppercase tracking-tighter hover:bg-bk-brown hover:text-bk-cream active:scale-95 transition-all shadow-sm">
            Offers & Deals
          </button>
        </motion.div>

      </div>

      {/* Decorative burger image - abstract layout */}
      <motion.div 
        initial={{ opacity: 0, y: 100, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        className="mt-16 max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl bg-bk-cream-dark aspect-video md:aspect-[21/9]"
      >
         <img 
           src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000&auto=format&fit=crop" 
           alt="Flame grilled burger"
           className="w-full h-full object-cover object-center"
         />
         {/* Badge */}
         <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-bk-amber text-bk-brown p-4 rounded-full font-black uppercase text-center transform rotate-12 shadow-lg banner-badge">
           <div className="text-xl md:text-3xl leading-none">$5</div>
           <div className="text-xs md:text-sm">Value<br/>Meal</div>
         </div>
      </motion.div>

    </section>
  );
}
