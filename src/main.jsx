import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './Pages/App'
import About from './Pages/About'

import GlobalStyles from './lib/styles/GlobalStyles'

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)
