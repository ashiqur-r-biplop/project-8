import React from 'react';
import './Banner.css';
import NumberCounter from 'number-counter';

const Count = () => {
    return (
        <div className="mx-12 mt-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className='brand-color bg-black text-center p-8 rounded-lg'>
                    <h1 className="text-4xl"><NumberCounter end={100} delay={1} className="increment" preFix="" postFix="Million+" /></h1>
                    <p className="text-white text-2xl mt-4">Tickets Sold</p>
                </div>
                <div className='brand-color bg-black text-center p-8 rounded-lg'>
                    <h1 className="text-4xl"><NumberCounter end={300} delay={1} className="increment" preFix="" postFix="+" /></h1>
                    <p className="text-white text-2xl mt-4">Routes</p>
                </div>
                <div className='brand-color bg-black text-center p-8 rounded-lg'>
                    <h1 className="text-4xl"><NumberCounter end={10} delay={1} className="increment" preFix="" postFix="Million+" /></h1>
                    <p className="text-white text-2xl mt-4">Happy Users</p>
                </div>
            </div>
        </div>
    );
};

export default Count;