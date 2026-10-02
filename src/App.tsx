import { Routes, Route } from 'react-router-dom'
import Users from './pages/Users'
import Home from './pages/Home'
import './App.css'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/users' element={<Users />}></Route>
      </Routes>
    </div>
  )
}

export default App
