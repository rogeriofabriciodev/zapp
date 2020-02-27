import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from './components/config/FirebaseConfig'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/login/Login'
import Navegator from './components/menu/Navegator'
import Dashboard from './components/dashboard/Dashboard'
import PageProduct from './components/product/PageProduct'
import PageManufacturer from './components/manufacturer/PageManufacturer'
import PageProvider from './components/provider/PageProvider'
import PageCategory from './components/category/PageCategory'
import PageSubCategory from './components/subcategory/PageSubCategory'

function App() {

  const [ firebaseInitialized, setFirebaseInitialized ] = useState(false)
  
  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  return firebaseInitialized !== false ? (
    <BrowserRouter>
      <div className="App">
        <Navegator />
        <Switch>
          <Route exact path='/' component={ Login } />
          <Route path='/dashboard' component={ Dashboard } />
          <Route path='/addProducts' component={ PageProduct } />
          <Route path='/addManufacturer' component={ PageManufacturer } />
          <Route path='/addProvider' component={ PageProvider } />
          <Route path='/addCategory' component={ PageCategory } />
          <Route path='/addSubCategory' component={ PageSubCategory } />
        </Switch>
      </div>
    </BrowserRouter>
  ) : <div id="loader">Carregando...</div>;
}

export default App;
