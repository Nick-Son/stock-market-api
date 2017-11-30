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

    <dl>
      <dt><strong>Week 52 High</strong></dt>
      <dd>{ week52High }</dd>

      <dt><strong>Week 52 Low</strong></dt>
      <dd>{week52Low}</dd>

      <dt><strong>Exchange</strong></dt>
      <dd>{ primaryExchange }</dd>
    </dl>

  </div>
  )
}

export default StockInfo;