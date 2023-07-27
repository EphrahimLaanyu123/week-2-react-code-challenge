import './App.css';
import React from 'react';
import Home from './home';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {




  return (
    <div className="App">

      <Router exact path='/home'>
      <Home  />
      </Router>
      


  

    </div>
  );
}

export default App;
