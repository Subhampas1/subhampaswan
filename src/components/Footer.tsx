import React from 'react';

export function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        <p>© {new Date().getFullYear()} Subham Paswan. All rights reserved.</p>
      </div>
    </footer>
  );
}