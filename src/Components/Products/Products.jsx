// // import axios from "axios";
// // import { useContext } from "react";
// // import { Circles } from "react-loader-spinner";
// // import SimpleSlider from "../HomeSlider/HomeSlider";
// // import imag1 from '../../assets/images/blog-img-1.jpeg';
// // import imag2 from '../../assets/images/blog-img-2.jpeg';
// // import CategorySlider from "../CategorySlider/CategorySlider";
// // import Loader from "../Loader/loader";
// // import { useQuery } from "react-query";
// // import { Link } from "react-router-dom";
// // import { cartContext } from "../../CartContext/CartContext";
// // import toast from "react-hot-toast";
// // import { WishListContext } from "../../ًWishListContext/WishListContext";

// // export default function Products() {
// //   const { addProduct } = useContext(cartContext);
// //   const { wishList, toggleWishList } = useContext(WishListContext);


// //   async function handleAddProduct(id) {
// //     const flagres = await addProduct(id);

// //     if (flagres) {
// //       toast.success('Product added successfully', {
// //         position: "top-right",
// //         duration: 3000,
// //       });
// //     } else {
// //       toast.error('Product adding failed', {
// //         position: 'top-right',
// //         duration: 3000,
// //       });
// //     }
// //   }

// //   // Fetching products data
// //   const { data, isError, isLoading } = useQuery('allProducts', async () => {
// //     const response = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
// //     return response.data;
// //   });

// //   // Error handling
// //   if (isError) {
// //     return (
// //       <h2>fe error</h2>
// //     );
// //   }

// //   // Loading state
// //   if (isLoading) {
// //     return (
// //       <Loader />
// //     );
// //   }

// //   // Ensure data is defined
// //   const products = data?.data || [];
// //   const isInWishList = (productId) => wishList.some(item => item._id === productId);


// //   return (
// //     <>
// //       <div className="container mx-auto">
// //         <div className="flex items-center justify-center">
// //           <div className="w-[80%]">
// //             <SimpleSlider />
// //           </div>
// //           <div className="w-[20%]">
// //             <div>
// //               <img src={imag1} className='h-40 w-full' alt="food" />
// //             </div>
// //             <div>
// //               <img src={imag2} className='h-40 w-full' alt="food" />
// //             </div>
// //           </div>
// //         </div>

// //         <CategorySlider />

// //         <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-2">
// //           {products.map((product) => (
// //             <div key={product._id} className="product p-4">
// //               <div className="relative overflow-hidden group">
// //                 <div
// //                   onClick={() => handleAddProduct(product._id)}
// //                   className="cursor-pointer group-hover:translate-x-0 transition-[500ms] p-2 rounded-lg bg-green-500 absolute top-2 end-2 translate-x-[200%]"
// //                 >
// //                   <i className="fa-solid fa-plus text-white"></i>
// //                 </div>

// //                 <Link to={`/productDetails/${product._id}`}>
// //                   <img src={product.imageCover} className="w-full" alt={product.title} />
// //                   <h6 className="text-green-500">{product.category.name}</h6>
// //                   <h2>{product.title.split(' ').slice(0, 2).join(' ')}</h2>

// //                   <div className="flex justify-between items-center">
// //                     <p>
// //                       <span className={product.priceAfterDiscount ? 'line-through text-red-700' : ''}>
// //                         {product.price}
// //                       </span>

// //                       <span className="ml-2">
// //                         {product.priceAfterDiscount}
// //                       </span>
// //                     </p>
// //                     <p><i className="fa-solid fa-star text-yellow-300"></i>{product.ratingsAverage}</p>
                    
// //                   </div>
// //                   <i
// //                         className={`fa-solid fa-heart cursor-pointer ${isInWishList ? 'text-gray-500' : 'text-red-500'}`}
// //                         onClick={() => toggleWishList(product._id)}
// //                       ></i>
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}
// //         </diis
// //       </div>
// //     </>
// //   );
// // }




// import React, { useContext } from "react";
// import axios from "axios";
// import { useQuery } from "react-query";
// import { Link } from "react-router-dom";
// import { cartContext } from "../../CartContext/CartContext";
// import { WishListContext } from "../../ًWishListContext/WishListContext";
// import toast from "react-hot-toast";
// import Loader from "../Loader/loader";
// import SimpleSlider from "../HomeSlider/HomeSlider";
// import imag1 from "../../assets/images/blog-img-1.jpeg";
// import imag2 from "../../assets/images/blog-img-2.jpeg";
// import CategorySlider from "../CategorySlider/CategorySlider";

// export default function Products() {
//   const { addProduct } = useContext(cartContext);
//   const { wishList = [], toggleWishList } = useContext(WishListContext);

//   async function handleAddProduct(id) {
//     const flagres = await addProduct(id);

//     if (flagres) {
//       toast.success("Product added successfully", {
//         position: "top-right",
//         duration: 3000,
//       });
//     } else {
//       toast.error("Product adding failed", {
//         position: "top-right",
//         duration: 3000,
//       });
//     }
//   }

//   function isInWishList(productId) {
//     return wishList.some(item => item._id === productId);
//   }

//   const { data, isError, isLoading } = useQuery("allProducts", async () => {
//     const response = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
//     return response.data;
//   });

//   if (isError) {
//     return <h2>Error fetching products</h2>;
//   }

//   if (isLoading) {
//     return <Loader />;
//   }

//   const products = data?.data || [];

//   const isInWishList = (productId) => wishList.some(item => item._id === productId);

//   return (
//     <>
//       <div className="container mx-auto">
//         <div className="flex items-center justify-center">
//           <div className="w-[80%]">
//             <SimpleSlider />
//           </div>
//           <div className="w-[20%]">
//             <div>
//               <img src={imag1} className="h-40 w-full" alt="food" />
//             </div>
//             <div>
//               <img src={imag2} className="h-40 w-full" alt="food" />
//             </div>
//           </div>
//         </div>

//         <CategorySlider />

//         <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-2">
//           {products.map((product) => (
//             <div key={product._id} className="product p-4">
//               <div className="relative overflow-hidden group">
//                 <div
//                   onClick={() => handleAddProduct(product._id)}
//                   className="cursor-pointer group-hover:translate-x-0 transition-[500ms] p-2 rounded-lg bg-green-500 absolute top-2 end-2 translate-x-[200%]"
//                 >
//                   <i className="fa-solid fa-plus text-white"></i>
//                 </div>

//                 <Link to={`/productDetails/${product._id}`}>
//                   <img src={product.imageCover} className="w-full" alt={product.title} />
//                   <h6 className="text-green-500">{product.category.name}</h6>
//                   <h2>{product.title.split(' ').slice(0, 2).join(' ')}</h2>

//                   <div className="flex justify-between items-center">
//                     <p>
//                       <span className={product.priceAfterDiscount ? 'line-through text-red-700' : ''}>
//                         {product.price}
//                       </span>
//                       <span className="ml-2">{product.priceAfterDiscount}</span>
//                     </p>
//                     <p>
//                       <i className="fa-solid fa-star text-yellow-300"></i>
//                       {product.ratingsAverage}
//                     </p>
//                     <i
//                       onClick={(e) => {
//                         e.stopPropagation(); // Prevents navigation or parent component behavior
//                         toggleWishList(product._id);
//                       }}
//                       className={`fa-solid fa-heart ${isInWishList(product._id) ? 'text-red-500' : 'text-gray-400'}`}
//                     ></i>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }












// import React, { useContext } from "react";
// import axios from "axios";
// import { useQuery } from "react-query";
// import { Link } from "react-router-dom";
// import { cartContext } from "../../CartContext/CartContext";
// import { WishListContext } from "../../WishListContext/WishListContext";
// import toast from "react-hot-toast";
// import Loader from "../Loader/loader";
// import SimpleSlider from "../HomeSlider/HomeSlider";
// import imag1 from "../../assets/images/blog-img-1.jpeg";
// import imag2 from "../../assets/images/blog-img-2.jpeg";
// import CategorySlider from "../CategorySlider/CategorySlider";

// export default function Products() {
//   const { addProduct } = useContext(cartContext);
//   const { wishList, toggleWishList } = useContext(WishListContext+);

//   async function handleAddProduct(id) {
//     const flagres = await addProduct(id);

//     if (flagres) {
//       toast.success("Product added successfully", {
//         position: "top-right",
//         duration: 3000,
//       });
//     } else {
//       toast.error("Product adding failed", {
//         position: "top-right",
//         duration: 3000,
//       });
//     }
//   }

//   function isInWishList(productId) {
//     return wishList.some(item => item._id === productId);
//   }

//   const { data, isError, isLoading } = useQuery("allProducts", async () => {
//     const response = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
//     return response.data;
//   });

//   if (isError) {
//     return <h2>Error fetching products</h2>;
//   }

//   if (isLoading) {
//     return <Loader />;
//   }

//   const products = data?.data || [];

//   return (
//     <>
//       <div className="container mx-auto">
//         <div className="flex items-center justify-center">
//           <div className="w-[80%]">
//             <SimpleSlider />
//           </div>
//           <div className="w-[20%]">
//             <div>
//               <img src={imag1} className="h-40 w-full" alt="food" />
//             </div>
//             <div>
//               <img src={imag2} className="h-40 w-full" alt="food" />
//             </div>
//           </div>
//         </div>

//         <CategorySlider />

//         <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-2">
//           {products.map((product) => (
//             <div key={product._id} className="product p-4">
//               <div className="relative overflow-hidden group">
//                 <div
//                   onClick={() => handleAddProduct(product._id)}
//                   className="cursor-pointer group-hover:translate-x-0 transition-[500ms] p-2 rounded-lg bg-green-500 absolute top-2 end-2 translate-x-[200%]"
//                 >
//                   <i className="fa-solid fa-plus text-white"></i>
//                 </div>

//                 <Link to={`/productDetails/${product._id}`}>
//                   <img src={product.imageCover} className="w-full" alt={product.title} />
//                   <h6 className="text-green-500">{product.category.name}</h6>
//                   <h2>{product.title.split(' ').slice(0, 2).join(' ')}</h2>

//                   <div className="flex justify-between items-center">
//                     <p>
//                       <span className={product.priceAfterDiscount ? 'line-through text-red-700' : ''}>
//                         {product.price}
//                       </span>
//                       <span className="ml-2">{product.priceAfterDiscount}</span>
//                     </p>
//                     <p>
//                       <i className="fa-solid fa-star text-yellow-300"></i>
//                       {product.ratingsAverage}
//                     </p>
//                     <i
//                       onClick={(e) => {
//                         e.stopPropagation(); // Prevents navigation or parent component behavior
//                         toggleWishList(product._id);
//                       }}
//                       className={`fa-solid fa-heart ${isInWishList(product._id) ? 'text-red-500' : 'text-gray-400'}`}
//                     ></i>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


// import React, { useContext } from "react";
// import axios from "axios";
// import { useQuery } from "react-query";
// import { Link } from "react-router-dom";
// import { cartContext } from "../../CartContext/CartContext";
// import toast from "react-hot-toast";
// import Loader from "../Loader/loader";
// import SimpleSlider from "../HomeSlider/HomeSlider";
// import imag1 from "../../assets/images/blog-img-1.jpeg";
// import imag2 from "../../assets/images/blog-img-2.jpeg";
// import CategorySlider from "../CategorySlider/CategorySlider";
// import { WishListContext } from "../../ًWishListContext/WishListContext";

// export default function Products() {
//   const { addProduct } = useContext(cartContext);
//   const { wishList =[], toggleWishList } = useContext(WishListContext);

//   async function handleAddProduct(id) {
//     const flagres = await addProduct(id);

//     if (flagres) {
//       toast.success("Product added successfully", {
//         position: "top-right",
//         duration: 3000,
//       });
//     } else {
//       toast.error("Product adding failed", {
//         position: "top-right",
//         duration: 3000,
//       });
//     }
//   }

//   function isInWishList(productId) {
//     return wishList.some(item => item._id === productId);
//   }

//   const { data, isError, isLoading } = useQuery("allProducts", async () => {
//     const response = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
//     return response.data;
//   });

//   if (isError) {
//     return <h2>Error fetching products</h2>;
//   }

//   if (isLoading) {
//     return <Loader />;
//   }

//   const products = data?.data || [];

//   return (
//     <>
//       <div className="container mx-auto">
//         <div className="flex items-center justify-center">
//           <div className="w-[80%]">
//             <SimpleSlider />
//           </div>
//           <div className="w-[20%]">
//             <div>
//               <img src={imag1} className="h-40 w-full" alt="food" />
//             </div>
//             <div>
//               <img src={imag2} className="h-40 w-full" alt="food" />
//             </div>
//           </div>
//         </div>

//         <CategorySlider />

//         <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-2">
//           {products.map((product) => (
//             <div key={product._id} className="product p-4">
//               <div className="relative overflow-hidden group">
//                 <div
//                   onClick={() => handleAddProduct(product._id)}
//                   className="cursor-pointer group-hover:translate-x-0 transition-[500ms] p-2 rounded-lg bg-green-500 absolute top-2 end-2 translate-x-[200%]"
//                 >
//                   <i className="fa-solid fa-plus text-white"></i>
//                 </div>

//                 <Link to={`/productDetails/${product._id}`}>
//                   <img src={product.imageCover} className="w-full" alt={product.title} />
//                   <h6 className="text-green-500">{product.category.name}</h6>
//                   <h2>{product.title.split(' ').slice(0, 2).join(' ')}</h2>

//                   <div className="flex justify-between items-center">
//                     <p>
//                       <span className={product.priceAfterDiscount ? 'line-through text-red-700' : ''}>
//                         {product.price}
//                       </span>
//                       <span className="ml-2">{product.priceAfterDiscount}</span>
//                     </p>
//                     <p>
//                       <i className="fa-solid fa-star text-yellow-300"></i>
//                       {product.ratingsAverage}
//                     </p>
//                     <i
//                       onClick={(e) => {
//                         e.preventDefault(); // Use e.preventDefault() to stop default behavior
//                         // e.stopPropagation(); // Prevents navigation or parent component behavior
//                         toggleWishList(product._id);
//                       }}
//                       className={`fa-solid fa-heart cursor-pointer ${isInWishList(product._id) ? 'text-red-500' : 'text-gray-400'}`}
//                     ></i>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }



import React, { useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { cartContext } from "../../CartContext/CartContext";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import SimpleSlider from "../HomeSlider/HomeSlider";
import imag1 from "../../assets/images/blog-img-1.jpeg";
import imag2 from "../../assets/images/blog-img-2.jpeg";
import CategorySlider from "../CategorySlider/CategorySlider";
import { WishListContext } from "../../ًWishListContext/WishListContext";

export default function Products() {
  const { addProduct } = useContext(cartContext);
  const { wishList = [], toggleWishList } = useContext(WishListContext);

  // دالة لإضافة منتج إلى السلة
  async function handleAddProduct(id) {
    const flagres = await addProduct(id);

    if (flagres) {
      toast.success("Product added successfully", {
        position: "top-right",
        duration: 3000,
      });
    } else {
      toast.error("Product adding failed", {
        position: "top-right",
        duration: 3000,
      });
    }
  }

  // دالة للتحقق مما إذا كان المنتج موجودًا في قائمة الأمنيات
  function isInWishList(productId) {
    return wishList.some(item => item._id === productId);
  }

  // جلب المنتجات باستخدام react-query
  const { data, isError, isLoading } = useQuery("allProducts", async () => {
    const response = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
    return response.data;
  });

  if (isError) {
    return <h2>Error fetching products</h2>;
  }

  if (isLoading) {
    return <Loader />;
  }

  const products = data?.data || [];

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="w-[80%]">
            <SimpleSlider />
          </div>
          <div className="w-[20%]">
            <div>
              <img src={imag1} className="h-40 w-full" alt="food" />
            </div>
            <div>
              <img src={imag2} className="h-40 w-full" alt="food" />
            </div>
          </div>
        </div>

        <CategorySlider />

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-2">
          {products.map((product) => (
            <div key={product._id} className="product p-4">
              <div className="relative overflow-hidden group">
                <div
                  onClick={() => handleAddProduct(product._id)}
                  className="cursor-pointer group-hover:translate-x-0 transition-[500ms] p-2 rounded-lg bg-green-500 absolute top-2 end-2 translate-x-[200%]"
                >
                  <i className="fa-solid fa-plus text-white"></i>
                </div>

                <Link to={`/productDetails/${product._id}`}>
                  <img src={product.imageCover} className="w-full" alt={product.title} />
                  <h6 className="text-green-500">{product.category.name}</h6>
                  <h2>{product.title.split(' ').slice(0, 2).join(' ')}</h2>

                  <div className="flex justify-between items-center">
                    <p>
                      <span className={product.priceAfterDiscount ? 'line-through text-red-700' : ''}>
                        {product.price}
                      </span>
                      <span className="ml-2">{product.priceAfterDiscount}</span>
                    </p>
                    <p>
                      <i className="fa-solid fa-star text-yellow-300"></i>
                      {product.ratingsAverage}
                    </p>
                    <i
                      onClick={(e) => {
                        e.preventDefault(); // توقف السلوك الافتراضي
                        toggleWishList(product._id);
                      }}
                      className={`fa-solid fa-heart cursor-pointer ${isInWishList(product._id) ? 'text-red-500' : 'text-gray-400'}`}
                    ></i>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

