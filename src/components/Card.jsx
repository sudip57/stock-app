import PropTypes from 'prop-types'
const Card = ({ children }) => {
  return (
    <div
      className={`w-full h-full rounded-md relative p-8 border-2 bg-gray-50`}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
}

export default Card
