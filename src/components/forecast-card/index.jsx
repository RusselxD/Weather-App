import SunriseSunsetCard from "./SunriseSunsetCard";
import NextDaysForecast from "./NextDaysForecast";

import { useContext } from "react";
import { ForecastContext } from "../../App";

function TomorrowForecast() {
    return <div className="border border-white"></div>;
}

export default function ForecastCard() {
    const forecastData = useContext(ForecastContext);

    return (
        <div className="bg-sec-color w-full p-6 h-72 rounded-3xl grid grid-cols-[1fr_0.4fr]">
            <div className="grid grid-rows-[1fr_0.5fr]">
                <NextDaysForecast data={forecastData} />
                <TomorrowForecast />
            </div>
            <SunriseSunsetCard />
        </div>
    );
}
