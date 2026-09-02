import React from 'react';
import { Mail, HelpCircle, Bug, Play } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300">
            We're here to help you have the best puzzling experience.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative background gradients */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          
          <div className="flex justify-center gap-6 mb-8 relative z-10">
            <div className="bg-white/5 p-4 rounded-full">
              <Bug className="text-cyan-400" size={28} />
            </div>
            <div className="bg-white/5 p-4 rounded-full">
              <HelpCircle className="text-cyan-400" size={28} />
            </div>
            <div className="bg-white/5 p-4 rounded-full">
              <Mail className="text-cyan-400" size={28} />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 relative z-10">Need Support or Have Feedback?</h2>
          
          <div className="bg-ocean-900/50 border border-white/10 rounded-xl p-5 sm:p-6 mb-8 relative z-10">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              If you are experiencing any issues, found a bug, or have feedback, please contact the developer directly through the Google Play Store support section on our app listing page.
            </p>
          </div>

          <a 
            href="https://play.google.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-ocean-900 font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-cyan-500/20 relative z-10"
          >
            <Play className="fill-ocean-900" size={20} />
            Contact via Google Play
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
