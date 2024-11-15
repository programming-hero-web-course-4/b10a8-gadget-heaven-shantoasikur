import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Statistics from './Components/Statistics';
import ProductDetails from './Components/ProductDetails';
import GadgetsList from './Components/GadgetsList';
import { CartWishlistProvider } from './Components/CartWishlistContext';
import { HelmetProvider } from 'react-helmet-async';
import Offers from './Components/Offers';
import NotFound from './Components/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "",
            element: <GadgetsList></GadgetsList>,
          },
          {
            path: "category/:category",
            element: <GadgetsList></GadgetsList>,
          }
        ]
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/offers",
        element: <Offers></Offers>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <CartWishlistProvider>
        <RouterProvider router={router} />
      </CartWishlistProvider>
    </HelmetProvider>
  </StrictMode>,
)
