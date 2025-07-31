
import React from 'react';

export const ProjectSummary: React.FC = () => {
  return (
    <div className="w-full bg-brand-card/50 p-6 sm:p-8 rounded-2xl border border-slate-800 mb-8">
      <h2 className="text-2xl font-bold text-slate-100 tracking-wide mb-4">Resumen del Proyecto</h2>
      <p className="text-slate-300 mb-4">
        BTCMiner is a comprehensive multi-chain token ecosystem developed by Mining Freedom that enables seamless cross-chain operations, liquidity management, and decentralized identity across Ethereum, BNB Chain, Base, Solana, and Internet Computer Protocol (ICP).
      </p>
      <p className="text-slate-300">
        Mining Freedom is dedicated to advancing blockchain technology and cryptocurrency mining solutions, providing innovative tools and platforms for the decentralized finance ecosystem. Our mission is to democratize access to blockchain technology while maintaining the highest standards of security and user experience.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-slate-100 tracking-wide mb-3">Progreso General</h3>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>Set up ICP identity authentication foundation</li>
          <li>Remove mock data from core services</li>
          <li>Implement ICP identity canister integration</li>
          <li>Replace simulated data in UI components</li>
          <li>Implement proper loading states and error handling</li>
          <li>Implement real-time data synchronization</li>
        </ul>
      </div>
    </div>
  );
};
