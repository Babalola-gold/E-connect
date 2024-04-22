import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faMagnifyingGlass, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import bot from '/src/assets/Rectangle 102.png';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import advert from '/src/assets/Advert display section.png';
import vector from '/src/assets/Vector.png';
import cart from '/src/assets/mdi_cart-outline.png';
import culprit from '/src/assets/Rectangle 247.png';
import freezer from '/src/assets/rectangle 1.png';
import cookware from '/src/assets/Rectangle 1 (3).png';
import microwave from '/src/assets/Rectangle (2).png';
import shoe from '/src/assets/Rectangle 16.png';
import gown from '/src/assets/Rectangle 16 (1).png';
import bucket from '/src/assets/Rectangle 16 (2).png';
import cougar from '/src/assets/Rectangle 16 (3).png';
import IT from '/src/assets/Rectangl.png';




const HomePage = () => {

    // const [expanded, setExpanded] = useState({
    //     panel1: false,
    //     panel2: false,
    //     panel3: false,
    //     panel4: false,
    //     panel5: false,
    //     panel6: false,
    //     panel7: false,
    //     panel8: false,
    //     panel9: false,
    //     panel10: false,
    // });

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };


    <AccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon />}
        aria-controls="panel1d-content"
        id="panel1d-header"
    >
        <Typography>Collapsible Group Item #1</Typography>
    </AccordionSummary>




    return (


        < >
            <div >

                <div className='absolute flex w-[1234px] h-[94px] top-[218px] left-[52px]'>
                    <div className='absolute flex w-[1234px] h-[94px] text-white br-[80px] '>
                        <div className='absolute flex w-[1126px] h-[34px] gap-[455px] '>

                        </div>
                    </div>
                </div>

                <div className='find_any '>

                    <div className='any '>

                        <p className='inner_find'>

                            Find Anything In <span className='nig'>Nigeria <FontAwesomeIcon className='text-white' icon={faCaretDown} /></span>
                        </p>
                    </div>



                </div>

                <div className='search_bar'>
                    <div className='rectangle'>

                        <div className='search_button'>

                            {/* <input className='' type="text" placeholder='ddddddddd' /> */}
                            <div className='frame_94'>
                                <p className='frame_93'><input type="text" placeholder='I’m Looking For....' /></p>
                                <div className='frame_5'>
                                    <FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} />
                                    <p className='text_search  '>Search</p>
                                </div>
                            </div>
                        </div >

                    </div>
                </div>

                <div className='other_product'>
                    <div className='world_e'>
                        The world is going <span className='span_e'>e</span> so are we
                    </div>
                    <div className="list_brand" >
                        List of essential Group Brands
                    </div>

                    <div className='frame_223'>
                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>

                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>

                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>

                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>

                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>

                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>

                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>

                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>

                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>

                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>

                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>

                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>

                        <div className='frame_194'>
                            <div className='inner_frame'>
                            </div>
                            <p className='frame_text'>Product</p>
                        </div>
                    </div>

                </div>

                <div className='categories'>

                    <p className='carti'>Categories</p>
                    <br />
                    <div className='inner_carti '>
                        <input className='search_categories' type="text" placeholder='Search Category' />
                        <div className='categories_search'>
                            <p className='search_text'>Search</p>
                        </div>
                    </div>

                    <div className='all_categories'>


                        <div>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon />}
                                    aria-controls="panel1d-content"
                                    id="panel1d-header"
                                >
                                    <Typography><p className='electro'>Health & Beauty</p>
                                        <figure className='fig'>11000</figure></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon />}
                                    aria-controls="panel2d-content"
                                    id="panel2d-header"
                                >
                                    <Typography><Typography><p className='electro'>Mobile Phones & Tablet</p>
                                        <figure className='fig'>1000</figure></Typography></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon />}
                                    aria-controls="panel3d-content"
                                    id="panel3d-header"
                                >
                                    <Typography><p className='electro'>Health & Beauty</p>
                                        <figure className='fig'>11000</figure></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon />}
                                    aria-controls="panel4d-content"
                                    id="panel4d-header"
                                >
                                    <Typography><p className='electro'>Fashion</p>
                                        <figure className='fig'>700</figure></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon />}
                                    aria-controls="panel5d-content"
                                    id="panel5d-header"
                                >
                                    <Typography><p className='electro'>Commercial equipment</p>
                                        <figure className='fig'>700</figure></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon />}
                                    aria-controls="panel6d-content"
                                    id="panel6d-header"
                                >
                                    <Typography><p className='electro'>Home, Furniture & Appliance</p>
                                        <figure className='fig'>30,000</figure></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon />}
                                    aria-controls="panel7d-content"
                                    id="panel7d-header"
                                >
                                    <Typography><p className='electro'>Jobs</p>
                                        <figure className='fig'>700</figure></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon />}
                                    aria-controls="panel8d-content"
                                    id="panel8d-header"
                                >
                                    <Typography><p className='electro'>Property</p>
                                        <figure className='fig'>700</figure></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon />}
                                    aria-controls="panel9d-content"
                                    id="panel9d-header"
                                >
                                    <Typography><p className='electro'>Vehicles</p>
                                        <figure className='fig'>700</figure></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon />}
                                    aria-controls="panel10d-content"
                                    id="panel10d-header"
                                >
                                    <Typography><p className='electro'>Gadget Accessories</p>
                                        <figure className='fig'>700</figure></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>



                            <div className='advert'>
                                <img className='advert' src={advert} alt="" />
                            </div>

                            <div className='post_ad'>

                                <div className='inner_ad'>
                                    <img className='vector' src={vector} alt="" />
                                </div>

                            </div>
                        </div>



                    </div>

                </div>

                <div className='trending'>
                    <div className='text_trend'>
                        Trending Products

                    </div>
                    <br /><br />

                    <div className='inner_trend'>
                        <div className='trend_one'>
                            <div class="card">
                                <img src={freezer} alt="Image" class="card-image" />
                                <div class="card-content">

                                    <div className='w-[92px] h-[32px] '>

                                        <p class="card-text">Freezer</p>
                                        <span className='price'># 50, 000</span>

                                        <div className=' w-[63px] h-[24px] bg-gray-700'>
                                            <img className=' w-[24px] h-[24px]   ' src={cart} alt="" />
                                            <FontAwesomeIcon icon={faShareNodes} />

                                        </div>


                                    </div>


                                </div>
                            </div>
                            <div class="card">
                                <img src={cookware} alt="Image" class="card-image" />
                                <div class="card-content">

                                    <p class="card-text">Cook wares</p>
                                    <span className='price'># 50, 000</span>
                                </div>
                            </div>
                            <div class="card">
                                <img src={microwave} alt="Image" class="card-image" />
                                <div class="card-content">

                                    <p class="card-text">Micro wave</p>
                                    <span className='price'># 50, 000</span>
                                </div>
                            </div>
                        </div>
                        <div className='trend_one'>
                            <div class="card">
                                <img src={shoe} alt="Image" class="card-image" />
                                <div class="card-content">

                                    <p class="card-text">Shoe</p>
                                    <span className='price'># 50, 000</span>
                                </div>
                            </div>
                            <div class="card">
                                <img src={gown} alt="Image" class="card-image" />
                                <div class="card-content">

                                    <p class="card-text">Gown</p>
                                    <span className='price'># 50, 000</span>
                                </div>
                            </div>
                            <div class="card">
                                <img src={bucket} alt="Image" class="card-image" />
                                <div class="card-content">

                                    <p class="card-text">Bucket</p>
                                    <span className='price'># 50, 000</span>
                                </div>
                            </div>
                        </div>
                        <div className='trend_one'>
                            <div class="card">
                                <img src={cougar} alt="Image" class="card-image" />
                                <div class="card-content">

                                    <p class="card-text">Freezer</p>
                                    <span className='price'># 50, 000</span>
                                </div>
                            </div>
                            <div class="card">
                                <img src={cougar} alt="Image" class="card-image" />
                                <div class="card-content">

                                    <p class="card-text">Freezer</p>
                                    <span className='price'># 50, 000</span>
                                </div>
                            </div>
                            <div class="card">
                                <img src={cougar} alt="Image" class="card-image" />
                                <div class="card-content">

                                    <p class="card-text">Freezer</p>
                                    <span className='price'># 50, 000</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='group'>
                    <div className='group-text'>
                        <h3 className='group-h3'>
                            Groups you may like
                        </h3>

                        <p className='group-p'>See more</p>
                    </div>
                    <br /><br />
                    <div className='inner-group'>

                        <div className="card w-[259px] h-[305px] gap-10 rounded-tl-2xl">
                            <img src={IT} alt="Image" class="card-image" />
                            <div className=" w-[203px] h-[39px]">
                                <p className=" w-[133px] h-[17px] font-inter text-24 font-bold leading-29 text-left">
                                    IT News
                                </p>
                                <div className=" w-[203px] h-[12px] gap-[22px] flex">
                                    <p className=" w-[76px] h-[12px] gap-[22px] font-inter text-base font-medium leading-20 text-left">1 Member</p>
                                    <p className='w-[105px] h-[12px] font-inter text-base font-medium leading-[19.36px] text-left'>0 Posts today</p>

                                </div>

                            </div>
                            <div style={{ padding: '10px, 26px, 10px, 26px' }} className='w-[93px] h-[35px] px-[26px] py-10 gap-10 rounded-tl-5 bg-[#59AEFF]
  '>
                                <button className='w-[41px] h-[15px] font-bold text-[16px] leading-[24.2px] text-white '>Join</button>

                            </div>
                        </div>
                        <div class="card w-[259px] h-[305px] gap-10 rounded-tl-2xl">
                            <img className='w-[259px] h-[184px] ' src={IT} alt="Image" class="card-image" />
                            <div className=" w-[203px] h-[39px]">
                                <p className=" w-[133px] h-[17px] font-inter text-24 font-bold leading-29 text-left">
                                    Tech group
                                </p>
                                <div className=" w-[203px] h-[12px] gap-[22px] flex">
                                    <p className=" w-[76px] h-[12px] gap-[22px] font-inter text-base font-medium leading-20 text-left">1 Member</p>
                                    <p className='w-[105px] h-[12px] font-inter text-base font-medium leading-[19.36px] text-left'>0 Posts today</p>

                                </div>
                                
                            </div>

                            <div style={{ padding: '10px, 26px, 10px, 26px' }} className='w-[93px] h-[35px] px-[26px] py-10 gap-10 rounded-tl-5 bg-[#59AEFF]
  '>

                            </div>
                            
                        </div>
                        <div class="card w-[259px] h-[305px] gap-10 rounded-tl-2xl">
                            <img src={IT} alt="Image" class="card-image" />
                            <div className=" w-[203px] h-[39px]">
                                <p className=" w-[133px] h-[17px] font-inter text-24 font-bold leading-29 text-left">
                                    Group
                                </p>
                                <div className=" w-[203px] h-[12px] gap-[22px] flex">
                                    <p className=" w-[76px] h-[12px] gap-[22px] font-inter text-base font-medium leading-20 text-left">1 Member</p>
                                    <p className='w-[105px] h-[12px] font-inter text-base font-medium leading-[19.36px] text-left'>0 Posts today</p>

                                </div>
                            </div>
                        </div>
                        <div class="card w-[259px] h-[305px] gap-10 rounded-tl-2xl">
                            <img src={IT} alt="Image" class="card-image" />
                            <div className=" w-[203px] h-[39px]">
                                <p className=" w-[133px] h-[17px] font-inter text-24 font-bold leading-29 text-left">
                                    Essential staff
                                </p>
                                <div className=" w-[203px] h-[12px] gap-[22px] flex">
                                    <p className=" w-[76px] h-[12px] gap-[22px] font-inter text-base font-medium leading-20 text-left">1 Member</p>
                                    <p className='w-[105px] h-[12px] font-inter text-base font-medium leading-[19.36px] text-left'>0 Posts today</p>

                                </div>
                            </div>
                        </div>
                        {/* <div class="card w-[259px] h-[305px] gap-10 rounded-tl-2xl">
                            <img src={IT} alt="Image" class="card-image" />
                            <div className=" w-[203px] h-[39px]">
                                <p className=" w-[133px] h-[17px] font-inter text-24 font-bold leading-29 text-left">
                                    Health group
                                </p>
                                <div className=" w-[203px] h-[12px] gap-[22px] flex">
                                    <p className=" w-[76px] h-[12px] gap-[22px] font-inter text-base font-medium leading-20 text-left">1 Member</p>
                                    <p className='w-[105px] h-[12px] font-inter text-base font-medium leading-[19.36px] text-left'>0 Posts today</p>

                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className='offender'>
                    <div className='inner-offender'>
                        <button className='offender-button'>
                            <p className='offender-text'>Click Here</p>
                        </button>

                        <p className='culprit-text'>Here are some reported culprits consectetur. Ullamcorper bibendum diam sapien faucibus. Dolor in nibh malesuada ph.</p>

                        <img className='culprit-img' src={culprit} alt="" />
                    </div>
                </div>



            </div>
        </>
    )
}

export default HomePage