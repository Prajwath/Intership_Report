
import React from 'react';
import SkillRadarChart from './SkillRadarChart';

// Skill data for radar chart
const skillChartData = [
  { subject: 'Spring Boot', start: 20, current: 80, fullMark: 100 },
  { subject: 'Django', start: 15, current: 75, fullMark: 100 },
  { subject: 'Angular', start: 10, current: 70, fullMark: 100 },
  { subject: 'AI/ML', start: 10, current: 65, fullMark: 100 },
  { subject: 'Flowable', start: 0, current: 60, fullMark: 100 },
  { subject: 'Deploy/DevOps', start: 5, current: 55, fullMark: 100 },
];

// Detailed skills data
const skillsData = [
  {
    name: 'Spring Boot',
    proficiency: 80,
    details: 'RESTful APIs, Spring Security, Swagger',
    icon: '🌱',
  },
  {
    name: 'Django',
    proficiency: 75,
    details: 'MVT architecture, ORM, Django REST Framework',
    icon: '🐍',
  },
  {
    name: 'Angular',
    proficiency: 70,
    details: 'SPAs, reactive forms, routing',
    icon: '🅰️',
  },
  {
    name: 'AI/ML',
    proficiency: 65,
    details: 'LLMs, predictive modeling, OCR',
    icon: '🤖',
  },
  {
    name: 'Flowable',
    proficiency: 60,
    details: 'BPMN workflows, automation',
    icon: '📝',
  },
  {
    name: 'FileNet',
    proficiency: 55,
    details: 'Enterprise content management',
    icon: '📂',
  },
  {
    name: 'Tesseract',
    proficiency: 60,
    details: 'OCR capabilities, text extraction',
    icon: '📄',
  },
  {
    name: 'FastAPI',
    proficiency: 65,
    details: 'API development, Python backend',
    icon: '⚡',
  },
  {
    name: 'AWS',
    proficiency: 50,
    details: 'Cloud deployment, S3, EC2',
    icon: '☁️',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-200 via-pink-100 to-indigo-200">
      <div className="section-container">
        <h2 className="section-title text-center">Technical Skills</h2>
        <p className="section-subtitle mx-auto text-center">
          Skills and technologies I've acquired and refined during my internship at Impactsure Technologies.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Radar Chart */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-6 text-center text-impactsure-darkblue">
              Skill Growth: January vs. April
            </h3>
            <SkillRadarChart data={skillChartData} />
          </div>
          
          {/* Skills Grid */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-center text-impactsure-darkblue">
              Proficiency Levels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillsData.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <h4 className="font-semibold text-impactsure-darkblue group-hover:text-impactsure-blue transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>
                  
                  <div className="mb-3">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-impactsure-blue to-impactsure-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.proficiency}%`, transitionDelay: `${index * 100}ms` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Proficiency</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600">{skill.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
