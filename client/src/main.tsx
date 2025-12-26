import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import PageAnim from './components/home/Page-Animation/Page-anim.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <PageAnim>
    <App />
    </PageAnim>
    </BrowserRouter>
  </StrictMode>,
)
