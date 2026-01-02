import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold text-white mb-2 font-serif">About Me</h2>
          <div className="h-1 w-12 bg-slate-700"></div>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-lg text-slate-300 leading-relaxed">
            {PERSONAL_INFO.about}
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
               <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-1">Location</h4>
               <p className="text-white">{PERSONAL_INFO.location}</p>
            </div>
            <div>
               <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-1">Email</h4>
               <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:underline decoration-slate-500 underline-offset-4">
                 {PERSONAL_INFO.email}
               </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;