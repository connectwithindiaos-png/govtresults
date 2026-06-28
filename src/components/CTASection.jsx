import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Users, ShieldCheck, Bell, CheckCircle, Phone, Sparkles } from 'lucide-react';

export function CTASectionTop() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section id="subscribe" className="py-14 lg:py-20 bg-[#0F0F1F] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 mb-5 border border-white/10">
            <Sparkles size={14} className="text-amber-400" />
            <span className="text-white/60 text-xs font-medium">Never Miss an Update</span>
          </div>

          <h2 className="text-2xl lg:text-4xl font-extrabold text-white mb-3 font-[Poppins] leading-tight">
            Never Miss a <span className="text-accent">Government Job</span> Update!
          </h2>
          <p className="text-white/50 text-sm lg:text-base mb-6 max-w-xl mx-auto leading-relaxed">
            Get the latest Sarkari results, admit cards, and job notifications delivered straight to your inbox — absolutely free.
          </p>

          <div className="max-w-xl mx-auto mb-6 rounded-lg overflow-hidden border border-white/10">
            <img
              src="https://picsum.photos/seed/govt-alerts/800/200"
              alt="Government Job Alerts"
              className="w-full h-24 lg:h-32 object-cover"
              loading="lazy"
            />
          </div>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Send size={14} className="text-white/30" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-lg pl-9 pr-3 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors inline-flex items-center justify-center gap-2 shrink-0"
              >
                <Bell size={15} />
                Subscribe Free
              </button>
            </div>
          </form>

          {subscribed && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg text-sm font-medium mb-4"
            >
              <CheckCircle size={15} />
              You've subscribed successfully! Check your inbox.
            </motion.div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-5 text-white/50 text-xs">
            <div className="flex items-center gap-1.5">
              <Users size={13} className="text-white/40" />
              <span>Join <strong className="text-white/70">4.8 Cr+</strong> Aspirants</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-white/40" />
              <span>No spam, unsubscribe anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CTASectionMid() {
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone) {
      setSent(true);
      setPhone('');
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <section id="alerts" aria-label="Get instant job alerts on WhatsApp and Telegram" className="py-10 lg:py-14 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-accent via-amber-400 to-accent" />

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 p-6 lg:p-10">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-1.5 bg-amber-50 rounded-full px-3.5 py-1 mb-3 border border-amber-100">
                  <MessageCircle size={13} className="text-accent" />
                  <span className="text-accent text-[11px] font-semibold">Instant Alerts</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-extrabold text-primary mb-2 font-[Poppins] leading-tight">
                  Get Instant Job Alerts on <span className="text-accent">WhatsApp</span> & Telegram
                </h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  Receive real-time notifications for new job openings, results, and admit cards directly on your phone.
                </p>

                <form onSubmit={handleSubmit} className="mb-4">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-1 relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Phone size={14} className="text-gray-300" />
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        required
                        className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors shrink-0 flex items-center justify-center gap-2"
                    >
                      <Bell size={15} />
                      Get Alerts
                    </button>
                  </div>
                </form>

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3.5 py-1.5 rounded-lg text-xs font-medium"
                  >
                    <CheckCircle size={14} />
                    You'll receive alerts now!
                  </motion.div>
                )}
              </div>

              {/* Right - Trust badges */}
              <div className="bg-gray-50 rounded-lg border border-gray-100 p-6">
                <div className="text-center mb-4">
                  <Bell size={32} className="mx-auto mb-1 text-accent" />
                  <h3 className="text-base font-bold text-primary font-[Poppins]">Why Join?</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Users, text: 'Trusted by 4.8 Crore+ aspirants', color: 'text-blue-500' },
                    { icon: Bell, text: 'Real-time job alerts', color: 'text-accent' },
                    { icon: ShieldCheck, text: '100% free & secure', color: 'text-green-500' },
                    { icon: MessageCircle, text: 'WhatsApp & Telegram support', color: 'text-purple-500' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg ${item.color.replace('text', 'bg')}/10 flex items-center justify-center`}>
                        <item.icon size={15} className={item.color} />
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
