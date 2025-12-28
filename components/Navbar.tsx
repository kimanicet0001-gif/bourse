
import React, { useState } from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ view, label }: { view: ViewState, label: string }) => (
    <button
      onClick={() => { onNavigate(view); setIsOpen(false); }}
      className={`px-3 py-2 text-sm font-medium transition-colors ${
        currentView === view 
          ? 'text-blue-700 border-b-2 border-blue-700' 
          : 'text-gray-600 hover:text-blue-700'
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('HOME')}>
            <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white font-bold">EB</div>
            <span className="text-xl font-bold text-blue-900 tracking-tight">EduBourse</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink view="HOME" label="Explorer" />
            <NavLink view="TRUST" label="Vérification" />
            {isLoggedIn ? (
              <>
                <NavLink view="SAVED" label="Mes Favoris" />
                <NavLink view="PROFILE" label="Profil" />
              </>
            ) : (
              <button 
                onClick={() => onNavigate('LOGIN')}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors"
              >
                Connexion
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-700 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2 flex flex-col animate-in fade-in slide-in-from-top-4">
          <button onClick={() => { onNavigate('HOME'); setIsOpen(false); }} className="text-left py-2 text-gray-700 font-medium">Explorer</button>
          <button onClick={() => { onNavigate('TRUST'); setIsOpen(false); }} className="text-left py-2 text-gray-700 font-medium">Anti-Fraude</button>
          {isLoggedIn ? (
            <>
              <button onClick={() => { onNavigate('SAVED'); setIsOpen(false); }} className="text-left py-2 text-gray-700 font-medium">Mes Favoris</button>
              <button onClick={() => { onNavigate('PROFILE'); setIsOpen(false); }} className="text-left py-2 text-gray-700 font-medium">Mon Profil</button>
            </>
          ) : (
            <button onClick={() => { onNavigate('LOGIN'); setIsOpen(false); }} className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold">S'inscrire / Se connecter</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
