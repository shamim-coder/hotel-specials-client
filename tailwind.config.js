module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#F58229",
                "primary-500": "#df7625",
            },

            background: {
                primary: "#F58229",
            },
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: "base", // only generate global styles
        }),
    ],
};
