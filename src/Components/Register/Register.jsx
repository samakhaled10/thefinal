
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';

export default function Register() {

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [ISsuccess, setISsuccess] = useState(false);
  const [isClicked, setISClicked] = useState(false);




  let user = {
    name: '',
    email: '',
    phone: '',
    rePassword: '',
    password: '',
  }


  async function userRegister(values) {
    setISClicked(true);
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)


      .then(function (x) {
        console.log('sa7', x);
        setISsuccess(true);
        setISClicked(false);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })

      .catch(function (x) {
        console.log('8lt', x);
        setErrorMessage(x.response.data.message);
        setTimeout(() => {
          setErrorMessage(null);
        }, 2000);

      })

  }






  const myFormik = useFormik({
    initialValues: user,

    onSubmit: userRegister,
    // validate:function (myAlldata) {
    //   const myError={};
    //   const nameRegex=/^[A-Z][a-z]{3,8}$/;
    //   const phoneRegex=/^(20)?01[0125][0-9]{8}$/;

    //   if(!nameRegex.test(myAlldata.name)){
    //     myError.name="Name is not valid";
    //   }


    //   if (phoneRegex.test(myAlldata.phone) == false) {
    //     myError.phone = "Phone is not valid";
    //   }

    //   if(myAlldata.email.includes('@')==false || myAlldata.email.includes('.') == false ){
    //     myError.email="Email is not valid";
    //   }
    //   if(myAlldata.password.length < 6 || myAlldata.password.length > 12 ){
    //     myError.password="Password must be more than 6 characters";
    //   }
    //   if (myAlldata.password !== myAlldata.repassword) {
    //     myError.repassword = "Passwords do not match";
    //   } 
    //   // console.log(myError);
    //   return myError;
    // },

    // validationSchema: yup.object().shape({
    //   name: yup.string().required('Name is required').min(3,'Must be min 3 characters').max(12,'Must be max 12 characters'),
    //   email: yup.string().required('Email is required').email('Invailed email'),
    //   phone: yup.string().required('Phone is required').matches(/^(20)?01[0125][0-9]{8}$/,'Invalid phone number'),
    //   password: yup.string().min(6).max(12).required('Password is required'),
    //   repassword: yup.string().required('rePassword is required').oneOf([yup.ref('password')],'it dosnot match password'),



    // }),

    validationSchema: yup.object().shape({
      name: yup.string().required('Name is required').min(3, 'Must be min 3 characters').max(12, 'Must be max 12 characters'),
      email: yup.string().required('Email is required').email('Invalid email'),
      phone: yup.string().required('Phone is required').matches(/^(20)?01[0125][0-9]{8}$/, 'Invalid phone number'),
      password: yup.string().min(6).max(12).required('Password is required'),
      rePassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
    }),// VALIDATION WITH YUP


  });

  return (


    <div className='p-5'>

      {errorMessage ? <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        {errorMessage}
      </div> : ''}

      {ISsuccess ? <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        Congratulaions
      </div> : ''}


      <h3 className='text-center'>Register Now</h3>
      <form onSubmit={myFormik.handleSubmit} className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.name} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
          {myFormik.errors.name && myFormik.touched.name ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">

            <span class="font-medium">Danger alert!</span>
            {myFormik.errors.name}
          </div> : ''}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input type="email" onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.email} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          {myFormik.errors.email && myFormik.touched.email ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">

            <span class="font-medium">Danger alert!</span>
            {myFormik.errors.email}
          </div> : ''}
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <input type="password" onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.password} name="password" id="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          {myFormik.errors.password && myFormik.touched.password ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">

            <span class="font-medium">Danger alert!</span>
            {myFormik.errors.password}
          </div> : ''}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input type="password" onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.rePassword} name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Re-password</label>
          {myFormik.errors.repassword && myFormik.touched.repassword ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">

            <span class="font-medium">Danger alert!</span>
            {myFormik.errors.repassword}
          </div> : ''}
        </div>


        <div className="relative z-0 w-full mb-5 group">
          <input type="tel" onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.phone} name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number </label>
          {myFormik.errors.phone && myFormik.touched.phone ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">

            <span class="font-medium">Danger alert!</span>
            {myFormik.errors.phone}
          </div> : ''}
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

          {!isClicked ? 'Submit' :
            <Circles
              height="30"
              width="30"
              color="#fff"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />}
        </button>
      </form>
    </div>

  )
}
