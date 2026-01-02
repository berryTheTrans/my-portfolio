import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ExperienceItem, ProjectItem, SkillCategory, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Baryalai Qalandari",
  title: "AI Engineer & Full-Stack Developer",
  tagline: "Building agentic AI apps, training models on custom data, and creating intelligent automation workflows.",
  about: "I’m a full-stack developer and AI engineer who loves building agentic AI applications. I work with Python, JavaScript, HTML, CSS, React, Next.js, Vue, Node.js, and I build AI agents, chatbots, and automation systems. I enjoy training AI on custom data and creating smart workflows using Dify and n8n. I like building tools that actually help people — from web apps to AI chatbots that can think, act, and automate tasks. I’m always learning, experimenting, and improving my skills. Open to jobs, freelance work, and collaborations.",
  email: "beryaliwindows10@gmail.com",
  location: "Wuhan, China",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/baryalaiqalandari/",
    icon: <Linkedin size={20} />,
  },
  {
    platform: "GitHub",
    url: "https://github.com/berrythetrans",
    icon: <Github size={20} />,
  },
  {
    platform: "Email",
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: <Mail size={20} />,
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "1",
    role: "AI Engineer",
    company: "Freelance / Self-Employed",
    period: "Present",
    description: [
      "Building agentic AI applications and custom chatbots using Dify and n8n.",
      "Training AI models on custom datasets for specialized use cases.",
      "Developing smart automation workflows to optimize business processes."
    ],
    skills: ["Python", "Dify", "n8n", "LLMs"]
  },
  {
    id: "2",
    role: "Full-Stack Developer",
    company: "Tech Projects",
    period: "2020 - Present",
    description: [
      "Developing responsive web applications using React, Next.js, and Vue.",
      "Building scalable backend services with Node.js and Python.",
      "Integrating AI capabilities into web interfaces."
    ],
    skills: ["React", "Vue", "Node.js", "TypeScript"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "AI & Automation",
    items: ["Agentic AI", "Dify", "n8n", "Custom Model Training", "Chatbots", "OpenAI API"]
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    category: "Backend",
    items: ["Python", "Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "p1",
    title: "PDF Reader Black Mode",
    description: "A web-based PDF reader optimized for dark mode reading to reduce eye strain, featuring customized color inversion and smooth navigation.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    image: "https://picsum.photos/600/400?random=10",
    github: "https://github.com/berrythetrans/pdf-reader-black-mode",
    link: "https://berrythetrans.github.io/pdf-reader-black-mode/"
  },
  {
    id: "p2",
    title: "ButtonVerse",
    description: "A comprehensive collection of modern, animated, and copy-paste ready button styles for developers to enhance UI interactivity.",
    techStack: ["CSS3", "HTML5", "UI Design"],
    image: "https://picsum.photos/600/400?random=11",
    github: "https://github.com/berrythetrans/buttonVerse",
    link: "https://berrythetrans.github.io/buttonVerse/"
  },
  {
    id: "p3",
    title: "Ultimate Carousel Library",
    description: "A lightweight, robust, and fully customizable carousel library designed for seamless image and content sliding in web applications.",
    techStack: ["JavaScript", "CSS Animation", "DOM Manipulation"],
    image: "https://picsum.photos/600/400?random=12",
    github: "https://github.com/berrythetrans/Ultimate-Carousel-Library",
    link: "https://berrythetrans.github.io/Ultimate-Carousel-Library/"
  },
  {
    id: "p4",
    title: "Cafe Website",
    description: "A visually appealing and responsive landing page for a cafe, featuring menu highlights, location integration, and cozy aesthetics.",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "https://picsum.photos/600/400?random=13",
    github: "https://github.com/berrythetrans/Cafe-Website",
    link: "https://berrythetrans.github.io/Cafe-Website/"
  }
];