module.exports = {
    content: ["./index.html", "./assets/js/**/*.js", "./pages/**/*.html"],
    theme: {
        extend: {
            colors: {
                primary: "#D50000", // Red/Maroon
                secondary: "#000000", // Black
                accent: "#F9F9F9", // Light Gray for backgrounds
            },
            animation: {
                'slide-down': 'slideDown 0.3s ease-in-out',
              },
              keyframes: {
                slideDown: {
                  '0%': { transform: 'translateY(-100%)', opacity: '0' },
                  '100%': { transform: 'translateY(0)', opacity: '1' },
                },
              },
        },
    },
    plugins: [],
};