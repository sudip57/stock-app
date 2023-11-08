import { Route, Routes } from 'react-router-dom'
import Header from './components/HeaderLogo'
import Home from './pages/Home'
import DashboardPage from './pages/DashboardPage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<DashboardPage />} />
      </Routes>
    </>
  )
}

export default App
