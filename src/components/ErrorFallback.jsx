import PropTypes from 'prop-types'

const ErrorFallback = ({ errorMsg }) => {
  const handleReload = () => {
    window.location.reload()
  }
  return (
    <div className="h-screen">
      <p>{errorMsg}</p>
      <button
        className="bg-black text-white px-4 py-2 rounded-lg"
        onClick={handleReload}
      >
        Try Again
      </button>
    </div>
  )
}
ErrorFallback.propTypes = {
  errorMsg: PropTypes.string,
}

export default ErrorFallback
