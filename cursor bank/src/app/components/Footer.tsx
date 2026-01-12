import { Mail, Phone, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/2a8b21796977667f4344db8c67ef7566a702c21a.png';

type Page = 'home' | 'security' | 'login' | 'resources' | 'about' | 'help' | 'terms';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const customerService = [
    { label: 'Contact Us', action: () => setCurrentPage('help') },
    { label: 'Customer Care', action: () => setCurrentPage('help') },
    { label: 'Locate Us', action: () => {} },
    { label: 'FAQs', action: () => setCurrentPage('help') },
  ];

  const bankingInfo = [
    { label: 'Interest Rates', action: () => setCurrentPage('resources') },
    { label: 'Service Charges', action: () => setCurrentPage('resources') },
    { label: 'Forex Rates', action: () => setCurrentPage('resources') },
    { label: 'Terms & Conditions', action: () => setCurrentPage('terms') },
  ];

  const regulatory = [
    { label: 'Safe Banking', action: () => setCurrentPage('security') },
    { label: 'RBI Guidelines', action: () => {} },
    { label: 'Account Activation Process', action: () => {} },
    { label: 'Digital Security', action: () => setCurrentPage('security') },
  ];

  const explore = [
    { label: 'About SENPAI', action: () => setCurrentPage('about') },
    { label: 'Careers', action: () => {} },
    { label: 'News & Media', action: () => {} },
    { label: 'Corporate Social Responsibility', action: () => {} },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      {/* Top Section with Logo */}
      <div className="bg-gray-50 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="SENPAI Bank Logo" className="h-8 w-8 sm:h-10 sm:w-10 text-blue-700" />
              <span className="text-2xl sm:text-3xl text-blue-700 tracking-wide">SENPAI Bank</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Phone className="h-4 w-4" />
                <span>1800 1080</span>
              </div>
              <button
                onClick={() => setCurrentPage('help')}
                className="text-sm text-blue-700 hover:underline"
              >
                LOCATE US →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Customer Service */}
          <div>
            <h3 className="text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {customerService.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.action}
                    className="text-sm text-blue-700 hover:underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Banking Information */}
          <div>
            <h3 className="text-gray-900 mb-4">Banking Information</h3>
            <ul className="space-y-2">
              {bankingInfo.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.action}
                    className="text-sm text-blue-700 hover:underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory Information */}
          <div>
            <h3 className="text-gray-900 mb-4">Regulatory Information</h3>
            <ul className="space-y-2">
              {regulatory.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.action}
                    className="text-sm text-blue-700 hover:underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-2">
              {explore.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.action}
                    className="text-sm text-blue-700 hover:underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>SENPAI Bank, Shanghai, China</span>
            </div>
            <div className="text-sm text-gray-600">
              © 2025 SENPAI Bank. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}