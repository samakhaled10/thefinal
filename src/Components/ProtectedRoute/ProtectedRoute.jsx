import { Navigate } from "react-router-dom"
import Login from "../Login/Login"
export default function ProtectedRoute({children}) {
//3mlnah 3ashan protect path
if(localStorage.getItem('tkn') == null){
    return <Navigate to ='/login'/>
} //if userAuthenticated => y3ny fe token => d5lo 3la el all components if not return him to login
  return <>
  
  {children}
  
  </>
}
