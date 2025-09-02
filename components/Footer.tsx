import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C27]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} BIRD&. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;