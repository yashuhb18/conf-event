import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { conferenceData } from '../data/conference';

export default function Footer() {
  const quickLinks = [
    { name: 'About Conference', href: '#about' },
    { name: 'Technical Tracks (11)', href: '#tracks' },
    { name: 'Key Dates & Deadlines', href: '#dates' },
    { name: 'Journal Publication', href: '#publications' },
    { name: 'Registration & Fees', href: '#registration' },
    { name: 'Organizing Committee', href: '#committee' },
    { name: 'Venue & Directions', href: '#contact' },
  ];

  const resourceLinks = [
    {
      name: 'Google Form Registration',
      href: conferenceData.registration.formUrl,
    },
    {
      name: 'IARJSET Journal Portal',
      href: conferenceData.publication.url,
    },
    {
      name: 'Google Scholar Profile',
      href: conferenceData.publication.scholarUrl,
    },
    {
      name: 'Conference Brochure (PDF)',
      href: '/brochure.pdf',
    },
  ];

  return (
    <footer className="bg-[#000000] text-[#fdfdf7] py-16 border-t border-black/20">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Top Row: Institution, Links, Resources */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Col 1 & 2 (md:col-span-2): Formal College Credentials */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="flex items-center gap-2.5 shrink-0">
                <img
                  src="/mit-logo-circle.png"
                  alt="MIT Mysore Official Crest"
                  className="w-11 h-11 bg-white rounded-full p-0.5 object-contain shrink-0 border border-white/20 shadow-xs"
                />
                <span className="text-white/20 text-sm">|</span>
                <img
                  src="/emiters-logo-circle.png"
                  alt="eMITERS Association Logo"
                  className="w-11 h-11 bg-white rounded-full p-0.5 object-contain shrink-0 border border-white/20 shadow-xs"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white leading-tight">
                  Maharaja Institute of Technology Mysore
                </h3>
                <p className="text-xs font-mono text-white/60 mt-0.5">
                  Department of Electronics &amp; Communication Engineering
                </p>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed max-w-lg font-normal">
              Affiliated to Visvesvaraya Technological University (VTU) Belagavi as an Autonomous Institution. Approved by AICTE New Delhi and Recognized by Government of Karnataka.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-white/50">
              <span className="px-2.5 py-1 rounded-[12px] bg-white/5 border border-white/10">Autonomous VTU</span>
              <span className="px-2.5 py-1 rounded-[12px] bg-white/5 border border-white/10">AICTE Approved</span>
              <span className="px-2.5 py-1 rounded-[12px] bg-white/5 border border-white/10">In Association with eMITERS</span>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#0096f7] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#0096f7] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources & Portals */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#0096f7] font-semibold">
              Academic Resources
            </h4>
            <ul className="space-y-2 text-xs">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#0096f7] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#0096f7]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Accreditations */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div>
            © 2026 RTECE. Department of ECE, Maharaja Institute of Technology Mysore.
          </div>
          <div>
            Designed with Samara Architectural Precision.
          </div>
        </div>

      </div>
    </footer>
  );
}
