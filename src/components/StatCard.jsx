import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StatCard({ icon, label, count, gradient }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = count / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= count) {
        setDisplayed(count);
        clearInterval(timer);
      } else {
        setDisplayed(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="glass-card rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group-hover:-translate-y-1">
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br flex items-center justify-center text-2xl shadow-lg" style={{ backgroundImage: gradient }}>
          {typeof icon === 'string' ? <span>{icon}</span> : icon}
        </div>
        <div className="text-3xl lg:text-4xl font-extrabold text-primary mb-1">
          {displayed.toLocaleString()}
          <span className="text-accent">+</span>
        </div>
        <div className="text-sm text-gray-500 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}
