import React from 'react';

const ContactInfo = () => {
  return (
    <section className="py-8 px-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-primary mb-6 pb-3 border-b-4 border-secondary inline-block">
        Contact Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
          <strong>Email:</strong> nickjustinmagtuloy24@gmail.com
        </div>
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
          <strong>Phone:</strong> (+63) 948-609-8921
        </div>
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
          <strong>Location:</strong> #010 Santa Lucia, Sasmuan, Pampanga
        </div>
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
          <strong>LinkedIn:</strong> <a href="#" className="text-secondary font-semibold hover:underline">linkedin.com/in/nickjustin</a>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors md:col-span-2">
          <strong>GitHub:</strong> <a href="https://github.com/nikjastin" target="_blank" rel="noreferrer" className="text-secondary font-semibold hover:underline">github.com/nikjastin</a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
