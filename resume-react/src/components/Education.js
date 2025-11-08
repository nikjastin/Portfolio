import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Information Systems',
      institution: 'Santa Rita College of Pampanga',
      date: '2023 - Present Year',
      location: 'San Jose, Sta. Rita, Pampanga'
    },
    {
      degree: 'Senior High School',
      institution: 'Santo Tomas High School',
      date: '2020 - 2023',
      location: 'Santo Tomas, Sasmuan, Pampanga'
    },
    {
      degree: 'Junior High School',
      institution: 'Santo Tomas National High School',
      date: '2017 - 2020',
      location: 'Santo Tomas, Sasmuan, Pampanga'
    },
    {
      degree: 'Primary School',
      institution: 'Sasmuan Elementary School',
      date: '2011 - 2016',
      location: 'Santa Lucia, Sasmuan, Pampanga'
    }
  ];

  return (
    <section className="py-8 px-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-primary mb-6 pb-3 border-b-4 border-secondary inline-block">
        Education
      </h2>
      <div className="space-y-6 mt-6">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
            <p className="text-primary font-semibold text-lg mb-1">{edu.institution}</p>
            <p className="text-gray-600 italic mb-2">{edu.date}</p>
            <p className="text-gray-700">{edu.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
