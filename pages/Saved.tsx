
import React from 'react';
import { MOCK_SCHOLARSHIPS } from '../constants';
import ScholarshipCard from '../components/ScholarshipCard';

interface SavedProps {
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
  onNavigateToDetails: (id: string) => void;
}

const Saved: React.FC<SavedProps> = ({ bookmarks, onToggleBookmark, onNavigateToDetails }) => {
  const savedScholarships = MOCK_SCHOLARSHIPS.filter(s => bookmarks.includes(s.id));

  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Mes Bourses Enregistrées</h1>
      <p className="text-gray-500 mb-8">Retrouvez ici les opportunités que vous avez marquées pour plus tard.</p>

      {savedScholarships.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {savedScholarships.map(scholarship => (
            <ScholarshipCard 
              key={scholarship.id}
              scholarship={scholarship}
              onViewDetails={onNavigateToDetails}
              isBookmarked={true}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800">Aucune bourse enregistrée</h3>
          <p className="text-gray-500 mt-1 px-4">Parcourez le catalogue et cliquez sur l'icône de signet pour enregistrer une opportunité.</p>
        </div>
      )}
    </div>
  );
};

export default Saved;
