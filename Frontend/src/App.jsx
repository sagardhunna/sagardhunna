import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/header/Header'
import NoPage from './pages/NoPage'
import ApiCall from './pages/apiCall'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/api-call" element={<ApiCall />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  )
}

export default App