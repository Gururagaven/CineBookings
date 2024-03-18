package com.guru.cine.controllers;

import com.guru.cine.model.CreateOrUpdateRequest;
import com.guru.cine.service.CineBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class CineBookingController {

    @Autowired
    private CineBookingService cineBookingService;

    @PostMapping("/create-or-update")
    public ResponseEntity<String> createOrUpdateEntities(@RequestBody CreateOrUpdateRequest request) {
        cineBookingService.createOrUpdateEntities(request);
        return ResponseEntity.ok("Entities created/updated successfully");
    }
}

