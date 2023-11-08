import { Link } from 'react-router-dom'

const HeaderLogo = () => {
  return (
    <Link to="/">
      <header className=" font-montserrat font-bold text-2xl p-2 pl-6 bg-white w-full">
        <span className="text-green-500 ">$</span>tock Sage
      </header>
    </Link>
  )
}

export default HeaderLogo
