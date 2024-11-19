import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            SP
          </h1>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-purple-500 transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 pt-20 px-6 md:hidden">
          <div className="flex flex-col space-y-8 text-center text-xl">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-purple-500 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}