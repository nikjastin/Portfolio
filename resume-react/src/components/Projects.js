import React from 'react';

const Projects = () => {
  return (
    <section className="py-8 px-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-primary mb-6 pb-3 border-b-4 border-secondary inline-block">
        Projects & Systems Developed
      </h2>
      <div className="mt-6">
        <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-lg border-l-8 border-secondary shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-primary mb-2">
            🐾 A Web-Based Adoption System for Lyka's Dog and Cat Shelter
          </h3>
          <p className="text-secondary font-semibold text-lg italic mb-3">
            Connecting Pets with New Families
          </p>
          <p className="text-gray-600 italic mb-4">Academic Year 2024-2025</p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Developed a comprehensive web-based platform to streamline the pet adoption process, 
            connecting potential pet owners with animals in need of homes. The system features:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              'User-friendly interface for browsing available pets',
              'Online application and screening process',
              'Database management for pet records and adopter information',
              'Administrative dashboard for shelter management'
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-secondary font-bold mr-2">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-800">
            <strong className="text-primary">Technologies Used:</strong> HTML, CSS, JavaScript, PHP, MySQL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
