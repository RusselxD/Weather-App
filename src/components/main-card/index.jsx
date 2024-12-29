import locationIcon from "../../assets/locationIcon.svg";

function LocationPill() {
    return (
        <div className="w-fit  h-10 bg-brand-color rounded-3xl flex justify-center items-center">
            <img src={locationIcon} className="h-6 ml-4"></img>
            <span className="ml-3 mr-5 text-white ">Biringan</span>
        </div>
    );
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

    //     style={{fontSize:"2.8rem"}}
    return (
        <div className="text-white">
            <h1 className="text-4xl">{days[new Date().getDay()]}</h1>
            <p className="text-m mt-2">{date}</p>
        </div>
    );
}

function Degrees() {
    return (
        <div className="text-white mb-6">
            <h1 className="text-6xl">26&deg; C</h1>
            <p className="text-base mt-2 ">
                High: 12&nbsp;&nbsp;&nbsp;&nbsp;Low: 10
            </p>
        </div>
    );
}

export default function MainCard() {
    return (
        <div className="bg-sec-color w-full h-80 rounded-3xl p-5 grid grid-cols-[1fr_1fr]">
            <div className="flex flex-col justify-between">
                <LocationPill />
                <DayAndDate />
                <Degrees />
            </div>
            <div></div>
        </div>
    );
}
