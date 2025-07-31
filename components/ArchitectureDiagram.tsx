import React from 'react';
export const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-brand-card/50 p-6 sm:p-8 rounded-2xl border border-slate-800 mb-8">
      <h2 className="text-2xl font-bold text-slate-100 tracking-wide mb-4">Arquitectura del Sistema</h2>
      <p className="text-slate-300 mb-6">
        El sistema se basa en una arquitectura modular, integrando componentes clave para la gestión de criptomonedas y la interacción con la blockchain de ICP.
      </p>
      <div className="flex justify-center items-center bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-lg shadow-black/30">
        <img 
          src="https://via.placeholder.com/800x400?text=Architecture+Diagram+Placeholder" 
          alt="Diagrama de Arquitectura del Sistema" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};
