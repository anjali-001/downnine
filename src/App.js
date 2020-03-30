import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './components/Home'
import MenuList from './components/MenuList'
import Cart from './components/Cart'
import ErrorPage from './components/ErrorPage'
import {Route ,Switch} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={MenuList} />
        <Route path="/cart" exact component={Cart} />
        <Route  component={ErrorPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
