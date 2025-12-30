import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { RentPage } from './components/pages/RentPage';
import { CarPage } from './components/pages/CarPage';
import { AutoCarePage } from './components/pages/AutoCarePage';
import { SupportPage } from './components/pages/SupportPage';
import { LivingPage } from './components/pages/LivingPage';
import { ToursPage } from './components/pages/ToursPage';

export type PageType = 'home' | 'rent' | 'car' | 'autocare' | 'support' | 'living' | 'tours';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'rent':
        return <RentPage />;
      case 'car':
        return <CarPage />;
      case 'autocare':
        return <AutoCarePage />;
      case 'support':
        return <SupportPage />;
      case 'living':
        return <LivingPage />;
      case 'tours':
        return <ToursPage />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
