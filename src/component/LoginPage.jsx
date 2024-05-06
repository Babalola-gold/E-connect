import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginPage = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters long')
            .required('Password is required'),
    });

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (newUser) => {
            axios.post('http://localhost:5000/signin', newUser)
                
                
                .then(response => {
                    localStorage.setItem('token', response.data.token);
                    console.log(response.data); // Handle the response from the server
                    navigate('/profile'); // Redirect to the dashboard after successful sign-in
                })
                .catch(error => {
                    console.error(error); // Handle any errors that occur during the POST request
                });
            console.log(newUser);
        },
    });

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-full  max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Log In</h2>
                    <p className='w-[294px] h-[15px] text-[20px] font-[400px] leading-[24.2px] text-center mb-4 ml-12'>Enter Your Credentials to Login</p>
                    <form className="flex flex-col" onSubmit={handleSubmit} method='post'>
                        <input type="email"
                            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            name="email"
                            id="email-address"
                            autoComplete="email"
                            value={values.email}
                            onChange={handleChange}
                            required
                            placeholder="User/Email">
                        </input>
                        <span className='text-red-700'>{errors.email} </span>

                        <input className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={values.password}
                            onChange={handleChange}
                            required
                            placeholder="Password" />
                        <div className="flex items-center justify-between flex-wrap" />
                        <span className='text-red-800'>{errors.password} </span>

                        <div className='flex w-[484px] h-[12px] gap-[130px]  '>
                            <p className='w-[129px] h-[12px] font-[500px] text-[16px] leading-[19.36px] text-[#59AEFF] '>
                                Forget Password
                            </p>
                            <p className='w-[154px] h-[12px] font-[500px] text-[16px] leading-[19.36px] text-[#59AEFF] '>
                            <Link to='/signup' >Create new account</Link>
                                
                            </p>

                        </div>


                        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
                    </form>
                </div>
            </div>

            <div className=' bg-[#F8F8F8] h-[397px] '>
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
            </div>
        </>
    )
}

export default LoginPage