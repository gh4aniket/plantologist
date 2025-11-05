import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { HeroUIProvider } from '@heroui/react';
 import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ThemeContextProvider>
            <HeroUIProvider>
             <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
              <App />
             </ClerkProvider>
            </HeroUIProvider>
        </ThemeContextProvider>
    </BrowserRouter>,
)