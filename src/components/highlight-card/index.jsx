import humidityImg from "../../assets/humidity.png";
import pressureImg from "../../assets/pressure.png";
import cloudinessImg from "../../assets/cloudiness.png";
import visibilityImg from "../../assets/visibility.png";
import windSpeedImg from "../../assets/wind-speed.png";
import windDirectionImg from "../../assets/wind-direction.png";

import { useContext } from "react";
import { DataContext } from "../../App";

function Highlight(props) {
    return (
        <div className="w-full h-full bg-sec-color rounded-2xl">
            <h1 className="text-white text-sm pl-3 pt-2">{props.label}</h1>
            <div className="flex">
                <img src={props.source} className="h-7 mt-1 ml-4"></img>
                <p className="text-white ml-10 text-2xl">{props.data}</p>
            </div>
        </div>
    );
}

export default function HighlightCard() {
    const labels = [
        "Humidity",
        "Pressure",
        "Cloudiness",
        "Visibility",
        "Wind Speed",
        "Wind Direction",
    ];
    const sources = [
        humidityImg,
        pressureImg,
        cloudinessImg,
        visibilityImg,
        windSpeedImg,
        windDirectionImg,
    ];

    const data = useContext(DataContext);

    const {
        main: { humidity, pressure },
        clouds: { all },
        visibility,
        wind: { speed, deg },
    } = data;

    const directions = [
        "North",
        "North-East",
        "East",
        "South-East",
        "South",
        "South-West",
        "West",
        "North-West",
    ];

    const direction = directions[Math.round(deg / 45) % 8];

    const datas = [
        `${humidity}%`,
        pressure,
        `${all}%`,
        `${visibility / 1000} km`,
        `${speed} m/s`,
        direction,
    ];

    return (
        <div
            style={{ height: "20rem" }}
            className="bg-custom-radial px-6 py-4 w-full rounded-3xl grid grid-rows-[2.5rem_1fr]">
            <h1 className="text-white m-0 text-lg">Today Highlight</h1>
            <div className=" grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr_1fr] gap-4">
                {labels.map((l, i) => (
                    <Highlight
                        key={i}
                        label={l}
                        data={datas[i]}
                        source={sources[i]}
                    />
                ))}
            </div>
        </div>
    );
}
