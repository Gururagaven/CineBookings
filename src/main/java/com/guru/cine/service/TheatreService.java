package com.guru.cine.service;

import com.guru.cine.model.Theatre;
import com.guru.cine.repository.TheatreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class TheatreService {
    @Autowired
    private TheatreRepository theatreRepository;

    public List<Theatre> getAllTheatres() {
        return theatreRepository.findAll();
    }

    public Theatre getTheatreById(Long id) {
        return theatreRepository.findById(id).orElse(null);
    }

    public Theatre createTheatre(Theatre theatre) {
        return theatreRepository.save(theatre);
    }

    public Theatre updateTheatre(Long id, Theatre updatedTheatre) {
        return theatreRepository.findById(id).map(theatre -> {
            theatre.setName(updatedTheatre.getName());
            theatre.setCity(updatedTheatre.getCity());
            theatre.setAddress(updatedTheatre.getAddress());
            return theatreRepository.save(theatre);
        }).orElse(null);
    }

    public void deleteTheatre(Long id) {
        theatreRepository.deleteById(id);
    }

    @Transactional( Transactional.TxType.REQUIRES_NEW)
    public List<Theatre> getAllTheatresWithOffers() {
        List<Theatre> theatres = theatreRepository.findAll();
//        for (Theatre theatre : theatres) {
//            theatre.getOffers().size(); // Initialize offers collection to avoid lazy loading issues
//        }
        return theatres;
    }
}

