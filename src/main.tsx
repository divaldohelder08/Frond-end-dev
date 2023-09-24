import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { ThemeProvider } from '@/components/theme-provider'
import MyForm from './routes'
// import Home from './page/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <Index /> */}
      <MyForm />
    </ThemeProvider>
  </React.StrictMode>,
)
