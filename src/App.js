import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import MenuList from './components/MenuList'
import Cart from './components/Cart'
import ErrorPage from './pages/ErrorPage'
import ContactUS from './pages/ContactUS'
import About from './pages/About'
import Details  from './components/Details';
import {Route ,Switch} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={MenuList} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/contact" exact component={ContactUS} />
        <Route path="/details" exact component={Details}/>
        <Route path="/about" exact component={About} />
        <Route  component={ErrorPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
