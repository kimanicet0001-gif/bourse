
export type StudyLevel = 'Bachelor' | 'Master' | 'PhD' | 'Short Course';
export type Country = 'DRC' | 'Burundi' | 'International';

export interface UserProfile {
  id: string;
  fullName: string;
  emailOrPhone: string;
  levelOfStudy: StudyLevel;
  field: string;
  country: Country;
  isLoggedIn: boolean;
}

export interface Scholarship {
  id: string;
  name: string;
  destinationCountry: string;
  level: StudyLevel;
  deadline: string;
  field: string;
  description: string;
  officialLink: string;
  isVerified: boolean;
  postedDate: string;
  provider: string;
}

export type ViewState = 'HOME' | 'DETAILS' | 'PROFILE' | 'LOGIN' | 'SAVED' | 'TRUST';
