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
    error: null,
    quote: null
  }

  // the first time our component is rendered
  // this method is called...
  componentDidMount() {
    loadQuoteForStock('nflx')
      .then((quote) => {
        this.setState({ quote: quote })
      })
      .catch((error) => {
        // if 404, not found
        if (error.response.status === 404) {
          error = new Error('The stock symbol does not exist')
        }
        this.setState({ error: error})
        console.error(error)
      })
  }

  render() {
    // const quote = this.state.quote
    const { quote, error } = this.state

    return (
      <div className="App">

        <div className="header"><h3>Built with</h3> <img src={logo} alt="react logo" /></div>

        <h1>React App</h1>
        
        {
          !!error && // conditional that must pass for this to show
            <p>{ error.message }</p>
        }

        {
          !!quote ? (
            <StockInfo 
              // {...quote} this is an alternate method that will pass all key-values
              // if the they are the same.
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
