import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <div className="space-y-12">
         <div>
          <h2 className="text-3xl font-bold text-white mb-2 font-serif">Technical Skills</h2>
          <div className="h-1 w-12 bg-slate-700"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((group) => (
            <div key={group.category} className="bg-surface border border-white/5 p-6 rounded-lg hover:border-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background border border-white/10 text-slate-300 rounded-md text-sm hover:text-white hover:border-white/20 transition-all duration-300 cursor-default"
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

export default Skills;