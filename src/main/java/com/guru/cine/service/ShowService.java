package com.guru.cine.service;


import com.guru.cine.model.Show;
import com.guru.cine.repository.ShowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowService {
    @Autowired
    private ShowRepository showRepository;

    public List<Show> getAllShows() {
        return showRepository.findAll();
    }

    public Show getShowById(Long id) {
        return showRepository.findById(id).orElse(null);
    }

    public Show createShow(Show show) {
        return showRepository.save(show);
    }

    public Show updateShow(Long id, Show updatedShow) {
        return showRepository.findById(id).map(show -> {
            show.setMovieId(updatedShow.getMovieId());
            show.setTheatreId(updatedShow.getTheatreId());
            show.setShowTime(updatedShow.getShowTime());
            return showRepository.save(show);
        }).orElse(null);
    }

    public void deleteShow(Long id) {
        showRepository.deleteById(id);
    }
}

