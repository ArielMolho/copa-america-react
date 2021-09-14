import React, { Component } from 'react';
import './App.css';
import AppRouter from './containers/AppRouter';

class App extends Component {
  
  render (){
    return (
          <div className="background-pitch">
            <AppRouter />
          </div>
    );
  }
}

export default App;
