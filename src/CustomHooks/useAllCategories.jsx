import axios from "axios";
import { useQuery } from "react-query";

export default function useAllCategories() {

    function getAllCategories() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
      }
    
      const { isError, isLoading, data } = useQuery({
        queryKey: 'allCategories',
        queryFn: getAllCategories,
      });
    



  return{

    isError,
    isLoading,
    data,
    
  }
}
