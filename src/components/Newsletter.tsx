import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-brand text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/15 text-center space-y-6">
          
          <div className="w-14 h-14 rounded-2xl bg-white/15 text-domesto-gold mx-auto flex items-center justify-center border border-white/20">
            <Mail className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-black tracking-tight text-white">Stay Connected</h2>
            <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto">
              Subscribe to receive service updates, helpful home care tips, and exclusive seasonal Melbourne offers.
            </p>
          </div>

          {subscribed ? (
            <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-sm font-bold inline-flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Thank you! You have successfully subscribed to Domesto Home Services updates.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-domesto-gold"
              />

              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-domesto-gold text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg flex-shrink-0 cursor-pointer"
              >
                Subscribe Now
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-300">No spam guaranteed. Unsubscribe anytime with 1-click.</p>

        </div>
      </div>
    </section>
  );
};
