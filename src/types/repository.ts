export interface Repository {
  name: string;
  isPublic: boolean;
  language: string;
  size: string;
  updatedAt: string;
}

export interface LanguageColors {
  [key: string]: string;
}