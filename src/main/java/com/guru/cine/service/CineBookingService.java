package com.guru.cine.service;

import com.guru.cine.model.*;
import com.guru.cine.repository.MovieRepository;
import com.guru.cine.repository.OfferRepository;
import com.guru.cine.repository.ShowRepository;
import com.guru.cine.repository.TheatreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class CineBookingService {

    @Autowired
    private TheatreRepository theatreRepository;

    @Autowired
    private OfferRepository offerRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private ShowRepository showRepository;

    @Transactional
    public void createOrUpdateEntities(CreateOrUpdateRequest request) {
        // Create or update theatre
        Theatre theatre = new Theatre();
        theatre.setName(request.getTheatre().getName());
        // Set other theatre fields
        theatreRepository.save(theatre);

        // Create or update offer
        Offer offer = new Offer();
        offer.getId();
        offer.getDescription();
        offer.getTheatre().getId();

        // Set other offer fields
        offerRepository.save(offer);

        // Create or update movie
        Movie movie = new Movie();
        movie.setTitle(request.getMovie().getTitle());
        // Set other movie fields
        movieRepository.save(movie);

        // Create or update show
        Show show = new Show();
        show.setShowTime(request.getShow().getShowTime());
        // Set other show fields
        showRepository.save(show);
    }
}
