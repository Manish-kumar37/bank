import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/2a8b21796977667f4344db8c67ef7566a702c21a.png';

type Page = 'home' | 'security' | 'login' | 'resources' | 'about' | 'help' | 'terms';
type UserType = 'personal' | 'nri' | 'business';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  userType: UserType;
  setUserType: (type: UserType) => void;
}

export function Header({ currentPage, setCurrentPage, userType, setUserType }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const userTypes = [
    { id: 'personal' as UserType, label: 'Personal' },
    { id: 'nri' as UserType, label: 'NRI' },
    { id: 'business' as UserType, label: 'Business' },
  ];

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'security' as Page, label: 'Security & Privacy' },
    { id: 'resources' as Page, label: 'Resources' },
    { id: 'about' as Page, label: 'About' },
    { id: 'help' as Page, label: 'Help' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUserTypeChange = (type: UserType) => {
    setUserType(type);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className={
        userType === 'personal' ? 'bg-blue-700' :
        userType === 'nri' ? 'bg-red-700' :
        'bg-orange-700'
      }>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity"
            >
              <img src={logoImage} alt="SENPAI Bank" className="h-8 w-8 sm:h-10 sm:w-10" />
              <span className="text-xl sm:text-2xl tracking-wide">SENPAI</span>
            </button>

            {/* Desktop User Type Tabs */}
            <div className="hidden md:flex items-center gap-1">
              {userTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleUserTypeChange(type.id)}
                  className={`px-4 lg:px-6 py-2 transition-colors text-sm lg:text-base ${
                    userType === type.id
                      ? (userType === 'personal' ? 'bg-white text-blue-700' :
                         userType === 'nri' ? 'bg-white text-red-700' :
                         'bg-white text-orange-700')
                      : (userType === 'personal' ? 'text-white hover:bg-blue-600' :
                         userType === 'nri' ? 'text-white hover:bg-red-600' :
                         'text-white hover:bg-orange-600')
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {/* Desktop Login Button */}
            <Button
              onClick={() => handleNavClick('login')}
              variant="outline"
              className={`hidden md:flex bg-white border-0 ${
                userType === 'personal' ? 'text-blue-700 hover:bg-gray-50' :
                userType === 'nri' ? 'text-red-700 hover:bg-gray-50' :
                'text-orange-700 hover:bg-gray-50'
              }`}
            >
              Login
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Bar */}
      <div className="hidden md:block bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-4 lg:gap-8 h-12 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm whitespace-nowrap transition-colors ${
                  currentPage === item.id
                    ? (userType === 'personal' ? 'text-blue-700 border-b-2 border-blue-700 pb-[13px]' :
                       userType === 'nri' ? 'text-red-700 border-b-2 border-red-700 pb-[13px]' :
                       'text-orange-700 border-b-2 border-orange-700 pb-[13px]')
                    : (userType === 'personal' ? 'text-gray-700 hover:text-blue-700 pb-[13px]' :
                       userType === 'nri' ? 'text-gray-700 hover:text-red-700 pb-[13px]' :
                       'text-gray-700 hover:text-orange-700 pb-[13px]')
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile User Type Selection */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Account Type</p>
              <div className="grid grid-cols-3 gap-2">
                {userTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleUserTypeChange(type.id)}
                    className={`px-3 py-2 rounded text-sm transition-colors ${
                      userType === type.id
                        ? (userType === 'personal' ? 'bg-blue-700 text-white' :
                           userType === 'nri' ? 'bg-red-700 text-white' :
                           'bg-orange-700 text-white')
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-1 pt-2 border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    currentPage === item.id
                      ? (userType === 'personal' ? 'bg-blue-50 text-blue-700' :
                         userType === 'nri' ? 'bg-red-50 text-red-700' :
                         'bg-orange-50 text-orange-700')
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Login Button */}
            <Button
              onClick={() => handleNavClick('login')}
              className={`w-full ${
                userType === 'personal' ? 'bg-blue-700 hover:bg-blue-800' :
                userType === 'nri' ? 'bg-red-700 hover:bg-red-800' :
                'bg-orange-700 hover:bg-orange-800'
              }`}
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}