import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";
import UserVerify from "./Context/UserVerify";
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CartContextProvider from "./CartContext/CartContext";
import { Toaster } from "react-hot-toast";
import { WishListProvider } from "./ًWishListContext/WishListContext";
import WishList from "./Components/WishList/WishList";
import Payment from "./Components/Payment/Payment";


const basename = '/thefinal'; // Use your repository name here

const router = createHashRouter([
  {path:'' , element:<Layout/> , children:[
    {path: 'register' , element:<Register/>},
    {path: 'login' , element:<Login/>},
    {path:'products' , element:
    <ProtectedRoute>

          <Products/>

    </ProtectedRoute>
  },
    {path:'cart' , element:
    <ProtectedRoute>
      <Cart/>
    </ProtectedRoute>
    },

    {path:'categories' , element:
    <ProtectedRoute>
       <Categories/>
    </ProtectedRoute>
   },
   {path:'wishList' , element:
    <ProtectedRoute>
       <WishList/>
    </ProtectedRoute>
   },
    //: 3ashan de m3naha parameter 
   {path:'productDetails/:id' , element:
    <ProtectedRoute>
       <ProductDetails/>
    </ProtectedRoute>
   },
   
   {path:'Payment' , element:
    <ProtectedRoute> 
        <Payment/>
     </ProtectedRoute>
    },

    {path:'brands' , element:
    <ProtectedRoute> 
        <Brands/>
     </ProtectedRoute>
    },
  ]},
], { basename });


const reactQueryconfig = new QueryClient(); //class
export default function App(){
  return(
    <>
    <UserVerify>
      <QueryClientProvider client={reactQueryconfig}>
        <CartContextProvider>
          <WishListProvider>
            <RouterProvider router={router}/>
           <Toaster/> 
           </WishListProvider>
        </CartContextProvider>
     </QueryClientProvider>
   </UserVerify>
    
    
    </>
  )
}