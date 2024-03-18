package com.guru.cine.controllers;

import com.guru.cine.model.Theatre;
import com.guru.cine.service.TheatreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v2/theatres")
public class TheatreV2Controller {

    @Autowired
    private TheatreService theatreService;

    @GetMapping("/with-offers")
    public ResponseEntity<List<Theatre>> getAllTheatresWithOffers() {
        List<Theatre> theatres = theatreService.getAllTheatresWithOffers();
        return ResponseEntity.ok(theatres);
    }

    // Other CRUD operations for theatres can be added here
}

