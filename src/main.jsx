import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import { ToastProvider } from './Components/Toast/Toast.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className='overflow-x-hidden w-full'>
    <ToastProvider>
      <RouterProvider router ={router}/>
    </ToastProvider>
  </div>

  </StrictMode>,
)
