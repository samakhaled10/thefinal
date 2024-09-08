import React, { useContext } from 'react';
import { WishListContext } from '../../ًWishListContext/WishListContext';

export default function WishList() {
  const { wishList } = useContext(WishListContext);

  console.log('WishList data:', wishList); // تحقق من البيانات هنا

  return (
    <div>
      <h1>WishList</h1>
      {/* <ul>
        {wishList && wishList.length > 0 ? (
          wishList.map(item => (
            <li key={item.id}>{item.name}</li>
          ))
        ) : (
          <p>No items in your wish list</p>
        )}
      </ul> */}
    </div>
  );
}
