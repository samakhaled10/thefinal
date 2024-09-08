import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader";
import { useContext } from "react";
import { cartContext } from "../../CartContext/CartContext";
import toast from "react-hot-toast";

export default function ProductDetails() {

    const {id} = useParams();
    const {addProduct} = useContext(cartContext);

async function handleAddProduct(id){ //await 3ashan hya hta5od wa2t w async 3ashan t3dy 3la ely t7t el awl w b3d keda el function
    const flagres = await addProduct(id);
console.log('flagres' , flagres);

   if (flagres) {
    toast.success('Product added successfully' ,{
    position : "top-right",
       duration :3000,
    });
    // toast('Product added successfully');
    
   }
   else{
    toast.error('Product adding failed',{
        position : 'top-right',
        duration :3000,
     });

   } 
}

    function getProductDetails() {
       return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        
    }

   const {data , isError , isLoading } = useQuery({
        queryKey:['productDetails' ,id],
        queryFn: getProductDetails,
    })

    if(isError){
        return<>
         <h2>ERROOOR</h2>
        
        </>
    }

    if(isLoading){
        return<>
        <Loader/>
        
        </>
    }

 const objectDetails = data.data.data;

 
  return<>
  
  <div className="container mx-auto p-4 flex justify-between items-center">
         <div className="w-1/4">

         <img src={objectDetails.imageCover} className="w-full" alt={objectDetails.title} />

         </div>


       <div className="w-[70%]">
        <h1>{objectDetails.title}</h1>
        <p>{objectDetails.description}</p>
        <h5>Category : {objectDetails.category.name}</h5>
        <h5>Price : {objectDetails.price}</h5>

        <button onClick={() => handleAddProduct(objectDetails._id)}  className="p-2 rounded-2xl w-full  m-2 bg-green-200"> + add to cart</button>
       </div>


  </div>
  
  
  </>
}
