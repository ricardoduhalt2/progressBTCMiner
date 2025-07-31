import React from 'react';
import { Task } from '../types';
import { AnimatedCheck } from './AnimatedCheck';

export const TaskItem: React.FC<{ task: Task; onToggle: (id: string) => void }> = ({ task, onToggle }) => {
  const isParent = task.children.length > 0;

  return (
    <div className="flex flex-col">
      <div className="flex items-start gap-3" onClick={() => onToggle(task.id)}>
        <div className="flex-shrink-0 pt-1">
          <AnimatedCheck checked={task.checked} />
        </div>
        <p className={`
          flex-grow
          ${task.checked ? 'text-slate-400' : 'text-slate-200'}
          ${task.isMetadata ? 'italic text-slate-500 text-sm' : 'text-base'}
          ${isParent && !task.isMetadata ? 'font-semibold' : ''}
        `}>
          {task.text}
        </p>
      </div>
      {isParent && (
        <div className="pl-5 mt-3 space-y-3 border-l border-slate-700 ml-2.5">
          {task.children.map(child => (
            <TaskItem key={child.id} task={child} onToggle={onToggle} />
          ))}
        </div>
      )}
    </div>
  );
};
