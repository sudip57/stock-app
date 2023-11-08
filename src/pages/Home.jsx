import StockNameCard from '../components/StockNameCard'

const Home = () => {
  return (
    <>
      <section>
        <h1 className="uppercase  text-center text-6xl font-palanquin font-semibold mx-6 mt-[6rem] xl:mx-[24rem] tracking-wide z-10 relative">
          Slide into the stock Market
        </h1>
      </section>
      <StockNameCard />
    </>
  )
}

export default Home
