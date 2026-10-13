import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import { conferenceData } from '../data/conference';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 bg-[#fdfdf7] relative border-b border-black/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[24px] bg-black/[0.04] border border-black/10 text-xs font-mono tracking-wider uppercase text-[#000000] mb-4">
            <Mail className="w-3.5 h-3.5 text-[#0096f7]" />
            <span>Communication &amp; Logistics</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-regola-light text-[#000000] tracking-[-0.035em] leading-tight">
            Contact &amp; Campus Venue
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#666666] leading-relaxed font-normal tracking-tight">
            For inquiries regarding paper submissions, fee payments, or campus directions, get in touch with our team.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {conferenceData.contacts.map((contact) => (
            <div
              key={contact.name}
              className="bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-7 shadow-subtle hover:shadow-samara-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-[12px] bg-black/[0.04] text-[#000000] font-medium">
                    {contact.role}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0096f7]/10 flex items-center justify-center text-[#0096f7]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-black/10 bg-[#f5f2de] shadow-subtle shrink-0 flex items-center justify-center">
                    {contact.image ? (
                      <img
                        src={contact.image}
                        alt={contact.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#f5f2de] flex items-center justify-center font-mono text-xs font-semibold text-[#000000]">
                        {contact.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-medium text-[#000000] tracking-tight leading-snug">
                      {contact.name}
                    </h3>
                    <p className="text-xs text-[#666666] mt-0.5 font-mono">
                      Department of ECE, MITM
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-black/[0.06] space-y-2 text-xs">
                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 text-[#0096f7] hover:underline font-mono"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>{contact.phone}</span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-[#666666] hover:text-[#000000] truncate font-mono"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{contact.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Venue & Inquiry Form (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Venue & Google Maps (7 Cols) */}
          <div className="lg:col-span-7 bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-8 shadow-subtle space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#0096f7] font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Conference Venue</span>
                </div>
                <h3 className="text-xl font-medium text-[#000000] tracking-tight mt-1">
                  Maharaja Institute of Technology Mysore
                </h3>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed max-w-md">
                  {conferenceData.institution.address}
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Maharaja+Institute+of+Technology+Mysore"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-[24px] bg-black/[0.04] hover:bg-black/[0.08] text-xs font-medium text-[#000000] transition-colors inline-flex items-center gap-1.5 shrink-0"
              >
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-[12px] overflow-hidden border border-black/[0.08] h-72">
              <iframe
                title="Maharaja Institute of Technology Mysore Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.4379435478496!2d76.60334867506606!3d12.353341987907577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf718d7831f24d%3A0xe2a8fb88bfda1325!2sMaharaja%20Institute%20of%20Technology%20Mysore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quick Inquiry Form adhering strictly to Samara input spec (5 Cols) */}
          <div className="lg:col-span-5 bg-[#ffffff] border border-black/[0.08] rounded-[18px] p-8 shadow-subtle">
            <h3 className="text-xl font-medium text-[#000000] tracking-tight">
              Submit an Inquiry
            </h3>
            <p className="text-xs text-[#666666] mt-1 mb-6">
              Our conference secretariat will respond to your query via email.
            </p>

            {isSubmitted ? (
              <div className="p-6 bg-[#f5f2de] border border-black/[0.08] rounded-[12px] text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-medium text-[#000000]">Inquiry Sent Successfully</h4>
                <p className="text-xs text-[#666666]">
                  Thank you for contacting RTECE 2026. A representative will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#666666] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dr. / Prof. / Full Name"
                    className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-[15px] text-sm text-[#000000] placeholder:text-[#999999] focus:outline-none focus:border-[#0096f7] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#666666] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="author@institution.edu"
                    className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-[15px] text-sm text-[#000000] placeholder:text-[#999999] focus:outline-none focus:border-[#0096f7] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#666666] mb-1.5">
                    Subject / Track
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Track inquiry, registration receipt, etc."
                    className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-[15px] text-sm text-[#000000] placeholder:text-[#999999] focus:outline-none focus:border-[#0096f7] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#666666] mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full bg-black/[0.03] border border-black/10 rounded-[12px] p-[15px] text-sm text-[#000000] placeholder:text-[#999999] focus:outline-none focus:border-[#0096f7] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0096f7] hover:brightness-105 active:scale-[0.98] text-[#ffffff] text-sm font-medium py-[14px] rounded-[12px] shadow-subtle transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
