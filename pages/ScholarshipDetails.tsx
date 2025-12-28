
import React from 'react';
import { Scholarship } from '../types';

interface ScholarshipDetailsProps {
  scholarship: Scholarship;
  onBack: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

const ScholarshipDetails: React.FC<ScholarshipDetailsProps> = ({ scholarship, onBack, isBookmarked, onToggleBookmark }) => {
  return (
    <div className="animate-in slide-in-from-bottom-8 duration-300">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-600 font-medium mb-6 hover:text-blue-700 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour au catalogue
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{scholarship.level}</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase">{scholarship.field}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2">{scholarship.name}</h1>
              <p className="text-gray-600 font-medium text-lg">{scholarship.provider} • {scholarship.destinationCountry}</p>
            </div>
            <button 
              onClick={() => onToggleBookmark(scholarship.id)}
              className={`p-3 rounded-full transition-all ${isBookmarked ? 'bg-blue-100 text-blue-700 shadow-inner' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
            >
              <svg className="w-7 h-7" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-500 text-xs font-bold uppercase mb-1">Date Limite</p>
              <p className="text-red-600 font-bold">{new Date(scholarship.deadline).toLocaleDateString()}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-500 text-xs font-bold uppercase mb-1">Destination</p>
              <p className="text-gray-900 font-bold">{scholarship.destinationCountry}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-500 text-xs font-bold uppercase mb-1">Statut</p>
              <div className="flex items-center gap-1.5 text-green-600 font-bold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Vérifié
              </div>
            </div>
          </div>

          <div className="prose prose-blue max-w-none mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Description de l'opportunité</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{scholarship.description}</p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-blue-900">Postuler sur le site officiel</h4>
                <p className="text-sm text-blue-700">EduBourse a vérifié que ce lien appartient au fournisseur légitime.</p>
              </div>
            </div>
            <a 
              href={scholarship.officialLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 shadow-lg shadow-blue-200 transition-all text-center w-full md:w-auto"
            >
              Aller sur le site officiel
            </a>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
        <div className="flex gap-4">
          <div className="text-amber-600 shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h5 className="font-bold text-amber-900 mb-1">Avertissement Anti-Fraude</h5>
            <p className="text-sm text-amber-800 leading-relaxed">
              Ne payez jamais pour obtenir une bourse. Si quelqu'un vous demande de l'argent pour "faciliter" votre dossier DAAD, Eiffel ou MEXT, c'est une tentative d'escroquerie. Signalez tout comportement suspect à EduBourse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
