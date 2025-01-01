import SunriseSunsetCard from "./SunriseSunsetCard";
import NextDaysForecast from "./NextDaysForecast";

import { useContext } from "react";
import { ForecastContext } from "../../App";

function TomorrowForecast(props) {
    const { condition, avgTemp, iconCode } = props.data;

    function format(condition) {
        return condition
            .split(" ")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
    }

    return (
        <div className="bg-forecast-gradient mt-2 mr-5 rounded-3xl grid grid-cols-[0.8fr_1fr]">
            <div className=" flex flex-col justify-center pl-3">
                <h1 className="text-white">Tomorrow</h1>
                <p
                    style={{ color: "rgb(100, 100, 100)" }}
                    className="text-sm text-wrap"
                >
                    {format(condition)}
                </p>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-white text-3xl">{avgTemp}&deg;</h1>
                <img
                    src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
                    alt="Weather Icon"
                    className="h-20 mr-5 scale-125"
                ></img>
            </div>
        </div>
    );
}

export default function ForecastCard() {
    const forecastData = useContext(ForecastContext);

    let tomorrowForecast = null;
    const tom = (new Date().getDay() + 1) % 7;
    for (let forecast of forecastData) {
        if (forecast.day === tom) {
            tomorrowForecast = forecast;
            break;
        }
    }

    return (
        <div className="bg-sec-color w-full p-6 h-72 rounded-3xl grid grid-cols-[1fr_0.4fr]">
            <div className="grid grid-rows-[1fr_0.5fr]">
                <NextDaysForecast data={forecastData} />
                <TomorrowForecast data={tomorrowForecast} />
            </div>
            <SunriseSunsetCard />
        </div>
    );
}
