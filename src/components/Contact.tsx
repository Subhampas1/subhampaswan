import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute -right-64 -top-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-12">Let's Create Something Amazing</h2>
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/Subhampas1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-purple-500 transition-all hover:scale-110 hover:rotate-12"
          >
            <Github className="w-8 h-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/subhampaswan/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-purple-500 transition-all hover:scale-110 hover:rotate-12"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a 
            href="mailto:subhampasw1@gmail.com" 
            className="hover:text-purple-500 transition-all hover:scale-110 hover:rotate-12"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
        <a
          href="mailto:subhampasw1@gmail.com"
          className="inline-block bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}