import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Main_Components/Home.jsx'
import App from './App.jsx'
import Signup from './Main_Components/Accounts/Signup.jsx'
import Login from './Main_Components/Accounts/Login.jsx'
import Account from './Account.jsx'


let route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: "/account",
    element: <Account />,
    children: [
      {
        path: "signup",
        element: <Signup />
      },
      {
        index: true,
        element: <Login />
      }
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)