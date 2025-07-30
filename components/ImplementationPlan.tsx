
import React, { useState, useMemo } from 'react';
import { Task } from '../types';
import { TaskItem } from './TaskItem';

// A robust parser to convert indented text into a tree structure
const parsePlan = (text: string): Task[] => {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  const tasks: Task[] = [];
  const parentStack: { level: number; task: Task }[] = [];

  lines.forEach((line, index) => {
    const indent = line.search(/\S|$/);
    
    const checkedMatch = line.match(/- \[(x| )\]/);
    const checked = checkedMatch ? checkedMatch[1] === 'x' : false;
    
    let content = line.trim().replace(/- \[(x| )수를\] /, '');
    const isMetadata = content.startsWith('_') && content.endsWith('_');
    if (isMetadata) {
        content = content.slice(1, -1);
    }
    
    const task: Task = { id: `task-${index}`, text: content, checked, isMetadata, children: [] };

    while (parentStack.length > 0 && parentStack[parentStack.length - 1].level >= indent) {
      parentStack.pop();
    }

    if (parentStack.length === 0) {
      tasks.push(task);
    } else {
      parentStack[parentStack.length - 1].task.children.push(task);
    }

    parentStack.push({ level: indent, task });
  });

  return tasks;
};

const calculateProgress = (tasks: Task[]): { completed: number; total: number } => {
  let completed = 0;
  let total = 0;

  function traverse(taskList: Task[]) {
    for (const task of taskList) {
      if (!task.isMetadata) {
        total++;
        if (task.checked) {
          completed++;
        }
      }
      if (task.children.length > 0) {
        traverse(task.children);
      }
    }
  }

  traverse(tasks);
  return { completed, total };
};


export const ImplementationPlan: React.FC<{ planText: string }> = ({ planText }) => {
  const initialTasks = useMemo(() => parsePlan(planText), [planText]);
  const [tasks, setTasks] = useState(initialTasks);

  const handleToggle = (id: string) => {
    const newTasks = [...tasks];
    const toggleTask = (task: Task) => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
      task.children.forEach(toggleTask);
    };
    newTasks.forEach(toggleTask);
    setTasks(newTasks);
  };

  const { completed, total } = useMemo(() => calculateProgress(tasks), [tasks]);
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="w-full max-w-4xl mx-auto bg-brand-card/50 p-6 sm:p-8 rounded-2xl border border-slate-800">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-slate-100 tracking-wide">Progreso General</h3>
            <span className="font-semibold text-xl text-brand-accent-light">{percentage}%</span>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-3.5 shadow-inner">
            <div 
                className="bg-gradient-to-r from-brand-accent to-orange-400 h-3.5 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${percentage}%` }}
                role="progressbar"
                aria-valuenow={percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Progreso del proyecto"
            ></div>
        </div>
         <p className="text-right text-sm text-slate-400 mt-2">{completed} de {total} tareas completadas</p>
      </div>

      <div className="space-y-4">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
};
