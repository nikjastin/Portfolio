import React from 'react';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import PersonalInfo from './components/PersonalInfo';
import Objective from './components/Objective';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <Header />
        <ContactInfo />
        <PersonalInfo />
        <Objective />
        <TechnicalSkills />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Footer />
      </div>
    </div>
  );
}

export default App;
