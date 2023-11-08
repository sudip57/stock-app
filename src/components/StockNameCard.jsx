import FetchStockDetails from './FetchStockDetails'

const StockNameCard = () => {
  return (
    <section className="nameCard">
      <FetchStockDetails symbol="AAPL" />
      <FetchStockDetails symbol="MSFT" />
      <FetchStockDetails symbol="TSLA" />
      <FetchStockDetails symbol="AMZN" />
      <FetchStockDetails symbol="META" />
    </section>
  )
}

export default StockNameCard
