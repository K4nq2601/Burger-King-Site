export function Footer() {
  return (
    <footer className="bg-bk-brown text-bk-cream pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div>
            <h4 className="font-black uppercase tracking-tight mb-4 text-bk-amber">Order</h4>
            <ul className="space-y-2 text-sm font-medium text-bk-cream-dark">
              <li><a href="#" className="hover:text-white transition-colors">Order Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Offers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-tight mb-4 text-bk-amber">BK Rewards</h4>
            <ul className="space-y-2 text-sm font-medium text-bk-cream-dark">
              <li><a href="#" className="hover:text-white transition-colors">Download App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Earn Points</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Redeem Offers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-tight mb-4 text-bk-amber">Company</h4>
            <ul className="space-y-2 text-sm font-medium text-bk-cream-dark">
              <li><a href="#" className="hover:text-white transition-colors">About BK</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Franchise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-tight mb-4 text-bk-amber">Support</h4>
            <ul className="space-y-2 text-sm font-medium text-bk-cream-dark">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find a Restaurant</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-bk-cream/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-bk-red text-white flex items-center justify-center font-black rounded-full text-xs border-2 border-bk-brown">BK</div>
            <span className="text-sm text-bk-cream-dark font-medium">&copy; 2026 Burger King Corporation. All Rights Reserved.</span>
          </div>
          <div className="flex gap-4 text-sm text-bk-cream-dark font-medium">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
