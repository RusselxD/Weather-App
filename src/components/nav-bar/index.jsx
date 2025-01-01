import homeIcon from "../../assets/home.png";

export default function NavBar() {
    return (
        <nav className="bg-sec-color w-20 h-full rounded-2xl overflow-hidden">
            <img
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="mb-6 p-6 w-full aspect-square"
                src={homeIcon}
            ></img>
        </nav>
    );
}
