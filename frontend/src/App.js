import React from 'react';
import 'devicon/devicon.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Routing from './routing'; // Importujemy Routing
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>

        <Layout>
          <Routing />
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
