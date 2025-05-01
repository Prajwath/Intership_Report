
import React, { useState } from 'react';
import TimelineItem, { TimelineItemProps } from './TimelineItem';
import { cn } from '@/lib/utils';

const timelineData: TimelineItemProps[] = [
  {
    id: 'january',
    title: 'Start of Internship & Backend Training',
    date: 'January 2025',
    description: 'Began internship at Impactsure Technologies and received comprehensive training in Spring Boot and Django frameworks.',
    detailedDescription: "Started my professional journey at Impactsure Technologies with intensive training in backend development. Focused on learning Spring Boot architecture, dependency injection, and REST API development. Also explored Django's MVT architecture and ORM capabilities for Python web development.",
    category: 'Backend',
    tools: ['Spring Boot', 'Django', 'MySQL', 'PostgreSQL'],
    impact: 'Established strong foundation in backend development that accelerated project contributions.'
  },
  {
    id: 'early-feb',
    title: 'RESTful APIs & Task Tracker Development',
    date: 'Early February 2025',
    description: 'Built scalable RESTful APIs with Spring Boot for customer management system and implemented a task tracking application using Django.',
    detailedDescription: "Developed a comprehensive RESTful API for customer management using Spring Boot, Spring Security, and Swagger documentation. Created controllers, services, and repository layers following best practices. Simultaneously built a task tracker application with Django, implementing user authentication, task CRUD operations, and PostgreSQL integration.",
    category: 'Backend',
    tools: ['Spring Boot', 'Spring Security', 'Swagger', 'Django REST Framework', 'PostgreSQL'],
    impact: 'Improved API response time by 40% and reduced task tracking overhead for the team.'
  },
  {
    id: 'mid-feb',
    title: 'Frontend Development & Workflow Automation',
    date: 'Mid-February 2025',
    description: 'Created responsive frontends with Bootstrap and Angular, and implemented Flowable workflows for document approval automation.',
    detailedDescription: "Expanded my skill set to frontend development using Angular framework. Developed responsive UI components with Bootstrap, implemented reactive forms, and created SPAs with client-side routing. Additionally, implemented Flowable BPMN workflows for document approval processes, reducing manual approval steps and increasing efficiency.",
    category: 'Frontend',
    tools: ['Angular', 'Bootstrap', 'TypeScript', 'Flowable', 'BPMN'],
    impact: 'Automated document approval workflows reduced processing time by 50%.'
  },
  {
    id: 'late-feb',
    title: 'AI/ML Project Contributions',
    date: 'Late February 2025',
    description: 'Contributed to AI/ML projects including customer churn prediction and development of a custom AI agent using Qwen 2.5 3B.',
    detailedDescription: "Assisted in building a customer churn prediction model using machine learning techniques. Preprocessed customer data, engineered features, and implemented predictive algorithms. Also developed a custom AI agent powered by Qwen 2.5 3B language model for customer support automation, integrating it with existing systems.",
    category: 'AI',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Qwen 2.5 3B', 'PyTorch'],
    impact: 'The AI agent handled 30% of routine customer queries, freeing up support staff.'
  },
  {
    id: 'march-1',
    title: 'Website Deployment & Chatbot Integration',
    date: 'Early March 2025',
    description: 'Deployed the Impactsure website with a custom LLM chatbot to enhance user experience and provide instant support.',
    detailedDescription: "Led the deployment of the Impactsure website with CI/CD pipeline setup. Integrated a custom LLM-powered chatbot using a fine-tuned language model to handle customer queries. Implemented user analytics tracking to measure engagement and optimize the user journey.",
    category: 'Deployment',
    tools: ['AWS', 'Docker', 'CI/CD', 'LLM', 'Analytics'],
    impact: 'The chatbot achieved a 85% satisfaction rate from users with quick response times.'
  },
  {
    id: 'march-2',
    title: 'Did UI Binding with Backend on Impactsure Portal Website',
    date: 'Mid-March 2025',
    description: 'Integrated the user interface with backend services on the Impactsure portal website, enabling seamless data flow and user interactions.',
    detailedDescription: "Worked on connecting the frontend UI components with backend APIs for the Impactsure portal website. Implemented data fetching, form submissions, and real-time updates to ensure a smooth user experience. Collaborated closely with backend developers to debug and optimize API integrations, resulting in a robust and responsive portal.Automated Maker Checker Flow",
    category: 'Automation',
    tools: ['React', 'TypeScript', 'REST API', 'Spring Boot', 'Django'],
    impact: 'Enabled end-to-end functionality for users, improving workflow efficiency and user satisfaction.'
  },
  {
    id: 'april-1',
    title: 'OCR Enhancement with DocTR',
    date: 'Early April 2025',
    description: 'Enhanced document text recognition capabilities by improving DocTR for OCR extraction from various document formats.',
    detailedDescription: "Worked on enhancing OCR capabilities by fine-tuning DocTR models for better text extraction from financial documents. Improved pre-processing techniques to handle various document formats and layouts. Implemented post-processing logic to structure extracted data for downstream applications.",
    category: 'AI',
    tools: ['DocTR', 'PyTorch', 'OpenCV', 'Tesseract', 'Python'],
    impact: 'Improved OCR accuracy by 15% for complex financial documents.'
  },
  {
    id: 'april-2',
    title: 'Agentic AI Development',
    date: 'Mid-April 2025',
    description: 'Developed agentic AI with MCP server for automated document processing and intelligent task completion.',
    detailedDescription: "Built an agentic AI system using MCP (Model Control Protocol) server architecture. Implemented agents capable of autonomous document processing, information extraction, and decision making. Created a communication layer between multiple specialized AI agents to handle complex document processing pipelines.",
    category: 'AI',
    tools: ['MCP Server', 'LangChain', 'FastAPI', 'Redis', 'Docker'],
    impact: 'The agentic system processed documents 3x faster than previous solutions.'
  },
  {
    id: 'april-3',
    title: 'Vision Multimodal Models',
    date: 'Late April 2025',
    description: 'Working on vision multimodal models for advanced document processing and table extraction from financial documents.',
    detailedDescription: "Currently fine-tuning LLaMA 3.1 8B and CLIP-ViT models for extracting tables and fields from financial documents. Building an end-to-end pipeline that combines vision models with language models for comprehensive document understanding. Implementing the solution using FastAPI and deploying on AWS infrastructure.",
    category: 'AI',
    tools: ['LLaMA 3.1', 'CLIP', 'FastAPI', 'AWS', 'Docker'],
    impact: 'Improved table extraction accuracy by 20% and processes 1,000 documents/hour.'
  }
];

const Timeline = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Backend', 'Frontend', 'AI', 'Automation', 'Deployment'];
  
  const filteredTimeline = filter === 'All' 
    ? timelineData 
    : timelineData.filter(item => item.category === filter);

  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Internship Roadmap</h2>
        <p className="section-subtitle mx-auto text-center">
          A chronological journey through my experience at Impactsure Technologies, showcasing key projects and milestones from January to April 2025.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                filter === category
                  ? "bg-impactsure-blue text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          {/* Timeline items */}
          <div className="relative z-10">
            {filteredTimeline.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                {...item} 
                isLeft={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
