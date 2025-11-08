import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: '🥈 Hackathon Programming - 2nd Runner Up',
      institution: 'Santa Rita College of Pampanga - Tech Day 2023',
      date: 'December 4, 2023',
      description: 'Achieved 2nd Runner Up in the Hackathon Programming competition during Tech Day 2023.',
      badge: 'AWARD',
      bgColor: 'from-yellow-100 to-yellow-200',
      borderColor: 'border-yellow-500'
    },
    {
      title: '🏆 Certificate of Recognition - Innovators Award',
      institution: 'Santa Rita College of Pampanga - SSITE',
      date: 'September 11, 2025',
      description: 'Recognized for outstanding creativity, ingenuity, and innovation.',
      badge: 'AWARD',
      bgColor: 'from-yellow-100 to-yellow-200',
      borderColor: 'border-yellow-500'
    },
    {
      title: '🔐 Cisco - Junior Cybersecurity Analyst Career Path',
      institution: 'Cisco Networking Academy',
      date: 'May 23, 2025',
      description: 'Successfully completed the Junior Cybersecurity Analyst Career Path.',
      badge: 'CISCO',
      bgColor: 'from-blue-100 to-blue-200',
      borderColor: 'border-blue-500'
    },
    {
      title: '📊 Cisco - Data Analytics Essentials',
      institution: 'Cisco Networking Academy',
      date: 'May 9, 2025',
      description: 'Successfully completed Data Analytics Essentials course.',
      badge: 'CISCO',
      bgColor: 'from-blue-100 to-blue-200',
      borderColor: 'border-blue-500'
    },
    {
      title: '🎯 PMI Project Management Ready® - Global Credential',
      institution: 'Project Management Institute (PMI)',
      date: 'January 10, 2025',
      description: 'Formally evaluated at the foundational levels in Project Management.',
      badge: 'PMI',
      bgColor: 'from-purple-100 to-purple-200',
      borderColor: 'border-purple-500'
    }
  ];

  return (
    <section className="py-8 px-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-primary mb-6 pb-3 border-b-4 border-secondary inline-block">
        Certifications & Achievements
      </h2>
      <div className="space-y-6 mt-6">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${cert.bgColor} p-6 rounded-lg border-l-8 ${cert.borderColor} shadow-md hover:shadow-xl transition-all hover:-translate-y-1 relative`}
          >
            <span className={`absolute top-4 right-4 bg-gradient-to-r ${cert.borderColor.replace('border-', 'from-')} to-opacity-80 text-white px-3 py-1 rounded-full text-xs font-bold`}>
              {cert.badge}
            </span>
            <h3 className="text-xl font-bold text-gray-800 mb-2 pr-20">{cert.title}</h3>
            <p className="text-blue-700 font-semibold mb-1">{cert.institution}</p>
            <p className="text-gray-600 text-sm italic mb-3">{cert.date}</p>
            <p className="text-gray-700">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
