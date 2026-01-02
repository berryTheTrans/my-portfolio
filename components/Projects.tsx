import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="group flex flex-col">
            {/* Project Preview Wrapper */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-surfaceHighlight mb-6 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-blue-900/10 group-hover:border-white/20">
              {/* Browser Window Header */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#1a1a1a] flex items-center px-4 space-x-2 z-20 border-b border-white/5">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                {/* Simulated URL Bar */}
                <div className="ml-4 flex-1 h-5 bg-black/40 rounded-md flex items-center px-3">
                  <span className="text-[10px] text-slate-600 font-mono truncate w-full opacity-60">
                    {project.link?.replace('https://', '')}
                  </span>
                </div>
              </div>
              
              {/* Iframe Container */}
              <div className="absolute top-8 inset-0 w-full h-[calc(100%-32px)] bg-white">
                <iframe
                  src={project.link}
                  title={project.title}
                  className="w-[400%] h-[400%] border-0 pointer-events-none select-none opacity-90 group-hover:opacity-100 transition-opacity origin-top-left scale-[0.25]"
                  loading="lazy"
                  tabIndex={-1}
                  scrolling="no"
                />
              </div>
              
              {/* Click Overlay */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-30 bg-transparent"
                aria-label={`View ${project.title}`}
              />
            </div>

            {/* Project Info - Minimalist Style */}
            <div className="flex flex-col items-start px-1">
              <div className="flex items-center justify-between w-full mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-white transition-colors transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-300"
                  >
                      <ExternalLink size={20} />
                  </a>
              </div>
              <p className="text-sm font-medium text-slate-400 tracking-wide">
                Theme: <span className="text-slate-500 font-normal">{project.techStack.slice(0, 3).join(', ')}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;