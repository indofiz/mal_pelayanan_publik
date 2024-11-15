/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                yellow_primary: '#F2D457',
                green_primary: '#16927E',
                black_line: '#1E1E1E',
                grad_top: '#F8FFF8',
                grad_bottom: '#FFF4C8',
            },
            backgroundImage: {
                'hero-img': "url('image-hero.png')",
            },
            boxShadow: {
                searchShadow: '0px 16px 32px 2px rgba(8,22,54,0.06)',
            },
        },
    },
    plugins: [],
}
