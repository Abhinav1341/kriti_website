import React from 'react';
import { FaInstagram, FaLinkedin} from 'react-icons/fa';
import { LuPalmtree } from "react-icons/lu";
import { FaPinterest } from "react-icons/fa";
 // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="text-white py-24">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-6">
          STAY UP TO DATE WITH OUR NEWS AND NOTIFICATIONS
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <a 
            href="https://www.instagram.com/kriti_nitp?igsh=azRhNWt2ZDV5MmN0" 
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a 
            href="https://www.pinterest.com/desconitp/?invite_code=ba148e2e453f4b7fa74c911ffcbead94&sender=1141310867976114025" 
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/company/desco-nitp/" 
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
         
          
          <a 
            href="https://linktr.ee/desco.nitp" 
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuPalmtree className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm mt-6">
          Copyright © Kriti 1.0 | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
