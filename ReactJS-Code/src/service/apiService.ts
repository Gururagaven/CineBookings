import axios from 'axios';
import { Movie, Theatre, Booking, Offer, Show } from '../types';

const API_BASE_URL = 'http://localhost:8080/api/v1';

export const getMovies = () => axios.get(`${API_BASE_URL}/movies`);
export const createMovie = (movie: Movie) => axios.post(`${API_BASE_URL}/movies`, movie);
export const updateMovie = (movieId: number, movie: Movie) => axios.put(`${API_BASE_URL}/movies/${movieId}`, movie);
export const deleteMovie = (movieId: number) => axios.delete(`${API_BASE_URL}/movies/${movieId}`);

//Theatre
export const getTheatres = () => axios.get<Theatre[]>(`${API_BASE_URL}/theatres`);
export const createTheatre = (theatre: Theatre) => axios.post<Theatre>(`${API_BASE_URL}/theatres`, theatre);
export const updateTheatre = (theatreId: number, theatre: Theatre) =>
    axios.put<Theatre>(`${API_BASE_URL}/theatres/${theatreId}`, theatre);
export const deleteTheatre = (theatreId: number) => axios.delete<void>(`${API_BASE_URL}/theatres/${theatreId}`);

//Offer
export const getOffers = () => axios.get<Offer[]>(`${API_BASE_URL}/offers`);
export const createOffer = (offer: Offer) => axios.post<Offer>(`${API_BASE_URL}/offers`, offer);
export const updateOffer = (offerId: number, offer: Offer) =>
    axios.put<Offer>(`${API_BASE_URL}/offers/${offerId}`, offer);
export const deleteOffer = (offerId: number) => axios.delete<void>(`${API_BASE_URL}/offers/${offerId}`);

//Booking 

export const getBookings = () => axios.get<Booking[]>(`${API_BASE_URL}/bookings`);
export const createBooking = (booking: Booking) => axios.post<Booking>(`${API_BASE_URL}/bookings`, booking);
export const updateBooking = (bookingId: number, booking: Booking) =>
    axios.put<Booking>(`${API_BASE_URL}/bookings/${bookingId}`, booking);
export const deleteBooking = (bookingId: number) => axios.delete<void>(`${API_BASE_URL}/bookings/${bookingId}`);

//Show

export const getShows = () => axios.get<Show[]>(`${API_BASE_URL}/shows`);
export const createShow = (show: Show) => axios.post<Show>(`${API_BASE_URL}/shows`, show);
export const updateShow = (showId: number, show: Show) => axios.put<Show>(`${API_BASE_URL}/shows/${showId}`, show);
export const deleteShow = (showId: number) => axios.delete<void>(`${API_BASE_URL}/shows/${showId}`);
