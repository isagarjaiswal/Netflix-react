import React from 'react'
import { BrowserRouter as Router, Routes,Route
} from 'react-router-dom'
import "./App.scss"
import Home from './Component/Home/Home.jsx'
import Header from './Component/Header/Header.jsx'

const App = () => {
  return (
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
     </Router>
  )
}

export default App