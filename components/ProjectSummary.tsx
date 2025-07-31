
import React from 'react';

export const ProjectSummary: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-brand-card/50 p-6 sm:p-8 rounded-2xl border border-slate-800 mb-8">
      <h2 className="text-2xl font-bold text-slate-100 tracking-wide mb-4">Resumen del Proyecto</h2>
      <p className="text-slate-300 mb-4">
        El objetivo de este proyecto es construir un dashboard de trading y arbitraje de criptomonedas que se integra con la blockchain de Internet Computer (ICP) para la autenticación de usuarios y el almacenamiento de datos.
      </p>
      <p className="text-slate-300">
        Actualmente, el proyecto ha completado la fase de fundación, incluyendo la autenticación de identidad de ICP y la sustitución de datos mock con integraciones reales. Las próximas fases se centrarán en la integración de canisters de ICP, la actualización de la interfaz de usuario con datos reales y la mejora de la experiencia del usuario.
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
