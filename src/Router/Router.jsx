import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import Payment from "../Pages/Payment/Payment";
import About from "../Pages/About/About";
import FAQ from "../Pages/FAQ/FAQ";
import Privacy from "../Pages/Privacy/Privacy";
import Terms from "../Pages/Terms/Terms";
import Contact from "../Pages/Contact/Contact";
import Tablets from "../Pages/Tablets/Tablets";
import Blog from "../Pages/Blog/Blog";
import Joomla from "../Pages/Joomla/Joomla";
import Joomshopping from "../Pages/Joomshopping/Joomshopping";
import Pages from "../Pages/Pages/Pages";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
         
      ]
    },
    {
      path:'/products',
      element:<AllProducts></AllProducts>
    },
    {
      path:'/product/:id',
      element:<ProductDetails></ProductDetails>
    },
    {
      path:'/cart',
      element:<Cart></Cart>
    },
    {
      path:'/payment',
      element:<Payment></Payment>
    },
    {
      path:'/about',
      element:<About></About>
    },
    {
      path:'/faq',
      element:<FAQ></FAQ>
    },
    {
      path:'/privacy',
      element:<Privacy></Privacy>
    },
    {
      path:'/terms',
      element:<Terms></Terms>
    },
    {
      path:'/contact',
      element:<Contact></Contact>
    },
    {
      path:'/tablets',
      element:<Tablets></Tablets>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    },
    {
      path:'/joomla',
      element:<Joomla></Joomla>
    },
    {
      path:'/joomshopping',
      element:<Joomshopping></Joomshopping>
    },
    {
      path:'/pages',
      element:<Pages></Pages>
    }
])