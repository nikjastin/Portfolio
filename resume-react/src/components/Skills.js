import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: '💻 Technical Skills',
      skills: [
        'Web Development (HTML, CSS, JavaScript)',
        'Backend Development (PHP & MySQL)',
        'Database Management',
        'System Analysis & Design',
        'Git & GitHub Version Control',
        'Microsoft Office Suite',
        'Information Systems Development'
      ]
    },
    {
      title: '🔐 Cybersecurity Skills',
      skills: [
        'Network Security & Information Security',
        'Threat Detection & Mitigation',
        'Vulnerability Assessment',
        'Risk Assessment & Management',
        'Incident Response Planning',
        'Security Controls Implementation'
      ]
    },
    {
      title: '📊 Data Science & Analytics',
      skills: [
        'Data Analytics Fundamentals',
        'Excel, SQL, Tableau (Hands-on Experience)',
        'AI & Machine Learning Concepts',
        'Data Visualization & Reporting',
        'Statistical Analysis & Data Preparation',
        'Data Transformation & Processing',
        'Data-Driven Decision Making'
      ]
    },
    {
      title: '🎯 Soft Skills',
      skills: [
        'Problem Solving & Critical Thinking',
        'Team Collaboration & Leadership',
        'Event Organization & Management',
        'Public Speaking',
        'Project Management',
        'Stakeholder Engagement',
        'Communication & Presentation'
      ]
    }
  ];

  return (
    <section className="py-8 px-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-primary mb-6 pb-3 border-b-4 border-secondary inline-block">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border-t-4 border-secondary shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-secondary font-bold text-lg mr-2">▹</span>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
