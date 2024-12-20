import React from 'react';
import { Search, RefreshCcw, PlusCircle } from 'lucide-react';
import Sidebar from './components/Sidebar';
import RepositoryCard from './components/RepositoryCard';
import { repositories } from './data/repositories';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="md:ml-64">
        <div className="p-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Repositories</h1>
                  <p className="text-gray-500 mt-1">{repositories.length} total repositories</p>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                  <button className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <RefreshCcw size={20} />
                    <span>Refresh All</span>
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <PlusCircle size={20} />
                    <span>Add Repository</span>
                  </button>
                </div>
              </div>

              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search Repositories"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="divide-y divide-gray-200">
                {repositories.map((repo, index) => (
                  <RepositoryCard key={index} {...repo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;