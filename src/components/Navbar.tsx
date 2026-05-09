import { Menu, User, ShoppingBag, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Navbar() {
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 100], [96, 72]);
  const bgColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(245, 235, 218, 1)', 'rgba(245, 235, 218, 0.95)']
  );
  const shadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 4px 6px -1px rgba(80, 35, 20, 0.1), 0 2px 4px -2px rgba(80, 35, 20, 0.1)']
  );

  return (
    <motion.nav
      style={{ height, backgroundColor: bgColor, boxShadow: shadow }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors backdrop-blur-sm px-4"
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Mobile Menu */}
        <button className="lg:hidden p-2 -ml-2 text-bk-brown">
          <Menu size={28} />
        </button>

        {/* Desktop Links (Left) */}
        <div className="hidden lg:flex items-center gap-6 font-bold text-xl uppercase tracking-tighter">
          <a href="#order" className="hover:text-bk-red transition-colors">Order</a>
          <a href="#offers" className="hover:text-bk-red transition-colors">Offers</a>
          <a href="#menu" className="hover:text-bk-red transition-colors">Menu</a>
        </div>

        {/* Logo */}
        <a href="#" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-2">
          <motion.div
            style={{ 
               scale: useTransform(scrollY, [0, 100], [1, 0.8]),
               y: useTransform(scrollY, [0, 100], [8, 0])
             }}
            className="aspect-square px-4 md:px-[1.125rem] bg-bk-red text-bk-cream rounded-full flex flex-col items-center justify-center font-black shadow-xl transform origin-top border-[4px] md:border-[5px] border-bk-cream"
          >
            <span className="text-lg md:text-2xl tracking-tighter leading-[0.9] mt-1">BURGER</span>
            <span className="text-lg md:text-2xl tracking-tighter leading-[0.9] text-bk-amber">KING</span>
          </motion.div>
        </a>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-bk-cream-dark rounded-full font-bold text-sm tracking-tight hover:bg-bk-brown hover:text-bk-cream transition-colors">
            <User size={18} />
            <span>Sign Up / Sign In</span>
          </button>
          
          <button className="hidden md:flex items-center gap-2 px-4 py-2 font-bold text-sm tracking-tight hover:text-bk-red transition-colors">
            <MapPin size={18} />
            <span>Locate</span>
          </button>

          <button className="p-3 bg-bk-brown text-bk-cream rounded-full hover:bg-bk-red transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-bk-amber text-bk-brown text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-bk-cream">
              0
            </span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
