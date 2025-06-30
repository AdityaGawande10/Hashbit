import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MOVIE from './movie.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MOVIE />
  </StrictMode>,
)
