import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Smartphone, Mail, Home, MessageSquare, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import type { BookingFormData } from '../types';
import { BUSINESS_INFO } from '../data/domestoData';

interface BookingFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialService = '', onSuccess }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: initialService || 'Domestic Cleaning',
    preferredDate: '',
    preferredTime: 'Morning (8am - 12pm)',
    propertyType: 'Residential House',
    propertySize: '3 Bedrooms / 2 Bathrooms',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesList = [
    'Domestic Cleaning',
    'Commercial Cleaning',
    'Carpet Cleaning',
    'Hard Floor Cleaning',
    'Ground Maintenance',
    'Lawn Mowing',
    'High Pressure Cleaning',
    'Gutter Cleaning',
    'Home Maintenance',
    'Handyman Services',
    'Furniture Cleaning',
    'Caretaker Services',
    'NDIS Support Services',
    'Other'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid Australian phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate fast processing & validation response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 3000);
      }
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-emerald-200 shadow-xl animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-black text-domesto-navy">Booking Request Received!</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Thank you. Your service request for <strong>{formData.service}</strong> has been received. Our Melbourne team will contact you shortly to confirm details.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-500 max-w-sm mx-auto space-y-1">
          <p className="font-bold text-slate-700">Need urgent service?</p>
          <p className="flex items-center justify-center gap-3 pt-1">
            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-domesto-azure font-bold hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span>•</span>
            <a href={`tel:${BUSINESS_INFO.mobileClean}`} className="text-emerald-600 font-bold hover:underline flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.mobile}</span>
            </a>
          </p>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              service: 'Domestic Cleaning',
              preferredDate: '',
              preferredTime: 'Morning (8am - 12pm)',
              propertyType: 'Residential House',
              propertySize: '3 Bedrooms / 2 Bathrooms',
              message: ''
            });
          }}
          className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="e.g. Sarah Jenkins"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.fullName ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:border-domesto-azure focus:ring-sky-100'
              }`}
            />
          </div>
          {errors.fullName && <p className="text-red-500 text-xs font-medium mt-1">{errors.fullName}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              placeholder="0412 345 678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.phone ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:border-domesto-azure focus:ring-sky-100'
              }`}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs font-medium mt-1">{errors.phone}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              placeholder="sarah@example.com.au"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.email ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:border-domesto-azure focus:ring-sky-100'
              }`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs font-medium mt-1">{errors.email}</p>}
        </div>

        {/* Service Dropdown */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Service Required *
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 bg-white focus:outline-none focus:border-domesto-azure focus:ring-2 focus:ring-sky-100 transition-all cursor-pointer"
          >
            {servicesList.map((svc) => (
              <option key={svc} value={svc}>{svc}</option>
            ))}
          </select>
        </div>

        {/* Preferred Date */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Preferred Date *
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.preferredDate ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:border-domesto-azure focus:ring-sky-100'
              }`}
            />
          </div>
          {errors.preferredDate && <p className="text-red-500 text-xs font-medium mt-1">{errors.preferredDate}</p>}
        </div>

        {/* Preferred Time */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Preferred Time Window
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 bg-white focus:outline-none focus:border-domesto-azure focus:ring-2 focus:ring-sky-100 transition-all cursor-pointer"
            >
              <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
              <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
              <option value="Late Afternoon (4pm - 7pm)">Late Afternoon (4pm - 7pm)</option>
              <option value="Flexible / Any Time">Flexible / Any Time</option>
            </select>
          </div>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Property Type
          </label>
          <div className="relative">
            <Home className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 bg-white focus:outline-none focus:border-domesto-azure focus:ring-2 focus:ring-sky-100 transition-all cursor-pointer"
            >
              <option value="Residential House">Residential House</option>
              <option value="Apartment / Townhouse">Apartment / Townhouse</option>
              <option value="Commercial Office / Workspace">Commercial Office / Workspace</option>
              <option value="NDIS Participant Property">NDIS Participant Property</option>
              <option value="Other Property">Other Property</option>
            </select>
          </div>
        </div>

        {/* Property Size / Bedrooms */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Approx. Size / Rooms
          </label>
          <input
            type="text"
            placeholder="e.g. 3 Beds / 2 Baths or 150 sqm"
            value={formData.propertySize}
            onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 bg-white focus:outline-none focus:border-domesto-azure focus:ring-2 focus:ring-sky-100 transition-all"
          />
        </div>

      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
          Additional Notes / Specific Requirements
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <textarea
            rows={3}
            placeholder="Specify key focus areas, pet details, parking info, or NDIS plan manager info..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 bg-white focus:outline-none focus:border-domesto-azure focus:ring-2 focus:ring-sky-100 transition-all resize-none"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl bg-gradient-brand text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
      >
        {isSubmitting ? (
          <span>Processing Booking Request...</span>
        ) : (
          <>
            <Send className="w-5 h-5 text-domesto-gold group-hover:translate-x-1 transition-transform" />
            <span>Request a Booking</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
        <ShieldCheck className="w-4 h-4 text-domesto-green" />
        <span>Your information is private & protected under Australian privacy laws</span>
      </div>
    </form>
  );
};
