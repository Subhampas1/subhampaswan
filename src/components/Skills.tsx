import React from 'react';
import { Palette, Layout, MousePointer2 } from 'lucide-react';
import { FloatingCube } from './3D/FloatingCube';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

function SkillCard({ icon, title, description, delay }: SkillCardProps) {
  return (
    <div className={`perspective group ${delay}`}>
      <div className="p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-all duration-500 preserve-3d hover:scale-105 hover:rotate-y-12">
        <div className="w-12 h-12 text-purple-500 mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-12">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export function Skills() {
  const skills = [
    {
      icon: <Palette className="animate-float" />,
      title: 'UI Design',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
      delay: ''
    },
    {
      icon: <Layout className="animate-float" />,
      title: 'UX Design',
      description: 'Designing seamless user experiences that solve real problems.',
      delay: 'animate-delay-200'
    },
    {
      icon: <MousePointer2 className="animate-float" />,
      title: 'Prototyping',
      description: 'Building interactive prototypes that bring designs to life.',
      delay: 'animate-delay-400'
    }
  ];

  return (
    <section id="skills" className="py-12 px-6 bg-black/50 relative overflow-hidden">
      <div className="absolute -left-64 -top-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-64 -bottom-64 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20">
        <FloatingCube />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}