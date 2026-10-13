import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react';

const ITEMS = [
  { text: 'Paper Submission Open: 14 Oct – 5 Nov 2026', icon: Calendar, highlight: true },
  { text: 'Conference Date: 12 November 2026', icon: CheckCircle2, highlight: false },
  { text: 'Publication in Peer-Reviewed IARJSET Journal', icon: BookOpen, highlight: false },
  { text: 'Indexed in Google Scholar Citations', icon: Award, highlight: false },
  { text: '11 Technical Tracks • VLSI, 5G/6G, AI/ML, Embedded Systems', icon: CheckCircle2, highlight: false },
  { text: 'Author Presentation & Participation Certificates Awarded', icon: Award, highlight: false },
  { text: 'Maharaja Institute of Technology Mysore (Autonomous VTU)', icon: CheckCircle2, highlight: false },
];

export default function MarqueeBanner() {
  return (
    <div className="relative z-30 bg-[#000000] text-[#fdfdf7] py-3 overflow-hidden border-y border-black/20 select-none">
      <motion.div
        className="flex shrink-0 items-center whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 32,
        }}
      >
        {/* Repeat list 4 times for continuous seamless scrolling */}
        {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 mx-6 text-[13px] font-normal tracking-tight">
              <Icon className={`w-3.5 h-3.5 shrink-0 ${item.highlight ? 'text-[#ff4000]' : 'text-[#0096f7]'}`} />
              <span className="text-[#fdfdf7] font-medium">{item.text}</span>
              <span className="text-[#0096f7] font-bold ml-4">✦</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
