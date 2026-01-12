import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/pages/Home';
import { SecurityPrivacy } from './components/pages/SecurityPrivacy';
import { Login } from './components/pages/Login';
import { Resources } from './components/pages/Resources';
import { About } from './components/pages/About';
import { Help } from './components/pages/Help';
import { TermsConditions } from './components/pages/TermsConditions';
import { Footer } from './components/Footer';
import { LiveChat } from './components/LiveChat';

type Page = 'home' | 'security' | 'login' | 'resources' | 'about' | 'help' | 'terms';
type UserType = 'personal' | 'nri' | 'business';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [userType, setUserType] = useState<UserType>('personal');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home userType={userType} />;
      case 'security':
        return <SecurityPrivacy />;
      case 'login':
        return <Login userType={userType} />;
      case 'resources':
        return <Resources userType={userType} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'help':
        return <Help />;
      case 'terms':
        return <TermsConditions />;
      default:
        return <Home userType={userType} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        userType={userType}
        setUserType={setUserType}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <LiveChat />
    </div>
  );
}