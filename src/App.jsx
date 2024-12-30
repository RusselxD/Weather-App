import Home from "./components/home-page";

import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();
export const CityContext = createContext();

function App() {
    const API_KEY = import.meta.env.VITE_KEY;

    const [data, setData] = useState(null);
    const [coords, setCoords] = useState("");

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

    if (data !== null && coords !== "") {
        return (
            <DataContext.Provider value={data}>
                <CityContext.Provider value={coords}>
                    <Home />
                </CityContext.Provider>
            </DataContext.Provider>
        );
    }
}

export default App;
