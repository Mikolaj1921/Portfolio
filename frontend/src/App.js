import React from 'react';
import 'devicon/devicon.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Routing from './routing'; // Importujemy Routing
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routing />
      </Layout>
    </Router>
  );
}

export default App;
