import React from 'react';
import profile from '../assets/ProfileAbout.jpg'; // 👈 use the updated image here

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 max-w-5xl mx-auto">
        <img 
          src={profile} 
          alt="Apz Profile" 
          className="w-64 h-auto object-contain rounded-xl shadow-xl border-4 border-blue-500"
        />

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
          Hey there! I’m Apz — a software developer who loves clean design, responsive UI, and bringing digital ideas to life.
          <br /><br />
          Whether it's crafting beautiful interfaces or solving tricky frontend challenges, I'm all in. I have a strong passion for React, UI/UX, and everything in between.
        </p>
      </div>
    </section>
  );
};

export default About;
