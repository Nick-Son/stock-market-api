import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StockInfo from './components/StockInfo'
import {loadQuoteForStock, loadLogoForStock, loadNewsForStock, loadChartForStock} from './api/iex'
import SymbolHistory from './components/SymbolHistory'
import NewsItem from './components/NewsItem'

// Preloaded Data //

loadQuoteForStock('nflx')
  .then((quote) => {
    console.log('Loaded Netflix', quote)
  })

loadLogoForStock('nflx')
  .then((companyLogo) => {
    // return companyLogo
    console.log(companyLogo)
  }) 

loadNewsForStock('nflx')
  .then((companyNews) => {
    console.log(companyNews)
  })

loadChartForStock('nflx')
  .then((chart) => {
    console.log(chart)
  })

// Class //

class App extends Component {
  state = {
    error: null,
    enteredSymbol: 'NFLX',
    quote: null,
    companyLogo: 'https://storage.googleapis.com/iex/api/logos/NFLX.png',
    symbolHistory: [],
    companyNews: [],
    chart: null
  }

  // the first time our component is rendered
  // this method is called...
  componentDidMount() {
    this.loadQuote()
  }

  // Load all the data for a company //

  loadQuote = () => {
    const { enteredSymbol, companyLogo, symbolHistory, companyNews } = this.state

    loadQuoteForStock(enteredSymbol)
      .then((quote) => {
        this.setState({ 
          quote: quote, 
          error: null // clear error
        })
        symbolHistory.push(quote) // push the entered symbol to the history array
        console.log(symbolHistory)
      })
      .catch((error) => {
        // if 404, not found
        if (error.response.status === 404) {
          error = new Error('The stock symbol does not exist')
        }
        this.setState({ error: error})
        console.error(error)
      })

    loadLogoForStock(enteredSymbol)
      .then((companyLogo) => {
        this.setState({companyLogo: companyLogo.url})
      })
      
    loadNewsForStock(enteredSymbol)  
      .then((companyNews) => {
        this.setState({companyNews: companyNews})
      })
    
  }

  onChangeEnteredSymbol = (event) => {
    const input = event.target
    const value = input.value.trim().toUpperCase()
    this.setState({
      enteredSymbol: value
    })
  }

  render() {
    // const quote = this.state.quote
    const { quote, enteredSymbol, error, companyLogo, symbolHistory, companyNews } = this.state

    return (
      <div className="App">

        <div className="header"><h3>Built with</h3> <img src={logo} alt="react logo" /></div>

        <br />
        <h1>Market Data</h1>
        <br />

        <div className="search-bar">
          <label>Search: </label>
          <input 
            value={ enteredSymbol } 
            placeholder="Symbol e.g NFLX" 
            aria-label='Symbol' 
            onChange={ this.onChangeEnteredSymbol }
          />
          <button
            onClick={ this.loadQuote }
          >
            Load Quote
          </button>
        </div>
        <br />

        {
          !!error && // conditional that must pass for this to show
            <p className="error-message">{ error.message }</p>
        }

        <img src={companyLogo} className="logo-image" />

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

        <h1>News</h1>
        <div className="news-item-container">
          {
            companyNews.map((newsItem) => {
              return (
                <NewsItem 
                headline={newsItem.headline}
                summary={newsItem.summary}
                url={newsItem.url}
                source={newsItem.source}
                date={newsItem.datetime}
                />
              )
            })
          }
        </div>

        <br />
        <h2>Search History</h2>
        {
          symbolHistory.map((quote) => {
            // let companyLogo = null
            // loadLogoForStock(quote.symbol)
            //   .then((logo) => {
            //     companyLogo: logo
            //   })
            // console.log(companyLogo)
            return (
              <div>
              {/* <img src={companyLogo} className="logo-image" /> */}
              <SymbolHistory 
                  symbol={quote.symbol}
                  companyName={quote.companyName}
                  primaryExchange={quote.primaryExchange}
                  latestPrice={quote.latestPrice}
                  latestSource={quote.latestSource}
                  week52High={quote.week52High}
                  week52Low={quote.week52Low}
              />
              </div>
            )
            })
        } 
        
      </div>
    );
  }
}

export default App;
