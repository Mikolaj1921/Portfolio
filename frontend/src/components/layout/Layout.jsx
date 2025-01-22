import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">      
          <Aside />
          <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
