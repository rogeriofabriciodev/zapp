import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegator from './components/menu/Navegator'
import Dashboard from './components/dashboard/Dashboard'
import PageManufacturer from './components/manufacturer/PageManufacturer'

function App() {
  return (
    <div className="App">
      <Navegator />
      <PageManufacturer />
    </div>
  );
}

export default App;
