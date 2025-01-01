function DayForecastStrip(props) {
     const { day, avgTemp, iconCode } = props.data;
 
     return (
         <div
             style={{
                 backgroundColor: "rgba(220, 220, 220, 0.25)",
                 border: "0.05px solid white",
             }}
             className="h-full w-full rounded-xl text-white text-sm flex flex-col justify-center items-center"
         >
             <h1 className="">{daysList[day]}</h1>
             <img
                 src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
                 alt="Weather-Icon"
             ></img>
             <p>{avgTemp}&deg;</p>
         </div>
     );
 }
 
 const daysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 
 export default function NextDaysForecast(props) {
     return (
         <div className="grid grid-rows-[0.2fr_1fr]">
             <h1 className="text-white">Next Days</h1>
             <div className="bg-forecast-gradient rounded-3xl mt-2 mr-5 grid grid-cols-6 gap-2 p-3">
                 {props.data.map((data, i) => (
                     <DayForecastStrip key={i} data={data} />
                 ))}
             </div>
         </div>
     );
 }