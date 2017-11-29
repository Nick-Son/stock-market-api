import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StockInfo from './components/StockInfo'
import {loadQuoteForStock} from './api/iex'

loadQuoteForStock('nflx')
  .then((quote) => {
    console.log('Loaded Netflix', quote)
  })

class App extends Component {
  state = {
    quote: null
  }

  render() {
    // const quote = this.state.quote
    const { quote } = this.state

    return (
      <div className="App">

        <div className="header"><h3>Built with</h3> <img src={logo} alt="react logo" /></div>

        <h1>React App</h1>
          {
            !!quote ? (
              <StockInfo 
              // or {...quote}
                symbol={quote.symbol}
                companyName={quote.companyName}
                primaryExchange={quote.primaryExchange}
                latestPrice={quote.latestPrice}
                latestSource={quote.latestSource}
                week52High={quote.week52High}
                week52Low={quote.week52Low}
              />
            ) : (
              <p>Loading...</p>
            )
          }
        <br />
      </div>
    );
  }
}

export default App;
