import React from 'react';
import './Banner.css';
import NumberCounter from 'number-counter';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const Count = () => {
    return (
        <div className="mx-12 mt-12 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ScrollAnimation animateIn='flipInX'
                    afterAnimatedIn={function afterAnimatedIn(v) {
                        var t = "Animate In finished.\n";
                        t += 'v.onScreen: ' + v.onScreen + '\n';
                        t += 'v.inViewport: ' + v.inViewport;
                    }}>
                    <div className='brand-color bg-black text-center p-8 rounded-lg'>
                        <h1 className="text-4xl"><NumberCounter end={100} delay={1} className="increment" preFix="" postFix="Million+" /></h1>
                        <p className="text-white text-2xl mt-4">Tickets Sold</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='flipInX'
                    afterAnimatedIn={function afterAnimatedIn(v) {
                        var t = "Animate In finished.\n";
                        t += 'v.onScreen: ' + v.onScreen + '\n';
                        t += 'v.inViewport: ' + v.inViewport;
                    }}>
                    <div className='brand-color bg-black text-center p-8 rounded-lg'>
                        <h1 className="text-4xl"><NumberCounter end={300} delay={1} className="increment" preFix="" postFix="+" /></h1>
                        <p className="text-white text-2xl mt-4">Routes</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='flipInX'
                    afterAnimatedIn={function afterAnimatedIn(v) {
                        var t = "Animate In finished.\n";
                        t += 'v.onScreen: ' + v.onScreen + '\n';
                        t += 'v.inViewport: ' + v.inViewport;
                    }}>
                    <div className='brand-color bg-black text-center p-8 rounded-lg'>
                        <h1 className="text-4xl"><NumberCounter end={10} delay={1} className="increment" preFix="" postFix="Million+" /></h1>
                        <p className="text-white text-2xl mt-4">Happy Users</p>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Count;