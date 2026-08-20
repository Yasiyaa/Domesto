import React, { useState } from 'react';
import { Phone, Smartphone, Mail, MapPin, Send, CheckCircle2, Calendar, ShieldCheck, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/domestoData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-domesto-azure">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-black text-domesto-navy tracking-tight">
            Let's Take Care of Your Home
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Have questions or need a custom property quote? Reach out to our Melbourne team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details Cards & Google Map Mockup */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Dual Phone Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Landline Card */}
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group block"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center mb-2.5 group-hover:bg-domesto-navy transition-colors">
                  <Phone className="w-4 h-4 text-domesto-azure group-hover:text-domesto-lime transition-colors" />
                </div>
                <div>
                  <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Call Us Today</h3>
                  <p className="text-base font-black text-domesto-navy group-hover:text-domesto-azure transition-colors mt-0.5">
                    {BUSINESS_INFO.phone}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Office Landline</p>
                </div>
              </a>

              {/* Mobile Card */}
              <a
                href={`tel:${BUSINESS_INFO.mobileClean}`}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group block"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center mb-2.5 group-hover:bg-emerald-600 transition-colors">
                  <Smartphone className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Mobile Direct</h3>
                  <p className="text-base font-black text-domesto-navy group-hover:text-emerald-600 transition-colors mt-0.5">
                    {BUSINESS_INFO.mobile}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Call or SMS</p>
                </div>
              </a>

            </div>

            {/* Email Card */}
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all duration-300 flex items-center gap-3.5 group block"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0 group-hover:bg-domesto-navy transition-colors">
                <Mail className="w-4.5 h-4.5 text-domesto-azure group-hover:text-domesto-lime transition-colors" />
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Us</h3>
                <p className="text-sm sm:text-base font-black text-domesto-navy group-hover:text-domesto-azure transition-colors mt-0.5">
                  {BUSINESS_INFO.email}
                </p>
                <p className="text-[11px] text-slate-500">Rapid response within 2 business hours</p>
              </div>
            </a>

            {/* Address Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Headquarters Address</h3>
                <p className="text-xs sm:text-sm font-bold text-domesto-navy mt-0.5">
                  {BUSINESS_INFO.address}
                </p>
                <p className="text-[11px] text-slate-500">{BUSINESS_INFO.location}</p>
              </div>
            </div>

            {/* Book CTA Banner */}
            <div className="p-4 rounded-2xl bg-gradient-brand text-white flex items-center justify-between gap-3">
              <div>
                <h4 className="font-bold text-xs sm:text-sm">Ready for spotless results?</h4>
                <p className="text-[11px] text-slate-200">Book online in under 60 seconds</p>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-3.5 py-2 rounded-xl bg-white text-domesto-navy font-bold text-xs shadow-md hover:bg-slate-100 transition-colors flex-shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-domesto-gold" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-36 relative bg-slate-100">
              <iframe
                title="Domesto Office Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373531531653!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2s727%20Collins%20St%2C%20Docklands%20VIC%203008!5e0!3m2!1sen!2sau!4v1625000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-lg">
            <h3 className="text-xl font-bold text-domesto-navy mb-1">Send Us a Message</h3>
            <p className="text-xs text-slate-500 mb-4">Fill out the form below and our team will get back to you promptly.</p>

            {submitted ? (
              <div className="p-6 bg-white rounded-2xl border border-emerald-200 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold text-domesto-navy">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600">Thank you for reaching out. We will respond to your inquiry shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Your Name *</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-white focus:outline-none focus:border-domesto-azure focus:ring-2 focus:ring-sky-100 transition-all"
                    />
                    {errors.name && <p className="text-red-500 text-[11px] mt-0.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="0400 000 000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-white focus:outline-none focus:border-domesto-azure focus:ring-2 focus:ring-sky-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="john@example.com.au"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-white focus:outline-none focus:border-domesto-azure focus:ring-2 focus:ring-sky-100 transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-[11px] mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. General Enquiry / NDIS Service Question"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-white focus:outline-none focus:border-domesto-azure focus:ring-2 focus:ring-sky-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Message *</label>
                  <textarea
                    rows={3}
                    placeholder="How can Domesto help you today?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-white focus:outline-none focus:border-domesto-azure focus:ring-2 focus:ring-sky-100 transition-all resize-none"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-[11px] mt-0.5">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-domesto-navy text-white font-bold text-xs shadow-md hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-domesto-gold" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Official Domesto Contact & Accreditation Banner */}
        <div className="mt-8 bg-gradient-to-r from-slate-100 via-sky-50/70 to-emerald-50/70 text-slate-900 rounded-3xl p-5 sm:p-6 shadow-lg border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-domesto-azure/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Row: Direct Contact & Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4 border-b border-slate-200/80 items-center">
            
            {/* Call Us Today */}
            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="w-4.5 h-4.5 fill-white text-white" />
              </div>
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 block">Call Us Today</span>
                <span className="text-base sm:text-lg font-black text-domesto-navy group-hover:text-emerald-700 transition-colors">{BUSINESS_INFO.phone}</span>
              </div>
            </a>

            {/* Mobile Direct */}
            <a href={`tel:${BUSINESS_INFO.mobileClean}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-domesto-azure text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <Smartphone className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 block">Mobile Direct</span>
                <span className="text-base sm:text-lg font-black text-domesto-navy group-hover:text-domesto-azure transition-colors">{BUSINESS_INFO.mobile}</span>
              </div>
            </a>

            {/* Email Us */}
            <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <Mail className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 block">Email Us</span>
                <span className="text-xs sm:text-sm font-extrabold text-domesto-navy group-hover:text-amber-600 transition-colors">{BUSINESS_INFO.email}</span>
              </div>
            </a>

            {/* Authority Accreditations Pills */}
            <div className="flex flex-wrap items-center gap-1.5 justify-start lg:justify-end">
              <span className="px-2.5 py-1 rounded-lg bg-amber-100/80 text-amber-900 border border-amber-300/80 text-[9px] font-black uppercase tracking-wider">
                WorkSafe Victoria
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-100/80 text-amber-900 border border-amber-300/80 text-[9px] font-black uppercase tracking-wider">
                Labour Hire Authority
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-100/80 text-emerald-900 border border-emerald-300/80 text-[9px] font-black uppercase tracking-wider">
                Registered NDIS Provider
              </span>
            </div>

          </div>

          {/* Bottom Row: 4 Guarantee Badges */}
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Police Checked Cleaners</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-domesto-azure flex-shrink-0" />
              <span>Fully Insured Service</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Eco Friendly Products</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
