import React, { useState } from 'react';
import { Code2, Cloud, HelpCircle, Settings, HeadphonesIcon, LogOut, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Code2 size={20} />, text: 'Repositories', active: true },
    { icon: <Code2 size={20} />, text: 'AI Code Review' },
    { icon: <Cloud size={20} />, text: 'Cloud Security' },
    { icon: <HelpCircle size={20} />, text: 'How to Use' },
    { icon: <Settings size={20} />, text: 'Settings' },
  ];

  const bottomItems = [
    { icon: <HeadphonesIcon size={20} />, text: 'Support' },
    { icon: <LogOut size={20} />, text: 'Logout' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Mobile header
  const MobileHeader = () => (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 md:hidden bg-white">
      <div className="flex items-center gap-2">
        <img src="/vite.svg" alt="Logo" className="w-8 h-8" />
        <span className="font-semibold text-lg">CodeAnt AI</span>
      </div>
      <button onClick={toggleSidebar} className="p-2">
        <Menu size={24} />
      </button>
    </div>
  );

  // Mobile menu
  const MobileMenu = () => (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={toggleSidebar}
      />
      
      {/* Menu */}
      <div 
        className={`fixed inset-x-0 top-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col max-h-[80vh]">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <img src="/vite.svg" alt="Logo" className="w-8 h-8" />
              <span className="font-semibold text-lg">CodeAnt AI</span>
            </div>
            <button onClick={toggleSidebar} className="p-2">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <div className="mb-4">
                <select className="w-full p-2 border border-gray-200 rounded-lg">
                  <option>UtkarshDhairiyaPanwar</option>
                </select>
              </div>
              <nav>
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                          item.active
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {item.icon}
                        <span>{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <ul className="space-y-2">
              {bottomItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <MobileHeader />
      <MobileMenu />
      <div className="bg-white h-screen w-64 fixed left-0 top-0 border-r border-gray-200 flex flex-col hidden md:block">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <img src="/vite.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-semibold text-lg">CodeAnt AI</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                    item.active
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <ul className="space-y-2">
            {bottomItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
