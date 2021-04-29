module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
		colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: {
        light: '#f8493c',
        DEFAULT: '#da291c',
        dark: '#a61005',
      },
			white: {
				light: '#fcfcfc',
				DEFAULT: '#f2f2f2',
				dark: '#efefef'
			},
			black: {
				dark: '#000000',
				DEFAULT: '#080808',
				light: '#101010'
			},
			darkgray: {
				DEFAULT: '#181818',
			},	
			mediumgray: {
				DEFAULT: '#404040',
			},
			lightgray: {
				DEFAULT: '#b3b3b3',
			}
    },
    extend: {
			backgroundImage: theme => ({
			 'hero-soldier-computer-1': "url('/img/hero/soldier-computer-001-720x405.jpg')", 
			 'hero-soldier-computer-2': "url('/img/hero/soldier-computer-001-960x540.jpg')", 
			 'hero-soldier-computer-3': "url('/img/hero/soldier-computer-001-1280x720.jpg')", 
			 'hero-soldier-computer-4': "url('/img/hero/soldier-computer-001-1920x1080.jpg')",
			 'hero-soldier-computer-5': "url('/img/hero/soldier-computer-001-2560x1440.jpg')",
			 'hero-soldier-computer-6': "url('/img/hero/soldier-computer-001-3840x2160.jpg')", 
			}),
			height: theme => ({
				"vh-10": "10vh",
				"vh-20": "20vh",
				"vh-30": "30vh",
				"vh-40": "40vh",
				"vh-50": "50vh",
				"vh-60": "60vh",
				"vh-70": "70vh",
				"vh-80": "80vh",
				"vh-90": "90vh",
			})
		}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
