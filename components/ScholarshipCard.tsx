
import React from 'react';
import { Scholarship } from '../types';

interface ScholarshipCardProps {
  scholarship: Scholarship;
  onViewDetails: (id: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  recommended?: boolean;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ 
  scholarship, 
  onViewDetails, 
  isBookmarked, 
  onToggleBookmark,
  recommended = false
}) => {
  return (
    <div className={`bg-white border ${recommended ? 'border-blue-300 ring-1 ring-blue-100' : 'border-gray-200'} rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden`}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-3 py-1 font-bold uppercase tracking-wider rounded-bl-lg">
          Recommandé pour vous
        </div>
      )}
      
      <div className="flex justify-between items-start mb-3">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 self-start px-2 py-0.5 rounded-full mb-2">
            {scholarship.level}
          </span>
          <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-blue-700 cursor-pointer" onClick={() => onViewDetails(scholarship.id)}>
            {scholarship.name}
          </h3>
          <p className="text-sm text-gray-500 font-medium mt-1">{scholarship.destinationCountry} • {scholarship.provider}</p>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleBookmark(scholarship.id); }}
          className={`p-2 rounded-full transition-colors ${isBookmarked ? 'text-blue-600 bg-blue-50' : 'text-gray-300 hover:bg-gray-100 hover:text-gray-500'}`}
        >
          <svg className="w-6 h-6" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Date limite: <span className="font-semibold">{new Date(scholarship.deadline).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-1.5 text-green-600 font-bold text-xs uppercase tracking-tight">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Vérifié par EduBourse
        </div>
        <button 
          onClick={() => onViewDetails(scholarship.id)}
          className="text-blue-700 font-bold text-sm hover:underline"
        >
          Voir détails
        </button>
      </div>
    </div>
  );
};

export default ScholarshipCard;
