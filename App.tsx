
import React, { useState, useEffect, useMemo } from 'react';
import { ViewState, UserProfile, Scholarship, StudyLevel } from './types';
import { MOCK_SCHOLARSHIPS } from './constants';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ScholarshipDetails from './pages/ScholarshipDetails';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Saved from './pages/Saved';
import TrustCenter from './pages/TrustCenter';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedScholarshipId, setSelectedScholarshipId] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('edubourse_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('edubourse_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('edubourse_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('edubourse_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('edubourse_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const navigateToDetails = (id: string) => {
    setSelectedScholarshipId(id);
    setCurrentView('DETAILS');
    window.scrollTo(0, 0);
  };

  const selectedScholarship = useMemo(() => 
    MOCK_SCHOLARSHIPS.find(s => s.id === selectedScholarshipId), 
    [selectedScholarshipId]
  );

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
        return <Home 
          user={user} 
          onNavigateToDetails={navigateToDetails} 
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
        />;
      case 'DETAILS':
        return selectedScholarship ? (
          <ScholarshipDetails 
            scholarship={selectedScholarship} 
            onBack={() => setCurrentView('HOME')}
            isBookmarked={bookmarks.includes(selectedScholarship.id)}
            onToggleBookmark={toggleBookmark}
          />
        ) : <Home user={user} onNavigateToDetails={navigateToDetails} bookmarks={bookmarks} onToggleBookmark={toggleBookmark} />;
      case 'PROFILE':
        return <Profile 
          user={user} 
          onUpdateUser={setUser} 
          onLogout={() => { setUser(null); setCurrentView('HOME'); }} 
        />;
      case 'LOGIN':
        return <Login onLogin={(u) => { setUser(u); setCurrentView('HOME'); }} />;
      case 'SAVED':
        return <Saved 
          onNavigateToDetails={navigateToDetails}
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
        />;
      case 'TRUST':
        return <TrustCenter />;
      default:
        return <Home user={user} onNavigateToDetails={navigateToDetails} bookmarks={bookmarks} onToggleBookmark={toggleBookmark} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        isLoggedIn={!!user} 
      />
      <main className="flex-grow container mx-auto px-4 py-6 max-w-4xl">
        {renderView()}
      </main>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
};

export default App;
