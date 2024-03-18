package com.guru.cine.controllers;

import com.guru.cine.model.Booking;
import com.guru.cine.service.BookingService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    // Version 1
    @GetMapping("/v1/bookings")
    @ApiOperation("Get all bookings")
    public List<Booking> getAllBookingsV1() {
        return bookingService.getAllBookings();
    }

    @PostMapping("/v1/bookings")
    public Booking createBookingV1(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    // Version 2 (example of a minor change in the API)
    @GetMapping("/v2/bookings")
    public List<Booking> getAllBookingsV2() {
        // Maybe add some additional logic for version 2
        return bookingService.getAllBookings();
    }

    @PostMapping("/v2/bookings")
    public Booking createBookingV2(@RequestBody Booking booking) {
        // Maybe add some additional logic for version 2
        return bookingService.createBooking(booking);
    }

    // Common endpoints for both versions
    @GetMapping("/bookings/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    @PutMapping("/bookings/{id}")
    public Booking updateBooking(@PathVariable Long id, @RequestBody Booking booking) {
        return bookingService.updateBooking(id, booking);
    }

    @DeleteMapping("/bookings/{id}")
    public void deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
    }
}
