import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieComponent from './components/MovieComponent';
import TheatreComponent from './components/TheatreComponent';
import OfferComponent from './components/OfferComponent';
import ShowComponent from './components/ShowComponent';
import BookingComponent from './components/BookingComponent';



function App() {
  return (
    <div className="App">
      <MovieComponent />
      <TheatreComponent />
      <OfferComponent />
      <ShowComponent />
      <BookingComponent />

    </div>
  );
}

export default App;
