
import React from 'react';

const TrustCenter: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">La Confiance avant tout</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          En RDC et au Burundi, des milliers d'étudiants sont victimes de sites de bourses fictives chaque année. EduBourse est né pour mettre fin à cela.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Notre processus de vérification</h3>
          <p className="text-gray-600 leading-relaxed">
            Chaque opportunité sur notre plateforme passe par trois étapes de contrôle :
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 font-bold">1</span>
              <span>Vérification de l'URL officielle du fournisseur (Gouvernement, Fondation, Université).</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 font-bold">2</span>
              <span>Validation des dates limites via les communiqués officiels.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 font-bold">3</span>
              <span>Confirmation de la gratuité du processus de candidature.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Comment détecter une arnaque ?</h3>
          <p className="text-gray-600 leading-relaxed">
            Méfiez-vous toujours si :
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <svg className="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>On vous demande des frais de dossier via Mobile Money (Orange Money, M-Pesa, etc.).</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <svg className="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Le site web utilise une adresse gratuite (ex: bourse-canada.jimdo.com ou blogspot).</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <svg className="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>On vous promet une bourse garantie à 100% sans critères de sélection.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Rejoignez la lutte contre la fraude</h3>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Vous avez repéré un site suspect ou une fausse annonce ? Signalez-la nous pour protéger les autres étudiants.
        </p>
        <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
          Signaler une arnaque
        </button>
      </div>
    </div>
  );
};

export default TrustCenter;
