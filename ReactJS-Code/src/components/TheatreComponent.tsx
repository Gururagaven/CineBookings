import React, { useState, useEffect } from 'react';
import { getTheatres, createTheatre, updateTheatre, deleteTheatre } from '../service/apiService';
import { Theatre } from '../types';

function TheatreComponent() {
    const [theatres, setTheatres] = useState<Theatre[]>([]);
    const [newTheatre, setNewTheatre] = useState<Theatre>({ id: 0, name: '', city: '', address: '', offers: [] });

    useEffect(() => {
        fetchTheatres();
    }, []);

    const fetchTheatres = async () => {
        const response = await getTheatres();
        setTheatres(response.data);
    };

    const handleCreateTheatre = async () => {
        await createTheatre(newTheatre);
        fetchTheatres();
        setNewTheatre({ id: 0, name: '', city: '', address: '', offers: [] });
    };

    const handleUpdateTheatre = async (theatreId: number, updatedTheatre: Theatre) => {
        await updateTheatre(theatreId, updatedTheatre);
        fetchTheatres();
        setNewTheatre({ id: 0, name: '', city: '', address: '', offers: [] });
    };

    const handleDeleteTheatre = async (theatreId: number) => {
        await deleteTheatre(theatreId);
        fetchTheatres();
    };

    const handleEditTheatre = (theatre: Theatre) => {
        setNewTheatre(theatre);
    };

    return (
        <div>
            <h2>Theatres</h2>
            <ul>
                {theatres.map((theatre) => (
                    <li key={theatre.id}>
                        {theatre.name} - {theatre.city}
                        <button onClick={() => handleDeleteTheatre(theatre.id)}>Delete</button>
                        <button onClick={() => handleEditTheatre(theatre)}>Update</button>
                    </li>
                ))}
            </ul>
            <h3>Add/Update Theatre</h3>
            <input
                type="text"
                placeholder="Name"
                value={newTheatre.name}
                onChange={(e) => setNewTheatre({ ...newTheatre, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="City"
                value={newTheatre.city}
                onChange={(e) => setNewTheatre({ ...newTheatre, city: e.target.value })}
            />
            <input
                type="text"
                placeholder="Address"
                value={newTheatre.address}
                onChange={(e) => setNewTheatre({ ...newTheatre, address: e.target.value })}
            />
            <button onClick={handleCreateTheatre}>Add Theatre</button>
        </div>
    );
}

export default TheatreComponent;
