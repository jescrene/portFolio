import React, {useState} from 'react';
import fetchWeather from '../api/axios';
import {
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';


/**
 * The `Weather` component allows users to fetch and display weather information
 * for a specified city. It renders a text field for city input and a button to
 * initiate the weather data fetch. Once data is retrieved, it is displayed
 * in a dialog box.
 *
 * State variables:
 * - city: Holds the value of the city input by the user.
 * - weather: Stores the weather data fetched for the specified city.
 * - open: Controls the visibility of the dialog box displaying weather information.
 * - error: Holds error messages to be displayed to the user in case of failed data retrieval.
 *
 * Methods:
 * - handleFetchWeather: Asynchronously fetches weather data based on the city input and updates state accordingly.
 * - handleClose: Closes the weather information dialog box.
 */

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const handleFetchWeather = async () => {
    try {
      setError('');
      const validatetime = '2024-09-15T00:00:00Z';
      const parameters = 't_2m:C';
      const locations = city;
      const format = 'json';
      const optionals = {};

      const weatherData = await fetchWeather(
        validatetime,
        parameters,
        locations,
        format,
        optionals
      );

      console.log(`Fetched weather data:`, weatherData);

      if (!weatherData || !weatherData.data || weatherData.data.length === 0) {
        setError('No se encontraron datos para la ubicación especificada.');
        return;
      }

      setWeather(weatherData.data[0]); // Ajusta según la estructura real de la respuesta
      setOpen(true);
    } catch (error) {
      setError(
        'No se pudo recuperar los datos del clima. Por favor, inténtelo de nuevo.'
      );
      console.error('Error fetching weather:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Clima
      </Typography>
      <TextField
        label="Ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{marginBottom: 20}}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleFetchWeather}>
        Obtener Clima
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="weather-dialog-title"
        aria-describedby="weather-dialog-description"
      >
        <DialogTitle id="weather-dialog-title">Clima en {city}</DialogTitle>
        <DialogContent>
          <DialogContentText id="weather-dialog-description">
            {weather ? (
              <>
                <Typography variant="body1">
                  Temperatura: {weather.temperature_2m}°C
                </Typography>
                <Typography variant="body1">
                  Condición: {weather.condition}
                </Typography>
              </>
            ) : (
              <Typography variant="body1">
                No se encontraron datos para "{city}".
              </Typography>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Weather;
