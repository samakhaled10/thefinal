import { useContext } from "react"
import { cartContext } from "../../CartContext/CartContext"
import { Link } from "react-router-dom";

 
export default function Cart() {



const {allProducts , totalCartPrice , numOfCartItems , updateCounter , removeProduct , clearAll} = useContext(cartContext);

function handleUpdateCount(id , newCount ){
  updateCounter(id , newCount);
}


function handleRemoveProduct(productId) {
  removeProduct(productId);   
}
function handleClearAll() {
  clearAll();   
}
  return <>
  
  
  <h2 className="text-center ">Total Price : {totalCartPrice}</h2>
  <div className="flex justify-end p-2">
        <button 
         onClick={handleClearAll}
          // className=" text-white px-4 py-2 hover:text-white bg-{#22db14} "
          // style={{ border: '5px  #22db14', color: '#22db14' }}
          className="px-4 py-2 rounded-md text-custom-green border border-custom-green bg-transparent hover:bg-custom-green hover:text-white transition-colors"
                  >
          Clear All
        </button>
      </div>
  <p className="p-2 text-center">Your cart includes {numOfCartItems} different items </p>

<div className="container mx-auto">

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    {allProducts?.map(product => <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
         {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button disabled={product.count === 1} onClick={() => handleUpdateCount(product.product._id , product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>

            <div>
              <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={product.count} required />
            </div>
              
            <button onClick={() => handleUpdateCount(product.product._id , product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.price}
        </td>
        <td className="px-6 py-4">
          <a href="#" onClick={() => handleRemoveProduct(product.product._id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
        </td>
      </tr>)} 
     
    </tbody>
  </table>



</div>

<Link to='/Payment'>
<button className="my-3 rounded-lg w-full text-white bg-green-400 p-2">Chech Out</button>


</Link>


</div>



 </> }