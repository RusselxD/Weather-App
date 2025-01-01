function TimeDisplay(props) {
    const { label, time, td = "" } = props.data;

    return (
        <div className="py-2 px-4  w-full h-full flex flex-col justify-between border border-white">
            <h3>{label}</h3>
            <div className="grid grid-cols-[1fr_0.3fr] items-end">
                <h1 style={{ fontSize: "1.35rem" }} className=" text-white ">
                    {time}
                </h1>
                <p className="-ml-5">{td}</p>
            </div>
        </div>
    );
}

import { useContext } from "react";
import { DataContext } from "../../App";

export default function SunriseSunsetCard() {
    const data = useContext(DataContext);

    const sunrise = new Date(data.sys.sunrise * 1000)
        .toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        })
        .replace("AM", "")
        .trim();

    const sunset = new Date(data.sys.sunset * 1000)
        .toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        })
        .replace("PM", "")
        .trim();

    function getLengthOfDay(seconds) {
        let min = Math.floor(seconds / 60) % 60;
        let hours = Math.floor(seconds / (60 * 60)) % 24;
        return `${hours}h ${min}m`;
    }
    const lengthOfDay = getLengthOfDay(data.sys.sunset - data.sys.sunrise);

    const timeDatas = [
        { label: "Sunrise", time: sunrise, td: "AM" },
        { label: "Sunset", time: sunset, td: "PM" },
        { label: "Length of Day", time: lengthOfDay },
    ];

    return (
        <div
            style={{
                backgroundColor: "rgb(20, 32, 58)",
                color: "rgba(103, 107, 115, 1)",
            }}
            className="rounded-3xl grid py-3"
        >
            {timeDatas.map((d, i) => (
                <TimeDisplay key={i} data={d} />
            ))}
        </div>
    );
}
