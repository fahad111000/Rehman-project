
export default {
    content: ["./src/**/*.{html,js}", "./index.html"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            color: {
                primary: "#096093" // Custom color(blue)
            },
            
            screens: {
                'md950': { 'min': '768px', 'max': '950px' },
            },
        },
    },
    plugins: [],
}