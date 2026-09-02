import React from 'react';

const Privacy = () => {
  const lastUpdated = "September 2, 2026";

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto glass-card p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-cyan-400 mb-8 text-sm">Last Updated: {lastUpdated}</p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to Water Sort Puzzle. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you play our mobile game, Water Sort Puzzle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Device Information:</strong> We may collect information about your mobile device, including device model, operating system, unique device identifiers, and mobile network information.</li>
              <li><strong>Usage Data:</strong> We collect data regarding your gameplay, including levels completed, time spent in the app, and interaction with advertisements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Third-Party Services</h2>
            <p className="mb-2">
              Water Sort Puzzle uses third-party services that may collect information used to identify you. The third-party service providers used by the app include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google AdMob:</strong> Used to serve advertisements within the game. AdMob may use cookies and similar technologies to collect data to provide personalized ads.</li>
              <li><strong>Google Analytics:</strong> Used to understand how users interact with our game so we can improve the experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. How We Use Your Information</h2>
            <p className="mb-2">We use the collected information for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, maintain, and improve the game.</li>
              <li>To analyze gameplay data to balance difficulty and add new features.</li>
              <li>To serve relevant advertisements to keep the game free to play.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Children's Privacy</h2>
            <p>
              These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, please contact us via the Google Play Store support section on our app listing page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
