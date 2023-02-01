/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.html"],
    theme: {
        screens:{
            sm: '350px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            fontFamily: {
                'newfont' : 'Jim Nightshade',
                'intel' : 'Inter',
                'ComicNeue' : 'Comic Neue',
                'amiko' : 'Amiko'
            },
            colors: {
                'mainbackground' : '#10002B',
                'radient-blue' : '#04C8F3',
                'radient-bangani' : '#DE09E2',
                'radient-dark-blue' : '#413683',
                'mintpage-background' : '#392945',
                'aqua' : '#95E9E4',
                'brown' : '#723838',
                'btncolor' : '#D9D9D9',
                'circle-color' : '#945AC2',
                'transparent' : 'background: rgba(0,0,0,0.5);'
            },
            width:{
                '128' : '32rem',
                '208' : '60rem'
            },
            height:{
                '128' : '32rem',
                '208' : '60rem'
            },
            
        },
    },
    plugins: [],
}