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
        extend: {
            backgroundImage:{
                'highlight-card-gradient': 'radial-gradient(circle, rgba(22, 40, 80, 1) 0%, rgba(18, 26, 45, 1) 100%)',
                'forecast-gradient': 'linear-gradient(45deg, rgba(14,20,33,1) 0%, rgba(29,50,95,1) 50%, rgba(14,20,33,1) 100%)',
            }
        },
    },
    plugins: [],
};
