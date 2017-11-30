import React from 'react';

function NewsItem({
  headline,
  summary,
  url,
  source,
  date
}) {
  return (
    
    <div className="news-item">
      <h2>{headline}</h2>
      <p>{date}</p>
      <p>{summary}</p>
      <p>{source}</p>
      <a href={url}>Read article</a>
      <br />
    </div>
  
  )
}

export default NewsItem;