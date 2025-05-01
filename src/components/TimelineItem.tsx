
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Modal from './Modal';

export interface TimelineItemProps {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  tools: string[];
  impact?: string;
  isLeft?: boolean;
  detailedDescription?: string;
}

const TimelineItem = ({ 
  title, 
  date, 
  description, 
  category, 
  tools, 
  impact, 
  isLeft = false,
  detailedDescription
}: TimelineItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryColors = {
    'Backend': 'bg-blue-100 text-blue-800',
    'Frontend': 'bg-purple-100 text-purple-800',
    'AI': 'bg-green-100 text-green-800',
    'Automation': 'bg-yellow-100 text-yellow-800',
    'Deployment': 'bg-red-100 text-red-800',
  } as Record<string, string>;

  const categoryColor = categoryColors[category] || 'bg-gray-100 text-gray-800';

  return (
    <>
      <div className={cn(
        "mb-8 flex flex-col md:flex-row items-start relative",
        isLeft ? "md:flex-row-reverse" : ""
      )}>
        {/* Timeline dot */}
        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-impactsure-blue rounded-full z-10 -ml-3.5 md:ml-0 mt-0.5"></div>
        
        {/* Content */}
        <div 
          className={cn(
            "ml-10 md:ml-0 md:w-[calc(50%-20px)] p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",
            isLeft ? "md:mr-10" : "md:ml-10",
            "animate-fade-in"
          )}
        >
          <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium", categoryColor)}>
            {category}
          </span>
          <h3 className="text-xl font-bold mt-3 mb-2 text-impactsure-darkblue">{title}</h3>
          <p className="text-sm text-gray-500 mb-3">{date}</p>
          <p className="text-gray-700 mb-4">{description}</p>
          
          {impact && (
            <div className="mb-4 p-2 bg-green-50 border-l-4 border-green-500 text-green-700 text-sm rounded">
              <strong>Impact:</strong> {impact}
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tools.map((tool, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                {tool}
              </span>
            ))}
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-impactsure-blue hover:text-impactsure-darkblue font-medium flex items-center text-sm"
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      >
        <div>
          <div className="flex items-center mb-4">
            <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium mr-2", categoryColor)}>
              {category}
            </span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          
          <div className="prose max-w-none">
            <p className="mb-4">{detailedDescription || description}</p>
            
            <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {tools.map((tool, index) => (
                <span key={index} className="px-2.5 py-1.5 bg-gray-100 text-gray-700 rounded">
                  {tool}
                </span>
              ))}
            </div>
            
            {impact && (
              <>
                <h4 className="text-lg font-semibold mb-2">Impact</h4>
                <div className="p-3 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
                  {impact}
                </div>
              </>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TimelineItem;
