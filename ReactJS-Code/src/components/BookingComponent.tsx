import React, { useState, useEffect } from 'react';
import { getBookings, createBooking, updateBooking, deleteBooking } from '../service/apiService';
import { Booking } from '../types';

function BookingComponent() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [newBooking, setNewBooking] = useState<Booking>({
        id: 0,
        showId: 0,
        customerId: 0,
        numberOfTickets: 0,
        bookingTime: '',
        totalPrice: 0,
    });

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        const response = await getBookings();
        setBookings(response.data);
    };

    const handleCreateBooking = async () => {
        await createBooking(newBooking);
        fetchBookings();
        setNewBooking({
            id: 0,
            showId: 0,
            customerId: 0,
            numberOfTickets: 0,
            bookingTime: '',
            totalPrice: 0,
        });
    };

    const handleUpdateBooking = async (bookingId: number, updatedBooking: Booking) => {
        await updateBooking(bookingId, updatedBooking);
        fetchBookings();
        setNewBooking({
            id: 0,
            showId: 0,
            customerId: 0,
            numberOfTickets: 0,
            bookingTime: '',
            totalPrice: 0,
        });
    };

    const handleDeleteBooking = async (bookingId: number) => {
        await deleteBooking(bookingId);
        fetchBookings();
    };

    const handleEditBooking = (booking: Booking) => {
        setNewBooking(booking);
    };

    return (
        <div>
            <h2>Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        Show ID: {booking.showId} - Customer ID: {booking.customerId} - Number of Tickets: {booking.numberOfTickets} - Booking Time: {booking.bookingTime} - Total Price: {booking.totalPrice}
                        <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
                        <button onClick={() => handleEditBooking(booking)}>Update</button>
                    </li>
                ))}
            </ul>
            <h3>Add/Update Booking</h3>
            <input
                type="number"
                placeholder="Show ID"
                value={newBooking.showId}
                onChange={(e) => setNewBooking({ ...newBooking, showId: parseInt(e.target.value) })}
            />
            <input
                type="number"
                placeholder="Customer ID"
                value={newBooking.customerId}
                onChange={(e) => setNewBooking({ ...newBooking, customerId: parseInt(e.target.value) })}
            />
            <input
                type="number"
                placeholder="Number of Tickets"
                value={newBooking.numberOfTickets}
                onChange={(e) => setNewBooking({ ...newBooking, numberOfTickets: parseInt(e.target.value) })}
            />
            <input
                type="text"
                placeholder="Booking Time"
                value={newBooking.bookingTime}
                onChange={(e) => setNewBooking({ ...newBooking, bookingTime: e.target.value })}
            />
            <input
                type="number"
                placeholder="Total Price"
                value={newBooking.totalPrice}
                onChange={(e) => setNewBooking({ ...newBooking, totalPrice: parseInt(e.target.value) })}
            />
            <button onClick={handleCreateBooking}>Add Booking</button>
        </div>
    );
}

export default BookingComponent;
