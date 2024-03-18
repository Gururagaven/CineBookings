package com.guru.cine.service;


import com.guru.cine.model.Offer;
import com.guru.cine.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OfferService {
    @Autowired
    private OfferRepository offerRepository;

    public List<Offer> getAllOffers() {
        return offerRepository.findAll();
    }

    public Offer getOfferById(Long id) {
        return offerRepository.findById(id).orElse(null);
    }

    public Offer createOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    public Offer updateOffer(Long id, Offer updatedOffer) {
        return offerRepository.findById(id).map(offer -> {
            offer.setDescription(updatedOffer.getDescription());
            offer.setDiscountPercentage(updatedOffer.getDiscountPercentage());
            offer.setApplicableCity(updatedOffer.getApplicableCity());
            offer.setApplicableTheatreId(updatedOffer.getApplicableTheatreId());
            return offerRepository.save(offer);
        }).orElse(null);
    }

    public void deleteOffer(Long id) {
        offerRepository.deleteById(id);
    }

    public List<Offer> getAllOffersWithTheatreName() {
        List<Object[]> result = offerRepository.findAllOffersWithTheatreName();
        List<Offer> offers = new ArrayList<>();

        for (Object[] objects : result) {
            Offer offer = (Offer) objects[0];
            String theatreName = (String) objects[1];
            offer.setTheatreName(theatreName); // Assuming you have a setter for theatre name in Offer entity
            offers.add(offer);
        }

        return offers;
    }

}

