
import axios from 'axios';

const API_WEATHER_KEY = '';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_WEATHER_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city}`;

    const request = axios.get(url);
    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}