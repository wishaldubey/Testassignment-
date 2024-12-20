import { LanguageColors } from '../types/repository';

export const languageColors: LanguageColors = {
  React: '#61dafb',
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  Swift: '#ffac45',
  Java: '#b07219',
  'HTML/CSS': '#e34c26',
  PHP: '#4F5D95'
};

export const getLanguageColor = (language: string): string => {
  return languageColors[language] || '#6e7681';
};