import React from 'react';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, PinterestOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="bg-white text-[#242424] p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-sm hover:underline">Cookie Policy</a>
          <span>|</span>
          <a href="#" className="text-sm hover:underline">Legal Notice</a>
        </div>
        <div className="text-sm">
          <p>Copyright © 2021. Made with <span>❤</span> from seepossible</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400"><FacebookOutlined /></a>
          <a href="#" className="hover:text-gray-400"><InstagramOutlined /></a>
          <a href="#" className="hover:text-gray-400"><TwitterOutlined /></a>
          <a href="#" className="hover:text-gray-400"><PinterestOutlined /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
