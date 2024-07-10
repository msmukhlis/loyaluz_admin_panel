import { ToastContainer } from 'react-toastify'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './components/LoginPage/LoginPage'
import { Home } from './pages/Home/Home'

function App() {

  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
