import React from 'react';
import './App.scss';

import ToDo from './components/ToDo/ToDo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <ToDo />
      <Footer />
    </div>
  );
}

export default App;
