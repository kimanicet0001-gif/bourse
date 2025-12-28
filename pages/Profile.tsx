
import React, { useState } from 'react';
import { UserProfile, StudyLevel, Country } from '../types';
import { STUDY_LEVELS, COUNTRIES } from '../constants';

interface ProfileProps {
  user: UserProfile | null;
  onUpdateUser: (user: UserProfile) => void;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onUpdateUser, onLogout }) => {
  const [formData, setFormData] = useState<Partial<UserProfile>>(user || {});
  const [isEditing, setIsEditing] = useState(!user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser = {
      id: user?.id || 'user_' + Date.now(),
      fullName: formData.fullName || '',
      emailOrPhone: formData.emailOrPhone || '',
      levelOfStudy: (formData.levelOfStudy as StudyLevel) || 'Bachelor',
      field: formData.field || '',
      country: (formData.country as Country) || 'DRC',
      isLoggedIn: true
    };
    onUpdateUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mon Profil</h1>
        {user && !isEditing && (
          <button onClick={() => setIsEditing(true)} className="text-blue-700 font-bold hover:underline">Modifier</button>
        )}
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-6 md:p-8">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nom Complet</label>
              <input 
                type="text" 
                required
                value={formData.fullName || ''} 
                onChange={e => setFormData({...formData, fullName: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email ou Téléphone</label>
              <input 
                type="text" 
                required
                value={formData.emailOrPhone || ''} 
                onChange={e => setFormData({...formData, emailOrPhone: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Niveau d'études actuel</label>
                <select 
                  value={formData.levelOfStudy || 'Bachelor'}
                  onChange={e => setFormData({...formData, levelOfStudy: e.target.value as StudyLevel})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  {STUDY_LEVELS.map(level => <option key={level} value={level}>{level}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Pays</label>
                <select 
                  value={formData.country || 'DRC'}
                  onChange={e => setFormData({...formData, country: e.target.value as Country})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  {COUNTRIES.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Domaine d'études principal</label>
              <input 
                type="text" 
                placeholder="Ex: Ingénierie, Médecine, Droit..."
                value={formData.field || ''} 
                onChange={e => setFormData({...formData, field: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all"
            >
              Enregistrer mon profil
            </button>
          </form>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-2xl font-bold uppercase">
                {user?.fullName.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{user?.fullName}</h3>
                <p className="text-gray-500">{user?.emailOrPhone}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-y border-gray-100">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Niveau d'études</p>
                <p className="text-lg font-semibold text-gray-800">{user?.levelOfStudy}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Pays de résidence</p>
                <p className="text-lg font-semibold text-gray-800">{user?.country}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Filière d'intérêt</p>
                <p className="text-lg font-semibold text-gray-800">{user?.field || 'Non spécifié'}</p>
              </div>
            </div>

            <button 
              onClick={onLogout}
              className="text-red-600 font-bold hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
            >
              Se déconnecter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
