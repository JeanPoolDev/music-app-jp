import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MusicApp } from './MusicApp.jsx'

import './index.css'
import { BrowserRouter } from 'react-router'
import { ProviderSpotify } from './context/SpotifyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProviderSpotify>
        <MusicApp />
      </ProviderSpotify>
    </BrowserRouter>
  </StrictMode>,
)
