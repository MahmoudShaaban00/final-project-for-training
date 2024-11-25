import React from 'react'
import imagesignup from '../../assets/signup.png'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";



export default function Login() {

    const { loginWithRedirect } = useAuth0();


  let navigate = useNavigate()

  let ay7age = Yup.object().shape({
    email: Yup.string().email('email is invalid').required('email is required'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'password must start uppercase').required('password is required'),
  })


  function handleRegister(formValues) {
    console.log(formValues)
    navigate('/')
  }


  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: ay7age,
    onSubmit: handleRegister,
  });

  return (
    <>
      <div className=' grid sm:grid-cols-2 my-10 grid-cols-1'>

        <div>
          <img src={imagesignup} className='xl:w-[700px] xl:h-[600px] md:w-[380px] md:h-[420px] sm:w-[300px] sm:h-[420px]'/>
        </div>

        <div className='xl:mt-20 mt-5'>
          <h1 className='xl:px-48 px-5 text-3xl font-semibold'>Create an account</h1>
          <p  className='xl:px-48 px-5 text-sm mr-20 mt-3'>Enter your details below</p>
          <form onSubmit={formik.handleSubmit} className='xl:px-48 mt-10 sm:pr-10 md:pr-32 px-5'>

            <div className="relative z-0 w-full mb-5 group">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name="email" id='email' value={formik.values.email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
            </div>
            {formik.errors.email && formik.touched.email ? <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.email}
            </div> : null}

            <div className="relative z-0 w-full mb-5 group">
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="password" id='password' value={formik.values.password} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
              <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password</label>
            </div>
            {formik.errors.password && formik.touched.password ? <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.password}
            </div> : null}
             <div>
             <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-9 sm:w-auto  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Log in</button>
             <a href="#" className='text-red-800 sm:ml-12 sm:text-sm'>Forget Password?</a>
             </div>
          </form>
        </div>
      </div>
    </>
  )
}
