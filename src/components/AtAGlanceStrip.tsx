import React from 'react';
import { Compass, UserCheck, MapPin, Globe } from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';

export const AtAGlanceStrip: React.FC = () => {
  const { atAGlance } = ABOUT_DATA;

  const icons = [
    <UserCheck className="w-4 h-4 text-amber-800 shrink-0" key="user" />,
    <Compass className="w-4 h-4 text-amber-800 shrink-0" key="practice" />,
    <MapPin className="w-4 h-4 text-amber-800 shrink-0" key="base" />,
    <Globe className="w-4 h-4 text-amber-800 shrink-0" key="consults" />,
  ];

  return (
    <section className="bg-[#FAF6EE] border-b border-[#E7DFD3] py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold shrink-0">
            At a Glance
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {atAGlance.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 py-1 border-l-2 border-amber-700/30 pl-3.5 sm:border-l-0 sm:pl-0"
              >
                <div className="mt-0.5">{icons[idx]}</div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-slate-900 mt-0.5">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
