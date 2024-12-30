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
                'custom-radial': 'radial-gradient(circle, rgba(22, 40, 80, 1) 0%, rgba(18, 26, 45, 1) 100%)',
            }
        },
    },
    plugins: [],
};
