import axios from 'axios'
import { useEffect, useState } from 'react'
import StockInfo from './StockInfo'
import PropTypes from 'prop-types'

import ErrorFallback from './ErrorFallback'

const token = import.meta.env.VITE_TOKEN
const FetchStockDetails = ({ symbol }) => {
  const [stockData, setStockData] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    axios
      .get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${token}`,
      )
      .then((response) => {
        setStockData(response.data)
      })
      .catch((error) => {
        setErrorMsg(error.message)
      })
  }, [symbol])

  if (errorMsg) {
    return <ErrorFallback errorMsg={errorMsg} />
  }

  if (!stockData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <StockInfo stockData={stockData} />
    </div>
  )
}

FetchStockDetails.propTypes = {
  symbol: PropTypes.string,
}

export default FetchStockDetails
