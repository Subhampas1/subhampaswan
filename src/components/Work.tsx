import React from 'react';
import { WaveForm } from './3D/WaveForm';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  tags: string;
  delay: string;
}

function ProjectCard({ image, title, tags, delay }: ProjectCardProps) {
  return (
    <div className={`group perspective ${delay} min-w-[300px] md:min-w-[400px]`}>
      <div className="relative overflow-hidden rounded-xl preserve-3d hover:rotate-y-12 transition-all duration-500">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end transform transition-transform preserve-3d">
          <div className="p-6 transform translate-z-20">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300">{tags}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80',
      title: 'Mobile App Design',
      tags: 'UX Design • UI Design • Prototyping',
      delay: ''
    },
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
      title: 'Web Application',
      tags: 'UI Design • Design System • Research',
      delay: 'animate-delay-200'
    },
    {
      image: 'https://images.unsplash.com/photo-1551650992-ee4fd47df41f?auto=format&fit=crop&q=80',
      title: 'Dashboard Design',
      tags: 'UI Design • Mobile • Analytics',
      delay: 'animate-delay-400'
    },
    {
      image: 'https://images.unsplash.com/photo-1551651653-c5186a1fbba2?auto=format&fit=crop&q=80',
      title: 'Design System',
      tags: 'UX Research • Design System • Documentation',
      delay: 'animate-delay-600'
    }
  ];

  return (
    <section id="work" className="py-12 px-6 relative overflow-hidden">
      <div className="absolute -left-32 top-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-8">
          <WaveForm />
        </div>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Work</h2>
        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="snap-start">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}