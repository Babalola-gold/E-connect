import Group1 from '../assets/Group 1.png';
import cart from '/src/assets/mdi_cart-outline.png';

const Navbar = () => {
    return (
        <div>
            <nav className='bg-red-500  w-[1440px] h-[73px] overflow-hidden'>
                <div className="absolute flex w-[90.92px] h-[27px] top-[23px] left-[50px] gap-[15px] ">
                    <img className='w-[26.92px] h-[27px] ' src={Group1} alt="Logo" />
                    <span className='font-bold text-white text-xl w-[49px] h-[15px] text-[20px] '>Logo</span>
                </div>


                <p className=' absolute text-white w-[177px] h-[12px] top-[30px] left-[557px] text-[16px] font-bold '>Think of it? Buy it here</p>


                <div className=' flex absolute w-auto h-auto sm:w-[285px] sm:h-[29px] top-[19px] left-[950px] gap-[20px]'>
                    <img className=' w-[24px] h-[24px]   ' src={cart} alt="" />
                    <span className='text-white w-auto h-auto sm:w-[35px] sm:h-[9px] gap-[10px] text-[12px] '>Log In</span>
                    {/* <span className='text-white border-l-2 border-blue-700'></span> */}
                    <span className='text-white w-auto h-auto sm:w-[65px] sm:h-[29px]  px-0 gap-[10px] border-l text-[12px]'>Sign Up</span>
                    
                    <button className='sell'><span  className='text-white w-auto h-auto sm:w-[21px] sm:h-[9px] gap-[10px] text-[12px]'>Sell</span></button>
                </div>
            </nav>

            {/* Your other content here */}
        </div>
    );
};

export default Navbar;
