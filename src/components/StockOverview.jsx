import Card from './Card'
import PropTypes from 'prop-types'

const StockOverview = ({
  symbol,
  price,
  change,
  changePercent,
  currency,
  loading,
  error,
}) => {
  const handleReload = () => {
    window.location.reload()
  }

  if (loading) {
    return 'Loading...'
  }
  if (error) {
    return (
      <div>
        <p>Something went wrong</p>
        <button
          className="bg-black text-white px-4 py-2 rounded-lg"
          onClick={handleReload}
        >
          Try Again
        </button>
      </div>
    )
  }
  return (
    <Card>
      <span className="absolute left-4 top-0 text-neutral-400 font-montserrat text-lg xl:text-xl 2xl:text-2xl">
        {symbol}
      </span>
      <div className="w-full h-full flex items-center justify-around mt-1">
        <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center font-medium">
          ${price}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
            {currency}
          </span>
        </span>
        <span
          className={`text-lg xl:text-xl 2xl:text-2xl ${
            change > 0 ? 'text-lime-500' : 'text-red-500'
          }`}
        >
          {change} <span>({changePercent}%)</span>
        </span>
      </div>
    </Card>
  )
}
StockOverview.propTypes = {
  symbol: PropTypes.string,
  price: PropTypes.number,
  change: PropTypes.number,
  changePercent: PropTypes.number,
  currency: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
}

export default StockOverview
