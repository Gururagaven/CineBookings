import React, { useState, useEffect } from 'react';
import { getOffers, createOffer, updateOffer, deleteOffer, getTheatres } from '../service/apiService';
import { Offer, Theatre } from '../types';

function OfferComponent() {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [theatres, setTheatres] = useState<Theatre[]>([]);
    const [newOffer, setNewOffer] = useState<Offer>({ id: 0, description: '', discountPercentage: 0, applicableCity: '', applicableTheatreId: 0 });

    useEffect(() => {
        fetchOffers();
        fetchTheatres();
    }, []);

    const fetchOffers = async () => {
        const response = await getOffers();
        setOffers(response.data);
    };

    const fetchTheatres = async () => {
        const response = await getTheatres(); // Assuming getTheatres is a function that fetches theatres
        setTheatres(response.data);
    };

    const handleCreateOffer = async () => {
        await createOffer(newOffer);
        fetchOffers();
        setNewOffer({ id: 0, description: '', discountPercentage: 0, applicableCity: '', applicableTheatreId: 0 });
    };

    const handleUpdateOffer = async (offerId: number, updatedOffer: Offer) => {
        await updateOffer(offerId, updatedOffer);
        fetchOffers();
        setNewOffer({ id: 0, description: '', discountPercentage: 0, applicableCity: '', applicableTheatreId: 0 });
    };

    const handleDeleteOffer = async (offerId: number) => {
        await deleteOffer(offerId);
        fetchOffers();
    };

    const handleEditOffer = (offer: Offer) => {
        setNewOffer(offer);
    };

    return (
        <div>
            <h2>Offers</h2>
            <ul>
                {offers.map((offer) => (
                    <li key={offer.id}>
                        {offer.description} - {offer.discountPercentage}%
                        <button onClick={() => handleDeleteOffer(offer.id)}>Delete</button>
                        <button onClick={() => handleEditOffer(offer)}>Update</button>
                    </li>
                ))}
            </ul>
            <h3>Add/Update Offer</h3>
            <input
                type="text"
                placeholder="Name"
                value={newOffer.description}
                onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
            />
            <input
                type="number"
                placeholder="Discount"
                value={newOffer.discountPercentage}
                onChange={(e) => setNewOffer({ ...newOffer, discountPercentage: parseInt(e.target.value) })}
            />
            <select
                value={newOffer.applicableTheatreId}
                onChange={(e) => setNewOffer({ ...newOffer, applicableTheatreId: parseInt(e.target.value) })}
            >
                <option value={0}>Select Theatre</option>
                {theatres.map((theatre) => (
                    <option key={theatre.id} value={theatre.id}>{theatre.name}</option>
                ))}
            </select>
            <button onClick={handleCreateOffer}>Add Offer</button>
        </div>
    );
}

export default OfferComponent;
