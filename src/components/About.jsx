import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { conferenceData } from '../data/conference';
import {
  Layers,
  BookOpen,
  Award,
  Users,
  GraduationCap,
  CheckCircle2,
  MapPin,
  Sparkles,
  ShieldCheck,
  Calendar,
  Cpu,
  ArrowRight,
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('conference');

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabs = [
    { id: 'conference', label: 'The Conference' },
    { id: 'institution', label: 'MIT Mysore' },
    { id: 'department', label: 'Dept. of ECE' },
  ];

  return (
    <section id="about" className="py-24 bg-[#fdfdf7] relative border-b border-black/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[24px] bg-black/[0.04] border border-black/10 text-xs font-mono tracking-wider uppercase text-[#000000] mb-4">
            <span>About RTECE 2026</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-regola-light text-[#000000] tracking-[-0.035em] leading-tight">
            Academic Legacy &amp; Innovation
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#666666] leading-relaxed font-normal tracking-tight">
            Nurturing engineering research, semiconductor design, and technological leadership since 2007.
          </p>

          {/* Samara Pill Tabs (24px radius) */}
          <div className="inline-flex p-1.5 bg-black/[0.04] rounded-[24px] border border-black/[0.08] mt-8 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-[24px] text-xs sm:text-sm font-medium tracking-tight transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#000000] text-[#fdfdf7] shadow-subtle'
                    : 'text-[#666666] hover:text-[#000000]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content Display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'conference' && (
              <motion.div
                key="conference"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Main Conference Card in Warm Sand */}
                <div className="bg-[#f5f2de] border border-black/[0.08] rounded-[18px] p-8 sm:p-10 shadow-subtle">
                  <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                    <div className="lg:max-w-2xl space-y-4">
                      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0096f7] font-semibold">
                        <span>National Conference Scope</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-regola-light text-[#000000] tracking-tight">
                        Advancing Contemporary Electronics &amp; Communication
                      </h3>
                      <p className="text-base text-[#666666] leading-relaxed">
                        {conferenceData.about}
                      </p>
                    </div>

                    <div className="w-full lg:w-72 shrink-0 bg-[#fdfdf7] rounded-[12px] p-5 border border-black/[0.08] shadow-subtle space-y-3">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#666666]">
                        Key Metrics
                      </div>
                      <div className="space-y-2.5 pt-1">
                        <div className="flex items-center justify-between text-sm py-1 border-b border-black/[0.06]">
                          <span className="text-[#666666]">Technical Tracks</span>
                          <span className="font-mono font-medium text-[#000000]">11 Tracks</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-1 border-b border-black/[0.06]">
                          <span className="text-[#666666]">Publication</span>
                          <span className="font-medium text-[#0096f7]">IARJSET Journal</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-1 border-b border-black/[0.06]">
                          <span className="text-[#666666]">Indexing</span>
                          <span className="font-medium text-[#000000]">Google Scholar</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-1">
                          <span className="text-[#666666]">Host</span>
                          <span className="font-medium text-[#000000]">Dept. of ECE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Pillar Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle">
                    <div className="w-10 h-10 rounded-[12px] bg-black/[0.04] flex items-center justify-center text-[#0096f7] mb-4">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-medium text-[#000000] tracking-tight">Interdisciplinary Scope</h4>
                    <p className="text-sm text-[#666666] mt-2 leading-relaxed">
                      Covering cutting-edge themes from low-power VLSI design to 5G/6G massive MIMO and tinyML neural networks.
                    </p>
                  </div>

                  <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle">
                    <div className="w-10 h-10 rounded-[12px] bg-black/[0.04] flex items-center justify-center text-[#0096f7] mb-4">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-medium text-[#000000] tracking-tight">Rigorous Peer Review</h4>
                    <p className="text-sm text-[#666666] mt-2 leading-relaxed">
                      Every submission undergoes evaluation by academic reviewers, ensuring high technical quality and citations.
                    </p>
                  </div>

                  <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle">
                    <div className="w-10 h-10 rounded-[12px] bg-black/[0.04] flex items-center justify-center text-[#0096f7] mb-4">
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-medium text-[#000000] tracking-tight">Author Recognition</h4>
                    <p className="text-sm text-[#666666] mt-2 leading-relaxed">
                      Official certificates of presentation and participation awarded to all registered contributing authors.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'institution' && (
              <motion.div
                key="institution"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-[#f5f2de] border border-black/[0.08] rounded-[18px] p-8 sm:p-10 shadow-subtle">
                  <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                    <div className="lg:max-w-2xl space-y-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/mit-logo-circle.png"
                          alt="MIT Mysore Official Crest"
                          className="w-12 h-12 object-contain shrink-0 drop-shadow-xs"
                        />
                        <div>
                          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0096f7] font-semibold">
                            <span>The Institution</span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-regola-light text-[#000000] tracking-tight">
                            Maharaja Institute of Technology Mysore
                          </h3>
                        </div>
                      </div>
                      <p className="text-base text-[#666666] leading-relaxed">
                        {conferenceData.institution.about}
                      </p>
                    </div>

                    <div className="w-full lg:w-72 shrink-0 bg-[#fdfdf7] rounded-[12px] p-5 border border-black/[0.08] shadow-subtle space-y-3">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#666666]">
                        Accreditation
                      </div>
                      <div className="space-y-2.5 pt-1">
                        <div className="flex items-center justify-between text-sm py-1 border-b border-black/[0.06]">
                          <span className="text-[#666666]">Established</span>
                          <span className="font-mono font-medium text-[#000000]">2007 by MET(R)</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-1 border-b border-black/[0.06]">
                          <span className="text-[#666666]">Status</span>
                          <span className="font-medium text-[#000000]">Autonomous</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-1 border-b border-black/[0.06]">
                          <span className="text-[#666666]">Affiliation</span>
                          <span className="font-medium text-[#000000]">VTU Belagavi</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-1">
                          <span className="text-[#666666]">Intake</span>
                          <span className="font-mono font-medium text-[#0096f7]">3,000+ Students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Campus Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle">
                    <div className="text-2xl font-regola-light text-[#000000]">Autonomous</div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mt-1">VTU Belagavi</div>
                    <p className="text-sm text-[#666666] mt-3 leading-relaxed">
                      Approved by AICTE New Delhi and Government of Karnataka, upholding high academic rigor.
                    </p>
                  </div>

                  <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle">
                    <div className="text-2xl font-regola-light text-[#000000]">Serene Campus</div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mt-1">Belavadi, Mysuru</div>
                    <p className="text-sm text-[#666666] mt-3 leading-relaxed">
                      Sprawling green landscape equipped with seminar halls, sports complexes, and computing centers.
                    </p>
                  </div>

                  <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle">
                    <div className="text-2xl font-regola-light text-[#000000]">MET(R) Trust</div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mt-1">Founded in 2007</div>
                    <p className="text-sm text-[#666666] mt-3 leading-relaxed">
                      Guided by visionary academicians, scientists, and industry leaders across Karnataka.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'department' && (
              <motion.div
                key="department"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-[#f5f2de] border border-black/[0.08] rounded-[18px] p-8 sm:p-10 shadow-subtle">
                  <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                    <div className="lg:max-w-2xl space-y-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/emiters-logo-circle.png"
                          alt="eMITERS Department Crest"
                          className="w-12 h-12 object-contain shrink-0 drop-shadow-xs"
                        />
                        <div>
                          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0096f7] font-semibold">
                            <span>Department of ECE</span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-regola-light text-[#000000] tracking-tight">
                            Department of Electronics &amp; Communication Engineering
                          </h3>
                        </div>
                      </div>
                      <p className="text-base text-[#666666] leading-relaxed">
                        {conferenceData.department.about}
                      </p>
                    </div>

                    <div className="w-full lg:w-72 shrink-0 bg-[#fdfdf7] rounded-[12px] p-5 border border-black/[0.08] shadow-subtle space-y-3">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#666666]">
                        Leadership
                      </div>
                      <div className="space-y-2.5 pt-1">
                        <div className="flex items-center justify-between text-sm py-1 border-b border-black/[0.06]">
                          <span className="text-[#666666]">Head of Dept.</span>
                          <span className="font-medium text-[#000000]">{conferenceData.department.head}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-1 border-b border-black/[0.06]">
                          <span className="text-[#666666]">Annual Intake</span>
                          <span className="font-mono font-medium text-[#000000]">120 Students</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-1 border-b border-black/[0.06]">
                          <span className="text-[#666666]">Student Clubs</span>
                          <span className="font-medium text-[#0096f7]">eMITERS, Yanthronics</span>
                        </div>
                        <div className="flex items-center justify-between text-sm py-1">
                          <span className="text-[#666666]">Laboratories</span>
                          <span className="font-medium text-[#000000]">VTU &amp; Research</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clubs & Labs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle">
                    <div className="w-11 h-11 rounded-full p-0.5 border border-black/10 bg-white mb-4 shadow-subtle flex items-center justify-center">
                      <img src="/emiters-logo-circle.png" alt="eMITERS" className="w-full h-full object-contain rounded-full" />
                    </div>
                    <h4 className="text-lg font-medium text-[#000000] tracking-tight">eMITERS Association</h4>
                    <p className="text-sm text-[#666666] mt-2 leading-relaxed">
                      The departmental student association conducting technical symposia, coding hackathons, and guest lectures.
                    </p>
                  </div>

                  <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle">
                    <div className="w-10 h-10 rounded-[12px] bg-black/[0.04] flex items-center justify-center text-[#0096f7] mb-4">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-medium text-[#000000] tracking-tight">Yanthronics Club</h4>
                    <p className="text-sm text-[#666666] mt-2 leading-relaxed">
                      Hands-on robotics, IoT, and embedded firmware innovation club fostering project prototyping and competitions.
                    </p>
                  </div>

                  <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-6 shadow-subtle">
                    <div className="w-10 h-10 rounded-[12px] bg-black/[0.04] flex items-center justify-center text-[#0096f7] mb-4">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-medium text-[#000000] tracking-tight">Research Facilities</h4>
                    <p className="text-sm text-[#666666] mt-2 leading-relaxed">
                      Modern VLSI EDA tools, DSP test benches, microwave benches, and embedded systems hardware kits.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
