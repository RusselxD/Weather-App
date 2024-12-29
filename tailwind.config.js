/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            "prim-color": "rgb(6, 12, 26)",
            "sec-color": "rgb(14, 20, 33)",
            "white": "#FFFFFF",
            "brand-color": "rgb(116, 43, 236)",
        },
        extend: {},
    },
    plugins: [],
};
