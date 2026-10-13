import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, GraduationCap, Check, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { conferenceData } from '../data/conference';

export default function Publication() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const { publication } = conferenceData;

  const iarjsetFeatures = [
    'Double-Blind Peer-Reviewed Evaluation',
    'Open Access Online Publication & Permanent Archival',
    'Official ISSN Digital Citation Metrics',
    'Certificates of Publication Awarded to Authors',
  ];

  const scholarFeatures = [
    'Automated Citation Tracking & Metrics',
    'Integration with Author Google Scholar Profiles',
    'International Search Engine Discoverability',
    'Permanent Academic Visibility for Student Research',
  ];

  return (
    <section id="publications" className="py-24 bg-[#fdfdf7] relative border-b border-black/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[24px] bg-black/[0.04] border border-black/10 text-xs font-mono tracking-wider uppercase text-[#000000] mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#0096f7]" />
            <span>Journal Publication &amp; Indexing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-regola-light text-[#000000] tracking-[-0.035em] leading-tight">
            Peer-Reviewed Journal &amp; Google Scholar
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#666666] leading-relaxed font-normal tracking-tight">
            All presented papers undergo peer review and will be published in reputed peer-reviewed journals with global Google Scholar indexing.
          </p>
        </div>

        {/* Two Architectural Cards Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Card 1: IARJSET */}
          <div className="bg-[#f5f2de] border border-black/[0.08] rounded-[18px] p-8 sm:p-9 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-[12px] bg-[#ffffff] border border-black/[0.08] flex items-center justify-center text-[#0096f7]">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-[12px] bg-[#ffffff] text-[#000000] border border-black/[0.08]">
                  Peer-Reviewed Journal
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#0096f7] font-semibold uppercase tracking-wider">
                  Publication Partner
                </span>
                <h3 className="text-2xl sm:text-3xl font-regola-light text-[#000000] tracking-tight">
                  {publication.journal} Journal
                </h3>
                <p className="text-xs text-[#666666] font-mono leading-relaxed pt-1">
                  {publication.fullName}
                </p>
              </div>

              <div className="space-y-3 pt-6 my-6 border-t border-black/[0.08]">
                {iarjsetFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#000000]">
                    <div className="w-4 h-4 rounded-full bg-[#0096f7]/10 flex items-center justify-center text-[#0096f7] shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0096f7] hover:brightness-105 active:scale-[0.98] text-[#ffffff] text-sm font-medium py-[14px] rounded-[12px] shadow-subtle transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Visit IARJSET Journal Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Google Scholar */}
          <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-8 sm:p-9 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-[12px] bg-black/[0.04] border border-black/[0.08] flex items-center justify-center text-[#0096f7]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-[12px] bg-black/[0.04] text-[#000000] border border-black/[0.08]">
                  Citation Indexing
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#0096f7] font-semibold uppercase tracking-wider">
                  Indexing &amp; Impact
                </span>
                <h3 className="text-2xl sm:text-3xl font-regola-light text-[#000000] tracking-tight">
                  Google Scholar
                </h3>
                <p className="text-xs text-[#666666] font-mono leading-relaxed pt-1">
                  Global Academic Citations &amp; Digital Indexing
                </p>
              </div>

              <div className="space-y-3 pt-6 my-6 border-t border-black/[0.08]">
                {scholarFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#000000]">
                    <div className="w-4 h-4 rounded-full bg-black/[0.06] flex items-center justify-center text-[#000000] shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a
                href={publication.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black/[0.04] hover:bg-black/[0.08] text-[#000000] text-sm font-medium py-[14px] rounded-[12px] border border-black/10 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Google Scholar Profile</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
