import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';


const SignUp = () => {
    const navigate = useNavigate();
    const URL = 'http://localhost:5000/register';
    // State to track signup process
    //  validationSchema: validationSchema,
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('Name is required')
            .max(8, 'Name must be at most 8 characters'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
                "Password must be at least 8 characters long and contain both letters and numbers"
            ),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        phone: Yup.number()
            .required('Phone number is required')
            .integer('Phone number must be an integer')
            .positive('Phone number must be a positive number'),
    });

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '', // Changed from 'number' to 'phone'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post('http://localhost:5000/register', values)
            console.log(values);
            navigate('/login');


        },

    });


    return (
        <>
            <div className=" flex  items-center justify-center my-16">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} method='post'>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Sign Up</h2>
                    <p className='w-[294px] h-[15px] text-[20px] font-[400px] leading-[24.2px] text-center mb-4 ml-12'>Enter Your Credentials to Sign Up</p>
                    <div className="mb-6">

                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="firstName"
                            autoComplete="given-name"
                            value={values.firstName}
                            onChange={handleChange}
                            type="text"
                            placeholder="Name"

                        />
                        <span className='text-red-700'>{errors.firstName} </span>

                    </div>

                    <div className="mb-6">

                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            type="email"
                            id="email-address"
                            autoComplete="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                        <span >{errors.email} </span>

                    </div>
                    <div className="mb-4">

                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                        <span className='text-red-800'>{errors.password} </span>

                    </div>
                    <div className="mb-4">

                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            name="confirmPassword"
                            type="password"
                            id="confirmPassword"
                            autoComplete="current-password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Passwword"

                            required
                        />
                        <span className='text-red-800'>{errors.password}</span>

                    </div>
                    <div className="mb-4">

                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            name="phone"
                            type="phone"
                            id="phone"
                            autoComplete="current-password"
                            value={values.number}
                            onChange={handleChange}
                            placeholder="Number"

                            required
                        />

                    </div>

                    <div className='flex w-[484px] h-[12px] gap-[10px]  my-5 '>
                        <p className='w-[129px] h-[12px] font-[500px] text-[16px] leading-[19.36px] text-[#59AEFF] '>
                            Have an Account?
                        </p>
                        <p className='w-[154px] h-[12px] font-[500px] text-[16px] leading-[19.36px] text-[#59AEFF] '>
                            <Link to='/login' >Log In</Link>

                        </p>

                    </div>

                    <div className="flex items-center justify-between  ">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 w-[486px] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit" >Sign Up
                        </button>
                    </div>
                </form>
            </div>

            {/* <div className=' bg-[#F8F8F8] h-[397px] '>
                <div className='inner-footer'>
                    <div className='foot-in'>

                        <div className='about my-10 mx-10'>
                            <p className='my-2'>
                                About
                            </p>
                            <h5>
                                Lorem ipsum dolor sit amet consectetur. Ullamcorper bibendum diam sapien faucibus. Dolor in nibh malesuada pharetra aenean eu rhoncus. Non tortor sagittis metus vitae nunc. Varius congue faucibus lacus pharetra nisl risus. Bibendum integer fringilla id ante fusce varius eget.
                            </h5>
                            <button>
                                <p >Learn More</p>
                            </button>
                        </div>
                        <div className='privacy my-10'>
                            <p className='w-[106px] h-[12px] text-[16px]  text-black text-base font-normal leading-5 text-left my-2'>Privacy Policy</p>
                            <p className='w-[163px] h-[12px] text-[16px]  text-black text-base font-normal leading-5 text-left my-2'>Terms and conditions</p>
                            <p className='w-[39px] h-[12px] text-[16px]  text-black text-base font-normal leading-5 text-left my-2'>FAQs</p>
                            <p className='w-[85px] h-[12px] text-[16px]  text-black text-base font-normal leading-5 text-left my-2'>Contact Us</p>
                        </div>
                        <div className='follow my-10'>
                            <p className='w-[92px] h-[15px] text-[20px]  text-black text-base font-bold leading-5 text-left my-2'>Follow us </p>
                            <div className='w-[240px] h-[60px]'>

                                <FontAwesomeIcon className=' w-[50px] h-[49.88px] ' icon={faFacebook} />
                                <FontAwesomeIcon className='w-[60px] h-[60px] ' icon={faInstagram} />
                                <FontAwesomeIcon className='w-[60px] h-[60px]' icon={faLinkedin} />
                                <FontAwesomeIcon className='w-[60px] h-[60px]' icon={faTwitter} />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default SignUp