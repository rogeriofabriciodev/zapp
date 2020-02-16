import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegator from './components/menu/Navegator'
import Dashboard from './components/dashboard/Dashboard'
import NewManufacturer from './components/manufacturer/InsertNewManufacturer'

function App() {
  return (
    <div className="App">
      <Navegator />
      <NewManufacturer />
    </div>
  );
}

export default App;
