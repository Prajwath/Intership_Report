
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'skills', label: 'Skills' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'current-work', label: 'Current Work' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update header background
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      })).filter(section => section.element);
      
      const currentSection = sectionElements.find(section => {
        const rect = section.element?.getBoundingClientRect();
        return rect && rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-impactsure-blue flex items-center justify-center text-white font-bold mr-2">P</div>
          <h1 className="text-lg font-poppins font-bold text-impactsure-darkblue">
            Prajwath's Journey
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "nav-link",
                activeSection === section.id && "active"
              )}
            >
              {section.label}
            </button>
          ))}
          <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-impactsure-blue hover:bg-impactsure-darkblue text-white rounded-md transition-colors duration-300"
          >
            Connect
          </a>
        </nav>
        
        <button className="md:hidden text-impactsure-darkblue">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
