package com.guru.cine.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private double discountPercentage;
    private String applicableCity;
    private Long applicableTheatreId;
    private String theatreName;

    @ManyToOne(optional = true)
    @JoinColumn(name = "applicableTheatreId", referencedColumnName = "id", insertable = false, updatable = false)
    private Theatre theatre;

    public Offer(Long id, String description, String theatreName) {
    }

    public Offer() {

    }
}
