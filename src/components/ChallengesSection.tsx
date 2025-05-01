
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const challengesData = [
  {
    id: 'technical',
    title: 'Technical Challenges',
    description: "Faced complex technical challenges while learning new frameworks and technologies.",
    details: [
      {
        challenge: "Spring Boot dependency injection complexity",
        solution: "Studied official documentation and created a mental model of DI container, reducing learning curve by 30%.",
        outcome: "Successfully implemented a complex service architecture with proper separation of concerns."
      },
      {
        challenge: "Slow Django query performance with large datasets",
        solution: "Optimized queries using proper indexing and select_related() for related objects.",
        outcome: "Improved query response time by 40% and reduced database load."
      },
      {
        challenge: "Angular reactive forms validation",
        solution: "Implemented custom validators and error handling strategies.",
        outcome: "Created a robust form validation system with clear user feedback."
      }
    ],
    icon: '💻'
  },
  {
    id: 'collaboration',
    title: 'Collaboration Challenges',
    description: "Navigated team dynamics and communication hurdles in a professional environment.",
    details: [
      {
        challenge: "Aligning API contracts between backend and frontend teams",
        solution: "Implemented Swagger documentation and established regular sync meetings.",
        outcome: "Reduced integration issues by 50% and improved cross-team collaboration."
      },
      {
        challenge: "Hesitation to seek guidance on complex problems",
        solution: "Adopted a structured approach to problem-solving: research first, then ask specific questions.",
        outcome: "Faster problem resolution and more productive mentoring sessions."
      },
      {
        challenge: "Version control conflicts in team development",
        solution: "Established git workflow best practices and branch management strategies.",
        outcome: "Minimized merge conflicts and improved code quality through better reviews."
      }
    ],
    icon: '👥'
  },
  {
    id: 'time-management',
    title: 'Time Management',
    description: "Balanced learning new technologies with meeting project deadlines.",
    details: [
      {
        challenge: "Balancing learning Angular while meeting project deliverables",
        solution: "Applied Eisenhower Matrix for task prioritization and time-boxing for learning sessions.",
        outcome: "Completed all deliverables on time while steadily improving Angular skills."
      },
      {
        challenge: "Managing multiple parallel projects with different technologies",
        solution: "Implemented personal kanban system and daily planning with focused work blocks.",
        outcome: "Improved productivity by 25% and reduced context switching overhead."
      },
      {
        challenge: "Estimating task completion time accurately",
        solution: "Started tracking actual vs. estimated time and applied historical data for future estimates.",
        outcome: "Improved estimation accuracy by 40% after four weeks of tracking."
      }
    ],
    icon: '⏱️'
  },
  {
    id: 'professionalism',
    title: 'Professional Growth',
    description: "Adapted to industry standards and best practices in software development.",
    details: [
      {
        challenge: "Adhering to code quality standards in a professional environment",
        solution: "Studied PEP 8 for Python and Google style guide for Java, set up linters in IDE.",
        outcome: "Code reviews became more focused on logic rather than style issues."
      },
      {
        challenge: "Understanding agile workflow and ceremonies",
        solution: "Read the Scrum Guide and actively participated in all team ceremonies.",
        outcome: "Became a contributing team member in sprint planning and retrospectives."
      },
      {
        challenge: "Documentation quality and thoroughness",
        solution: "Adopted a documentation-driven approach, writing docs before implementation.",
        outcome: "Created high-quality documentation that reduced onboarding time for new team members."
      }
    ],
    icon: '🚀'
  }
];

const ChallengesSection = () => {
  const [activeChallenge, setActiveChallenge] = useState('technical');

  return (
    <section id="challenges" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Challenges & Solutions</h2>
        <p className="section-subtitle mx-auto text-center">
          Key challenges I faced during my internship and how I overcame them to grow professionally.
        </p>
        
        <div className="mt-12">
          {/* Challenge Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {challengesData.map((challenge) => (
              <button
                key={challenge.id}
                onClick={() => setActiveChallenge(challenge.id)}
                className={cn(
                  "px-4 py-3 rounded-lg flex items-center transition-all duration-300",
                  activeChallenge === challenge.id
                    ? "bg-impactsure-blue text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                )}
              >
                <span className="text-xl mr-2">{challenge.icon}</span>
                <span className="font-medium">{challenge.title}</span>
              </button>
            ))}
          </div>
          
          {/* Challenge Details */}
          {challengesData.map((challenge) => (
            <div 
              key={challenge.id}
              className={cn(
                "bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500",
                activeChallenge === challenge.id 
                  ? "opacity-100 max-h-[2000px]" 
                  : "opacity-0 max-h-0 hidden"
              )}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{challenge.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-impactsure-darkblue">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                </div>
                
                <div className="space-y-6 mt-6">
                  {challenge.details.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 p-5 rounded-lg border-l-4 border-impactsure-blue"
                    >
                      <h4 className="font-medium text-impactsure-darkblue mb-2">{item.challenge}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-gray-700 mb-1">Solution:</p>
                          <p className="text-gray-600">{item.solution}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700 mb-1">Outcome:</p>
                          <p className="text-gray-600">{item.outcome}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
