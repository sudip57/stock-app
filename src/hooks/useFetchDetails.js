import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetchDetails(symbol, token) {
  const [stockData, setStockData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    axios
      .get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${token}`,
      )
      .then((response) => {
        setStockData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [symbol, token])

  return { stockData, loading, error }
}

export default useFetchDetails
