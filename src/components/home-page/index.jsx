import NavBar from "../nav-bar/index";
import SearchBar from "../search-bar/index";
import MainCard from "../main-card/index";
import ForecastCard from "../forecast-card/index";

import HighlightCard from "../highlight-card";
import OtherCitiesPanel from "../other-cities-panel";
export default function Home() {
    return (
        <div className="h-full grid grid-cols-[5rem_0.9fr_1fr]">
            <NavBar />
            <div className="pl-12 flex flex-col justify-between">
                <SearchBar />
                <MainCard />
                <ForecastCard />
            </div>
            <div className="pl-12 flex flex-col justify-end">
                <HighlightCard />
                <OtherCitiesPanel />
            </div>
        </div>
    );
}
