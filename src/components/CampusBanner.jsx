import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { conferenceData } from '../data/conference';

export default function CampusBanner() {
  return (
    <section className="relative py-24 bg-[#fdfdf7] overflow-hidden border-b border-black/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Architectural Showcase Container */}
        <div className="bg-[#f5f2de] border border-black/[0.08] rounded-[18px] p-8 sm:p-12 shadow-samara-md relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/mit-logo-circle.png"
                    alt="MIT Mysore"
                    className="w-9 h-9 object-contain shrink-0"
                  />
                  <span className="text-black/20 text-xs">|</span>
                  <img
                    src="/emiters-logo-circle.png"
                    alt="eMITERS"
                    className="w-9 h-9 object-contain shrink-0"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[24px] bg-white border border-black/[0.08] text-xs font-mono tracking-wider uppercase text-[#000000]">
                  <MapPin className="w-3.5 h-3.5 text-[#0096f7]" />
                  <span>Belavadi, Mysuru, Karnataka</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-5xl font-regola-light text-[#000000] tracking-[-0.035em] leading-tight">
                The Campus Experience at <br />
                <span className="font-regola-medium text-[#000000]">
                  Maharaja Institute of Technology
                </span>
              </h2>

              <p className="text-base text-[#666666] leading-relaxed max-w-xl font-normal">
                Nestled in a serene landscape surrounded by lush greenery, Maharaja Institute of Technology Mysore provides state-of-the-art engineering infrastructure, cutting-edge semiconductor and VLSI laboratories, and an inspiring academic atmosphere.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#registration"
                  className="bg-[#0096f7] hover:brightness-105 active:scale-[0.98] text-[#ffffff] text-sm font-medium px-6 py-[14px] rounded-[12px] shadow-subtle transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Register for RTECE 2026</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="px-5 py-[14px] text-sm font-normal rounded-[24px] bg-white hover:bg-black/[0.04] text-[#000000] border border-black/[0.08] transition-all inline-flex items-center gap-2"
                >
                  <span>Campus Directions</span>
                </a>
              </div>

            </div>

            {/* Right Architectural Campus Photo Frame (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-[12px] overflow-hidden border border-black/10 shadow-subtle">
                <img
                  src="/mit-campus-hero.jpg"
                  alt="MIT Mysore Main Campus Building"
                  className="w-full h-64 object-cover object-center"
                />
              </div>

              {/* Architectural Spec Badges Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#ffffff] rounded-[12px] p-4 border border-black/[0.08] shadow-subtle text-center">
                  <div className="text-2xl font-regola-light text-[#000000]">2007</div>
                  <div className="text-[11px] font-mono text-[#666666] uppercase tracking-wider mt-0.5">Established</div>
                </div>

                <div className="bg-[#ffffff] rounded-[12px] p-4 border border-black/[0.08] shadow-subtle text-center">
                  <div className="text-2xl font-regola-light text-[#0096f7]">3,000+</div>
                  <div className="text-[11px] font-mono text-[#666666] uppercase tracking-wider mt-0.5">Students</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
