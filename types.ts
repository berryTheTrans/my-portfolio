import React from 'react';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}