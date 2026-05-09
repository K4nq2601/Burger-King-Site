import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ["Flame Grilled Burgers", "Chicken & More", "Sides", "Drinks", "Sweets"];

const MENU_ITEMS = [
  { id: 1, name: "Whopper", category: "Flame Grilled Burgers", cal: "670 Cal", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "Double Whopper", category: "Flame Grilled Burgers", cal: "900 Cal", img: "https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Bacon King", category: "Flame Grilled Burgers", cal: "1,150 Cal", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop" },
  { id: 4, name: "Original Chicken Sandwich", category: "Chicken & More", cal: "660 Cal", img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=400&auto=format&fit=crop" },
  { id: 5, name: "Chicken Fries", category: "Chicken & More", cal: "280 Cal", img: "https://images.unsplash.com/photo-1626082895617-2c5c56d784a0?q=80&w=400&auto=format&fit=crop" },
  { id: 6, name: "French Fries", category: "Sides", cal: "380 Cal", img: "https://images.unsplash.com/photo-1573080496597-154dfb983058?q=80&w=400&auto=format&fit=crop" },
];

export function Menu() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-bk-brown mb-8 text-center">
          Explore Our Menu
        </h2>

        {/* Category Scroll */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-10 pb-4 snap-x">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`snap-center whitespace-nowrap px-6 py-3 rounded-full font-bold uppercase tracking-tight transition-colors ${
                activeTab === cat 
                  ? "bg-bk-brown text-bk-cream" 
                  : "bg-bk-cream-dark text-bk-brown hover:bg-bk-brown/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={item.id}
                className="bg-white rounded-3xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-[#EAE0D0]"
              >
                <div className="w-full aspect-square mb-4 rounded-full bg-bk-cream-dark overflow-hidden p-2">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="font-bold text-bk-brown text-lg leading-tight uppercase tracking-tight mb-1">{item.name}</h3>
                <p className="text-bk-brown/60 text-sm font-medium mb-4">{item.cal}</p>
                <button className="mt-auto w-full py-2 bg-bk-cream-dark text-bk-brown hover:bg-bk-amber hover:text-bk-brown rounded-full font-bold uppercase tracking-tight text-sm transition-colors">
                  Add to Order
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
