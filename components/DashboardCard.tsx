import React from 'react';
import { AnimatedDashboard } from './AnimatedDashboard';
import { motion } from 'framer-motion';

export const DashboardCard: React.FC = () => {

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto relative group"
      whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
       <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative bg-brand-card/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl shadow-black/40 w-full">
        <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <h3 className="text-lg font-bold text-slate-200">
                Live Data Monitoring
            </h3>
        </div>
        <p className="text-sm text-slate-400 mb-5">
            Real-time project status visualized through the multi-chain deployment dashboard.
        </p>
        <div className="overflow-hidden rounded-lg shadow-lg shadow-black/50 border border-slate-700">
          <AnimatedDashboard />
        </div>
      </div>
    </motion.div>
  );
};
