import React from 'react';
import { GlobalRouter } from './routes/GlobalRouter';
import { ThemeProvider } from './context/ThemeContext';
import { ItineraryFormProvider } from './context/ItineraryFormContext';
import { BookingProvider } from './context/BookingContext';
import './App.css';

function App() {

  return (
    <ThemeProvider>
      <ItineraryFormProvider>
        <BookingProvider>
          <div className='App'>
            <GlobalRouter />
          </div>
        </BookingProvider>
      </ItineraryFormProvider>
    </ThemeProvider>
  );
}

export default App;