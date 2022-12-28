import Home from './pages/Home'
import Quiz from './pages/Quiz'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/quiz" element={<Quiz />}></Route>
    </Routes>
  )
}

export default App
