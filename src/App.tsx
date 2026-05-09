/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Deals } from './components/Deals';
import { Menu } from './components/Menu';
import { Rewards } from './components/Rewards';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-bk-red selection:text-bk-cream">
      <Navbar />
      <main>
        <Hero />
        <Deals />
        <Menu />
        <Rewards />
      </main>
      <Footer />
    </div>
  );
}
