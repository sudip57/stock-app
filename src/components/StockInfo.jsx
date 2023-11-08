import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const StockInfo = ({ stockData }) => {
  return (
    <Link className=" " to={`name?symbol=${stockData.ticker}`}>
      <ul className="bg-gray-50 hover:bg-gray-100 px-8 py-4 rounded hover:cursor-pointer">
        <li className=" font-montserrat font-medium text-xl">
          {stockData.name}
        </li>
        <li>{stockData.ticker}</li>
      </ul>
    </Link>
  )
}

StockInfo.propTypes = {
  stockData: PropTypes.shape({
    name: PropTypes.string,
    ticker: PropTypes.string,
  }),
}

export default StockInfo
