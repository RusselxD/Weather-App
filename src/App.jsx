import Home from "./components/home-page";

import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();
export const CityContext = createContext();

export const OtherCitiesContext = createContext();

function App() {
    const API_KEY = import.meta.env.VITE_KEY;

    const [data, setData] = useState(null);
    const [coords, setCoords] = useState("");
    const [cities, setCities] = useState([]);

    async function getData(coords) {
        const dataRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`
        );

        const weatherData = await dataRes.json();
        setData(weatherData);

        const coordsRes = await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=5&appid=${API_KEY}`
        );

        const coordsData = await coordsRes.json();
        setCoords(coordsData[0].name);

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

    const success = (position) => {
        getData(position.coords);
    };

    const error = () => {
        console.log("Error");
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error);
    }, []);

    if (data !== null && coords !== "" && cities.length === 4) {
        return (
            <DataContext.Provider value={data}>
                <CityContext.Provider value={coords}>
                    <OtherCitiesContext.Provider value={cities}>
                        <Home />
                    </OtherCitiesContext.Provider>
                </CityContext.Provider>
            </DataContext.Provider>
        );
    }
}

export default App;
