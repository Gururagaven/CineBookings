import React, { useState, useEffect } from 'react';
import { getShows, createShow, updateShow, deleteShow } from '../service/apiService';
import { Show, Movie, Theatre } from '../types';
import DateComponent from './DateComponent'; // Import the DateComponent

function ShowComponent() {
    const [shows, setShows] = useState<Show[]>([]);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [theatres, setTheatres] = useState<Theatre[]>([]);
    const [newShow, setNewShow] = useState<Show>({
        id: 0,
        movieId: 0,
        theatreId: 0,
        showTime: new Date(),
        theatreName: '',
        movieName: ''
    });

    useEffect(() => {
        fetchShows();
        fetchMovies();
        fetchTheatres();
    }, []);

    const fetchShows = async () => {
        const response = await getShows();
        setShows(response.data);
    };

    const fetchMovies = async () => {
        // Fetch movies here
    };

    const fetchTheatres = async () => {
        // Fetch theatres here
    };

    const handleCreateShow = async () => {
        await createShow({
            ...newShow,
            movieId: newShow.movieId,
            theatreId: newShow.theatreId,
        });
        fetchShows();
        setNewShow({
            id: 0,
            movieId: 0,
            theatreId: 0,
            showTime: new Date(),
            theatreName: '',
            movieName: ''
        });
    };

    const handleUpdateShow = async (showId: number, updatedShow: Show) => {
        await updateShow(showId, updatedShow);
        fetchShows();
        setNewShow({
            id: 0,
            movieId: 0,
            theatreId: 0,
            showTime: new Date(),
            theatreName: '',
            movieName: ''
        });
    };

    const handleDeleteShow = async (showId: number) => {
        await deleteShow(showId);
        fetchShows();
    };

    const handleEditShow = (show: Show) => {
        setNewShow(show);
    };

    return (
        <div>
            <h2>Shows</h2>
            <ul>
                {shows.map((show) => (
                    <li key={show.id}>
                        Movie: {show.movieName} - Theatre: {show.theatreName} - Show Time: {show.showTime instanceof Date ? new Date(show.showTime).toISOString().slice(0, 16).replace("T", " ") : "Invalid Date"}
                        <button onClick={() => handleDeleteShow(show.id)}>Delete</button>
                        <button onClick={() => handleEditShow(show)}>Update</button>
                    </li>
                ))}

            </ul>
            <h3>Add/Update Show</h3>
            <select
                value={newShow.movieId}
                onChange={(e) => setNewShow({ ...newShow, movieId: parseInt(e.target.value) })}
            >
                <option value={0}>Select Movie</option>
                {movies.map((movie) => (
                    <option key={movie.id} value={movie.id}>{movie.title}</option>
                ))}
            </select>
            <select
                value={newShow.theatreId}
                onChange={(e) => setNewShow({ ...newShow, theatreId: parseInt(e.target.value) })}
            >
                <option value={0}>Select Theatre</option>
                {theatres.map((theatre) => (
                    <option key={theatre.id} value={theatre.id}>{theatre.name}</option>
                ))}
            </select>
            <input
                type="time"
                value={newShow.showTime ? newShow.showTime.toISOString().slice(0, 5) : ''}
                onChange={(e) => setNewShow({ ...newShow, showTime: new Date(`1970-01-01T${e.target.value}:00.000Z`) })}
            />
            <button onClick={handleCreateShow}>Add Show</button>
        </div>
    );
}

export default ShowComponent;