import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Download, FileText, ExternalLink } from 'lucide-react';
import { conferenceData } from '../data/conference';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Vision & Mission', href: '#vision-mission' },
  { name: 'Tracks', href: '#tracks' },
  { name: 'Dates', href: '#dates' },
  { name: 'Publication', href: '#publications' },
  { name: 'Registration', href: '#registration' },
  { name: 'Committee', href: '#committee' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const brochureUrl = '/brochure.pdf';
  const formUrl = conferenceData.registration.formUrl;

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled styling (shadow + glass blur)
      setScrolled(currentScrollY > 20);

      // Reveal ONLY when scrolling UP, hide when scrolling DOWN
      if (currentScrollY <= 30) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down -> hide
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> show
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Main Architectural Nav — College Logo & Dept Logo Only */}
      <nav
        className={`transition-all duration-200 border-b border-black/[0.08] ${
          scrolled
            ? 'bg-[#fdfdf7]/95 backdrop-blur-md shadow-subtle py-3'
            : 'bg-[#fdfdf7]/95 backdrop-blur-md py-3.5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Left: ONLY Official College Logo and Department Logo */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none shrink-0">
              <div className="flex items-center gap-2 shrink-0">
                {/* College Logo */}
                <img
                  src="/mit-logo-circle.png"
                  alt="Maharaja Institute of Technology Mysore Official Logo"
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0 drop-shadow-xs"
                />
                <span className="text-black/20 text-xs hidden sm:inline">|</span>
                {/* Department Logo */}
                <img
                  src="/emiters-logo-circle.png"
                  alt="eMITERS Department Logo"
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0 drop-shadow-xs"
                />
              </div>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl font-medium tracking-tight text-[#000000] leading-none">
                    RTECE 2026
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-[#0096f7]/10 text-[#0096f7] px-2 py-0.5 rounded-[12px] font-semibold border border-[#0096f7]/20">
                    ECE
                  </span>
                </div>
                <span className="text-[10px] text-[#666666] font-mono leading-tight mt-1">
                  MIT Mysore • Dept. of ECE
                </span>
              </div>
            </a>

            {/* Center: Minimalist Nav Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[13px] xl:text-[14px] text-[#000000] hover:text-[#0096f7] transition-colors tracking-tight font-normal"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right: Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Samara Pill Ghost Button for Brochure */}
              <a
                href={brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-[14px] font-normal rounded-[24px] bg-black/[0.04] hover:bg-black/[0.08] text-[#000000] transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#0096f7]" />
                <span>Brochure</span>
              </a>

              {/* Samara Primary Button */}
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0096f7] hover:brightness-105 active:scale-[0.98] text-[#ffffff] text-[14px] font-medium px-5 py-[14px] rounded-[12px] shadow-subtle transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Register</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile: Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-[12px] text-[#000000] hover:bg-black/[0.05] transition-colors focus:outline-none"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-y-0 right-0 w-80 max-w-full bg-[#fdfdf7] z-50 flex flex-col justify-between p-6 shadow-samara-sm border-l border-black/10 overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-2">
                  <img
                    src="/mit-logo-circle.png"
                    alt="MIT Mysore"
                    className="w-8 h-8 object-contain shrink-0"
                  />
                  <span className="text-black/20 text-xs">|</span>
                  <img
                    src="/emiters-logo-circle.png"
                    alt="eMITERS"
                    className="w-8 h-8 object-contain shrink-0"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-[#000000] text-sm leading-tight">RTECE 2026</h4>
                  <p className="text-[10px] text-[#0096f7] font-mono leading-tight">MIT Mysore • Dept. of ECE</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-[12px] text-slate-500 hover:text-black cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 py-6 my-auto">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-[#000000] hover:text-[#0096f7] py-3 px-3 rounded-[12px] hover:bg-black/[0.03] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#999999] text-xs">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-black/[0.08] space-y-2.5">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#0096f7] hover:brightness-105 text-[#ffffff] font-medium py-[14px] px-4 rounded-[12px] text-center shadow-subtle transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>Register Online</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-black/[0.04] hover:bg-black/[0.08] text-[#000000] font-normal py-2.5 px-4 rounded-[24px] text-center transition-colors flex items-center justify-center gap-2 text-xs"
              >
                <Download className="w-3.5 h-3.5 text-[#0096f7]" />
                <span>Download Brochure</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
