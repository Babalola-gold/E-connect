import React, { useState } from 'react'
import freezer from '/src/assets/rectangle 1.png';
import cookware from '/src/assets/Rectangle 1 (3).png';
import microwave from '/src/assets/Rectangle (2).png';
import shoe from '/src/assets/Rectangle 16.png';
import gown from '/src/assets/Rectangle 16 (1).png';
import bucket from '/src/assets/Rectangle 16 (2).png';
import cougar from '/src/assets/Rectangle 16 (3).png';
import cart2 from '/src/assets/cart2.png';
import {faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cart = () => {

    const [value, setValue] = useState(50);

    const handleRangeChange = (event) => {
        setValue(event.target.value);
    };


    return (
        <>
            <div className='cart'>
                <div className='cart2'>
                    <p className='cart-text'>Cart</p>
                </div>
            </div>

            <div className=' w-[] '>
                <div className='text_trend'>
                    Trending Products

                </div>
                <br /><br />

                <div className='inner_trend'>
                    <div className='trend_one'>
                        <div class="card">
                            <img className='w-[259px] h-[205px] rounded ' src={freezer} alt="Image" class="card-image" />


                            <div class="card-content my-3">


                                <div className='w-[92px] h-[32px] '>

                                    <p class="card-text">Freezer</p>
                                    <span className='price'># 50, 000</span>


                                </div>

                                <div className='flex w-[63px] h-[24px] gap-[15px] '>
                                    <img className=' w-[24px] h-[24px] ' src={cart2} alt="" />
                                    <FontAwesomeIcon className=' w-[18px] h-[20px] top-[2px] left-[3px] ' icon={faShareNodes} />

                                </div>


                            </div>

                            <div className='input_range'>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={value}
                                    onChange={handleRangeChange}
                                />

                            </div>


                        </div>
                        <div class="card">
                            <img className='w-[259px] h-[205px] rounded ' src={cookware} alt="Image" class="card-image" />
                            <div class="card-content my-3">


                                <div className='w-[92px] h-[32px] '>

                                    <p class="card-text">Core Ware</p>
                                    <span className='price'># 50, 000</span>


                                </div>

                                <div className='flex w-[63px] h-[24px] gap-[15px] '>
                                    <img className=' w-[24px] h-[24px] ' src={cart2} alt="" />
                                    <FontAwesomeIcon className=' w-[18px] h-[20px] top-[2px] left-[3px] ' icon={faShareNodes} />

                                </div>


                            </div>

                            <div className='input_range'>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={value}
                                    onChange={handleRangeChange}
                                />

                            </div>
                        </div>
                        <div class="card">
                            <img className='w-[259px] h-[205px] rounded ' src={microwave} alt="Image" class="card-image" />
                            <div class="card-content my-3">


                                <div className='w-[92px] h-[32px] '>

                                    <p class="card-text">Micro Wave</p>
                                    <span className='price'># 50, 000</span>


                                </div>

                                <div className='flex w-[63px] h-[24px] gap-[15px] '>
                                    <img className=' w-[24px] h-[24px] ' src={cart2} alt="" />
                                    <FontAwesomeIcon className=' w-[18px] h-[20px] top-[2px] left-[3px] ' icon={faShareNodes} />

                                </div>


                            </div>
                            <div className='input_range'>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={value}
                                    onChange={handleRangeChange}
                                />

                            </div>
                        </div>
                    </div>
                    <div className='trend_one my-5'>
                        <div class="card">
                            <img className='w-[259px] h-[205px] rounded ' src={shoe} alt="Image" class="card-image" />
                            <div class="card-content my-3">


                                <div className='w-[92px] h-[32px] '>

                                    <p class="card-text">Shoe</p>
                                    <span className='price'># 50, 000</span>


                                </div>

                                <div className='flex w-[63px] h-[24px] gap-[15px] '>
                                    <img className=' w-[24px] h-[24px] ' src={cart2} alt="" />
                                    <FontAwesomeIcon className=' w-[18px] h-[20px] top-[2px] left-[3px] ' icon={faShareNodes} />

                                </div>


                            </div>
                        </div>
                        <div class="card">
                            <img className='w-[259px] h-[205px] rounded ' src={gown} alt="Image" class="card-image" />
                            <div class="card-content my-3">


                                <div className='w-[92px] h-[32px] '>

                                    <p class="card-text">Gown</p>
                                    <span className='price'># 50, 000</span>


                                </div>

                                <div className='flex w-[63px] h-[24px] gap-[15px] '>
                                    <img className=' w-[24px] h-[24px] ' src={cart2} alt="" />
                                    <FontAwesomeIcon className=' w-[18px] h-[20px] top-[2px] left-[3px] ' icon={faShareNodes} />

                                </div>


                            </div>
                        </div>
                        <div class="card">
                            <img className='w-[259px] h-[205px] rounded ' src={bucket} alt="Image" class="card-image" />
                            <div class="card-content my-3">


                                <div className='w-[92px] h-[32px] '>

                                    <p class="card-text">Bucket</p>
                                    <span className='price'># 50, 000</span>


                                </div>

                                <div className='flex w-[63px] h-[24px] gap-[15px] '>
                                    <img className=' w-[24px] h-[24px] ' src={cart2} alt="" />
                                    <FontAwesomeIcon className=' w-[18px] h-[20px] top-[2px] left-[3px] ' icon={faShareNodes} />

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='trend_one'>
                        <div class="card">
                            <img className='w-[259px] h-[205px] rounded ' src={cougar} alt="Image" class="card-image" />
                            <div class="card-content my-3">


                                <div className='w-[92px] h-[32px] '>

                                    <p class="card-text">Freezer</p>
                                    <span className='price'># 50, 000</span>


                                </div>

                                <div className='flex w-[63px] h-[24px] gap-[15px] '>
                                    <img className=' w-[24px] h-[24px] ' src={cart2} alt="" />
                                    <FontAwesomeIcon className=' w-[18px] h-[20px] top-[2px] left-[3px] ' icon={faShareNodes} />

                                </div>


                            </div>
                        </div>
                        <div class="card">
                            <img className='w-[259px] h-[205px] rounded ' src={cougar} alt="Image" class="card-image" />
                            <div class="card-content my-3">


                                <div className='w-[92px] h-[32px] '>

                                    <p class="card-text">Freezer</p>
                                    <span className='price'># 50, 000</span>


                                </div>

                                <div className='flex w-[63px] h-[24px] gap-[15px] '>
                                    <img className=' w-[24px] h-[24px] ' src={cart2} alt="" />
                                    <FontAwesomeIcon className=' w-[18px] h-[20px] top-[2px] left-[3px] ' icon={faShareNodes} />

                                </div>


                            </div>
                        </div>
                        <div class="card">
                            <img className='w-[259px] h-[205px] rounded ' src={cougar} alt="Image" class="card-image" />
                            <div class="card-content my-3">


                                <div className='w-[92px] h-[32px] '>

                                    <p class="card-text">Freezer</p>
                                    <span className='price'># 50, 000</span>


                                </div>

                                <div className='flex w-[63px] h-[24px] gap-[15px] '>
                                    <img className=' w-[24px] h-[24px] ' src={cart2} alt="" />
                                    <FontAwesomeIcon className=' w-[18px] h-[20px] top-[2px] left-[3px] ' icon={faShareNodes} />

                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart