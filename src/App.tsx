import { Routes, Route } from 'react-router-dom'
import Users from './pages/Users'
import Home from './pages/Home'
import Navigation from './components/navigation/Navigation'
import './App.css'

function App() {
  

  return (
    <div>

      <Navigation />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/users' element={<Users />}></Route>
      </Routes>
    </div>
  )
}

export default App
