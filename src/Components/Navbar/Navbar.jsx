import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import freshlogo from '../../assets/images/freshcart-logo.svg';
import { useContext } from 'react';
import {userverify } from '../../Context/UserVerify';
import { WishListContext } from '../../ًWishListContext/WishListContext';
export default function Navbar() {

  const {token , settoken} = useContext(userverify);
  const { wishList } = useContext(WishListContext);
   const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('tkn');
    settoken(null);
    navigate('/login');
  }


  return (
    <nav className=' bg-emerald-300'>

    <div className="container mx-auto flex items-center justify-between p-3 ">
    <div className='flex items-center gap-3 '>
      <Link to=''>
        
         <img src={freshlogo} alt="cart" />

      </Link>
      {token ? <ul className='flex items-center space-x-5 '>
          
            <li>
              <NavLink to ='cart'>
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink to='products'>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to='wishList'>
              WishList
              </NavLink>
            </li>
            <li>
              <NavLink to ='categories'>
                Categories
              </NavLink>
            </li>

            <li>
              <NavLink to ='brands'>
               Brands
              </NavLink>
            </li>
             
        </ul>
               : null }
         

      </div>

      <div className=' flex items-center gap-4'>
        
          <ul className='flex items-center gap-3'>
            <li>
            <i className="fa-brands cursor-pointer fa-facebook"></i>
            </li>
            <li>
            <i className="fa-brands cursor-pointer fa-twitter"></i>
            </li>
            <li>
            <i className="fa-brands cursor-pointer fa-tiktok"></i>
            </li>
            <li>
            <i className="fa-brands cursor-pointer fa-instagram"></i>
            </li>
            <li>
            <i className="fa-brands cursor-pointer fa-linkedin"></i>
            </li>
            <li>
            <i className="fa-brands cursor-pointer fa-youtube"></i>
            </li>

          </ul>

          <ul className='flex items-center gap-2'>

            {token ? <li>
              <span className='cursor-pointer' onClick={handleLogout}>
              Logout</span>
              </li> :<><li>
              <NavLink to='/register'>
                Register
              </NavLink>
        
            </li>
            <li>
              <NavLink to='/login'>
                Login
              </NavLink>
        
            </li>
            </> }
           
           
          </ul>
      </div>


    </div>

    </nav>
  )
}
