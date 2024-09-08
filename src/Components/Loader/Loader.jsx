import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
   
       <div className="h-screen bg-white flex justify-center items-center">

<Circles
height="80"
width="80"
color='#6EE7B7'
ariaLabel="circles-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/>

</div>
    
  )
};
