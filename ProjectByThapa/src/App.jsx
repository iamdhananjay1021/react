import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Home } from './Pages/HomePage';
import { About } from './Pages/ABout';
import { Contact } from './Pages/Contact';
import { Country } from './Pages/Country';
import AppLAyout from './components/Layout/AppLayout';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([

{
  path:"/",
  element :<AppLAyout/>,
  errorElement:<ErrorPage/>,
  children:[
    
  {
    path: "/",
    element: <Home />
  },
  {
    path: "about",
    element: <About />
  },

  {
    path: "country",
    element: <Country />
  },

  {
    path: "contact",
    element: <Contact />
  },
]
}





])

const App = () => {
  return (
    <>
      <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default App;   