import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Tracks from './components/Tracks';
import Dates from './components/Dates';
import Publication from './components/Publication';
import Registration from './components/Registration';
import CampusBanner from './components/CampusBanner';
import Committee from './components/Committee';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfdf7] text-[#000000] font-sans antialiased selection:bg-[#0096f7]/20 selection:text-black">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <About />
      <VisionMission />
      <Tracks />
      <Dates />
      <Publication />
      <Registration />
      <CampusBanner />
      <Committee />
      <Contact />
      <Footer />
    </div>
  );
}
