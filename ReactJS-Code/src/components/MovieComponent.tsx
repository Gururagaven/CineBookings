import React, { useState, useEffect } from 'react';
import { getMovies, createMovie, updateMovie, deleteMovie } from '../service/apiService';
import { Movie } from '../types';

function MovieComponent() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [newMovie, setNewMovie] = useState<Movie>({ id: 0, title: '', genre: '', language: '' });

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const response = await getMovies();
        setMovies(response.data);
    };

    const handleCreateMovie = async () => {
        await createMovie(newMovie);
        fetchMovies();
        setNewMovie({ id: 0, title: '', genre: '', language: '' });
    };

    const handleUpdateMovie = async (movieId: number, updatedMovie: Movie) => {
        await updateMovie(movieId, updatedMovie);
        fetchMovies();
        setNewMovie({ id: 0, title: '', genre: '', language: '' });
    };

    const handleDeleteMovie = async (movieId: number) => {
        await deleteMovie(movieId);
        fetchMovies();
    };

    const handleEditMovie = (movie: Movie) => {
        setNewMovie(movie);
    };

    return (
        <div>
            <h2>Movies</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        {movie.title} - {movie.genre} - {movie.language}
                        <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
                        <button onClick={() => handleEditMovie(movie)}>Update</button>
                    </li>
                ))}
            </ul>
            <h3>Add/Update Movie</h3>
            <input
                type="text"
                placeholder="Title"
                value={newMovie.title}
                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Genre"
                value={newMovie.genre}
                onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
            />
            <input
                type="text"
                placeholder="Language"
                value={newMovie.language}
                onChange={(e) => setNewMovie({ ...newMovie, language: e.target.value })}
            />
            <button onClick={handleCreateMovie}>Add Movie</button>
        </div>
    );
}

export default MovieComponent;
