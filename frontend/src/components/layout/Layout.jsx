import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Aside from "./Aside.jsx";
import "./Layout.css";

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
