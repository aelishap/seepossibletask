import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center items-center p-4 bg-[#ECBC76] text-white">
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
