import React from 'react';
import { Circle } from 'lucide-react';
import { Repository } from '../types/repository';
import { getLanguageColor } from '../utils/colors';

const RepositoryCard: React.FC<Repository> = ({
  name,
  isPublic,
  language,
  size,
  updatedAt,
}) => {
  return (
    <div className="border-b border-gray-200 py-4 hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">{name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                isPublic ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {isPublic ? 'Public' : 'Private'}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Circle size={8} fill={getLanguageColor(language)} stroke="none" />
                <span>{language}</span>
              </div>
              <span>•</span>
              <span>{size}</span>
              <span>•</span>
              <span>Updated {updatedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;