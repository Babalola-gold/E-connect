import Group1 from '../assets/Group 1.png';
import cart from '/src/assets/mdi_cart-outline.png';
import line from '/src/assets/Line 17.png';
import logos from '/src/assets/Frame 5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation()
    return (
        <div>
            <nav>
                <div className='nav-bar'>

                    <Link to="/" className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}>
                        <img className='logos' src={logos} alt="" />
                    </Link>
                </div>

                <p className='think-about'>Think of it? Buy it here</p>


                <div className='right-bar'>
                    <div className='w-[24px] h-[24px] '>

                        <Link to="/cart" className={`nav-button ${location.pathname === '/cart' ? 'active' : ''}`}>
                            <img className=' w-[20px] h-[20px] top-[12px] left-[2px] absolute ' src={cart} alt="" />
                        </Link>


                    </div>
                    <div className='w-[55px] h-[29px] p-[10px]'>

                        <Link to="/login" className={`nav-button ${location.pathname === '/login' ? 'active' : ''}`}>
                            <span className='sign-in'>Log In</span>
                        </Link>

                    </div>
                    {/* <span className='text-white border-l-2 border-blue-700'></span> */}
                    <div className='signup'>

                        <Link to="/signup" className={`nav-button ${location.pathname === '/signup' ? 'active' : ''}`}>
                            <span className='sign-up'>Sign Up</span>
                        </Link>


                    </div>

                    <Link to="/" className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}>
                        <button className='sell'><span className='seller'>Sell</span></button>
                    </Link>


                </div>
            </nav>

            <div>
                {/* <div className='navbar'>
                    <div className='frame_1'>
                        <img className='lines' src={line} alt="" />
                        <img className='logos' src={logos} alt="" />

                    </div>

                    <div className='search_2nd'>

                        <div className='search_3rd'>
                            <div className='w-[427px] h-[34px] '>
                                <input className='mobile_input' type="text" placeholder='Search products, brands and categories' />



                            </div>
                            <div className=''>
                                <div className='frame_5'>
                                    <FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} />
                                    <p className='text_search  '>Search</p>
                                </div>
                            </div>


                        </div>

                        <div className=' w-[11px] h-[11px] top-[10px] left-[255px] absolute '>

                            <img className=' w-[9.17px] h-[9.17px] top-[0.92px] left-[0.46px] absolute ' src={cart} alt="" />
                        </div>

                        <div className='absolute w-[86px] h-[16px] top-[8px] left[272px] '>
                            <div className='w-[30px] h-[16px] p-[10px]'>
                                <span className='sign-in'>Log In</span>
                            </div>
                            
                            <div className='signup'>
                                <span className='sign-up'>Sign Up</span>
                            </div>

                            <button className='sell'><span className='seller'>Sell</span></button>
                        </div>



                    </div>
                </div> */}
            </div >

            
        </div >
    );
};

export default Navbar;
