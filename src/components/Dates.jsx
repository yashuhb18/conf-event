import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, CalendarPlus, Clock, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { conferenceData } from '../data/conference';

export default function Dates() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const { dates } = conferenceData;

  const timelineSteps = [
    {
      step: 1,
      stepNumber: '01',
      title: dates.submissionOpens?.label || 'Paper Submission Opens',
      description: 'Online submission portal opens for full-length research manuscripts and abstracts.',
      date: dates.submissionOpens?.date || '14th October 2026',
      iso: dates.submissionOpens?.iso || '2026-10-14',
      isDeadline: false,
      tag: 'Stage 01',
    },
    {
      step: 2,
      stepNumber: '02',
      title: dates.lastSubmission?.label || 'Last Date for Paper Submission',
      description: 'Strict cutoff date to submit complete research papers via the official Google Form.',
      date: dates.lastSubmission?.date || '5th November 2026',
      iso: dates.lastSubmission?.iso || '2026-11-05',
      isDeadline: true, // Signal Orange
      tag: 'Final Deadline',
    },
    {
      step: 3,
      stepNumber: '03',
      title: dates.acceptance?.label || 'Paper Acceptance Notification',
      description: 'Peer-review evaluation results and acceptance letters dispatched to authors.',
      date: dates.acceptance?.date || '8th November 2026',
      iso: dates.acceptance?.iso || '2026-11-08',
      isDeadline: false,
      tag: 'Stage 03',
    },
    {
      step: 4,
      stepNumber: '04',
      title: dates.conference?.label || 'Conference Date',
      description: 'Inaugural ceremony, keynote speeches, track presentations & valedictory session.',
      date: dates.conference?.date || '12th November 2026',
      iso: dates.conference?.iso || '2026-11-12',
      isConference: true, // Sky Blue
      tag: 'Main Event',
    },
  ];

  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//MIT Mysore//RTECE 2026//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:rtece-2026-conference@mitmysore.in',
      'DTSTAMP:20261013T000000Z',
      'DTSTART:20261112T033000Z',
      'DTEND:20261112T123000Z',
      'SUMMARY:RTECE 2026 - National Conference on Recent Trends in ECE',
      'DESCRIPTION:National Conference on Recent Trends in Electronics & Communication Engineering at Maharaja Institute of Technology Mysore.',
      'LOCATION:Maharaja Institute of Technology Mysore, Belavadi, Mandya, Karnataka 571477',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'BEGIN:VEVENT',
      'UID:rtece-2026-deadline@mitmysore.in',
      'DTSTAMP:20261013T000000Z',
      'DTSTART:20261105T182959Z',
      'DTEND:20261105T182959Z',
      'SUMMARY:RTECE 2026 - Paper Submission Deadline',
      'DESCRIPTION:Last date to submit research paper for RTECE 2026 via Google Form.',
      'LOCATION:Online Submission Portal',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'RTECE-2026-Key-Dates.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGoogleCalendar = () => {
    const title = encodeURIComponent('RTECE 2026 - National Conference (MIT Mysore)');
    const details = encodeURIComponent(
      'National Conference on Recent Trends in Electronics & Communication Engineering (RTECE 2026) organized by the Department of ECE, MIT Mysore.\nPaper submission cutoff: 5 Nov 2026.'
    );
    const location = encodeURIComponent('Maharaja Institute of Technology Mysore, Belavadi, Mandya, Karnataka 571477');
    const datesStr = '20261112T090000/20261112T173000';
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${datesStr}&details=${details}&location=${location}&sf=true&output=xml`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="dates" className="py-24 bg-[#fdfdf7] relative border-b border-black/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[24px] bg-black/[0.04] border border-black/10 text-xs font-mono tracking-wider uppercase text-[#000000] mb-4">
            <Clock className="w-3.5 h-3.5 text-[#0096f7]" />
            <span>Important Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-regola-light text-[#000000] tracking-[-0.035em] leading-tight">
            Important Dates &amp; Deadlines
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#666666] leading-relaxed font-normal tracking-tight">
            Please observe the submission and review cycle deadlines strictly.
          </p>
        </div>

        {/* Desktop & Mobile Timeline Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineSteps.map((step) => {
            return (
              <div
                key={step.step}
                className={`relative rounded-[18px] p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  step.isDeadline
                    ? 'bg-[#ffffff] border-[#ff4000]/40 shadow-samara-md ring-1 ring-[#ff4000]/20'
                    : step.isConference
                    ? 'bg-[#f5f2de] border-black/[0.1] shadow-subtle'
                    : 'bg-[#ffffff] border-black/[0.08] shadow-subtle'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#666666]">
                      {step.stepNumber}
                    </span>

                    {step.isDeadline ? (
                      <span className="text-[11px] font-medium font-mono uppercase px-2.5 py-1 rounded-[12px] bg-[#ff4000]/10 text-[#ff4000] border border-[#ff4000]/20">
                        {step.tag}
                      </span>
                    ) : step.isConference ? (
                      <span className="text-[11px] font-medium font-mono uppercase px-2.5 py-1 rounded-[12px] bg-[#0096f7]/10 text-[#0096f7] border border-[#0096f7]/20">
                        {step.tag}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-[12px] bg-black/[0.03] text-[#666666]">
                        {step.tag}
                      </span>
                    )}
                  </div>

                  <div className="text-2xl sm:text-3xl font-regola-light text-[#000000] tracking-tight mb-2">
                    {step.date}
                  </div>

                  <h3 className="text-base font-medium text-[#000000] tracking-tight leading-snug mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#666666] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/[0.06] flex items-center justify-between text-xs">
                  {step.isDeadline ? (
                    <span className="text-[#ff4000] font-medium inline-flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Hard Cutoff</span>
                    </span>
                  ) : step.isConference ? (
                    <span className="text-[#0096f7] font-medium inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Offline Presentation</span>
                    </span>
                  ) : (
                    <span className="text-[#666666] font-mono">Stage Active</span>
                  )}

                  <span className="text-[#999999] font-mono text-[11px]">{step.iso}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Calendar Integration Action Bar */}
        <div className="mt-12 p-6 rounded-[18px] bg-[#ffffff] border border-black/[0.08] shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[12px] bg-black/[0.04] flex items-center justify-center text-[#0096f7] shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-[#000000] tracking-tight">Sync Conference Schedule to Your Calendar</div>
              <div className="text-xs text-[#666666]">Never miss the 5th November submission deadline or the 12th November conference.</div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={handleDownloadICS}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-[24px] bg-black/[0.04] hover:bg-black/[0.08] text-[#000000] text-xs sm:text-sm font-medium transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarPlus className="w-4 h-4 text-[#0096f7]" />
              <span>Download .ics</span>
            </button>

            <button
              onClick={handleGoogleCalendar}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-[12px] bg-[#0096f7] hover:brightness-105 active:scale-[0.98] text-[#ffffff] text-xs sm:text-sm font-medium transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-subtle"
            >
              <span>Add to Google Calendar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
