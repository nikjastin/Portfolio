import React from 'react';

const PersonalInfo = () => {
  const personalData = [
    { label: 'Date of Birth', value: 'November 24, 2003' },
    { label: 'Age', value: '21 years old' },
    { label: 'Gender', value: 'Male' },
    { label: 'Nationality', value: 'Filipino' },
    { label: 'Civil Status', value: 'Single' },
    { label: 'Religion', value: 'Christian' },
    { label: 'Height', value: "5'5" },
    { label: 'Weight', value: '175 lbs.' },
    { label: "Father's Name", value: 'Eddie A. Magtuloy' },
    { label: "Mother's Name", value: 'Mary Ann B. Magtuloy' },
  ];

  return (
    <section className="py-8 px-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-primary mb-6 pb-3 border-b-4 border-secondary inline-block">
        Personal Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {personalData.map((item, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 rounded-lg border-l-4 border-secondary hover:bg-blue-50 hover:border-l-8 transition-all transform hover:translate-x-2"
          >
            <strong>{item.label}:</strong> {item.value}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalInfo;
