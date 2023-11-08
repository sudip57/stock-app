import { useState, useEffect } from 'react'
import axios from 'axios'

function useStockQuote(symbol, token) {
  const [stockQuote, setStockQuote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    axios
      .get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`)
      .then((response) => {
        setStockQuote(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [symbol, token])

  return { stockQuote, loading, error }
}

export default useStockQuote
