
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Chart: React.FC = () => {
  const [data, setData] = useState([65, 59, 80, 81, 56, 55, 40]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(data.map(() => Math.floor(Math.random() * 100)));
    }, 2000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="w-full h-48 bg-gray-800/50 rounded-lg p-4 flex items-end space-x-2">
      {data.map((value, index) => (
        <motion.div
          key={index}
          className="w-full bg-green-500 rounded-t-lg"
          initial={{ height: 0 }}
          animate={{ height: `${value}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
};

const Counter: React.FC<{ label: string; initialValue: number }> = ({ label, initialValue }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + Math.floor(Math.random() * 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-2xl font-bold text-white">{count.toLocaleString()}</p>
    </div>
  );
};

export const AnimatedDashboard: React.FC = () => {
  return (
    <div className="w-full bg-gray-900/70 rounded-lg p-6 space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <Counter label="Transactions" initialValue={123456} />
        <Counter label="Volume (USD)" initialValue={9876543} />
        <Counter label="Active Users" initialValue={4567} />
      </div>
      <Chart />
    </div>
  );
};
