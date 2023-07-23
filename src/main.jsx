import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './contexts/sidebarContext.jsx'
import { MealProvider } from './contexts/mealContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <MealProvider>
          <App />
        </MealProvider>
      </SidebarProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
