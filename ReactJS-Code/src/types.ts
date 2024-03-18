export interface Movie {
    id: number;
    title: string;
    genre: string;
    language: string;
}
const isoDateTime = "2024-03-18T12:00:00"; // Example ISO string
const date = new Date(isoDateTime); // Parse ISO string to Date object

export interface Show {
    theatreName: string;
    movieName: string;
    id: number;
    movieId: number;
    theatreId: number;
    showTime: Date;
}

export interface Theatre {
    id: number;
    name: string;
    city: string;
    address: string;
    offers: Offer[];
}

export interface Offer {
    id: number;
    description: string;
    discountPercentage: number;
    applicableCity: string;
    applicableTheatreId: number;
}

export interface Booking {
    id: number;
    showId: number;
    customerId: number;
    numberOfTickets: number;
    bookingTime: string;
    totalPrice: number;
}
