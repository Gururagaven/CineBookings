package com.guru.cine.service;

import com.guru.cine.model.Booking;
import com.guru.cine.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Long id, Booking updatedBooking) {
        return bookingRepository.findById(id).map(booking -> {
            booking.setShowId(updatedBooking.getShowId());
            booking.setCustomerId(updatedBooking.getCustomerId());
            booking.setNumberOfTickets(updatedBooking.getNumberOfTickets());
            booking.setTotalPrice(updatedBooking.getTotalPrice());
            return bookingRepository.save(booking);
        }).orElse(null);
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}
