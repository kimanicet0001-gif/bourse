
import { Scholarship } from './types';

export const MOCK_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'eiffel-2025',
    name: 'Bourses d\'Excellence Eiffel 2025',
    destinationCountry: 'France',
    level: 'Master',
    deadline: '2025-01-08',
    field: 'Droit, Économie, Ingénierie',
    description: 'Le programme de bourses Eiffel est un outil développé par le ministère de l\'Europe et des Affaires étrangères afin de permettre aux établissements français d\'enseignement supérieur d\'attirer les meilleurs étudiants étrangers.',
    officialLink: 'https://www.campusfrance.org/fr/le-programme-de-bourses-eiffel',
    isVerified: true,
    postedDate: '2024-10-01',
    provider: 'Campus France'
  },
  {
    id: 'turkiye-2025',
    name: 'Türkiye Bursları 2025',
    destinationCountry: 'Turquie',
    level: 'Bachelor',
    deadline: '2025-02-20',
    field: 'Toutes filières',
    description: 'Bourses d\'études complètes financées par le gouvernement turc pour les étudiants internationaux de haut niveau. Inclut les cours de langue turque, le logement et l\'assurance santé.',
    officialLink: 'https://www.turkiyeburslari.gov.tr/',
    isVerified: true,
    postedDate: '2024-11-15',
    provider: 'Gouvernement de Turquie'
  },
  {
    id: 'italy-talent-2025',
    name: 'Invest Your Talent in Italy 2025',
    destinationCountry: 'Italie',
    level: 'Master',
    deadline: '2025-03-01',
    field: 'Architecture, Design, Ingénierie',
    description: 'Programme combinant cours académiques et stages en entreprises italiennes. Idéal pour les étudiants souhaitant une expérience professionnelle en Europe.',
    officialLink: 'https://investyourtalentitaly.esteri.it/',
    isVerified: true,
    postedDate: '2024-11-20',
    provider: 'Ministère des Affaires Étrangères (Italie)'
  },
  {
    id: 'mastercard-sciencespo-2025',
    name: 'Bourses Mastercard Foundation - Sciences Po',
    destinationCountry: 'France',
    level: 'Master',
    deadline: '2024-12-01',
    field: 'Sciences Sociales, Politique',
    description: 'Destiné aux étudiants d\'Afrique subsaharienne faisant preuve d\'un parcours académique d\'excellence et d\'un fort potentiel de leadership.',
    officialLink: 'https://www.sciencespo.fr/students/fr/financer/bourses-mastercard-foundation',
    isVerified: true,
    postedDate: '2024-09-15',
    provider: 'Mastercard Foundation'
  },
  {
    id: 'mext-2026-early',
    name: 'Bourse MEXT du Gouvernement Japonais',
    destinationCountry: 'Japon',
    level: 'PhD',
    deadline: '2025-05-30',
    field: 'Recherche, Sciences',
    description: 'Appel anticipé pour le cycle 2025-2026. Couvre les frais de scolarité, le voyage et une allocation mensuelle substantielle.',
    officialLink: 'https://www.studyinjapan.go.jp/en/smap-stopj-applications-research.html',
    isVerified: true,
    postedDate: '2024-12-01',
    provider: 'MEXT Japan'
  }
];

export const STUDY_LEVELS: string[] = ['Bachelor', 'Master', 'PhD', 'Short Course'];
export const COUNTRIES: string[] = ['DRC', 'Burundi', 'International'];
