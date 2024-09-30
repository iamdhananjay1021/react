import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from '../LoginForm.jsx'
import UseEffect from './UseEffect.jsx'
import { CleanUp } from './CleanUpuseEffect.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
  {/* <UseEffect/> */}
 <CleanUp/>
  </StrictMode>,
)
