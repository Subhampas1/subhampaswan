import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { SpinningAtom } from './3D/SpinningAtom';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 relative">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <h2 className="text-5xl md:text-7xl font-bold relative flex flex-col gap-4">
            <TypeAnimation
              sequence={[
                'Hi, I\'m',
                1000,
                'Hi, I\'m Subham Paswan',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-400">
            UI/UX Designer crafting beautiful digital experiences
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get in touch
            </a>
            <a href="#work" className="border border-purple-500 px-6 py-3 rounded-full hover:bg-purple-500/10 transition-all hover:scale-105">
              View my work
            </a>
          </div>
        </div>
        <div className="perspective h-[500px] relative">
          <SpinningAtom />
        </div>
      </div>
    </section>
  );
}