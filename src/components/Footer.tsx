// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 text-foreground text-center">
      <div className="container mx-auto px-4">
        <p className="text-lg font-light italic">
          "Countless failures don't matter—one success is enough."
        </p>
      </div>
    </footer>
  );
};

export default Footer;