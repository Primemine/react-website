import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Footer />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
