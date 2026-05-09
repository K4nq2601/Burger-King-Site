import { motion } from 'motion/react';
import { QrCode, Star, Gift, FastForward } from 'lucide-react';

export function Rewards() {
  return (
    <section className="py-16 md:py-24 px-4 bg-bk-red text-bk-cream relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-bk-red-hover rounded-full opacity-50 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-bk-brown/20 rounded-full opacity-50 blur-3xl" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Mock Phone Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md relative"
        >
          <div className="aspect-[9/16] bg-bk-brown rounded-[3rem] p-4 border-8 border-bk-cream shadow-2xl relative overflow-hidden flex flex-col relative z-20">
             <div className="absolute inset-0 bg-gradient-to-b from-bk-amber/20 to-bk-brown" />
             {/* Mock App UI */}
             <div className="relative z-10 text-center pt-8">
               <h3 className="font-black text-3xl uppercase tracking-tight text-bk-amber mb-2">Royal Perks</h3>
               <div className="w-24 h-24 bg-bk-cream rounded-full mx-auto flex items-center justify-center border-4 border-bk-amber mb-4">
                 <Star size={40} className="text-bk-red fill-bk-red" />
               </div>
               <div className="text-4xl font-black text-white">4,250 <span className="text-xl">pts</span></div>
               <p className="text-bk-cream-dark text-sm mt-2 font-medium">You have a Free Whopper!</p>
             </div>
             
             <div className="mt-auto relative z-10 space-y-3">
               <div className="bg-bk-cream/10 p-3 rounded-2xl flex items-center gap-3 backdrop-blur-sm">
                 <div className="w-10 h-10 bg-bk-amber rounded-full flex items-center justify-center shrink-0">
                    <Gift className="text-bk-brown" size={20} />
                 </div>
                 <div className="text-left">
                   <div className="font-bold text-sm text-white">Free Any Size Fries</div>
                   <div className="text-xs text-bk-cream-dark font-medium">Use 250 Crowns</div>
                 </div>
               </div>
               <div className="bg-bk-cream/10 p-3 rounded-2xl flex items-center gap-3 backdrop-blur-sm">
                 <div className="w-10 h-10 bg-bk-red rounded-full flex items-center justify-center shrink-0">
                    <FastForward className="text-bk-cream" size={20} />
                 </div>
                 <div className="text-left">
                   <div className="font-bold text-sm text-white">Mobile Order & Pay</div>
                   <div className="text-xs text-bk-cream-dark font-medium">Skip the line</div>
                 </div>
               </div>
             </div>
          </div>

          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-bk-amber rounded-3xl -z-10 rotate-12 shadow-lg" />
        </motion.div>

        {/* Text / CTA Area */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bk-amber text-bk-brown font-bold uppercase tracking-widest text-xs rounded-full mb-6">
            BK App Exclusive
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">
            Get Crowned <br /> With Royal Perks.
          </h2>
          <p className="text-lg text-bk-cream-dark font-medium mb-8 max-w-xl mx-auto lg:mx-0">
            Earn 10 Crowns for every $1 spent. Redeem for free food, get exclusive deals, and skip the line when you order ahead.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-bk-cream text-bk-red rounded-full font-black uppercase tracking-tight text-lg hover:bg-bk-amber hover:text-bk-brown transition-colors w-full sm:w-auto text-center">
              Download the App
            </button>
            <div className="flex items-center gap-3 hidden sm:flex">
              <div className="bg-bk-cream p-2 rounded-xl">
                <QrCode size={48} className="text-bk-brown" />
              </div>
              <div className="text-left text-sm font-medium text-bk-cream-dark">
                Scan to<br/>Download
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
