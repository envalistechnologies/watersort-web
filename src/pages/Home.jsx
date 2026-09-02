import React from 'react';
import { Play, Info, Infinity as InfinityIcon, WifiOff, RotateCcw, Brain, Sparkles, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="glass-card p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-all duration-300">
    <div className="bg-cyan-500/20 p-4 rounded-full mb-4 ring-1 ring-cyan-400/50">
      <Icon className="text-cyan-400" size={32} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-300 leading-relaxed text-sm">{description}</p>
  </div>
);

const Home = () => {
  const features = [
    {
      icon: InfinityIcon,
      title: "Infinite Levels",
      description: "Procedurally generated puzzles that get progressively harder. You'll never run out of challenges."
    },
    {
      icon: WifiOff,
      title: "100% Offline",
      description: "Play anywhere, anytime. No internet connection required to enjoy endless sorting fun."
    },
    {
      icon: RotateCcw,
      title: "Helpful Tools",
      description: "Made a mistake? Use the 'Undo' feature to reverse your last move, or get a 'Hint' when stuck."
    },
    {
      icon: Volume2,
      title: "ASMR Sounds",
      description: "Satisfying pouring animations and crisp sound effects that make every move rewarding."
    },
    {
      icon: Sparkles,
      title: "Glassy UI",
      description: "A premium 3D design with realistic water physics and beautiful visual aesthetics."
    },
    {
      icon: Brain,
      title: "Brain Training",
      description: "No time limits. Purely relaxing gameplay that stimulates your logic and problem-solving skills."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-ocean-gradient opacity-90 -z-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
            <Sparkles className="text-cyan-400" size={16} />
            <span className="text-sm font-medium text-cyan-100">The Ultimate Relaxing Puzzle</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Sort, Relax, and <br />
            <span className="text-gradient">Train Your Brain!</span>
          </h1>
          
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Pour colorful water into glass bottles until every bottle holds a single solid color. 
            A satisfying, stress-free logic puzzle that brings peace to your mind.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto">
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-ocean-900 bg-white rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,191,255,0.4)] w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-300 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-2">
                <Play className="fill-ocean-900" size={20} />
                Download on Google Play
              </span>
            </a>
            
            <Link 
              to="/about" 
              className="glass-button px-8 py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 hover:text-cyan-300 w-full sm:w-auto"
            >
              <Info size={20} />
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Play Water Sort?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We've crafted the perfect balance of relaxation and mental stimulation with premium features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Banner */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to find your zen?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of players who are already enjoying the most relaxing and beautiful sorting puzzle on the store.
            </p>
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-ocean-900 font-bold px-10 py-4 rounded-full transition-colors shadow-lg shadow-cyan-500/30"
            >
              Get it Free Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
