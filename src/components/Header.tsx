import { useState } from 'react';
import { Globe } from 'lucide-react';

export default function Header() {
  const [language, setLanguage] = useState('VI');

  const toggleLanguage = () => {
    setLanguage(language === 'VI' ? 'EN' : 'VI');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#0077b6] rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold">BZ</span>
          </div>
          <span className="text-[#0077b6] font-bold text-xl">Belowzero</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-[#0077b6] hover:text-blue-800 transition-colors duration-300">
            Trang chủ
          </a>
          <a href="#" className="text-[#0077b6] hover:text-blue-800 transition-colors duration-300">
            Sản phẩm
          </a>
          <a href="#" className="text-[#0077b6] hover:text-blue-800 transition-colors duration-300">
            Khóa học
          </a>
          <a href="#" className="text-[#0077b6] hover:text-blue-800 transition-colors duration-300">
            Về chúng tôi
          </a>
          <a href="#" className="text-[#0077b6] hover:text-blue-800 transition-colors duration-300">
            Liên hệ
          </a>
        </nav>

        {/* Language Toggle */}
        <div className="flex items-center">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 bg-[#0077b6] text-white px-3 py-2 rounded-md hover:bg-blue-800 transition-all duration-300"
          >
            <Globe size={16} />
            <span>{language}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#0077b6]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}