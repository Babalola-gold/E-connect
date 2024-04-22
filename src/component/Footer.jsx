import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <div className='footer'>
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

export default Footer