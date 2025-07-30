
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-brand-card/50 p-6 border-b border-slate-700/50">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <img src="https://petgascoin.com/petgascoin.com/petgascoin/img/logoBTCMINER.png" alt="BTCMiner Logo" className="h-10" />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 tracking-tight text-center sm:text-right">
          PLAN DE IMPLEMENTACIÓN Y PROGRESO
        </h1>
      </div>
    </header>
  );
};
