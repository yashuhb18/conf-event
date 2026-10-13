import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Cpu,
  Wifi,
  Radio,
  Satellite,
  Zap,
  Bot,
  Activity,
  Boxes,
  Layers,
  Search,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { conferenceData } from '../data/conference';

const TRACK_ICONS = {
  1: Cpu,          // VLSI & Semiconductor
  2: Layers,       // Embedded Systems
  3: Wifi,         // IoT
  4: Sparkles,     // AI & ML
  5: Radio,        // 5G / 6G
  6: Satellite,    // Wireless & Optical
  7: Layers,       // Signal & Image Processing
  8: Zap,          // Wireless & Smart Systems
  9: Bot,          // Robotics
  10: Activity,    // Biomedical Electronics
  11: Boxes,       // FPGA & Digital Systems
};

const CATEGORIES = [
  { id: 'all', label: 'All Tracks (11)' },
  { id: 'vlsi', label: 'VLSI & Circuits' },
  { id: 'ai', label: 'AI & Signals' },
  { id: 'comms', label: '5G/6G & Comms' },
  { id: 'embedded', label: 'Embedded & Robotics' },
];

export default function Tracks() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredTracks = conferenceData.tracks.filter((track) => {
    const matchesCategory =
      activeCategory === 'all' || track.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      track.title.toLowerCase().includes(query) ||
      track.keywords.some((k) => k.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tracks" className="py-24 bg-[#fdfdf7] relative border-b border-black/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[24px] bg-black/[0.04] border border-black/10 text-xs font-mono tracking-wider uppercase text-[#000000] mb-4">
            <span>Call for Papers</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-regola-light text-[#000000] tracking-[-0.035em] leading-tight">
            11 Technical Research Tracks
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#666666] leading-relaxed font-normal tracking-tight">
            Authors are invited to submit original, unpublished research papers across cutting-edge electronics and communication disciplines.
          </p>

          {/* Search Bar matching Samara input spec */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#999999] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by track keyword, VLSI, 5G, AI..."
              className="w-full pl-11 pr-4 py-[14px] bg-black/[0.03] border border-black/10 rounded-[12px] text-sm text-[#000000] placeholder:text-[#999999] focus:outline-none focus:border-[#0096f7] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#666666] hover:text-[#000000]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills (24px radius) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-[24px] text-xs font-medium tracking-tight transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#000000] text-[#fdfdf7] shadow-subtle'
                    : 'bg-black/[0.04] text-[#666666] hover:text-[#000000]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 11 Track Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.map((track) => {
            const IconComponent = TRACK_ICONS[track.id] || Layers;
            return (
              <div
                key={track.id}
                className="bg-[#ffffff] border border-black/[0.08] rounded-[12px] p-6 shadow-subtle hover:shadow-samara-md hover:border-black/20 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-medium text-[#0096f7] tracking-wider uppercase">
                      Track {String(track.id).padStart(2, '0')}
                    </span>
                    <div className="w-8 h-8 rounded-[8px] bg-black/[0.03] group-hover:bg-[#0096f7]/10 flex items-center justify-center text-[#000000] group-hover:text-[#0096f7] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-medium text-[#000000] tracking-tight leading-snug">
                    {track.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {track.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-normal px-2.5 py-1 rounded-[12px] bg-black/[0.03] text-[#666666] border border-black/[0.04]"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-black/[0.06] flex items-center justify-between text-xs">
                  <span className="text-[#666666] font-mono">Peer-Reviewed Track</span>
                  <a
                    href={conferenceData.registration.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0096f7] font-medium group-hover:underline inline-flex items-center gap-1"
                  >
                    <span>Submit</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Track Count Notice */}
        {filteredTracks.length === 0 && (
          <div className="text-center py-12 bg-white rounded-[12px] border border-black/[0.08]">
            <p className="text-sm text-[#666666]">No tracks matched your search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-[#0096f7] hover:underline font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Submission Action Banner */}
        <div className="mt-14 bg-[#f5f2de] border border-black/[0.08] rounded-[18px] p-8 sm:p-10 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-mono uppercase tracking-wider text-[#0096f7] font-semibold">
              Ready to Submit Your Manuscript?
            </div>
            <h3 className="text-2xl sm:text-3xl font-regola-light text-[#000000] tracking-tight">
              Submit Before 5th November 2026
            </h3>
            <p className="text-sm text-[#666666] max-w-xl">
              All papers must be formatted in IEEE / standard format and submitted via the official Google Form portal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={conferenceData.registration.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0096f7] hover:brightness-105 active:scale-[0.98] text-[#ffffff] text-[14px] font-medium px-6 py-[14px] rounded-[12px] shadow-subtle transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Submit via Google Form</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-[14px] text-[14px] font-normal rounded-[24px] bg-black/[0.04] hover:bg-black/[0.08] text-[#000000] transition-all inline-flex items-center gap-1.5"
            >
              <span>View Brochure</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
