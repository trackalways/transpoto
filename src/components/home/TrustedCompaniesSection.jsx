import React from 'react';

const companies = [
  'Code Crumble',
  'Encrypted Bug',
  'TrackAlways',
  'Ola',
  'Coco-Cola'
];

export default function TrustedCompaniesSection() {
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Trusted by Leading Companies</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {companies.map((company, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md px-6 py-4 text-lg font-semibold text-blue-700 border border-blue-100 min-w-[140px]">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
