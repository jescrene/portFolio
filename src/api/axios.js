import axios from 'axios';

/**
 * The `username` variable stores a string that represents a unique identifier
 * for a user in the system. This identifier is typically used for authentication
 * and authorization purposes, allowing the system to recognize and manage user-specific
 * data and preferences.
 */

const username = 'desarrolloweb_socarras_eddy';
const password = 'zP0IbXj3u4';

/**
 * Asynchronously fetches weather data from the Meteomatics API.
 *
 * @param {string} validdatetime - The valid date and time for the weather data request in ISO 8601 format.
 * @param {string} parameters - The meteorological parameters to request, formatted as a comma-separated string.
 * @param {string} locations - The location coordinates for the weather data, formatted as a comma-separated string of latitude and longitude pairs.
 * @param {string} format - The response format, such as 'json' or 'csv'.
 * @param {object} optionals - Additional optional query parameters to include in the request.
 * @returns {Promise<object>} A promise that resolves to the weather data retrieved from the API.
 * @throws Will throw an error if the request fails.
 */

const fetchWeather = async (
  validdatetime,
  parameters,
  locations,
  format,
  optionals
) => {
  try {
    const response = await axios.get(
      `https://api.meteomatics.com/${validdatetime}/${parameters}/${locations}/${format}`,
      {
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
        params: optionals,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

export default fetchWeather;
