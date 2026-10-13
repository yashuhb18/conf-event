import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Award, Users } from 'lucide-react';
import { conferenceData } from '../data/conference';

function getInitials(name = '') {
  const clean = name.replace(/^(Dr\.|Prof\.|Sri\.|Mr\.|Mrs\.|Ms\.)\s+/i, '').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'EC';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Committee() {
  const { patron, convener, coordinator, chiefPatrons = [], technicalTeam = [] } = conferenceData;

  const highlightedLeadership = [
    {
      title: 'Patron',
      badge: 'PATRON',
      name: patron?.name || 'Dr. Murali S',
      role: patron?.role || 'Founder President MET Mysuru, Principal MIT Mysore',
      qualification: patron?.qualification,
      image: patron?.image,
      initials: getInitials(patron?.name || 'Dr. Murali S'),
    },
    {
      title: 'Convener',
      badge: 'CONVENER',
      name: convener?.name || 'Dr. Parimala R V',
      role: convener?.role || 'Head and Professor, Department of ECE',
      qualification: convener?.qualification,
      image: convener?.image || '/faculty/parimala.jpg',
      initials: getInitials(convener?.name || 'Dr. Parimala R V'),
    },
    {
      title: 'Coordinator',
      badge: 'COORDINATOR',
      name: coordinator?.name || 'Dr. Balakrishna K',
      role: coordinator?.role || 'Associate Professor, Department of ECE',
      qualification: coordinator?.qualification || 'M.Tech PhD',
      image: coordinator?.image || '/faculty/balakrishna.jpg',
      phone: coordinator?.phone,
      email: coordinator?.email,
      initials: getInitials(coordinator?.name || 'Dr. Balakrishna K'),
    },
  ];

  return (
    <section id="committee" className="py-24 bg-[#fdfdf7] relative border-b border-black/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[24px] bg-black/[0.04] border border-black/10 text-xs font-mono tracking-wider uppercase text-[#000000] mb-4">
            <Users className="w-3.5 h-3.5 text-[#0096f7]" />
            <span>Leadership &amp; Governance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-regola-light text-[#000000] tracking-[-0.035em] leading-tight">
            Organizing Committee
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#666666] leading-relaxed font-normal tracking-tight">
            Distinguished trustees, university scholars, and dedicated department faculty members guiding RTECE 2026.
          </p>
        </div>

        {/* Highlighted Leadership Trio (Patron, Convener, Coordinator) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlightedLeadership.map((leader) => (
            <div
              key={leader.title}
              className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-7 shadow-subtle flex flex-col justify-between group hover:shadow-samara-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-[12px] bg-black/[0.04] text-[#000000] font-medium">
                    {leader.badge}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#0096f7] font-semibold">
                    RTECE 2026
                  </span>
                </div>

                {/* Portrait Avatar Frame - Perfectly seated with 1:1 aspect ratio, object-cover object-top */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-black/10 bg-[#f5f2de] shadow-subtle mx-auto mb-4 shrink-0 flex items-center justify-center">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="font-mono font-medium text-2xl text-[#000000]">
                      {leader.initials}
                    </div>
                  )}
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-xl font-medium text-[#000000] tracking-tight">
                    {leader.name}
                  </h3>

                  {leader.qualification && (
                    <div>
                      <span className="text-[11px] font-mono font-medium text-[#0096f7] bg-[#0096f7]/10 px-2.5 py-0.5 rounded-[12px] border border-[#0096f7]/20 inline-block">
                        {leader.qualification}
                      </span>
                    </div>
                  )}

                  <p className="text-xs text-[#666666] leading-relaxed pt-1">
                    {leader.role}
                  </p>
                </div>
              </div>

              {leader.phone && (
                <div className="pt-5 mt-5 border-t border-black/[0.06] space-y-1.5 text-xs text-center">
                  <a
                    href={`tel:${leader.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center justify-center gap-2 text-[#0096f7] hover:underline font-mono"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{leader.phone}</span>
                  </a>
                  {leader.email && (
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center justify-center gap-2 text-[#666666] hover:text-[#000000] truncate font-mono text-[11px]"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span className="truncate">{leader.email}</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chief Patrons Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0096f7] font-semibold">
              Chief Patrons
            </span>
            <span className="h-px bg-black/[0.08] flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {chiefPatrons.map((patronItem, idx) => (
              <div
                key={idx}
                className="bg-[#ffffff] border border-black/[0.08] rounded-[14px] p-5 shadow-subtle hover:border-black/20 transition-all flex items-start gap-3.5"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-black/10 bg-[#f5f2de] shadow-subtle shrink-0 flex items-center justify-center">
                  {patronItem.image ? (
                    <img
                      src={patronItem.image}
                      alt={patronItem.name}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <span className="font-mono text-xs font-medium text-[#000000]">
                      {getInitials(patronItem.name)}
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-medium text-[#000000] tracking-tight leading-snug">
                    {patronItem.name}
                  </div>
                  <div className="text-xs text-[#666666] mt-1 leading-snug">
                    {patronItem.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Team / Faculty Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0096f7] font-semibold">
              Department Faculty &amp; Technical Team
            </span>
            <span className="h-px bg-black/[0.08] flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {technicalTeam.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#ffffff] border border-black/[0.08] rounded-[16px] p-5 shadow-subtle hover:border-black/20 hover:shadow-samara-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Portrait Avatar */}
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-black/10 bg-[#f5f2de] shadow-subtle mx-auto mb-3.5 shrink-0 flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <span className="font-mono text-sm font-medium text-[#000000]">
                        {getInitials(member.name)}
                      </span>
                    )}
                  </div>

                  <div className="text-center space-y-1">
                    <div className="text-base font-medium text-[#000000] tracking-tight leading-snug">
                      {member.name}
                    </div>

                    {member.qualification && (
                      <div>
                        <span className="text-[10px] font-mono font-medium text-[#0096f7] bg-[#0096f7]/10 px-2.5 py-0.5 rounded-[12px] border border-[#0096f7]/20 inline-block">
                          {member.qualification}
                        </span>
                      </div>
                    )}

                    <div className="text-xs text-[#666666] leading-snug pt-0.5">
                      {member.designation}
                    </div>
                  </div>
                </div>

                {member.phone && (
                  <div className="pt-3 mt-3 border-t border-black/[0.06] text-[11px] font-mono text-center">
                    <a
                      href={`tel:${member.phone}`}
                      className="text-[#0096f7] hover:underline inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
