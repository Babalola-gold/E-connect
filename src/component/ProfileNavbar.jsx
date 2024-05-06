import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

const ProfileNavbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
          navigate('/')
      };
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (
        <Box sx={{ width: [130, 240] }} role="presentation" onClick={toggleDrawer(false)}>
             <nav className=' lg:w-60 w-40 shadow-sm lg:bg-gradient-to-r from-slate-950 to-slate-900 lg:p-5 p-3 h-screen fixed top-0 left-0 z-10 overflow-auto bg-black'>
                {/* <div className='mb-10'>
                    <p className="logo1">E-connect</p>
                </div> */}
                <div className='!py-4'>
                    <small className='text-yellow-500 font-bold'>General</small>
                </div>
                <NavLink to='/user/dashboard' className='flex gap-5 items-center  border-s-white border-s-2 ps-3 rounded-sm mb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none" className='fill-white'>
                        <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V8C10 9.88562 10 10.8284 9.41421 11.4142C8.82843 12 7.88562 12 6 12C4.11438 12 3.17157 12 2.58579 11.4142C2 10.8284 2 9.88562 2 8V6Z" stroke="currentColor" stroke-width="1.5" />
                        <path d="M2 19C2 18.0681 2 17.6022 2.15224 17.2346C2.35523 16.7446 2.74458 16.3552 3.23463 16.1522C3.60218 16 4.06812 16 5 16H7C7.93188 16 8.39782 16 8.76537 16.1522C9.25542 16.3552 9.64477 16.7446 9.84776 17.2346C10 17.6022 10 18.0681 10 19C10 19.9319 10 20.3978 9.84776 20.7654C9.64477 21.2554 9.25542 21.6448 8.76537 21.8478C8.39782 22 7.93188 22 7 22H5C4.06812 22 3.60218 22 3.23463 21.8478C2.74458 21.6448 2.35523 21.2554 2.15224 20.7654C2 20.3978 2 19.9319 2 19Z" stroke="currentColor" stroke-width="1.5" />
                        <path d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V16Z" stroke="currentColor" stroke-width="1.5" />
                        <path d="M14 5C14 4.06812 14 3.60218 14.1522 3.23463C14.3552 2.74458 14.7446 2.35523 15.2346 2.15224C15.6022 2 16.0681 2 17 2H19C19.9319 2 20.3978 2 20.7654 2.15224C21.2554 2.35523 21.6448 2.74458 21.8478 3.23463C22 3.60218 22 4.06812 22 5C22 5.93188 22 6.39782 21.8478 6.76537C21.6448 7.25542 21.2554 7.64477 20.7654 7.84776C20.3978 8 19.9319 8 19 8H17C16.0681 8 15.6022 8 15.2346 7.84776C14.7446 7.64477 14.3552 7.25542 14.1522 6.76537C14 6.39782 14 5.93188 14 5Z" stroke="currentColor" stroke-width="1.5" />
                    </svg>
                    <span><small className='text-white '>Dashboard</small></span>
                </NavLink>


                <div className='!py-4'>
                    <small className='text-yellow-500 font-bold'>Profile</small>
                </div>
                <NavLink to="/user/profile" className='flex gap-5 items-center ps-3 rounded-sm mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none" className='fill-white'>
                        <path d="M10.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C8.12805 13.9629 11.2057 13.6118 14 14.4281" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="1.5" />
                        <path d="M18.4332 13.8485C18.7685 13.4851 18.9362 13.3035 19.1143 13.1975C19.5442 12.9418 20.0736 12.9339 20.5107 13.1765C20.6918 13.2771 20.8646 13.4537 21.2103 13.8067C21.5559 14.1598 21.7287 14.3364 21.8272 14.5214C22.0647 14.9679 22.0569 15.5087 21.8066 15.9478C21.7029 16.1298 21.5251 16.3011 21.1694 16.6437L16.9378 20.7194C16.2638 21.3686 15.9268 21.6932 15.5056 21.8577C15.0845 22.0222 14.6214 22.0101 13.6954 21.9859L13.5694 21.9826C13.2875 21.9752 13.1466 21.9715 13.0646 21.8785C12.9827 21.7855 12.9939 21.6419 13.0162 21.3548L13.0284 21.1988C13.0914 20.3906 13.1228 19.9865 13.2807 19.6232C13.4385 19.2599 13.7107 18.965 14.2552 18.375L18.4332 13.8485Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                    <span><small className='text-white '>Post Property</small></span>
                </NavLink>


                <NavLink to="/user/document" className='flex gap-5 items-center ps-3 rounded-sm mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                        <path d="M3.5 8.23077V5.46154C3.5 3.54978 5.067 2 7 2C8.933 2 10.5 3.54978 10.5 5.46154L10.5 9.26923C10.5 10.2251 9.7165 11 8.75 11C7.7835 11 7 10.2251 7 9.26923L7 5.46154" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M12.5 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span><small className='text-white '>My Listing</small></span>
                </NavLink>

                {/* <div className='!py-4'>
                    <small className='text-yellow-500 font-bold'>Academics</small>
                </div> */}
                <NavLink to="/user/registration" className='flex gap-5 items-center ps-3 rounded-sm mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                        <path d="M6.51379 2C5.20952 2.12853 4.33158 2.41902 3.6763 3.07554C2.50098 4.25309 2.50098 6.14832 2.50098 9.93879V13.9592C2.50098 17.7497 2.50098 19.6449 3.6763 20.8225C4.85163 22 6.74328 22 10.5266 22H12.533C16.3163 22 18.208 22 19.3833 20.8225C20.45 19.7538 20.5486 18.1056 20.5577 14.9766" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.5261 7.00013L11.5293 10.5001C12.0895 11.6101 12.7924 11.9005 14.5387 12.0001C15.9279 11.9657 16.7344 11.8021 17.4215 11.2041C17.8906 10.7958 18.1031 10.1812 18.2055 9.56889L18.5514 7.50013M21.0592 5.50013V10.5001M8.60078 4.93259C10.1876 3.61641 11.6021 2.90936 14.5348 2.13121C14.8651 2.04356 15.2145 2.04521 15.544 2.13585C18.1405 2.85008 19.5418 3.48376 21.42 4.89366C21.5005 4.95409 21.524 5.06556 21.4676 5.14878C20.8555 6.0512 19.4857 6.78153 16.1282 8.08399C15.4302 8.35477 14.6524 8.3485 13.9566 8.0721C10.3807 6.65155 8.73723 5.89271 8.53769 5.10312C8.52161 5.03948 8.55017 4.97457 8.60078 4.93259Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span><small className='text-white '>Profile</small></span>
                </NavLink>


                <NavLink to="/user/resources" className='flex gap-5 items-center ps-3 rounded-sm mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                        <path d="M16.6127 16.0846C13.9796 17.5677 12.4773 20.6409 12 21.5V8C12.4145 7.25396 13.602 5.11646 15.6317 3.66368C16.4868 3.05167 16.9143 2.74566 17.4572 3.02468C18 3.30371 18 3.91963 18 5.15146V13.9914C18 14.6568 18 14.9895 17.8634 15.2233C17.7267 15.4571 17.3554 15.6663 16.6127 16.0846L16.6127 16.0846Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span><small className='text-white '>Messages</small></span>
                </NavLink>

                

                <NavLink to="/user/help" className='flex gap-5 items-center ps-3 rounded-sm mb-4'>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                        <path d="M17 13.8045C17 13.4588 17 13.286 17.052 13.132C17.2032 12.6844 17.6018 12.5108 18.0011 12.3289C18.45 12.1244 18.6744 12.0222 18.8968 12.0042C19.1493 11.9838 19.4022 12.0382 19.618 12.1593C19.9041 12.3198 20.1036 12.6249 20.3079 12.873C21.2512 14.0188 21.7229 14.5918 21.8955 15.2236C22.0348 15.7334 22.0348 16.2666 21.8955 16.7764C21.6438 17.6979 20.8485 18.4704 20.2598 19.1854C19.9587 19.5511 19.8081 19.734 19.618 19.8407C19.4022 19.9618 19.1493 20.0162 18.8968 19.9958C18.6744 19.9778 18.45 19.8756 18.0011 19.6711C17.6018 19.4892 17.2032 19.3156 17.052 18.868C17 18.714 17 18.5412 17 18.1955V13.8045Z" stroke="currentColor" stroke-width="1.5" />
                        <path d="M9.5 21C10.8807 22.3333 13.1193 22.3333 14.5 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 13.8045C7 13.3693 6.98778 12.9782 6.63591 12.6722C6.50793 12.5609 6.33825 12.4836 5.99891 12.329C5.55001 12.1246 5.32556 12.0224 5.10316 12.0044C4.43591 11.9504 4.07692 12.4058 3.69213 12.8731C2.74875 14.0189 2.27706 14.5918 2.10446 15.2236C1.96518 15.7334 1.96518 16.2666 2.10446 16.7764C2.3562 17.6979 3.15152 18.4702 3.74021 19.1852C4.11129 19.6359 4.46577 20.0472 5.10316 19.9956C5.32556 19.9776 5.55001 19.8754 5.99891 19.6709C6.33825 19.5164 6.50793 19.4391 6.63591 19.3278C6.98778 19.0218 7 18.6307 7 18.1954V13.8045Z" stroke="currentColor" stroke-width="1.5" />
                        <path d="M2 16V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12L22.0001 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span><small className='text-white '>Help</small></span>
                </NavLink>

                <div onClick={handleLogout} className='flex gap-5 items-center ps-3 rounded-sm mb-4 cursor-pointer'>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                        <path d="M2.5 12C2.5 7.52166 2.5 5.28248 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1087C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1087C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
                        <path d="M7.03711 12.0277L14.0127 12.0277M14.0127 12.0277C14.0127 12.5982 11.8575 14.5151 11.8575 14.5151M14.0127 12.0277C14.0127 11.4424 11.8575 9.56334 11.8575 9.56334M17.0371 7.99536V15.9954" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <span><small className='text-white '>Logout</small></span>
                </div>



            </nav >
        </Box>
    )
    
  return (
    
    <>
        <nav className='w-full shadow-md lg:px-10 lg:py-3  fixed top-0 z-10 bg-white py-2 px-5'>
                <div className='flex justify-between items-center'>
                    <div>
                    <MenuIcon onClick={toggleDrawer(true)}></MenuIcon>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                    </div>
                  
                    <div className='flex gap-10 items-center'>
                    <Badge color="primary" variant="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                            <path d="M5.15837 11.491C5.08489 12.887 5.16936 14.373 3.92213 15.3084C3.34164 15.7438 3 16.427 3 17.1527C3 18.1508 3.7818 19 4.8 19H19.2C20.2182 19 21 18.1508 21 17.1527C21 16.427 20.6584 15.7438 20.0779 15.3084C18.8306 14.373 18.9151 12.887 18.8416 11.491C18.6501 7.85223 15.6438 5 12 5C8.35617 5 5.34988 7.85222 5.15837 11.491Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.5 3.125C10.5 3.95343 11.1716 5 12 5C12.8284 5 13.5 3.95343 13.5 3.125C13.5 2.29657 12.8284 2 12 2C11.1716 2 10.5 2.29657 10.5 3.125Z" stroke="currentColor" stroke-width="1.5" />
                            <path d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Badge>
                    <Avatar  />
                    </div>
                </div>
                   
            </nav>
    </>
  )
}

export default ProfileNavbar