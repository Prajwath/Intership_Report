
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import SkillsSection from '@/components/SkillsSection';
import ChallengesSection from '@/components/ChallengesSection';
import CurrentWork from '@/components/CurrentWork';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title and metadata
    document.title = "Prajwath Gowda's Internship Journey";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", "Explore my internship roadmap at Impactsure Technologies, showcasing full-stack development, AI, and automation projects");
    
    // Create Open Graph tags for social sharing
    const ogTags = {
      "og:title": "Prajwath Gowda's Internship Journey",
      "og:description": "Explore my internship roadmap at Impactsure Technologies, showcasing full-stack development, AI, and automation projects",
      "og:type": "website",
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Timeline />
      <SkillsSection />
      <ChallengesSection />
      <CurrentWork />
      <Footer />
    </div>
  );
};

export default Index;
