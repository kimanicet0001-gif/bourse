
import React, { useState } from 'react';
import { UserProfile } from '../types';

interface LoginProps {
  onLogin: (user: UserProfile) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [input, setInput] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    onLogin({
      id: 'user_1',
      fullName: isNewUser ? 'Nouvel Utilisateur' : 'Étudiant Congolais',
      emailOrPhone: input,
      levelOfStudy: 'Bachelor',
      field: 'Engineering',
      country: 'DRC',
      isLoggedIn: true
    });
  };

  return (
    <div className="max-w-md mx-auto py-12 animate-in fade-in zoom-in duration-300">
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">EB</div>
          <h1 className="text-2xl font-bold text-gray-900">Bienvenue sur EduBourse</h1>
          <p className="text-gray-500 mt-2">Accédez aux meilleures opportunités d'études vérifiées.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email ou Numéro de téléphone</label>
            <input 
              type="text" 
              required
              placeholder="Ex: +243... ou jean.doe@email.com"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 shadow-lg shadow-blue-100 transition-all"
          >
            {isNewUser ? "Créer mon compte" : "Continuer"}
          </button>

          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">Ou</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <button 
            type="button"
            onClick={() => setIsNewUser(!isNewUser)}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
          >
            {isNewUser ? "J'ai déjà un compte" : "Je suis nouveau, m'inscrire"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-8">
          En continuant, vous acceptez nos conditions d'utilisation et notre politique de protection contre la fraude.
        </p>
      </div>
    </div>
  );
};

export default Login;
