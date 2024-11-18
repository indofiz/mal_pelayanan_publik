/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                yellow_primary: '#F2D457',
                green_primary: '#16927E',
                black_line: '#1E1E1E',
                black_2: '#313131',
                grad_top: '#F8FFF8',
                grad_bottom: '#FFF4C8',
                grad_con_top: '#FFFAE4',
                grad_con_bot: '#ECFCF9',
                grad_sec_top: '#EAF6F5',
                grad_sec_bot: '#FFF4C8',
                border_card: '#ECECEC',
                text_card: '#929292',
                green_thin: '#F1FFFD',
            },
            backgroundImage: {
                'hero-img': "url('image-hero.png')",
                'gradient-fot': "url('gradient-bottom.png')",
            },
            boxShadow: {
                searchShadow: '0px 16px 32px 2px rgba(8,22,54,0.06)',
            },
        },
    },
    plugins: [],
}
