import { motion } from 'motion/react';
import { Timer, Smartphone } from 'lucide-react';

const DEALS = [
  {
    id: 1,
    title: "2 for $6 Mix & Match",
    description: "Choose from Whopper, Original Chicken, or Fish.",
    image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=800&auto=format&fit=crop",
    expiresIn: "03:14:00",
    appExclusive: false,
  },
  {
    id: 2,
    title: "Free Fries Friday",
    description: "Get free medium fries with any purchase.",
    image: "https://images.unsplash.com/photo-1573080496597-154dfb983058?q=80&w=800&auto=format&fit=crop",
    expiresIn: "12:00:00",
    appExclusive: true,
  },
  {
    id: 3,
    title: "Family Bundle",
    description: "3 Whoppers, 3 Cheeseburgers, 3 Medium Fries.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    expiresIn: "48:00:00",
    appExclusive: false,
  }
];

export function Deals() {
  return (
    <section id="offers" className="py-16 md:py-24 px-4 bg-bk-brown text-bk-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-bk-amber mb-2">Exclusives & Deals</h2>
            <p className="text-bk-cream-dark font-medium text-lg">Hurry, these flame-grilled offers won't last!</p>
          </div>
          <button className="px-6 py-3 bg-bk-cream text-bk-brown rounded-full font-bold uppercase tracking-tight hover:bg-bk-red hover:text-bk-cream transition-colors self-start md:self-auto">
            View All Deals
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEALS.map((deal, idx) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-bk-cream rounded-3xl overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                {deal.appExclusive && (
                  <div className="absolute top-4 left-4 bg-bk-amber text-bk-brown text-xs font-black uppercase tracking-tight px-3 py-1.5 rounded-full flex items-center gap-1">
                    <Smartphone size={14} />
                    App Exclusive
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-black tracking-tight text-bk-brown uppercase mb-2 group-hover:text-bk-red transition-colors">{deal.title}</h3>
                <p className="text-bk-brown/80 font-medium mb-6 flex-grow">{deal.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-bk-red font-bold text-sm">
                    <Timer size={16} />
                    <span>Ends in {deal.expiresIn}</span>
                  </div>
                  <button className="bg-bk-red text-bk-cream w-10 h-10 rounded-full flex items-center justify-center font-black text-xl group-hover:scale-110 transition-transform">
                    +
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
