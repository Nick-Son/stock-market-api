import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.iextrading.com/1.0'
})

export function loadQuoteForStock(symbol) {
  return api.get(`/stock/${symbol}/quote`)
    .then((res) => res.data)
}

export function loadLogoForStock(symbol) {
  return api.get(`/stock/${symbol}/logo`)
    .then((res) => res.data)
}

export function loadNewsForStock(symbol) {
  return api.get(`/stock/${symbol}/news/last/5`)
    .then((res) => res.data)
}

export function loadChartForStock(symbol) {
  return api.get(`/stock/${symbol}/chart/1m`)
    .then((res) => res.data)
}


