import Home from "./components/home-page";

import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();
export const CityContext = createContext();

export const OtherCitiesContext = createContext();
export const ForecastContext = createContext();

function App() {
    const API_KEY = import.meta.env.VITE_KEY;

    const [data, setData] = useState(null);
    const [coords, setCoords] = useState("");
    const [cities, setCities] = useState([]);
    const [forecastData, setForecastData] = useState([]);

    async function getWeatherData(coords) {
        const dataRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`
        );

        const weatherData = await dataRes.json();
        setData(weatherData);
    }

    async function getCityName(coords) {
        const coordsRes = await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=5&appid=${API_KEY}`
        );

        const coordsData = await coordsRes.json();
        setCoords(coordsData[0].name);
    }

    async function getOtherCitiesData() {
        const defaultCities = ["Manila", "London", "New York", "Melbourne"];

        const citiesPromises = defaultCities.map(async (city) => {
            const cityRes = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
                    city
                )}&appid=${API_KEY}&units=metric`
            );
            const parsedRes = await cityRes.json();

            // destructure needed details
            const {
                name,
                main: { temp, temp_max, temp_min },
                weather: [{ icon }],
            } = parsedRes;

            return {
                name: name,
                temp: temp,
                min: temp_min,
                max: temp_max,
                iconCode: icon,
            };
        });

        const citiesData = await Promise.all(citiesPromises);
        setCities(citiesData);
    }

    // This algorithm works by grouping arrays of objects that contains forecast data
    // with their respective days, calculates the average temperature and gets the
    // icon code and index of the day.
    // Then adds the accumulated data for the day to the filteredData array.
    function formatForecastData(forecasts) {
        let filteredData = [];

        let i = 0;
        while (i < forecasts.length) {
            let prevDay = new Date(forecasts[i].dt * 1000).getDay();

            let tempSum = forecasts[i].main.temp;
            let days = 1;

            while (
                i < forecasts.length - 1 &&
                new Date(forecasts[i + 1].dt * 1000).getDay() === prevDay
            ) {
                tempSum += forecasts[i + 1].main.temp;
                days++;
                i++;

                prevDay = new Date(forecasts[i].dt * 1000).getDay();
            }

            filteredData.push({
                condition: forecasts[i].weather[0].description,
                day: prevDay,
                avgTemp: Math.round(tempSum / days),
                iconCode: forecasts[i].weather[0].icon,
            });

            i++;
        }

        return filteredData;
    }

    async function getForecastData(coords) {
        const forecastRes = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`
        );

        const forecastData = await forecastRes.json();
        setForecastData(formatForecastData(forecastData.list));
    }

    function getData(coords) {
        getWeatherData(coords);
        getCityName(coords);
        getOtherCitiesData();
        getForecastData(coords);
    }

    const success = (position) => {
        getData(position.coords);
    };

    const error = () => {
        console.log("Error");
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error);
    }, []);

    if (
        data !== null &&
        coords !== "" &&
        cities.length === 4 &&
        forecastData.length > 0
    ) {
        return (
            <DataContext.Provider value={data}>
                <CityContext.Provider value={coords}>
                    <OtherCitiesContext.Provider value={cities}>
                        <ForecastContext.Provider value={forecastData}>
                            <Home />
                        </ForecastContext.Provider>
                    </OtherCitiesContext.Provider>
                </CityContext.Provider>
            </DataContext.Provider>
        );
    }
}

export default App;
