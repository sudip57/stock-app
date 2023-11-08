import axios from 'axios'

const basePath = 'https://finnhub.io/api/v1'
const token = import.meta.env.VITE_TOKEN

const fetchHistoricalData = async (stockSymbol, resolution, from, to) => {
  const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${token}`

  const response = await axios.get(url)
  if (!response.data || response.data.s !== 'ok') {
    throw new Error('An error has occurred.')
  }

  return response.data
}

export default fetchHistoricalData
