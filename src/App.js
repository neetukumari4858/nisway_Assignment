import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import NewsDatail from './pages/NewsDetail'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<NewsDatail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
