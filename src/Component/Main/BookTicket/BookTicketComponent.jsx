import React from 'react';
import SeatSelection from './SeatSelection';

const BookTicketComponent = () => {
    return (
        <div className="grid md:grid-cols-2 mx-auto min-width-[1200px]">
            <h2>Hello</h2>
            <SeatSelection></SeatSelection>
        </div>
    );
};

export default BookTicketComponent;