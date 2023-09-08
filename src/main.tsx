import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { ThemeProvider } from '@/components/theme-provider'
// import Index from './routes/Index'
import Home from './page/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <Index /> */}
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
