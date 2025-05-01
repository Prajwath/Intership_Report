
import React from 'react';

const CurrentWork = () => {
  return (
    <section id="current-work" className="py-20 bg-gradient-to-br from-purple-200 via-pink-100 to-indigo-200">
      <div className="section-container">
        <h2 className="section-title text-center">Current Work</h2>
        <p className="section-subtitle mx-auto text-center">
          My ongoing project at Impactsure Technologies, focusing on cutting-edge AI for document processing.
        </p>
        <div className="mt-8 bg-white rounded-2xl overflow-hidden max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-2xl -m-[2px]"></div>
          <div className="relative bg-white rounded-2xl m-[2px]">
            <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 h-3"></div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center md:justify-start">
                  <div className="relative w-48 h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-impactsure-blue opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <div className="absolute bottom-2 right-2 bg-impactsure-accent text-white text-xs px-2 py-1 rounded-full">
                      In Progress
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-impactsure-darkblue mb-2">
                    Advancing Intelligent Document Processing with Vision Multimodal Models
                  </h3>
                  
                  <div className="mb-4 text-gray-700">
                    <p className="mb-4">
                      Fine-tuning Granite 3.2 and Qwen 2.5 models for extracting tables and fields from financial documents, integrated via FastAPI, reducing manual effort by 60%.
                    </p>
                    <p>
                      This project combines vision capabilities with language understanding to create a powerful document processing system capable of handling complex layouts and extracting structured data with high accuracy.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-impactsure-blue mb-2">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Granite 3.2', 'Qwen 2.5', 'Tesseract', 'OpenCV', 'FastAPI', 'AWS'].map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-impactsure-blue rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-green-600"></div>
                      <h4 className="text-green-800 font-medium mb-1">Table Extraction</h4>
                      <p className="text-green-700 text-sm">Improved accuracy by 20% over previous methods</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600"></div>
                      <h4 className="text-blue-800 font-medium mb-1">Processing Power</h4>
                      <p className="text-blue-700 text-sm">Handles 1,000+ documents per hour</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWork;
