import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navegator from './components/menu/Navegator'
import Dashboard from './components/dashboard/Dashboard'
import PageManufacturer from './components/manufacturer/PageManufacturer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navegator />
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path='/addManufacturer' component={ PageManufacturer } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
