import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
