import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Award, CheckCircle2, ArrowRight, Download, MapPin } from 'lucide-react';
import { conferenceData } from '../data/conference';

function calculateTimeLeft(targetDateStr) {
  const target = new Date(targetDateStr).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Hero() {
  const formUrl = conferenceData.registration.formUrl;
  const brochureUrl = '/brochure.pdf';
  const deadlineIso = conferenceData.dates?.lastSubmission?.iso || '2026-11-05T23:59:59+05:30';
  const deadlineDateStr = conferenceData.dates?.lastSubmission?.date || '5 Nov 2026';

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(deadlineIso));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadlineIso));
    }, 1000);
    return () => clearInterval(timer);
  }, [deadlineIso]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-28 bg-[#fdfdf7] bg-blueprint-subtle overflow-hidden border-b border-black/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Top Eyebrow / Model Specs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-8 border-b border-black/[0.08]">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[24px] bg-black/[0.04] border border-black/10 text-xs text-[#000000]">
            <span className="w-2 h-2 rounded-full bg-[#0096f7] animate-pulse" />
            <span className="font-medium tracking-tight">Call for Papers Active</span>
            <span className="text-black/30">•</span>
            <span className="text-[#666666]">Maharaja Institute of Technology Mysore</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#666666]">
            <span>VTU AUTONOMOUS</span>
            <span className="text-black/20">•</span>
            <span>AICTE APPROVED</span>
            <span className="text-black/20">•</span>
            <span className="text-[#000000] font-medium">EST. 2007</span>
          </div>
        </div>

        {/* Hero Grid: Left Content (7 Cols) & Right Architectural Model Showcase (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Architectural Typography & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-mono tracking-widest uppercase text-[#0096f7] font-semibold">
                  National Conference
                </span>
                <span className="text-black/20">/</span>
                <span className="text-xs font-mono tracking-widest uppercase text-[#666666]">
                  RTECE 2026
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-regola-light text-[#000000] tracking-[-0.035em] leading-[1.06]">
                Recent Trends in <br />
                <span className="font-regola-medium text-[#000000]">
                  Electronics &amp; Communication
                </span> <br />
                <span className="text-[#666666]">Engineering</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl font-normal tracking-tight">
              A premier academic symposium convened by the <strong>Department of ECE</strong> at Maharaja Institute of Technology Mysore. Bringing together scholars, educators, and industry pioneers across 11 technical tracks with publication in the peer-reviewed <strong>IARJSET</strong> journal and Google Scholar indexing.
            </p>

            {/* Micro Quick Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[24px] bg-black/[0.04] text-xs text-[#000000]">
                <Calendar className="w-3.5 h-3.5 text-[#0096f7]" />
                <span>12 November 2026</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[24px] bg-black/[0.04] text-xs text-[#000000]">
                <BookOpen className="w-3.5 h-3.5 text-[#0096f7]" />
                <span>IARJSET Publication</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[24px] bg-black/[0.04] text-xs text-[#000000]">
                <Award className="w-3.5 h-3.5 text-[#0096f7]" />
                <span>Google Scholar Indexed</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[24px] bg-black/[0.04] text-xs text-[#000000]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0096f7]" />
                <span>Author Certificates</span>
              </span>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0096f7] hover:brightness-105 active:scale-[0.98] text-[#ffffff] text-[15px] font-medium px-6 py-[14px] rounded-[12px] shadow-subtle transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Submit Paper via Google Form</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-[14px] text-[14px] font-normal rounded-[24px] bg-black/[0.04] hover:bg-black/[0.08] text-[#000000] transition-all inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#0096f7]" />
                <span>Official Brochure</span>
              </a>

              <a
                href="#tracks"
                className="px-4 py-[14px] text-[14px] text-[#666666] hover:text-[#000000] transition-colors inline-flex items-center gap-1.5 font-normal"
              >
                <span>Explore Tracks</span>
                <span>↓</span>
              </a>
            </div>

          </div>

          {/* Right Column: Sunlit Architectural Campus Frame & Warm Sand Countdown Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Architectural Campus Photo Frame */}
            <div className="relative rounded-[18px] overflow-hidden border border-black/10 bg-[#f5f2de] shadow-samara-md group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="/mit-campus-hero.jpg"
                  alt="Maharaja Institute of Technology Mysore Campus"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Floating Architectural Badge */}
                <div className="absolute top-4 left-4 bg-[#fdfdf7]/95 backdrop-blur-md px-3 py-1.5 rounded-[12px] border border-black/10 shadow-subtle flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0096f7]" />
                  <span className="text-[12px] font-medium text-[#000000]">Belavadi, Mysuru</span>
                </div>

                {/* Floating Department Badge */}
                <div className="absolute top-4 right-4 bg-[#fdfdf7]/95 backdrop-blur-md px-2.5 py-1.5 rounded-[12px] border border-black/10 shadow-subtle flex items-center gap-2">
                  <img src="/emiters-logo-circle.png" alt="eMITERS" className="w-4 h-4 rounded-full object-contain" />
                  <span className="text-[11px] font-mono font-medium text-[#000000]">Dept. of ECE</span>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/80">Maharaja Institute of Technology Mysore</div>
                  <div className="text-[14px] font-medium leading-tight mt-0.5">Campus Infrastructure &amp; ECE Research Labs</div>
                </div>
              </div>
            </div>

            {/* Samara Warm Sand Card: Live Submission Deadline Countdown */}
            <div className="bg-[#f5f2de] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff4000] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#000000]">
                    Submission Deadline
                  </span>
                </div>
                <span className="text-xs font-medium text-[#ff4000] bg-white/70 px-2.5 py-0.5 rounded-[12px] border border-black/[0.06]">
                  {deadlineDateStr}
                </span>
              </div>

              {/* Countdown Numbers Grid */}
              <div className="grid grid-cols-4 gap-2.5 text-center">
                <div className="bg-[#fdfdf7] rounded-[12px] p-3 border border-black/[0.06] shadow-subtle">
                  <div className="text-2xl sm:text-3xl font-regola-light text-[#000000] leading-none">
                    {formatNumber(timeLeft.days)}
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#666666] mt-1.5">
                    Days
                  </div>
                </div>

                <div className="bg-[#fdfdf7] rounded-[12px] p-3 border border-black/[0.06] shadow-subtle">
                  <div className="text-2xl sm:text-3xl font-regola-light text-[#000000] leading-none">
                    {formatNumber(timeLeft.hours)}
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#666666] mt-1.5">
                    Hours
                  </div>
                </div>

                <div className="bg-[#fdfdf7] rounded-[12px] p-3 border border-black/[0.06] shadow-subtle">
                  <div className="text-2xl sm:text-3xl font-regola-light text-[#000000] leading-none">
                    {formatNumber(timeLeft.minutes)}
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#666666] mt-1.5">
                    Mins
                  </div>
                </div>

                <div className="bg-[#fdfdf7] rounded-[12px] p-3 border border-black/[0.06] shadow-subtle">
                  <div className="text-2xl sm:text-3xl font-regola-light text-[#0096f7] leading-none">
                    {formatNumber(timeLeft.seconds)}
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#666666] mt-1.5">
                    Secs
                  </div>
                </div>
              </div>

              {/* Quick Scan to Register Link */}
              <div className="mt-4 pt-3 border-t border-black/[0.08] flex items-center justify-between text-xs">
                <span className="text-[#666666] font-normal">Online manuscript submission:</span>
                <a
                  href="#registration"
                  className="text-[#0096f7] hover:underline font-medium inline-flex items-center gap-1"
                >
                  <span>Registration Details &amp; QR</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
