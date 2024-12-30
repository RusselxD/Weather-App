import { useContext } from "react";
import { DataContext } from "../../App";
import { CityContext } from "../../App";

import locationIcon from "../../assets/locationIcon.svg";

function LocationPill() {
    const city = useContext(CityContext);

    if (city !== "") {
        return (
            <div className="w-fit h-10 bg-brand-color rounded-3xl flex justify-center items-center">
                <img src={locationIcon} className="h-6 ml-4"></img>
                <span className="ml-3 mr-5 text-white ">{city}</span>
            </div>
        );
    }
}

function DayAndDate() {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    var date = `${new Date().getDate()} ${
        months[new Date().getMonth()]
    }, ${new Date().getFullYear()}`;

    return (
        <div className="text-white">
            <h1 className="text-4xl">{days[new Date().getDay()]}</h1>
            <p className="mt-2">{date}</p>
        </div>
    );
}

function Degrees(props) {
    const {
        main: { temp, temp_max, temp_min },
    } = props.data;

    return (
        <div className="text-white mb-6">
            <h1 className="text-6xl">{Math.floor(temp)}&deg; C</h1>
            <p className="text-base mt-2 ">
                High: {Math.floor(temp_max)}&nbsp;&nbsp;&nbsp;&nbsp;Low:{" "}
                {Math.floor(temp_min)}
            </p>
        </div>
    );
}

function WeatherCondition(props) {
    const {
        weather: [{ main }],
        weather: [{ icon }],
        main: { feels_like },
    } = props.data;

    return (
        <div className="text-white w-full flex flex-col items-end justify-end">
            <img
                alt="weather icon"
                className="h-60 -mt-6 -mr-2"
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            ></img>
            <h2 className="text-5xl -mt-8 mb-1">{main}</h2>
            <p className="text-lg">Feels like {feels_like}</p>
        </div>
    );
}

export default function MainCard() {
    const data = useContext(DataContext);

    return (
        <div className="bg-sec-color w-full h-80 rounded-3xl p-5 grid grid-cols-[1fr_1fr]">
            <div className="flex flex-col justify-between">
                <LocationPill />
                <DayAndDate />
                <Degrees data={data} />
            </div>
            <div>
                <WeatherCondition data={data} />
            </div>
        </div>
    );
}
