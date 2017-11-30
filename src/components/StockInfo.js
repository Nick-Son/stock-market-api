import React from 'react';

function StockInfo({
  symbol,
  companyName,
  primaryExchange,
  latestPrice,
  latestSource,
  week52High,
  week52Low
}) {
  return (
  <div className="main-container">  

    <div className="company-header">
      <h2>{ symbol }: { companyName }</h2>
      <h3>{ latestPrice} ({ latestSource})</h3>
    </div>
    <br />

    <div className="stock-info">
      
      <div className="info-box-b">
        <h3><strong>Week 52 High:</strong></h3>
        <p>{ week52High }</p>
      </div>

      <div className="info-box-c">
        <h3><strong>Week 52 Low:</strong></h3>
        <p>{week52Low}</p>
      </div>

      <div className="info-box-a">
        <h3><strong>Exchange:</strong></h3>
        <p>{ primaryExchange }</p>
      </div>

    </div>
  </div>
  )
}

export default StockInfo;