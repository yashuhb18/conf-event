import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Award, ExternalLink, Copy, CheckCheck, ArrowRight, QrCode } from 'lucide-react';
import { conferenceData } from '../data/conference';

export default function Registration() {
  const [copied, setCopied] = useState(false);
  const registration = conferenceData.registration;
  const formUrl = registration.formUrl;

  const handleCopyLink = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(formUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = formUrl;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const mitmFee = registration?.fees?.[0] || {
    category: 'MITM Students',
    price: '₹1,200',
    description: 'Enrolled undergraduate and postgraduate students of Maharaja Institute of Technology Mysore.',
  };

  const otherFee = registration?.fees?.[1] || {
    category: 'Other Colleges (Students)',
    price: '₹1,500',
    description: 'Students and research scholars from external affiliated institutions and universities.',
  };

  const displayShortUrl = formUrl.replace(/^https?:\/\//i, '');

  return (
    <section id="registration" className="py-24 bg-[#fdfdf7] relative border-b border-black/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[24px] bg-black/[0.04] border border-black/10 text-xs font-mono tracking-wider uppercase text-[#000000] mb-4">
            <span>Author Registration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-regola-light text-[#000000] tracking-[-0.035em] leading-tight">
            Registration &amp; Fee Structure
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#666666] leading-relaxed font-normal tracking-tight">
            Transparent delegate fee schedule for institutional and external student authors.
          </p>
        </div>

        {/* 2-Column Command Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Pricing Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Card 1: Internal MITM Students */}
            <div className="bg-[#f5f2de] border border-black/[0.08] rounded-[18px] p-7 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-md">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-[12px] bg-white border border-black/[0.06] text-[#000000] font-medium">
                    Internal Candidates
                  </span>
                  <span className="text-xs text-[#0096f7] font-medium">MIT Mysore</span>
                </div>
                <h3 className="text-xl font-medium text-[#000000] tracking-tight">
                  {mitmFee.category}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {mitmFee.description}
                </p>
                <div className="flex items-center gap-2 pt-1 text-xs text-[#000000]">
                  <Check className="w-3.5 h-3.5 text-[#0096f7]" />
                  <span>Includes Paper Presentation &amp; Official Certificate</span>
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <div className="text-3xl sm:text-4xl font-regola-light text-[#000000] leading-none">
                  {mitmFee.price}
                </div>
                <span className="text-[11px] font-mono text-[#666666] uppercase tracking-wider block mt-1">
                  Per Accepted Paper
                </span>
              </div>
            </div>

            {/* Card 2: Other Colleges */}
            <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-7 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-md">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-[12px] bg-black/[0.04] text-[#000000] font-medium">
                    External Candidates
                  </span>
                  <span className="text-xs text-[#666666]">Other Institutions</span>
                </div>
                <h3 className="text-xl font-medium text-[#000000] tracking-tight">
                  {otherFee.category}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {otherFee.description}
                </p>
                <div className="flex items-center gap-2 pt-1 text-xs text-[#000000]">
                  <Check className="w-3.5 h-3.5 text-[#0096f7]" />
                  <span>Includes Journal Publication Review &amp; Presentation</span>
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <div className="text-3xl sm:text-4xl font-regola-light text-[#000000] leading-none">
                  {otherFee.price}
                </div>
                <span className="text-[11px] font-mono text-[#666666] uppercase tracking-wider block mt-1">
                  Per Accepted Paper
                </span>
              </div>
            </div>

            {/* Formal Certificate Mandatory Notice */}
            <div className="p-5 rounded-[12px] bg-black/[0.03] border border-black/[0.08] flex items-start gap-3.5">
              <Award className="w-5 h-5 text-[#0096f7] shrink-0 mt-0.5" />
              <div className="text-xs text-[#000000] leading-relaxed">
                <span className="font-medium">Mandatory Certification Notice: </span>
                {registration.note} Each accepted paper must have at least one registered author to be scheduled for oral track presentation and included in the IARJSET journal proceedings.
              </div>
            </div>

          </div>

          {/* Right Column: QR Code & Rapid Registration Action (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-8 shadow-samara-md text-center space-y-6">
              
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0096f7] font-semibold">
                  Quick Registration
                </span>
                <h3 className="text-xl font-medium text-[#000000] tracking-tight mt-1">
                  Scan QR or Open Google Form
                </h3>
              </div>

              {/* QR Code Container */}
              <div className="p-4 bg-[#fdfdf7] rounded-[12px] border border-black/[0.08] inline-block shadow-subtle">
                <img
                  src="/registration-qr.png"
                  alt="RTECE 2026 Registration QR Code"
                  className="w-48 h-48 object-contain mx-auto"
                />
                <div className="text-[11px] font-mono text-[#666666] mt-2">
                  Official Registration QR
                </div>
              </div>

              {/* Form URL snippet */}
              <div className="text-xs font-mono text-[#666666] truncate bg-black/[0.03] px-3 py-2 rounded-[8px] border border-black/[0.05]">
                {displayShortUrl}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#0096f7] hover:brightness-105 active:scale-[0.98] text-[#ffffff] text-sm font-medium py-[14px] rounded-[12px] shadow-subtle transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Open Registration Form</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full bg-black/[0.04] hover:bg-black/[0.08] text-[#000000] text-sm font-medium py-[14px] rounded-[12px] transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Link Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#666666]" />
                      <span>Copy Form Link</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
