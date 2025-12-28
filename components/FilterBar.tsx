
import React from 'react';
import { StudyLevel } from '../types';
import { STUDY_LEVELS } from '../constants';

interface FilterBarProps {
  search: string;
  onSearchChange: (val: string) => void;
  selectedLevel: string;
  onLevelChange: (val: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ search, onSearchChange, selectedLevel, onLevelChange }) => {
  return (
    <div className="space-y-4 mb-8">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Rechercher une bourse, un pays, une filière..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
        />
        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        <button 
          onClick={() => onLevelChange('')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedLevel === '' ? 'bg-blue-700 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'}`}
        >
          Toutes
        </button>
        {STUDY_LEVELS.map(level => (
          <button 
            key={level}
            onClick={() => onLevelChange(level)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedLevel === level ? 'bg-blue-700 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'}`}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
