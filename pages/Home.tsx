
import React, { useState, useMemo } from 'react';
import { UserProfile, Scholarship, ViewState } from '../types';
import { MOCK_SCHOLARSHIPS } from '../constants';
import ScholarshipCard from '../components/ScholarshipCard';
import FilterBar from '../components/FilterBar';

interface HomeProps {
  user: UserProfile | null;
  onNavigateToDetails: (id: string) => void;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ user, onNavigateToDetails, bookmarks, onToggleBookmark }) => {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const filteredScholarships = useMemo(() => {
    return MOCK_SCHOLARSHIPS.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                            s.destinationCountry.toLowerCase().includes(search.toLowerCase()) ||
                            s.field.toLowerCase().includes(search.toLowerCase());
      const matchesLevel = selectedLevel === '' || s.level === selectedLevel;
      return matchesSearch && matchesLevel;
    });
  }, [search, selectedLevel]);

  // Rule-based recommendation
  const recommendedIds = useMemo(() => {
    if (!user) return [];
    return MOCK_SCHOLARSHIPS
      .filter(s => s.level === user.levelOfStudy || s.field === user.field)
      .map(s => s.id);
  }, [user]);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="bg-blue-900 rounded-2xl p-6 md:p-10 mb-10 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Finis les arnaques aux bourses.</h1>
          <p className="text-blue-100 text-lg mb-6 leading-relaxed">
            EduBourse liste uniquement des opportunités d'études vérifiées manuellement pour les étudiants de la RDC et du Burundi.
          </p>
          <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/20 backdrop-blur-sm">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold">Zéro Fraude Garantie</p>
              <p className="text-xs text-blue-200">Nos experts vérifient chaque lien officiel.</p>
            </div>
          </div>
        </div>
        <div className="absolute right-[-5%] bottom-[-10%] opacity-10 hidden md:block">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.62c0-1.17.68-2.25 1.76-2.73 1.17-.51 2.61-.9 4.24-.9zM12 5.5a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z" />
          </svg>
        </div>
      </section>

      {/* Catalog */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Opportunités Disponibles</h2>
        <p className="text-gray-500 text-sm mb-6">Explorez les bourses vérifiées pour la rentrée 2025-2026.</p>
        
        <FilterBar 
          search={search} 
          onSearchChange={setSearch} 
          selectedLevel={selectedLevel} 
          onLevelChange={setSelectedLevel} 
        />

        {filteredScholarships.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredScholarships.map(scholarship => (
              <ScholarshipCard 
                key={scholarship.id}
                scholarship={scholarship}
                onViewDetails={onNavigateToDetails}
                isBookmarked={bookmarks.includes(scholarship.id)}
                onToggleBookmark={onToggleBookmark}
                recommended={recommendedIds.includes(scholarship.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800">Aucun résultat trouvé</h3>
            <p className="text-gray-500">Essayez de modifier vos filtres ou votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
