module.exports = {
    purge: ["./src/**/*.js",
        "./src/**/*.jsx",
        "./src/**/*.ts",
        "./src/**/*.tsx"
    ],
    theme: {
        container: {
            center: true,
            padding: '2em'
        },
        extend: {
            colors: {
                topNav: '#1c1208',
                Nav: '#382410',
                MidSection: '#FFFFFF',
                Footer: '#342F29',
                Bottom: '#2b2822',
                darkgray: '#342F29',
                // Secondary Navbar
                laser: "#CCA46C",
                // GrayishOrange alias grayOrange Footer secondary text
                grayOrange: '#7b7368',
                darkGrayOrange: '#2B2822',
                // Tertiary footer text
                paleOyster: "#988f81",
                // Contact color
                piper: '#c35124',
                romanCoffee: '#7c6853',
                // regions page color
                goldenDream: '#EEEE22',
                sambuca: '#382410',
                Vision: '#8B7A67',
                Button: '#b2936d',
                // Shop page
                gallery: '#efefef'

            },
            fontSize: {
                // xxs: ['.6875em',' .6875em']
                'xxs': '9px',
                'xls': '10px'

            }

        }

    },
    variants: {

    },
    plugins: [],
}