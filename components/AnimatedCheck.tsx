
import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedCheck: React.FC<{ checked: boolean }> = ({ checked }) => {
  return (
    <motion.div
      className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${checked ? 'bg-green-500' : 'bg-slate-700'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.svg
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: checked ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </motion.svg>
    </motion.div>
  );
};
