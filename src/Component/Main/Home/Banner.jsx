import React from 'react';
import './Banner.css'
import Typewriter from 'typewriter-effect';


const Banner = () => {
    return (
        <div className="banner-content text-center text-5xl font-bold">
            <div className="pt-20">
                <div>
                    <h1 className='text-yellow-200'>Welcome </h1>
                    <h1 className='text-white mt-2'>To</h1>

                    <h1 className='brand-color mt-6'>
                        <Typewriter
                            options={{
                                strings: ['Dhaka Bus Ticket'],
                                autoStart: true,
                                loop: true,
                            }} />
                    </h1>
                    <p className='text-white text-xl mt-8'>A largest online safe ticket destination where</p>
                    <p className='text-white text-xl font-bold'>you can book ticket easily</p>
                    <button className="btn brand-btn">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;