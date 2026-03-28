/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Story from './Story';
import Services from './Services';
import WhyUs from './WhyUs';
import CTA from './CTA';
import Contact from './Contact';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Story />
        <Services />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
