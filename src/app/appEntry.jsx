import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider
    theme={{
      primaryColor: 'green',
      primaryShade: 5,
      defaultRadius: '0.75rem',
    }} 
  >
    <App />
  </MantineProvider>
)
