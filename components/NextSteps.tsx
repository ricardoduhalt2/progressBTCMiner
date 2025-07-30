
import React from 'react';

export const NextSteps: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-brand-card/50 p-6 sm:p-8 rounded-2xl border border-slate-800 mt-8">
      <h2 className="text-2xl font-bold text-slate-100 tracking-wide mb-4">Próximos Pasos</h2>
      <ul className="list-disc list-inside text-slate-300 space-y-2">
        <li>Integrar los canisters de ICP para la gestión de perfiles de usuario y la vinculación de wallets.</li>
        <li>Actualizar la interfaz de usuario para mostrar datos reales de la blockchain.</li>
        <li>Implementar estados de carga y manejo de errores para mejorar la experiencia del usuario.</li>
        <li>Sincronizar los datos de la blockchain y los precios en tiempo real.</li>
        <li>Refinar la autenticación y el flujo de experiencia del usuario.</li>
        <li>Unificar el estado de la aplicación y la consistencia de los datos.</li>
        <li>Añadir pruebas exhaustivas para garantizar la calidad del software.</li>
        <li>Realizar una limpieza final del código y optimizar el rendimiento.</li>
      </ul>
    </div>
  );
};
