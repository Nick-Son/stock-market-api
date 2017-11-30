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
  <div>
    <h2>{ symbol }: { companyName }</h2>
    <h3>{ latestPrice} ({ latestSource})</h3>
    <br />

    <div>
      <h3><strong>Week 52 High</strong></h3>
      <p>{ week52High }</p>

      <h3><strong>Week 52 Low</strong></h3>
      <p>{week52Low}</p>

      <h3><strong>Exchange</strong></h3>
      <p>{ primaryExchange }</p>
    </div>

  </div>
  )
}

export default StockInfo;