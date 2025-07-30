
import React from 'react';
import { Header } from './components/Header';
import { DashboardCard } from './components/DashboardCard';
import { ImplementationPlan } from './components/ImplementationPlan';
import { ProjectSummary } from './components/ProjectSummary';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { NextSteps } from './components/NextSteps';
import { AnimatedSection } from './components/AnimatedSection';
import { IMPLEMENTATION_PLAN_TEXT } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-300 font-sans p-4 sm:p-6 md:p-8 print:p-0">
      <div className="max-w-5xl mx-auto bg-brand-card rounded-2xl shadow-2xl shadow-black/50 overflow-hidden print:rounded-none print:shadow-none">
        <Header />
        <main className="p-4 sm:p-6 md:p-8">
          <div className="flex flex-col items-center">
            <AnimatedSection delay={0.1}>
              <ProjectSummary />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <ArchitectureDiagram />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <DashboardCard />
            </AnimatedSection>
            <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-brand-accent/50 to-transparent my-6 sm:my-8" aria-hidden="true" />
            <AnimatedSection delay={0.4}>
              <ImplementationPlan planText={IMPLEMENTATION_PLAN_TEXT} />
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <NextSteps />
            </AnimatedSection>
          </div>
        </main>
      </div>
      <div className="text-center my-8 no-print">
        <button
          onClick={() => window.print()}
          className="bg-brand-accent hover:bg-brand-accent-light text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-accent/20"
        >
          Exportar a PDF
        </button>
      </div>
    </div>
  );
};

export default App;
