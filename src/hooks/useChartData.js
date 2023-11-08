import { useState, useEffect } from 'react'
import axios from 'axios'

const useChartData = (stockSymbol, resolution, from, to, token) => {
  const [chartdata, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://finnhub.io/api/v1/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${token}`
        const response = await axios.get(url)
        setChartData(response.data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [stockSymbol, resolution, from, to, token])

  return { chartdata, loading, error }
}

export default useChartData
