import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Checkout from './pages/Checkout.jsx'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Signup />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/cart',
        element: <Cart />
      }, {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
