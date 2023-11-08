import PropTypes from 'prop-types'
import Card from './Card'

const StockDetails = ({ stockData, loading, error }) => {
  const detailsList = {
    name: 'Name',
    country: 'Country',
    currency: 'Currency',
    exchange: 'Exchange',
    ipo: 'IPO Date',
    marketCapitalization: 'Market Capitalization',
    finnhubIndustry: 'Industry',
  }

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2)
  }

  const handleReload = () => {
    window.location.reload()
  }

  if (loading) {
    return 'Loading...'
  }
  if (error) {
    return (
      <div className="">
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
    <>
      <Card>
        <ul className=" w-full h-full flex flex-col justify-between divide-y-1 ">
          {Object.keys(detailsList).map((item) => {
            return (
              <li
                key={item}
                className=" flex-1 flex justify-between items-center"
              >
                <span>{detailsList[item]}</span>
                <span
                  className={`${
                    item === 'exchange' ? 'pl-[1rem] sm:pl-2' : 'pl-0'
                  }`}
                >
                  {item === 'marketCapitalization'
                    ? `${convertMillionToBillion(stockData[item])} B`
                    : stockData[item]}
                </span>
              </li>
            )
          })}
        </ul>
      </Card>
    </>
  )
}
StockDetails.propTypes = {
  stockData: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    currency: PropTypes.string,
    exchange: PropTypes.string,
    ipo: PropTypes.string,
    marketCapitalization: PropTypes.number,
    finnhubIndustry: PropTypes.string,
  }),
  loading: PropTypes.bool,
  error: PropTypes.bool,
}

export default StockDetails
