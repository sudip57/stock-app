import { useNavigate, useSearchParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails'
import StockDetails from './StockDetails'
import StockOverview from './StockOverview'
import useStockQuote from '../hooks/useStockQuote'

import Chart from './Chart'

const Dashboard = () => {
  const [searchParams] = useSearchParams()
  const symbol = searchParams.get('symbol')
  const navigate = useNavigate()

  const token = import.meta.env.VITE_TOKEN

  const { stockData, loading, error } = useFetchDetails(symbol, token)
  const {
    stockQuote,
    loading: loading1,
    error: error1,
  } = useStockQuote(symbol, token)

  return (
    <>
      <section className="dashboard-main">
        <div className="dashboard-wrapper">
          <h1 className=" font-palanquin text-3xl font-bold ">
            {stockData?.name}
          </h1>
          <button
            className=" bg-gray-100 px-8 py-1 rounded font-montserrat font-semibold"
            onClick={() => navigate('/')}
          >
            Back
          </button>
        </div>
        <div className="md:col-span-2 row-span-5">
          <Chart symbol={symbol} />
        </div>
        <div className="h-[5rem]">
          <StockOverview
            symbol={symbol}
            price={stockQuote?.pc}
            change={stockQuote?.d}
            changePercent={stockQuote?.dp}
            currency={stockData?.currency}
            loading={loading1}
            error={error1}
          />
        </div>
        <div className="row-span-2 xl:row-span-3 h-[16rem] sm:h-[15rem] mt-8 md:mt-0">
          <StockDetails stockData={stockData} loading={loading} error={error} />
        </div>
      </section>
    </>
  )
}

export default Dashboard
