import React from 'react';
import { Droplets, Infinity as InfinityIcon, BatteryCharging, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            About <span className="text-gradient">Water Sort Puzzle</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Discover the perfect blend of mental exercise and deep relaxation. Designed to help you unwind after a long day.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Droplets size={200} className="text-cyan-500" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative z-10">The Perfect Way to Unwind</h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 relative z-10">
            In today's fast-paced world, finding a moment of peace can be challenging. We built Water Sort Puzzle not just as a game, but as a digital retreat. The premise is simple: pour mixed colored water between glass tubes until every tube holds a single, solid color. But the experience is profoundly satisfying.
          </p>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed relative z-10">
            With no stressful timers or punishing game-over screens, you dictate the pace. Whether you have 5 minutes while waiting in line or an hour before bed, Water Sort Puzzle provides the perfect escape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-8 hover:-translate-y-1 transition-transform">
            <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <InfinityIcon className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Procedural Generation</h3>
            <p className="text-slate-300 leading-relaxed">
              Our advanced level generation algorithm ensures that you will never play the exact same puzzle twice. The difficulty curve smoothly adapts to your skill level, offering a balanced challenge from level 1 to level 10,000 and beyond.
            </p>
          </div>

          <div className="glass-card p-8 hover:-translate-y-1 transition-transform">
            <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Premium Glassy UI</h3>
            <p className="text-slate-300 leading-relaxed">
              We focused heavily on aesthetics and feel. From the subtle glassmorphism of the tubes to the smooth, realistic pouring animations and satisfying sound design, every element is crafted to delight your senses.
            </p>
          </div>
        </div>

        <div className="glass-card p-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6">
            <BatteryCharging className="text-cyan-400" size={40} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Play Anywhere, Anytime</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            No Wi-Fi? No problem. Water Sort Puzzle is 100% offline capable. It's lightweight, battery-friendly, and ready whenever you need a mental break.
          </p>
          <a 
            href="https://play.google.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto inline-block bg-white text-ocean-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-50 transition-colors shadow-lg"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
