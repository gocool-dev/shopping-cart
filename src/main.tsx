import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cart from './pages/cart/cart';
import './index.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cart />
  </StrictMode>,
)
