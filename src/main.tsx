import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppContainer } from './App.styled'
import './index.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContainer>
      <App />
    </AppContainer>
  </React.StrictMode>,
)
