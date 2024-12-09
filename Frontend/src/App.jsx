import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <h1 style={{margin:'40px'}}>My Projects</h1>
      <Projects />
    </div>
  )
}

export default App
