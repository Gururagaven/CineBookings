package com.guru.cine.model;

import lombok.Data;

@Data
public class CreateOrUpdateRequest {
    private Theatre theatre;
    private Offer offer;
    private Movie movie;
    private Show show;
}
