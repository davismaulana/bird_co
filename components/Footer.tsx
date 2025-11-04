import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-xs text-gray-800">&copy; {new Date().getFullYear()} BIRD&. All Rights Reserved.</p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 md:mt-0 text-xs text-gray-800">
            <a href="/politique-de-confidentialite" className="hover:text-black transition-colors">Politique de Confidentialité</a>
            <a href="/conditions-generales-utilisation" className="hover:text-black transition-colors">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;