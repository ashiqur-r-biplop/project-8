import React from 'react';
import SeatSelection from './SeatSelection';
import BookTicket from '../../../Pages/Main/BookTicket/BookTicket';

const BookTicketComponent = () => {
    return (
        <div className="grid md:grid-cols-2 mx-auto min-width-[1200px]">
            <BookTicket></BookTicket>
            <SeatSelection></SeatSelection>
        </div>
    );
};

export default BookTicketComponent;