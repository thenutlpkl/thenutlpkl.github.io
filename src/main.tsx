import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add error boundary
if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', () => {
    console.log('vite:beforeUpdate')
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)