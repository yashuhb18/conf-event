import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Volume2, ExternalLink, Compass, Target, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';
import { conferenceData } from '../data/conference';

export default function VisionMission() {
  const convener = conferenceData.convener;
  const videoId = 'ZQVUc8iubWM';
  const startTime = 132;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=1&mute=1&enablejsapi=1&rel=0&playsinline=1`;

  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  const [hasScrolledIn, setHasScrolledIn] = useState(false);

  useEffect(() => {
    if (inView && !hasScrolledIn) {
      setHasScrolledIn(true);
    }
  }, [inView, hasScrolledIn]);

  const missionPoints = [
    'To groom the students with strong foundations of electronics and communication engineering and to facilitate them to pursue higher education and research.',
    'To educate and prepare the students to be competent to face the challenges of the industry/society and/or to become successful entrepreneurs.',
    'To provide ethical and value-based education by promoting activities addressing the societal needs.',
    'Enable students to develop skills to solve complex technological problems of current times and also provide a framework for promoting collaborative and multidisciplinary activities.',
  ];

  return (
    <section id="vision-mission" className="py-24 bg-[#fdfdf7] bg-blueprint-subtle relative border-b border-black/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[24px] bg-black/[0.04] border border-black/10 text-xs font-mono tracking-wider uppercase text-[#000000] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0096f7]" />
            <span>Academic Leadership &amp; Department Charter</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-regola-light text-[#000000] tracking-[-0.035em] leading-tight">
            Electronics &amp; Communication Engineering
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#666666] leading-relaxed font-normal tracking-tight">
            Department message from Head of Department {convener.name} and the core Vision &amp; Mission governing our academic standards.
          </p>
        </div>

        {/* 2-Column Command Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Autoplay Video & HOD Profile (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Framed Video Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative rounded-[18px] overflow-hidden border border-black/10 bg-[#000000] shadow-samara-md group"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                {hasScrolledIn ? (
                  <iframe
                    src={embedUrl}
                    title="Dr. Parimala R.V. - ECE Department Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-black/90 text-white p-6 text-center cursor-pointer" onClick={() => setHasScrolledIn(true)}>
                    <div className="w-16 h-16 rounded-full bg-[#0096f7] flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                    <span className="text-sm font-medium">Scroll to Play HOD Video Address</span>
                    <span className="text-xs text-white/60 font-mono mt-1">Starts at 2:12 (Dept. of ECE Overview)</span>
                  </div>
                )}
              </div>

              {/* Floating Status Banner */}
              <div className="bg-[#f5f2de] border-t border-black/[0.08] px-4 py-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0096f7] animate-pulse" />
                  <span className="font-mono text-[#000000] font-medium">HOD Video Address</span>
                  <span className="text-[#666666] hidden sm:inline">•</span>
                  <span className="text-[#666666] hidden sm:inline">Autoplays upon scroll</span>
                </div>

                <a
                  href={`https://www.youtube.com/watch?v=${videoId}&t=${startTime}s`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0096f7] hover:underline font-medium inline-flex items-center gap-1"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            {/* Dr. Parimala R.V. Profile Card with real photo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 sm:p-7 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            >
              <div className="flex items-center gap-4">
                {/* Photo Avatar - perfectly fitted 1:1 portrait */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-black/10 bg-[#f5f2de] shrink-0 shadow-subtle flex items-center justify-center">
                  <img
                    src={convener.image || '/faculty/parimala.jpg'}
                    alt={convener.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-medium text-[#000000] tracking-tight">
                      {convener.name}
                    </h3>
                    {convener.qualification && (
                      <span className="text-[11px] font-mono font-medium text-[#0096f7] bg-[#0096f7]/10 px-2.5 py-0.5 rounded-[12px] border border-[#0096f7]/20">
                        {convener.qualification}
                      </span>
                    )}
                  </div>

                  <div className="text-xs sm:text-sm font-medium text-[#000000] tracking-tight">
                    {convener.role}
                  </div>
                  
                  <div className="text-xs text-[#666666] leading-relaxed">
                    Department of Electronics &amp; Communication Engineering <br />
                    <span className="text-[#000000] font-medium">Convener, RTECE 2026 National Conference</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-black/[0.06]">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-[12px] bg-black/[0.04] hover:bg-black/[0.08] text-[#000000] text-xs font-medium transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Contact Dept.</span>
                  <span>→</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Vision & Mission Architectural Sand Card (6 Cols) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="bg-[#f5f2de] border border-black/[0.08] rounded-[18px] p-8 sm:p-10 shadow-subtle space-y-8"
            >
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-black/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-[8px] bg-white border border-black/[0.08] flex items-center justify-center text-[#0096f7]">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#0096f7] font-semibold">
                      Department Charter
                    </span>
                    <h3 className="text-xl font-medium text-[#000000] tracking-tight">
                      Vision And Mission
                    </h3>
                  </div>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-[12px] bg-white border border-black/[0.08] text-[#000000]">
                  MIT Mysore
                </span>
              </div>

              {/* Vision Block */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#0096f7]" />
                  <h4 className="text-base font-medium text-[#000000] tracking-tight uppercase font-mono text-sm">
                    Vision
                  </h4>
                </div>
                <p className="text-sm sm:text-[15px] text-[#000000] leading-relaxed pl-6 border-l-2 border-[#0096f7]">
                  To be recognized by the society at large as offering value based quality education to groom the next generation entrepreneurs, leaders and researchers in the field of electronics and communication to meet the challenges at the global level.
                </p>
              </div>

              {/* Mission Block */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0096f7]" />
                  <h4 className="text-base font-medium text-[#000000] tracking-tight uppercase font-mono text-sm">
                    Mission
                  </h4>
                </div>

                <div className="space-y-3 pl-1">
                  {missionPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#333333] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0096f7] shrink-0 mt-2" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Institutional Pills */}
              <div className="pt-4 border-t border-black/[0.08] flex flex-wrap gap-2 text-[11px] font-mono text-[#666666]">
                <span className="px-2.5 py-1 rounded-[12px] bg-white border border-black/[0.06]">Intake: 120 Students</span>
                <span className="px-2.5 py-1 rounded-[12px] bg-white border border-black/[0.06]">Autonomous VTU</span>
                <span className="px-2.5 py-1 rounded-[12px] bg-white border border-black/[0.06]">eMITERS Association</span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
