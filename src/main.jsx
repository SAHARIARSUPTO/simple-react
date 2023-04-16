import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Review from './components/Order Review/Review';
import Inventory from './components/Manage Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './Loaders/Cartproductsloader';
import Checkout from './components/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:'Home',
        element: <Shop></Shop>,
      },
      {
        path: 'Order',
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: 'Review',
        element: <Review></Review>,
      },
      {
        path:'Checkout',
        element: <Checkout></Checkout>,
      },
      {
        path:'Inventory',
        element:<Inventory></Inventory>,
      },
      {
        path:'Login',
        element: <Login></Login>,
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
