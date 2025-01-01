import { useContext } from "react";
import { OtherCitiesContext } from "../../App";

function CityCard(props) {
    const { name, temp, min, max, iconCode } = props.data;
    return (
        <div className="w-full h-full py-4 pl-5 bg-sec-color rounded-3xl grid grid-cols-[1fr_0.5fr]">
            <div className="text-white flex flex-col justify-between  ">
                <div className="grid grid-cols-[1fr_0.9fr]">
                    <h1 style={{ fontSize: "2.5rem" }} className=" ">
                        {Math.round(temp)}&deg;&nbsp;&nbsp;
                    </h1>

                    <div className="content-end">
                        <span style={{ color: "gray" }} className="text-sm">
                            H{Math.round(max)}&deg;&nbsp;
                        </span>
                        <span style={{ color: "gray" }} className="text-sm">
                            L{Math.round(min)}&deg;
                        </span>
                    </div>
                </div>
                <div>
                    <p>{name}</p>
                </div>
            </div>
            <div className="justify-end content-end">
                <img
                    src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
                    className="w-full object-cover -ml-3 -mb-2"
                    alt="Weather Icon"
                ></img>
            </div>
        </div>
    );
}

function ShowAllButton() {
    return (
        <button
            style={{ color: "rgb(103, 107, 155)" }}
            className="bg-sec-color text-sm py-2 px-5 rounded-3xl"
        >
            Show All
        </button>
    );
}

export default function OtherCitiesPanel() {
    const defaultCitiesData = useContext(OtherCitiesContext);

    return (
        <div
            style={{ height: "19.5rem" }}
            className="pl-8 w-full rounded-3xl mt-5 grid grid-rows-[2.5rem_1fr]"
        >
            <div className="flex justify-between items-center">
                <h4 className="text-white text-lg">Other Cities</h4>
                <ShowAllButton />
            </div>
            <div className="pt-5 grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-y-5 gap-x-10">
                {defaultCitiesData.map((city, i) => (
                    <CityCard key={i} data={city} />
                ))}
            </div>
        </div>
    );
}
