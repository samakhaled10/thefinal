import React, { useState, useContext } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { Circles } from 'react-loader-spinner'; 
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { userverify } from '../../Context/UserVerify';
import { cartContext } from '../../CartContext/CartContext';

export default function Login() {
 const {getUserCart} = useContext(cartContext);
  const { settoken } = useContext(userverify);  
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [ISsuccess, setISsuccess] = useState(false);
  const [isClicked, setISClicked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // For password reset
  const [resetMode, setResetMode] = useState(false); // To toggle between login and reset password

  // User object for login
  let user = {
    email: '',
    password: '',
  };

  // Handle user login
  async function userLogin(values) {
    setISClicked(true);
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
      .then(function(x) {
        localStorage.setItem('tkn', x.data.token);
        settoken(x.data.token);

        getUserCart();
        setISsuccess(true);
        setISClicked(false);
        setTimeout(() => {
          navigate('/products'); 
        }, 2000);
      })
      .catch(function(x) {
        setErrorMessage(x.response.data.message);
        setTimeout(() => {
          setErrorMessage(null);
        }, 2000);
      });
  }

  // Handle reset password request
  async function handleResetPassword(values) {
    try {
      const response = await axios.post(' https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', values);
      setIsSubmitted(true);
      setTimeout(() => {
        navigate('/login'); 
      }, 2000);
    
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  }

  // Formik setup for login
  const formik = useFormik({
    initialValues: user,
    onSubmit: userLogin,
    validationSchema: yup.object().shape({
      email: yup.string().required('Email is required').email('Invalid email'),
      password: yup.string().min(6).max(12).required('Password is required'),
    }),
  });

  // Formik setup for reset password
  const resetFormik = useFormik({
    initialValues: { email: '' },
    onSubmit: handleResetPassword,
    validationSchema: yup.object().shape({
      email: yup.string().required('Email is required').email('Invalid email address'),
    }),
  });

  return (
    <div className='p-5'>
      {errorMessage ? (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
          {errorMessage}
        </div>
      ) : null}

      {resetMode ? (
        isSubmitted ? (
          <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
            Please check your email for the password reset link.
          </div>
        ) : (
          <form onSubmit={resetFormik.handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onBlur={resetFormik.handleBlur}
                onChange={resetFormik.handleChange}
                value={resetFormik.values.email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {resetFormik.touched.email && resetFormik.errors.email ? (
                <div className="text-red-600 text-sm">{resetFormik.errors.email}</div>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Send Reset Link
            </button>
            <div className="mt-4 text-sm text-center">
              <a href="#" onClick={() => setResetMode(false)} className="text-blue-500 hover:underline">
                Back to Login
              </a>
            </div>
          </form>
        )
      ) : (
        <>
          {ISsuccess ? (
            <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
              Welcome Back!
            </div>
          ) : null}

          <h3 className='text-center'>Login Now</h3>
          <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
              {formik.errors.email && formik.touched.email ? (
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
              {formik.errors.password && formik.touched.password ? (
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {!isClicked ? 'Login' : (
                <Circles
                  height="30"
                  width="30"
                  color="#fff"
                  ariaLabel="circles-loading"
                  visible={true}
                />
              )}
            </button>
          </form>
          <div className="mt-4 text-sm text-center">
          <Link to="#" onClick={() => setResetMode(true)} className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
