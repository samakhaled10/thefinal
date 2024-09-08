import axios from "axios"
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";


export default function Brands() {


function getAllBrands() {
     return axios.get('https://ecommerce.routemisr.com/api/v1/brands');
}

const {isLoading , isError , data} = useQuery({
  queryKey:'allBrands',
  queryFn:getAllBrands
});

if(isLoading){

  return<> 
   <Loader/>

  </>
}
if(isError){
  return <>
  <h2>grb b3deeen</h2>
  </>
}

  return  <>
  
  <div className="container mx-auto ">
    <div className="grid grid-cols-4 gap-4 p-5">
      
       {data.data.data.map(brand => <div key={brand._id} className="brand rounded-lg bg-blue-200">
       <img src={brand.image} alt={brand.name} className="w-full" />
      <h2>{brand.name}</h2>
     </div>

       )}

    </div>


  </div>
  
  
  
  </>
}
