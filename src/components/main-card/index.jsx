import { useContext } from "react";
import { DataContext } from "../../App";
import { CityContext } from "../../App";

import locationIcon from "../../assets/locationIcon.svg";

function LocationPill() {
    const city = useContext(CityContext);

    if (city !== "") {
        return (
            <div className="w-fit h-9 bg-brand-color rounded-3xl flex justify-center items-center">
                <img src={locationIcon} className="h-5 ml-3"></img>
                <span className="ml-3 mr-5 text-sm text-white ">{city}</span>
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
            <h1 className="text-3xl">{days[new Date().getDay()]}</h1>
            <p className="mt-2 text-sm">{date}</p>
        </div>
    );
}

function Degrees(props) {
    const {
        main: { temp, temp_max, temp_min },
    } = props.data;

    return (
        <div className="text-white mb-6">
            <h1 className="text-4xl">{Math.round(temp)}&deg; C</h1>
            <p className="text-sm mt-1 ">
                High: {Math.round(temp_max)}&nbsp;&nbsp;&nbsp;&nbsp;Low:{" "}
                {Math.round(temp_min)}
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
        <div className="text-white object-contain w-full flex flex-col items-end justify-end">
            <img
                alt="weather icon"
                className="h-48 "
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            ></img>
            <h2 className="text-4xl -mt-6 mb-1">{main}</h2>
            <p className="">Feels like {Math.round(feels_like)}&deg; C</p>
        </div>
    );
}

export default function MainCard() {
    const data = useContext(DataContext);

    return (
        <div className="bg-sec-color w-full h-72 rounded-3xl p-6 grid grid-cols-[1fr_1fr]">
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
