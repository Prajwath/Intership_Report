
import React from 'react';

const Hero = () => {
  const scrollToRoadmap = () => {
    const roadmapSection = document.getElementById('roadmap');
    if (roadmapSection) {
      roadmapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
    >
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-400 via-pink-300 to-indigo-400">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-impactsure-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-impactsure-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5 lg:pr-12">
            <div className="mb-6 inline-block">
              <span className="bg-impactsure-blue bg-opacity-10 text-impactsure-blue py-1 px-4 rounded-full text-sm font-medium">
                January - April 2025
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-impactsure-darkblue leading-tight">
              My Internship Journey at <span className="text-impactsure-blue">Impactsure Technologies</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Transforming Theory into Impactful Tech Solutions through hands-on experience with Spring Boot, Django, Angular, and cutting-edge AI/ML technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToRoadmap}
                className="px-6 py-3 bg-impactsure-blue text-white rounded-lg hover:bg-impactsure-darkblue transition-colors duration-300 flex items-center justify-center"
              >
                Explore Roadmap
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-impactsure-blue text-impactsure-blue rounded-lg hover:bg-impactsure-blue hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                View GitHub
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="lg:w-2/5 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-impactsure-blue to-impactsure-accent opacity-10 blur-2xl rounded-full transform scale-150"></div>
              <div className="p-1 rounded-xl bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=400"
                  alt="Coding at laptop"
                  className="rounded-lg shadow-xl w-full object-cover bg-white"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-1 rounded-xl bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 shadow-lg">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm font-medium text-impactsure-darkblue">Current project:</div>
                  <div className="text-base font-bold text-impactsure-accent">Vision Multimodal Models</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
