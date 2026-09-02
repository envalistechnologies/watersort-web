import React from 'react';

const Terms = () => {
  const lastUpdated = "September 2, 2026";

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto glass-card p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Use</h1>
        <p className="text-cyan-400 mb-8 text-sm">Last Updated: {lastUpdated}</p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or playing Water Sort Puzzle, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. License to Play</h2>
            <p>
              We grant you a personal, non-exclusive, non-transferable, revocable limited license to access and play Water Sort Puzzle for your own personal, non-commercial entertainment purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Conduct</h2>
            <p className="mb-2">You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the game for any commercial purpose without our written consent.</li>
              <li>Attempt to reverse engineer, decompile, hack, or modify the game.</li>
              <li>Use cheats, exploits, or third-party software designed to modify the game experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
            <p>
              All rights, title, and interest in and to Water Sort Puzzle (including without limitation any games, titles, computer code, themes, objects, characters, artwork, animations, sounds, musical compositions, and audio-visual effects) are owned by the developers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Disclaimer of Warranty</h2>
            <p>
              The game is provided "AS IS", without warranty of any kind. We do not guarantee that the game will be uninterrupted or error-free. Your use of the game is at your sole risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us through the Google Play Store support section on our app listing page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
