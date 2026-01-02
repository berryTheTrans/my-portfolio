import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <div className="flex flex-col space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 font-serif">Experience</h2>
          <div className="h-1 w-12 bg-slate-700"></div>
        </div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE_DATA.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-500 ring-4 ring-background group-hover:bg-white transition-colors duration-300"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <span className="text-sm font-medium text-slate-500 mt-1 sm:mt-0">{item.period}</span>
              </div>
              
              <p className="text-lg text-slate-400 mb-4">{item.company}</p>
              
              <ul className="space-y-2 mb-6">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-slate-400 leading-relaxed list-disc list-outside ml-4 marker:text-slate-600">
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 rounded-full border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;