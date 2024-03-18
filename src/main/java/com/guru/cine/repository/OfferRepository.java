package com.guru.cine.repository;


import com.guru.cine.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OfferRepository extends JpaRepository<Offer, Long> {
    //My Custom Methods
    List<Offer> findByApplicableCity(String city);
    List<Offer> findByApplicableTheatreId(Long theatreId);
    @Query("SELECT o, t.name FROM Offer o JOIN o.theatre t")
    List<Object[]> findAllOffersWithTheatreName();

}


