import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StockInfo from './components/StockInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <br />
        <StockInfo 
          symbol='NFLX'
          companyName='Netflix'
          primaryExchange='Nasdaq Global Select'
          latestPrice={ 188.15 }
          latestSource='close'
          week52High={ 204.38 }
          week52Low={ 113.95 }
        />
      </div>
    );
  }
}

export default App;
