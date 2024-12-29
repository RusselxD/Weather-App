import NavBar from "./components/nav-bar/index";
import SearchBar from "./components/search-bar/index";
import MainCard from "./components/main-card/index";
import ForecastCard from "./components/forecast-card/index";

function App() {
    return (
        <div className="h-full grid grid-cols-[5rem_1fr_0.9fr]">
            <NavBar />
            <div className="pl-8 flex flex-col justify-between">
                <SearchBar />
                <MainCard />
                <ForecastCard />
            </div>
            <div className=""></div>
        </div>
    );
}

export default App;
