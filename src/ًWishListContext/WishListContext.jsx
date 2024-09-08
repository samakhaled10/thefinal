






// // import React, { createContext, useState, useEffect } from 'react';
// // import axios from 'axios';

// // export const WishListContext = createContext();

// // export function WishListProvider({ children }) {
// //   const [wishList, setWishList] = useState([]);

// //   // Function to fetch the wish list
// //   async function getWishList() {
// //     const token = localStorage.getItem('tkn');
// //     if (!token) {
// //       console.warn('No token found, unable to fetch wish list');
// //       return;
// //     }

// //     try {
// //       const response = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
// //         headers: { token }
// //       });
// //       setWishList(response.data.data.wishList || []);
// //     } catch (error) {
// //       console.error('Error fetching wish list:', error);
// //     }
// //   }

// //   // Function to add a product to the wish list
// //   async function addToWishList(productId) {
// //     const token = localStorage.getItem('tkn');
// //     if (!token) {
// //       console.warn('No token found, unable to add to wish list');
// //       return;
// //     }

// //     try {
// //       await axios.post(
// //         'https://ecommerce.routemisr.com/api/v1/wishlist',
// //         { productId },
// //         { headers: { token } }
// //       );
// //       getWishList(); // Refresh wish list after adding
// //     } catch (error) {
// //       console.error('Error adding to wish list:', error);
// //     }
// //   }

// //   // Function to remove a product from the wish list
// //   async function removeFromWishList(productId) {
// //     const token = localStorage.getItem('tkn');
// //     if (!token) {
// //       console.warn('No token found, unable to remove from wish list');
// //       return;
// //     }

// //     try {
// //       await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
// //         headers: { token }
// //       });
// //       getWishList(); // Refresh wish list after removing
// //     } catch (error) {
// //       console.error('Error removing from wish list:', error);
// //     }
// //   }

// //   // Function to toggle a product in the wish list
// //   async function toggleWishList(productId) {
// //     console.log('Toggling wishlist for product:', productId); // Debugging line
// //     const token = localStorage.getItem('tkn');
// //     if (!token) {
// //       console.warn('No token found, unable to toggle wish list');
// //       return;
// //     }

// //     try {
// //       if (wishList.find(item => item._id === productId)) {
// //         // Remove from wish list
// //         await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
// //           headers: { token }
// //         });
// //       } else {
// //         // Add to wish list
// //         await axios.post(
// //           'https://ecommerce.routemisr.com/api/v1/wishlist',
// //           { productId },
// //           { headers: { token }
// //         });
// //       }
// //       getWishList(); // Refresh the wish list after adding/removing
// //     } catch (error) {
// //       console.error('Error toggling wish list:', error);
// //     }
// //   }

// //   useEffect(() => {
// //     getWishList();
// //   }, []);

// //   return (
// //     <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList , toggleWishList }}>
// //       {children}
// //     </WishListContext.Provider>
// //   );
// // }
 




// // import React, { createContext, useState, useEffect } from 'react';
// // import axios from 'axios';

// // export const WishListContext = createContext();

// // export function WishListProvider({ children }) {
// //   const [wishList, setWishList] = useState([]);

// //   // Function to fetch the wish list
// //   async function getWishList() {
// //     const token = localStorage.getItem('tkn');
// //     if (!token) {
// //       console.warn('No token found, unable to fetch wish list');
// //       return;
// //     }

// //     try {
// //       const response = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
// //         headers: { token }
// //       });
// //       console.log('Fetched wish list:', response.data.data.wishList); // Debugging line
// //       setWishList(response.data.data.wishList || []);
// //     } catch (error) {
// //       console.error('Error fetching wish list:', error);
// //     }
// //   }

// //   // Function to add a product to the wish list
// //   async function addToWishList(productId) {
// //     const token = localStorage.getItem('tkn');
// //     if (!token) {
// //       console.warn('No token found, unable to add to wish list');
// //       return;
// //     }

// //     try {
// //       await axios.post(
// //         'https://ecommerce.routemisr.com/api/v1/wishlist',
// //         { productId },
// //         { headers: { token } }
// //       );
// //       getWishList(); // Refresh wish list after adding
// //     } catch (error) {
// //       console.error('Error adding to wish list:', error);
// //     }
// //   }

// //   // Function to remove a product from the wish list
// //   async function removeFromWishList(productId) {
// //     const token = localStorage.getItem('tkn');
// //     if (!token) {
// //       console.warn('No token found, unable to remove from wish list');
// //       return;
// //     }

// //     try {
// //       await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
// //         headers: { token }
// //       });
// //       getWishList(); // Refresh wish list after removing
// //     } catch (error) {
// //       console.error('Error removing from wish list:', error);
// //     }
// //   }

// //   // Function to toggle a product in the wish list
// //   async function toggleWishList(productId) {
// //     console.log('Toggling wishlist for product:', productId); // Debugging line
// //     const token = localStorage.getItem('tkn');
// //     if (!token) {
// //       console.warn('No token found, unable to toggle wish list');
// //       return;
// //     }

// //     try {
// //       if (wishList.find(item => item._id === productId)) {
// //         // Remove from wish list
// //         await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
// //           headers: { token }
// //         });
// //       } else {
// //         // Add to wish list
// //         await axios.post(
// //           'https://ecommerce.routemisr.com/api/v1/wishlist',
// //           { productId },
// //           { headers: { token } }
// //         );
// //       }
// //       getWishList(); // Refresh the wish list after adding/removing
// //     } catch (error) {
// //       console.error('Error toggling wish list:', error);
// //     }
// //   }

// //   useEffect(() => {
// //     getWishList();
// //   }, []);

// //   return (
// //     <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList, toggleWishList }}>
// //       {children}
// //     </WishListContext.Provider>
// //   );
// // }




// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const WishListContext = createContext();

// export function WishListProvider({ children }) {
//   const [wishList, setWishList] = useState([]);

//   // Function to fetch the wish list
//   async function getWishList() {
//     const token = localStorage.getItem('tkn');
//     if (!token) {
//       console.warn('No token found, unable to fetch wish list');
//       return;
//     }

//     try {
//       const response = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       console.log('API Response:', response.data); // Debugging line
//       if (response.data && response.data.data && response.data.data.wishList) {
//         setWishList(response.data.data.wishList);
//       } else {
//         console.warn('Wish list data not found in response');
//       }
//     } catch (error) {
//       console.error('Error fetching wish list:', error);
//     }
//   }

//   // Function to add a product to the wish list
//   async function addToWishList(productId) {
//     const token = localStorage.getItem('tkn');
//     if (!token) {
//       console.warn('No token found, unable to add to wish list');
//       return;
//     }

//     try {
//       await axios.post(
//         'https://ecommerce.routemisr.com/api/v1/wishlist',
//         { productId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       getWishList(); // Refresh wish list after adding
//     } catch (error) {
//       console.error('Error adding to wish list:', error);
//     }
//   }

//   // Function to remove a product from the wish list
//   async function removeFromWishList(productId) {
//     const token = localStorage.getItem('tkn');
//     if (!token) {
//       console.warn('No token found, unable to remove from wish list');
//       return;
//     }

//     try {
//       await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       getWishList(); // Refresh wish list after removing
//     } catch (error) {
//       console.error('Error removing from wish list:', error);
//     }
//   }

//   // Function to toggle a product in the wish list
//   async function toggleWishList(productId) {
//     console.log('Toggling wishlist for product:', productId); // Debugging line
//     const token = localStorage.getItem('tkn');
//     if (!token) {
//       console.warn('No token found, unable to toggle wish list');
//       return;
//     }

//     try {
//       const productInWishList = wishList.find(item => item._id === productId);

//       if (productInWishList) {
//         // Remove from wish list
//         await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//       } else {
//         // Add to wish list
//         await axios.post(
//           'https://ecommerce.routemisr.com/api/v1/wishlist',
//           { productId },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       }
//       getWishList(); // Refresh the wish list after adding/removing
//     } catch (error) {
//       console.error('Error toggling wish list:', error);
//     }
//   }

//   useEffect(() => {
//     getWishList();
//   }, []);

//   return (
//     <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList, toggleWishList }}>
//       {children}
//     </WishListContext.Provider>
//   );
// }





import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// إنشاء الـ Context
export const WishListContext = createContext();

// إنشاء الـ Provider
export function WishListProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  // دالة لجلب قائمة الأمنيات
  async function getWishList() {
    const token = localStorage.getItem('tkn');
    if (!token) {
      console.warn('No token found, unable to fetch wish list');
      return;
    }

    try {
      const response = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('API Response:', response.data); // رسالة توضيحية
      if (response.data && response.data.data && response.data.data.wishList) {
        setWishList(response.data.data.wishList);
      } else {
        console.warn('Wish list data not found in response');
      }
    } catch (error) {
      console.error('Error fetching wish list:', error);
    }
  }

  // دالة لإضافة عنصر إلى قائمة الأمنيات
  async function addToWishList(productId) {
    const token = localStorage.getItem('tkn');
    if (!token) {
      console.warn('No token found, unable to add to wish list');
      return;
    }

    try {
      await axios.post(
        'https://ecommerce.routemisr.com/api/v1/wishlist',
        { productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      getWishList(); // إعادة تحميل قائمة الأمنيات بعد الإضافة
    } catch (error) {
      console.error('Error adding to wish list:', error);
    }
  }

  // دالة لإزالة عنصر من قائمة الأمنيات
  async function removeFromWishList(productId) {
    const token = localStorage.getItem('tkn');
    if (!token) {
      console.warn('No token found, unable to remove from wish list');
      return;
    }

    try {
      await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      getWishList(); // إعادة تحميل قائمة الأمنيات بعد الإزالة
    } catch (error) {
      console.error('Error removing from wish list:', error);
    }
  }

  // دالة لتبديل حالة العنصر في قائمة الأمنيات
  async function toggleWishList(productId) {
    console.log('Toggling wishlist for product:', productId); // رسالة توضيحية
    const token = localStorage.getItem('tkn');
    if (!token) {
      console.warn('No token found, unable to toggle wish list');
      return;
    }

    try {
      const productInWishList = wishList.find(item => item._id === productId);

      if (productInWishList) {
        // إزالة من قائمة الأمنيات
        await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        // إضافة إلى قائمة الأمنيات
        await axios.post(
          'https://ecommerce.routemisr.com/api/v1/wishlist',
          { productId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      getWishList(); // إعادة تحميل قائمة الأمنيات بعد التبديل
    } catch (error) {
      console.error('Error toggling wish list:', error);
    }
  }

  useEffect(() => {
    getWishList();
  }, []);

  return (
    <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList, toggleWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

